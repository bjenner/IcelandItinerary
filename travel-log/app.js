const days = window.TRAVEL_LOG_DAYS || [];
const tagFilters = new Set();
const params = new URLSearchParams(window.location.search);
const initialDayId = params.get("day");
const isDayFrame = params.get("view") === "day" || params.get("frame") === "1";
let activeDayId = days.some((day) => day.id === initialDayId) ? initialDayId : days[0]?.id;
let searchTerm = "";
let map;
let markerLayer;
let routeLayer;

const fallbackImage = "assets/iceland-placeholder.png";

function byId(id) {
  return document.getElementById(id);
}

function dayUrl(day, frame = false) {
  const url = new URL(window.location.href);
  url.searchParams.set("day", day.id);
  if (frame) {
    url.searchParams.set("view", "day");
  } else {
    url.searchParams.delete("view");
    url.searchParams.delete("frame");
  }
  return `${url.pathname}${url.search}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function daySearchText(day) {
  return [
    day.date,
    day.title,
    day.summary,
    day.journal,
    day.tags?.join(" "),
    day.places?.map((place) => `${place.name} ${place.type} ${place.note}`).join(" "),
    day.media?.map((item) => `${item.title} ${item.caption} ${item.type}`).join(" "),
    day.links?.map((item) => `${item.title} ${item.note}`).join(" ")
  ].join(" ").toLowerCase();
}

function visibleDays() {
  return days.filter((day) => {
    const matchesSearch = !searchTerm || daySearchText(day).includes(searchTerm);
    const matchesTags = !tagFilters.size || [...tagFilters].every((tag) => day.tags?.includes(tag));
    return matchesSearch && matchesTags;
  });
}

function allTags() {
  return [...new Set(days.flatMap((day) => day.tags || []))].sort((a, b) => a.localeCompare(b));
}

function ensureActiveDay() {
  const filtered = visibleDays();
  if (!filtered.length) {
    activeDayId = null;
    return null;
  }
  if (!filtered.some((day) => day.id === activeDayId)) {
    activeDayId = filtered[0].id;
  }
  return days.find((day) => day.id === activeDayId) || filtered[0];
}

function renderTagFilters() {
  byId("tagFilters").innerHTML = allTags().map((tag) => `
    <button class="filter-chip${tagFilters.has(tag) ? " is-active" : ""}" type="button" data-tag="${escapeHtml(tag)}">
      ${escapeHtml(tag)}
    </button>
  `).join("");
}

function renderDayList() {
  const filtered = visibleDays();
  const list = byId("dayList");

  if (!filtered.length) {
    list.innerHTML = byId("emptyStateTemplate").innerHTML;
    return;
  }

  list.innerHTML = filtered.map((day) => `
    <button class="day-button${day.id === activeDayId ? " is-active" : ""}" type="button" data-day-id="${escapeHtml(day.id)}">
      <strong>${escapeHtml(day.shortDate)} · ${escapeHtml(day.title)}</strong>
      <span>${escapeHtml(day.summary)}</span>
    </button>
  `).join("");
}

function renderNotes(day) {
  const noteLabels = {
    camp: "Camp",
    weather: "Weather",
    road: "Road"
  };
  byId("noteGrid").innerHTML = Object.entries(day.notes || {}).map(([key, value]) => `
    <div class="note-card">
      <b>${escapeHtml(noteLabels[key] || key)}</b>
      <span>${escapeHtml(value)}</span>
    </div>
  `).join("");
}

function renderPlaces(day) {
  const places = day.places || [];
  byId("placeCount").textContent = `${places.length} place${places.length === 1 ? "" : "s"}`;
  byId("placeList").innerHTML = places.length
    ? places.map((place) => `
      <article class="place-card">
        <strong>${escapeHtml(place.name)}</strong>
        <span>${escapeHtml(place.type || "Place")}</span>
        <p>${escapeHtml(place.note || "")}</p>
        ${place.url ? `<p><a href="${escapeHtml(place.url)}" target="_blank" rel="noreferrer">Open reference</a></p>` : ""}
      </article>
    `).join("")
    : `<div class="empty-state"><strong>No places yet.</strong><span>Add places in <code>travel-log/data/days.js</code>.</span></div>`;
}

function renderLinks(day) {
  const links = (day.links || []).filter((item) => item.title || item.href || item.note);
  byId("linkCount").textContent = `${links.length} link${links.length === 1 ? "" : "s"}`;
  byId("linkList").innerHTML = links.length
    ? links.map((item) => `
      <article class="link-card">
        <strong>${item.href ? `<a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(item.title || item.href)}</a>` : escapeHtml(item.title || "Untitled source")}</strong>
        <p>${escapeHtml(item.note || "")}</p>
      </article>
    `).join("")
    : `<div class="empty-state"><strong>No links yet.</strong><span>Add album, receipt, note, map, or reference links in <code>travel-log/data/days.js</code>.</span></div>`;
}

function mediaFrame(item) {
  if (item.type === "video-embed" && item.embed) {
    return `<iframe src="${escapeHtml(item.embed)}" title="${escapeHtml(item.title)}" allow="fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  }
  if (item.type === "video" && item.src) {
    return `<video src="${escapeHtml(item.src)}" poster="${escapeHtml(item.poster || fallbackImage)}" controls preload="metadata"></video>`;
  }
  return `<img src="${escapeHtml(item.src || item.poster || fallbackImage)}" alt="${escapeHtml(item.title || "Trip media")}">`;
}

function renderMedia(day) {
  const media = day.media || [];
  byId("mediaCount").textContent = `${media.length} item${media.length === 1 ? "" : "s"}`;
  byId("mediaGrid").innerHTML = media.length
    ? media.map((item) => `
      <article class="media-card">
        <div class="media-frame">
          ${mediaFrame(item)}
          <span class="media-type">${escapeHtml(item.type.replace("-", " "))}</span>
        </div>
        <div class="media-caption">
          <strong>${escapeHtml(item.title || "Untitled")}</strong>
          <p>${escapeHtml(item.caption || "")}</p>
          ${item.credit ? `<p class="media-credit">Photo: ${escapeHtml(item.credit)}</p>` : ""}
          ${item.href ? `<p><a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">Open media</a></p>` : ""}
          ${item.sourceHref ? `<p><a href="${escapeHtml(item.sourceHref)}" target="_blank" rel="noreferrer">Open source</a></p>` : ""}
        </div>
      </article>
    `).join("")
    : `<div class="empty-state"><strong>No media yet.</strong><span>Add photo, video, or embed records after the trip.</span></div>`;
}

function initMap() {
  map = L.map("dayMap", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
}

function renderMap(day) {
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  const places = (day.places || []).filter((place) => Number.isFinite(place.lat) && Number.isFinite(place.lng));

  places.forEach((place) => {
    L.marker([place.lat, place.lng])
      .bindPopup(`<strong>${escapeHtml(place.name)}</strong><br>${escapeHtml(place.note || "")}`)
      .addTo(markerLayer);
  });

  if (places.length > 1) {
    L.polyline(places.map((place) => [place.lat, place.lng]), {
      color: "#126d61",
      weight: 3,
      opacity: 0.7,
      dashArray: "8 8"
    }).addTo(routeLayer);
  }

  map.invalidateSize();
  if (places.length) {
    map.fitBounds(L.latLngBounds(places.map((place) => [place.lat, place.lng])), {
      maxZoom: 9,
      padding: [36, 36]
    });
  } else {
    map.setView([64.9631, -19.0208], 6);
  }
}

function renderActiveDay() {
  const day = ensureActiveDay();
  renderDayList();

  if (!day) {
    byId("heroImage").src = fallbackImage;
    byId("dayKicker").textContent = "No results";
    byId("dayTitle").textContent = "Nothing Selected";
    byId("daySummary").textContent = "Clear the search or filters.";
    byId("dayMeta").textContent = "";
    byId("journalText").textContent = "";
    byId("noteGrid").innerHTML = "";
    byId("placeList").innerHTML = "";
    byId("linkList").innerHTML = "";
    byId("mediaGrid").innerHTML = "";
    markerLayer?.clearLayers();
    routeLayer?.clearLayers();
    return;
  }

  byId("heroImage").src = day.heroImage || fallbackImage;
  byId("dayKicker").textContent = day.date;
  byId("dayTitle").textContent = day.title;
  byId("daySummary").textContent = day.summary;
  byId("dayMeta").textContent = (day.tags || []).join(" · ");
  byId("journalText").textContent = day.journal || "";
  byId("frameLink").href = dayUrl(day, true);
  byId("fullLogLink").href = dayUrl(day, false);

  renderNotes(day);
  renderPlaces(day);
  renderLinks(day);
  renderMedia(day);
  renderMap(day);
}

byId("tagFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-tag]");
  if (!button) {
    return;
  }
  const tag = button.dataset.tag;
  if (tagFilters.has(tag)) {
    tagFilters.delete(tag);
  } else {
    tagFilters.add(tag);
  }
  renderTagFilters();
  renderActiveDay();
});

byId("dayList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-day-id]");
  if (!button) {
    return;
  }
  activeDayId = button.dataset.dayId;
  if (!isDayFrame) {
    window.history.replaceState(null, "", dayUrl({ id: activeDayId }, false));
  }
  renderActiveDay();
});

byId("searchInput").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderActiveDay();
});

initMap();
document.body.classList.toggle("day-frame", isDayFrame);
renderTagFilters();
renderActiveDay();
