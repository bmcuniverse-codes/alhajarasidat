# Rasidat Fasola Babalola — 70th Birthday Website

A responsive one-page birthday livestream landing page based on the supplied invitation design.

## Included
- Mobile-first responsive design
- Burgundy, gold, blush-pink and ivory colour palette from the invitation
- Celebrant portrait extracted from the supplied flyer
- Original invitation included in the page
- Exact countdown to **Saturday, 26 September 2026 at 1:00 PM GMT+1**
- Watch Now button remains disabled until the countdown reaches zero
- Watch Now button becomes live/active at the event time
- Simple celebrant and event information sections
- No database or build step required

## Add the live stream link

Open:

`script.js`

Find:

`const WATCH_URL = "PASTE_YOUR_LIVE_STREAM_LINK_HERE";`

Replace it with the actual YouTube, Facebook, or other livestream URL.

Example:

`const WATCH_URL = "https://www.youtube.com/watch?v=YOUR_ID";`

## Run locally

You can simply open `index.html` in a browser.

For local development, a simple static server also works:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

The folder can be uploaded directly to most static hosting services, including Vercel, Netlify, GitHub Pages or any normal web host.

The countdown uses the exact timezone offset **GMT+1** for the event time, so visitors in other countries will still see the correct moment based on their device clock.
