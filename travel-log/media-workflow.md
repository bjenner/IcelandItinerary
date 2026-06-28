# Iceland Media Workflow

Use the travel log as the story layer, not the raw storage bucket. Keep original media in the service that handles it best, then export or link the curated pieces from `data/days.js`.

## Source Plan

| Source | Best home | Use in travel log | Notes |
| --- | --- | --- | --- |
| Your iPhone photos/videos | iCloud shared albums | Album links, selected favorite images, short clips | Best for casual family browsing and original phone context. |
| Wife's iPhone photos/videos | iCloud shared albums | Album links, selected favorite images, short clips | Keep as a separate source until curated so attribution and missing moments are easier to spot. |
| Insta360 originals | External drive or local archive | Exported clips only | Keep raw files outside Git; they are large and app/project dependent. |
| Insta360 exports | YouTube or cloud video folder | YouTube embeds or video links | Export the edited flat/reframed versions people will actually watch. |
| Drone originals | External drive or local archive | Edited exports only | Keep originals and project files backed up separately. |
| Drone edits | YouTube | YouTube embeds or links | Good fit for highlight reels, scenic clips, and shareable day videos. |
| Screenshots / maps / receipts | Repo if small, cloud if private | Links or selected images | Do not publish private receipts or personal details on GitHub Pages. |

## Recommended Album Structure

Create broad source albums first, then curate later.

- `Iceland 2026 - Your Phone`
- `Iceland 2026 - Wife Phone`
- `Iceland 2026 - Favorites`
- `Iceland 2026 - Day 01 - Jun 13`
- `Iceland 2026 - Day 02 - Jun 14`
- `Iceland 2026 - Day 03 - Jun 15`
- `Iceland 2026 - Day 04 - Jun 16`
- `Iceland 2026 - Day 05 - Jun 17`
- `Iceland 2026 - Day 06 - Jun 18`
- `Iceland 2026 - Day 07 - Jun 19`
- `Iceland 2026 - Day 08 - Jun 20`
- `Iceland 2026 - Day 09 - Jun 21`
- `Iceland 2026 - Day 10 - Jun 22`
- `Iceland 2026 - Day 11 - Jun 23`
- `Iceland 2026 - Day 12 - Jun 24`
- `Iceland 2026 - Day 13 - Jun 25`
- `Iceland 2026 - Day 14 - Jun 26`
- `Iceland 2026 - Day 15 - Jun 27`

## Featured Image Workflow

Use this when a specific photo should appear inside the webpage with context.

1. Pick the image from Photos or a shared iCloud album.
2. Export a web-sized copy, not the original master file.
3. Save it in `travel-log/assets/` using a clear name, such as `jun-18-detifoss-overlook.jpg`.
4. Add it to the matching day in `data/days.js` as a `photo` media record.
5. Include `credit` when the image came from a specific person.
6. Include `sourceHref` when there is an iCloud album or cloud folder people can open for the rest of the set.

Suggested export size:

- 1800-2400 px on the long edge for hero or large story images
- 1200-1600 px on the long edge for normal inline images
- JPEG quality around 75-85 is usually enough for the website

This gives the page stable images it can display directly, while iCloud remains the fuller source library.

## YouTube Structure

Use unlisted videos unless a video is meant to be public.

- `Iceland 2026 - Full Trip Highlights`
- `Iceland 2026 - Insta360 Highlights`
- `Iceland 2026 - Drone Highlights`
- `Iceland 2026 - Jun 14 Anniversary`
- `Iceland 2026 - Solstice Weekend`
- Optional per-day videos when a day has enough material

## Curation Pass

For each day in `data/days.js`:

1. Add one iCloud day album or source album link under `links`.
2. Add any YouTube video as either `video-embed` or `video-link` in `media`.
3. Export one hero image to `travel-log/assets/` when a day has a clear visual anchor.
4. Add 3-12 selected media cards only. The travel log should feel curated, not like a file dump.
5. Keep raw source links in `collection-inbox.md` if they are not ready for the public/shareable page.

## Media Record Examples

Use an iCloud album as a source link:

```js
links: [
  {
    title: "Jun 14 iCloud album",
    href: "https://www.icloud.com/sharedalbum/...",
    note: "Phone photos and short clips from the anniversary day."
  }
]
```

Use a specific exported iPhone photo as a story image:

```js
media: [
  {
    type: "photo",
    title: "Wind at the overlook",
    caption: "This was the moment the scale of the canyon finally landed.",
    src: "assets/jun-18-canyon-overlook.jpg",
    credit: "Wife's iPhone",
    sourceHref: "https://www.icloud.com/sharedalbum/..."
  }
]
```

Use a YouTube embed for a finished video:

```js
media: [
  {
    type: "video-embed",
    title: "South Coast drone highlights",
    caption: "Edited scenic reel from the day.",
    embed: "https://www.youtube.com/embed/VIDEO_ID"
  }
]
```

Use a YouTube link when embedding is not wanted:

```js
media: [
  {
    type: "video-link",
    title: "Full Insta360 road clip",
    caption: "Hosted on YouTube as an unlisted video.",
    href: "https://www.youtube.com/watch?v=VIDEO_ID"
  }
]
```

## Privacy Rules

- Anything in the GitHub Pages site should be treated as public.
- Use unlisted YouTube links for shareable-but-not-public videos.
- Avoid publishing receipts, booking references, license plates, home addresses, exact personal schedules, or other private details.
- Keep private source material in `collection-inbox.md` or local folders, not in the published travel log.
- Before sharing the GitHub Pages URL widely, open it on a phone and check every external link from a non-signed-in/private browser session.
