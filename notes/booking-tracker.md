# Booking Tracker

Trip dates: June 13-27, 2026  
Last updated: May 13, 2026  
Source research: `notes/booking-requirements.md`

Use this file to track actual reservations. Keep `notes/booking-requirements.md` as the research inventory and this file as the working checklist.

Map behavior:
- `maps/itinerary-map.html` has a `Bookings only` toggle in the Layers popover.
- Booking-relevant markers have a colored ring: red for booking needed, amber for reserve recommended, gray for call/check, green for booked.
- Marker popups show requirement, target date/window, booked-for time if added, confirmation if added, and the booking note.
- To mark an item booked on the map, update its entry in the map's `bookingRequirements` object to `status: "booked"` and add `bookedFor` / `confirmation` fields.

Status values:
- `Not booked`
- `Decision needed`
- `Booked`
- `Cancelled`
- `Skip`
- `Call/check`
- `Verify details`

## Priority Shortlist

These are the bookings most likely to affect the shape of the trip.

| Priority | Item | Date/window | Status | Booked for | Confirmation | Cancellation / change window | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Cozy Campers BUDGET - The Highlander I | June 13-26 | Booked | June 13 12:00 pickup; June 26 11:30 drop-off | Order 8PAM4V |  | Flybus option from KEF airport is free. Confirm F-road rules, insurance, river crossings, inverter/battery setup, CPAP feasibility, electrical cable/adapter. |
| 1 | Center Hotels Plaza | June 26-27 | Booked | June 26 final night |  |  | Downtown Reykjavík final-night hotel after camper drop-off; confirm Saturday transport to KEF. |
| 1 | CPAP-safe powered campground plan | Every night | Decision needed |  |  |  | Need powered pitch certainty or same-day confirmation for each overnight. |
| 1 | June 14 anniversary meal | June 14 | Decision needed |  |  |  | Choose Friðheimar lunch, Mika dinner, Tryggvaskáli dinner, or combo. |
| 2 | Blue Lagoon | June 13 | Booked | 18:00 |  |  | Arrival-day soak after camper pickup, food shopping, and an early meal; check Reykjanes volcanic/seismic status before going. |
| 2 | Sky Lagoon | June 13 or 26 | Decision needed |  |  |  | Book if preferred first/last-night spa. |
| 2 | Húsavík whale watching | June 20-21 | Decision needed |  |  |  | Book once solstice base is chosen. Weather can cancel. |
| 2 | Jökulsárlón boat tour | June 17 | Decision needed |  |  |  | Zodiac/kayak need earlier booking; amphibian easier as fallback. |
| 2 | Húsafell Canyon Baths | June 25/26 | Decision needed |  |  |  | Small guided tour; only book if west/Borgarfjörður branch fits. |
| 2 | Hvammsvík Hot Springs | June 26 | Decision needed |  |  |  | Capacity-controlled final-flex soak. |
| 3 | Drangey Island boat tour | June 22/23 | Decision needed |  |  |  | Half-day commitment; book if Skagafjörður route wins. |
| 3 | Ferry Baldur with camper | June 25/26 if Westfjords | Decision needed |  |  |  | Book vehicle space if ferry exit becomes the plan. |
| 3 | Herjólfur ferry with camper | South Coast branch | Decision needed |  |  |  | Only if Westman Islands branch becomes real. |
| 3 | Landmannalaugar parking | Highland flex | Decision needed |  |  |  | Required June 20-Sept 13, 2026 for vehicle arrivals 9:00-16:00. |

## Food

| Item | Map ID | Target date | Requirement | Status | Booked for | Confirmation | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Friðheimar | F | June 14 | Book ahead | Decision needed |  |  | Lunch restaurant should be booked early if chosen. Wine bar/bistro is more flexible. |
| Mika | G | June 14 | Reserve recommended | Decision needed |  |  | Anniversary dinner backup/option; online reservation available. |
| Tryggvaskáli / Selfoss | H | June 14 | Reserve recommended | Decision needed |  |  | Current main anniversary dinner candidate; reserve if chosen. |

## Baths And Hot Springs

| Item | Map ID | Target date/window | Requirement | Status | Booked for | Confirmation | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Blue Lagoon | HS1 | June 13 | Book ahead | Booked | 18:00 |  | Arrival-day soak after camper pickup, food shopping, and an early meal; check Reykjanes volcanic/seismic status before going. |
| Sky Lagoon | HS2 | June 13 or 26 | Book ahead / reserve recommended | Decision needed |  |  | Book preferred evening/weekend slot. |
| Laugarvatn Fontana | HS3 | June 14 | Reserve recommended | Decision needed |  |  | Baths renovation caveat; bakery tour is separate. |
| Secret Lagoon / Gamla Laugin | HS4 | June 14 | Reserve recommended | Decision needed |  |  | Good Golden Circle soak; reservation recommended. |
| Vök Baths | HS9 | June 18/19 | Reserve recommended | Decision needed |  |  | East Iceland paid baths. |
| Mývatn Nature Baths / Earth Lagoon | HS10 | June 20-21 | Reserve recommended | Decision needed |  |  | Strong solstice-base soak if based at Mývatn. |
| GeoSea | HS11 | June 20-21 | Reserve recommended | Decision needed |  |  | Strong solstice-evening candidate if based at Húsavík. |
| Forest Lagoon | HS12 | June 22 | Reserve recommended | Decision needed |  |  | Akureyri reset soak. |
| Krauma | HS17 | June 25/26 | Reserve recommended | Decision needed |  |  | West/Borgarfjörður final-flex option. |
| Hvammsvík Hot Springs | HS18 | June 26 | Book ahead | Decision needed |  |  | Capacity-controlled; book if final-night route fits. |
| Húsafell Canyon Baths | HS19 | June 25/26 | Book ahead | Decision needed |  |  | Guided small-group experience. |
| Landmannalaugar Hot Spring / parking | HS21 / AH | Highland flex | Book parking if arriving 9:00-16:00 | Decision needed |  |  | Hot spring itself is not a ticket; vehicle reservation/service fee is the booking issue. |

## Tours, Ferries, And Activities

| Item | Map ID | Target date/window | Requirement | Status | Booked for | Confirmation | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Húsavík whale watching | U | June 20-21 | Book ahead | Decision needed |  |  | Choose operator/time once weather and base are clearer. |
| Drangey Island boat tour | SK2 | June 22/23 | Book ahead | Decision needed |  |  | Daily summer trip; half-day commitment. |
| Jökulsárlón boat tour | O / LK4 | June 17 | Book ahead if doing boat | Decision needed |  |  | Pick Zodiac, amphibian, or skip. |
| Fjallsárlón boat tour | LK3 | June 17 | Reserve recommended | Decision needed |  |  | Quieter lagoon option; reserve in June if choosing. |
| Optional guided glacier activity | N / O | June 16/17 | Book ahead | Decision needed |  |  | Only if glacier activity becomes a priority. |
| Ferry Baldur with camper | AB / CP25 | Westfjords branch | Book ahead if taking camper | Decision needed |  |  | Vehicle space limited. |
| Herjólfur ferry with camper | V11 | South Coast branch | Book ahead if taking camper | Decision needed |  |  | Vehicle space should be reserved if taking camper to Heimaey. |
| Askja guided option | V7 | Highland stretch | Book ahead if guided | Decision needed |  |  | Serious highland route; guided option may be safer if added. |

## Campground Booking Tracker

Use this section for nights where a powered pitch is important. The goal is not to lock the whole itinerary too early, but to know which nights need a reservation or same-day call because of CPAP.

| Date | Region goal | Primary powered option | Backup powered options | Status | Booked for / called | Confirmation | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| June 13 | Arrival, supplies, 18:00 Blue Lagoon, southeast-facing first night | Gata Free Campsite if power is not needed | Þorlákshöfn for CPAP power, Sandgerði/Reykjanes if backtracking is better | Decision needed |  |  | Camper pickup, food shopping, early meal, Blue Lagoon at 18:00, then overnight at Gata only if power is not needed or confirmed. Þorlákshöfn keeps the route pointed east; Sandgerði is easier if the night is running late. |
| June 14 | Golden Circle / anniversary | Selfoss campground | Flúðir, Skjól/Geysir | Decision needed |  |  | Tie this to dinner reservation. |
| June 15 | South Coast / Vík | Vík Camping | Skógar campground | Decision needed |  |  | Power at Vík; Skógar simpler backup. |
| June 16 | Skaftafell / Kirkjubæjarklaustur | Skaftafell campground | Kirkjubær II | Decision needed |  |  | Skaftafell if hiking/glacier timing matters. |
| June 17 | Höfn / southeast reset | Höfn |  | Decision needed |  |  | Good shower/laundry/food reset night. |
| June 18 | Eastfjords / Egilsstaðir | Egilsstaðir | Seyðisfjörður, Djúpivogur | Decision needed |  |  | Egilsstaðir has strong facilities and online booking. |
| June 19 | Toward Mývatn | Vogar / Mývatn | Möðrudalur, Heiðarbær | Decision needed |  |  | Vogar is best CPAP-primary Mývatn target. |
| June 20 | Solstice base | Vogar / Mývatn or Húsavík | Ásbyrgi, Heiðarbær, Camping 66.12 North | Decision needed |  |  | Choose based on June 19 weather forecast. |
| June 21 | Solstice stay-put | Same as June 20 | Same area backup | Decision needed |  |  | Ideally stay two nights in same general area. |
| June 22 | Akureyri / Tröllaskagi | Hamrar / Akureyri | Vaglaskógur, Dalvík, Hofsós | Decision needed |  |  | Hamrar is strongest reset option. |
| June 23 | West decision point | Hvammstangi | Hólmavík, Drangsnes, Sauðárkrókur | Decision needed |  |  | Decides Westfjords vs Snæfellsnes. |
| June 24 | Westfjords or Snæfellsnes | Tungudalur / Ísafjörður or Grundarfjörður | Súðavík, Þingeyri, Stykkishólmur | Decision needed |  |  | Branch-dependent. |
| June 25 | South Westfjords / Snæfellsnes / Borgarfjörður | Patreksfjörður/Tálknafjörður or Arnarstapi/Hellissandur or Húsafell | Flókalundur, Grundarfjörður | Decision needed |  |  | Keep weather-flexible, but protect power. |
| June 26 | Camper drop-off and final-night hotel | Center Hotels Plaza, Reykjavík | Airport transport to KEF on June 27 | Booked | June 26 final night |  | Camper returns to Cozy Campers at 11:30, so this is not a camper night. Confirm Saturday airport transfer timing. |

## Lower-Priority Reserve-Recommended Campgrounds

These are all researched as having or likely having power, but they only need action if they become the chosen overnight target.

| Campground | Map ID | Region | Status | Notes |
| --- | --- | --- | --- | --- |
| Kirkjubær II / Kirkjubæjarklaustur | M | South Coast | Not booked | Powered spots may be first-come. |
| Borgarnes / Borgarfjörður | AE | West / southwest | Not booked | Confirm exact campground if using final buffer. |
| Reykjanes / Sandgerði | CP2 | Airport / Reykjanes | Not booked | Good final-night fallback. |
| Gata Free Campsite | CP39 | South coast / Strandarkirkja | Call/check | Free/donation first-night candidate after Blue Lagoon; confirm campervan access and power before relying on it for CPAP. |
| Þorlákshöfn Campsite | CP40 | South coast / Ölfus | Call/check | First-night CPAP backup near Gata with electricity listed; confirm powered spot, late arrival/payment, and opening before relying on it. |
| Flúðir campground | CP4 | Golden Circle | Not booked | Confirm kitchen/cooking if needed. |
| Skjól / Geysir area | CP5 | Golden Circle | Not booked | Limited electric stations. |
| Skógar campground | CP6 | South Coast | Not booked | Simple backup near Skógafoss. |
| Djúpivogur campground | CP8 | Eastfjords | Not booked | Useful slower Eastfjords pacing. |
| Seyðisfjörður campground | CP9 | Eastfjords | Not booked | Strong scenic Eastfjords option. |
| Möðrudalur / Fjalladýrð | CP10 | Interior/Ring Road | Not booked | Remote; confirm opening/availability. |
| Mývatn / Bjarg | CP11 | Mývatn | Not booked | Limited electric camper spots. |
| Ásbyrgi campground | CP13 | Diamond Circle | Not booked | Confirm park rules and powered spot. |
| Dalvík campground | CP15 | Tröllaskagi | Not booked | Shorter-day option. |
| Hofsós campground | CP16 | Skagafjörður | Not booked | Good if continuing past Siglufjörður. |
| Hólmavík campground | CP18 | Westfjords entry | Not booked | Conservative Westfjords entry. |
| Drangsnes campground | CP19 | Westfjords entry | Not booked | Good hot-pot pairing. |
| Súðavík campground | CP21 | Ísafjörður area | Not booked | Verify exact hookup style. |
| Þingeyri campground | CP22 | Westfjords | Not booked | Good pacing south of Ísafjörður. |
| Tálknafjörður campground | CP23 | South Westfjords | Not booked | Alternative to Patreksfjörður. |
| Flókalundur campground | CP25 | South Westfjords / ferry | Not booked | Useful ferry-route option. |
| Stykkishólmur campground | CP26 | Snæfellsnes / ferry | Not booked | Good Baldur logistics base. |
| Grundarfjörður campground | CP27 | Snæfellsnes | Not booked | Kirkjufell base. |
| Ólafsvík / Hellissandur | CP28 | Snæfellsnes | Not booked | Choose exact campground based on route. |
| Arnarstapi campground | CP29 | Snæfellsnes | Not booked | Parka booking noted. |
| Húsafell campground | CP31 | Borgarfjörður | Not booked | Good Húsafell/Canyon Baths/Krauma base. |
| Heiðarbær | CP33 | Mývatn / Húsavík | Not booked | Practical road 87 fallback. |
| Camping 66.12 North | CP34 | Tjörnes / north coast | Not booked | Quiet coastal solstice option; check wind. |
| Vaglaskógur | CP35 | East of Akureyri | Not booked | Choose electric section. |
| Sauðárkrókur campground | CP36 | Skagafjörður | Not booked | Good town-service option. |
| Kópasker campground | CP37 | Arctic Coast flex | Call/check | Remote; confirm same day. |
| Bakkafjörður campground | CP38 | Arctic Coast flex | Call/check | Remote; confirm same day. |

## Decision Log

Use this as decisions become clear.

| Date updated | Decision | Impact |
| --- | --- | --- |
| 2026-05-13 | Tracker created from booking requirements research. | Ready to begin marking booked/not booked and narrowing optional branches. |
