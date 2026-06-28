# Iceland Travel Log

Static travel-log site for the actual trip record: daily summaries, places visited, photos, videos, links, and a per-day map.

Open `travel-log/index.html` directly, or serve the repo locally if you want map tiles to behave consistently:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/travel-log/`.

## Day Frame Links

Use `view=day` for a single-day page without the left navigation:

```text
http://localhost:8000/travel-log/?day=2026-06-14&view=day
```

The full travel-log view includes a `Day frame` link for the selected day.

## Editing Days

Daily entries live in `travel-log/data/days.js`. Each day supports:

- `summary` and `journal` for the written log
- `notes.camp`, `notes.weather`, and `notes.road` for useful trip context
- `places` with `lat`/`lng` coordinates for the daily map
- `media` records for photos, direct videos, hosted links, or embeds
- `links` records for albums, receipts, map timelines, articles, notes, or source folders

## Collection Inbox

Use `travel-log/collection-inbox.md` as the messy intake area. Drop raw links, folder paths, day notes, receipts, and “remember this” scraps there first. Once a day has enough material, curate it into `data/days.js` so it appears in the site.

Use `travel-log/media-workflow.md` for the media plan: iCloud shared albums for iPhone material, YouTube for edited 360/drone/video exports, and the travel log as the day-by-day index.

## Media Pattern

Keep original photos and videos outside Git. Use the repo for selected web-ready images, poster frames, and metadata.

Good options:

- Local optimized photos in `travel-log/assets/`
- Cloudflare R2 or similar object storage for large photo/video files
- YouTube or Vimeo embeds for longer edited videos
- iCloud links as outbound references, not as the main website media backend

Example media records:

```js
{
  type: "photo",
  title: "F-road weather window",
  caption: "Late light after the road opened.",
  src: "https://media.example.com/iceland/day-08/froad.jpg"
}
```

```js
{
  type: "video-embed",
  title: "Drone pass over the coast",
  caption: "Edited 90-second clip.",
  embed: "https://www.youtube.com/embed/VIDEO_ID"
}
```

```js
{
  type: "video-link",
  title: "Full day reel",
  caption: "Hosted externally.",
  href: "https://example.com/video"
}
```
