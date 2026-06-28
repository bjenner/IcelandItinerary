const sharedArchiveNotes = {
  camp: "Add the campground, overnight area, or camper context for this date.",
  weather: "Add the weather that shaped the day: wind, rain, visibility, midnight light, or anything that changed the plan.",
  road: "Add the actual route, rough roads, closures, F-road attempts, ferry timing, or drive notes worth remembering."
};

function archiveDay({
  id,
  date,
  shortDate,
  title,
  summary,
  tags = [],
  places = []
}) {
  return {
    id,
    date,
    shortDate,
    title,
    summary,
    journal: "Post-trip capture slot: add what actually happened, what you want to remember, and anything useful to share with someone planning a similar Iceland camper trip.",
    heroImage: "assets/iceland-placeholder.png",
    tags: ["needs-notes", ...tags],
    notes: { ...sharedArchiveNotes },
    places,
    media: [
      {
        type: "photo",
        title: "Favorite frame from this day",
        caption: "Replace with a selected photo, album link, or hosted image once media is sorted.",
        src: "assets/iceland-placeholder.png"
      },
      {
        type: "video-link",
        title: "Video or album link",
        caption: "Use this for iCloud/Google Photos/YouTube/Vimeo/R2 links tied to the day.",
        href: ""
      }
    ],
    links: [
      {
        title: "Day source pile",
        href: "",
        note: "Add the source folder, shared album, map timeline, note, or message thread used to reconstruct this day."
      }
    ]
  };
}

window.TRAVEL_LOG_DAYS = [
  archiveDay({
    id: "2026-06-13",
    date: "Saturday, June 13",
    shortDate: "Jun 13",
    title: "Arrival and Camper Pickup",
    summary: "Arrival day: landing in Iceland, getting the 4x4 camper, stocking up, and settling into the first night.",
    tags: ["arrival", "camper", "logistics"],
    places: [
      {
        name: "Keflavik Airport",
        type: "Arrival",
        lat: 63.9850,
        lng: -22.6056,
        note: "Trip start. Add flight notes, arrival photos, and camper pickup timing.",
        url: "https://www.isavia.is/en/keflavik-airport"
      },
      {
        name: "Reykjavik / Reykjanes first-night area",
        type: "Camp / services",
        lat: 64.1466,
        lng: -21.9426,
        note: "Replace with the actual first-night stop, grocery run, and dinner details."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-14",
    date: "Sunday, June 14",
    shortDate: "Jun 14",
    title: "First Full Day and Anniversary",
    summary: "A celebratory first full day on the road. Capture the anniversary meal, route choices, first big stops, and favorite moments.",
    tags: ["anniversary", "food", "south coast"],
    places: [
      {
        name: "Selfoss / South Coast start",
        type: "Town / route area",
        lat: 63.9330,
        lng: -21.0020,
        note: "Replace with the actual stops, meal, camp, and waterfall sequence."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-15",
    date: "Monday, June 15",
    shortDate: "Jun 15",
    title: "South Coast Day",
    summary: "Use this slot for the actual South Coast route: waterfalls, black sand, cliffs, glacier views, meals, and camp.",
    tags: ["south coast", "waterfalls", "coast"],
    places: [
      {
        name: "South Coast",
        type: "Route area",
        lat: 63.5321,
        lng: -19.5114,
        note: "Add the real places visited, in order if that helps the memory."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-16",
    date: "Tuesday, June 16",
    shortDate: "Jun 16",
    title: "Glacier and Southeast Iceland",
    summary: "Capture glacier lagoon, beach, hiking, food, weather, and campsite details from the southeast stretch.",
    tags: ["glacier", "southeast", "photos"],
    places: [
      {
        name: "Vatnajokull / Southeast Iceland",
        type: "Region",
        lat: 64.0484,
        lng: -16.1791,
        note: "Replace with the actual stops and photo/video links."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-17",
    date: "Wednesday, June 17",
    shortDate: "Jun 17",
    title: "Eastfjords",
    summary: "A place for fjords, coastal drives, small towns, wildlife, camp, meals, and detours from the east.",
    tags: ["eastfjords", "coast", "wildlife"],
    places: [
      {
        name: "Eastfjords",
        type: "Region",
        lat: 65.0667,
        lng: -14.0167,
        note: "Add the real fjords, towns, overlooks, and campsite."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-18",
    date: "Thursday, June 18",
    shortDate: "Jun 18",
    title: "Northeast Route",
    summary: "Collect the actual road story moving north or inland: highland edges, canyons, waterfalls, baths, or weather reroutes.",
    tags: ["northeast", "road day", "geothermal"],
    places: [
      {
        name: "Northeast Iceland",
        type: "Region",
        lat: 65.6439,
        lng: -16.8126,
        note: "Replace with actual stops and road notes."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-19",
    date: "Friday, June 19",
    shortDate: "Jun 19",
    title: "Lake Myvatn / North Iceland",
    summary: "Capture geothermal landscapes, lava fields, baths, campsite, meals, hikes, and the photos that define the day.",
    tags: ["myvatn", "north", "geothermal"],
    places: [
      {
        name: "Myvatn",
        type: "Lake / base area",
        lat: 65.6039,
        lng: -16.9961,
        note: "Add actual hikes, pools, meals, and overnight details."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-20",
    date: "Saturday, June 20",
    shortDate: "Jun 20",
    title: "Solstice Weekend",
    summary: "Record the long-light experience, late-night stops, weather window, and any special solstice photos or video.",
    tags: ["solstice", "midnight sun", "north"],
    places: [
      {
        name: "North Iceland solstice area",
        type: "Region",
        lat: 65.6839,
        lng: -18.1105,
        note: "Replace with the actual solstice route and best light."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-21",
    date: "Sunday, June 21",
    shortDate: "Jun 21",
    title: "Solstice Window",
    summary: "Use this for the final solstice-window story: whale town, geothermal soak, lake country, coast, or wherever the day actually went.",
    tags: ["solstice", "hotspring", "north"],
    places: [
      {
        name: "GeoSea / Husavik area",
        type: "Geothermal / town area",
        lat: 66.0528,
        lng: -17.3394,
        note: "Replace with the actual stop, soak, meal, or north-coast notes."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-22",
    date: "Monday, June 22",
    shortDate: "Jun 22",
    title: "Northwest or Westward Turn",
    summary: "Capture the westward shift: towns, peninsulas, gravel roads, campsites, food, and favorite roadside discoveries.",
    tags: ["northwest", "road day", "camp"],
    places: [
      {
        name: "Northwest Iceland",
        type: "Region",
        lat: 65.3960,
        lng: -20.9590,
        note: "Add actual places, route, and media links."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-23",
    date: "Tuesday, June 23",
    shortDate: "Jun 23",
    title: "Westfjords / West Iceland Options",
    summary: "Use this for any westward branch, ferry, fjord, hot spring, wildlife, weather, and road-condition memories.",
    tags: ["west", "fjords", "optional branch"],
    places: [
      {
        name: "West Iceland",
        type: "Region",
        lat: 64.8945,
        lng: -22.7093,
        note: "Replace with actual stops and decisions."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-24",
    date: "Wednesday, June 24",
    shortDate: "Jun 24",
    title: "West Iceland",
    summary: "Collect the places, food, pools, coast, lava fields, camp, and media from the western part of the loop.",
    tags: ["west", "coast", "lava"],
    places: [
      {
        name: "Snaefellsnes / West Iceland",
        type: "Region",
        lat: 64.8333,
        lng: -23.2500,
        note: "Add actual places, photos, and camp."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-25",
    date: "Thursday, June 25",
    shortDate: "Jun 25",
    title: "Return Toward Reykjavik",
    summary: "A slot for the return arc: final countryside stops, food, urban time, soaking, errands, and campsite details.",
    tags: ["reykjavik", "return", "food"],
    places: [
      {
        name: "Reykjavik area",
        type: "City / services",
        lat: 64.1466,
        lng: -21.9426,
        note: "Replace with actual city stops, meals, and practical errands."
      }
    ]
  }),
  archiveDay({
    id: "2026-06-26",
    date: "Friday, June 26",
    shortDate: "Jun 26",
    title: "Final Full Day",
    summary: "Capture the final full day: last big stop, favorite meal, Blue Lagoon or Reykjanes, camper reset, packing, and last-night camp.",
    tags: ["final day", "reykjanes", "blue lagoon"],
    places: [
      {
        name: "Blue Lagoon / Reykjanes",
        type: "Geothermal / peninsula",
        lat: 63.8804,
        lng: -22.4495,
        note: "Add actual timing, receipt/context, photos, and final-night details.",
        url: "https://www.bluelagoon.com/"
      }
    ]
  }),
  archiveDay({
    id: "2026-06-27",
    date: "Saturday, June 27",
    shortDate: "Jun 27",
    title: "Departure",
    summary: "Departure day: camper return, airport timing, final photos, lessons learned, and what you would do again.",
    tags: ["departure", "camper", "lessons"],
    places: [
      {
        name: "Keflavik Airport",
        type: "Departure",
        lat: 63.9850,
        lng: -22.6056,
        note: "Trip end. Add camper return notes, airport timing, and final thoughts.",
        url: "https://www.isavia.is/en/keflavik-airport"
      }
    ]
  })
];
