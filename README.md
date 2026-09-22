# Vicky & Josh — portfolio

Portfolio site for **Vicky & Josh**, a senior creative team (art direction + copy).
Built with [Astro](https://astro.build), deployed automatically to GitHub Pages at
**https://raww.github.io/vandjosh/**.

Dark editorial design, ported from the studio's Claude Design project: a persistent
left rail (wordmark · About · FILTER · PROJECTS) beside a full-viewport case-study
frame. The five neon discipline symbols (○ △ □ ✳ ✕) are the brand's only colour.

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Dev server at `localhost:4321/vandjosh/`       |
| `npm run build`   | Production build to `dist/`                    |
| `npm run preview` | Serve the production build locally             |
| `npm run check`   | Verify every referenced image exists (runs in CI) |

## Adding a new project

Everything derives from **`src/data/projects.js`** — the page, rail entry, sitemap
entry, meta tags and JSON-LD are all generated from it. To add a project:

1. Drop imagery into `public/assets/imagery/`. Conventions: one hero + up to two
   supporting images, web-optimised (≲300 KB JPEGs, portrait or landscape both fine).
2. Append an object to the `PROJECTS` array:

   ```js
   {
     id: 'client-campaign',        // becomes the URL: /work/client-campaign/
     index: '11',
     client: 'Client',
     title: 'Campaign Title',
     disciplines: ['Film'],        // any of: Film, Experiential, Digital, B2B, Social good
     description: 'One short paragraph. Also becomes the page’s meta description.',
     stats: [{ figure: '53k', label: 'Website Visits' }],   // optional; set inline as one line
     hero: 'assets/imagery/client-hero.jpg',                // string, or { src, pos, fit }
     images: ['assets/imagery/client-a.jpg'],               // more media; .mp4 = muted loop
     video: 'assets/video/client-case.mp4',                 // optional: film played on click
     youtube: 'dQw4w9WgXcQ',                                // optional: YouTube id instead of video
     quote: { text: 'A press quote', source: 'Outlet' },    // optional: clipping card in the lower row
     press: ['guardian', 'metro'],                          // keys from the PRESS map
   }
   ```

   **Focal points.** Tiles crop with `object-fit: cover`, so any photo with a face
   in it needs a `pos` — an `object-position` value that keeps the face in frame:

   ```js
   hero: { src: 'assets/imagery/client-hero.jpg', pos: '51% 30%' },
   images: [{ src: 'assets/imagery/client-a.jpg', fit: 'contain' }],  // clippings, diagrams
   ```

   `pos` is not simply the face's centre. With `cover`, the anchor `p%` maps the
   image's `p%` point onto the tile's `p%` point, so the usable range depends on
   how hard the tile crops. Pick the midpoint of the range that keeps the face
   visible at every tile aspect the layout produces (roughly 0.2–3.7 today) —
   `docs/focal-points.md` records the values in use and how they were derived.
   Photos with no face (landscapes, crowds, the Crusoe seal) can stay bare
   strings. Press clippings and diagrams want `fit: 'contain'`, which shows them
   whole on a white card and needs no `pos`.

   Media notes: entries ending `.mp4` in `images`/`hero` render as muted looping
   film moments (convert gifs with ffmpeg — tiny files, same effect). A `video`
   or `youtube` field puts a play button on the feature tile; clicking swaps in
   the player. Compress films to ~720p H.264 (`ffmpeg -vf scale=1280:-2 -crf 26
   -preset slow -movflags +faststart`) — keep them ≲20 MB.

3. `npm run check` to confirm the image paths, then commit and push — the site
   rebuilds and deploys on push to `main`.

The layout adapts to how much media the entry has (see
`src/components/ProjectFrame.astro`): the first one or two tiles sit above the
press band and the rest below it. Every project currently supplies a hero.

New press outlet? Add the white-on-transparent logo to `public/assets/press/`
and one line to the `PRESS` map.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph/Twitter tags and
  JSON-LD are assembled in `src/components/Seo.astro` from `src/data/site.js` +
  `projects.js`. There is nothing to keep in sync by hand.
- Share links show a single global card (`public/og/card.png`): the VICKY & JOSH
  wordmark with the five symbols.
- Sitemap (`sitemap-index.xml`) and `robots.txt` are generated/served automatically.

### Regenerating the share card

The card's source is the (unlisted, noindex) route `/og-card`. If the wordmark or
symbols change: `npm run dev`, screenshot `localhost:4321/vandjosh/og-card/` at
exactly **1200×630**, save as `public/og/card.png`.

## Deploying

Pushes to `main` run `.github/workflows/deploy.yml`: image check → Astro build
(`withastro/action`) → GitHub Pages deploy. No secrets needed beyond the
repository's Pages permissions.

**Custom domain later:** set `site` (and `base: '/'`) in `astro.config.mjs`, add a
`public/CNAME` file with the domain, update the `Sitemap:` line in
`public/robots.txt`, and point DNS at GitHub Pages.
