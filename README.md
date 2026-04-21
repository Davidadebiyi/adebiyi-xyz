# adebiyi.xyz

Foundry v2 redesign for David Adebiyi's personal site.

The site is now built with Astro. It keeps the existing Markdown essays and
static assets, while the UI follows the Foundry handoff: oxide-informed color
tokens, hard-edge grids, mono metadata, serif editorial accents, and dedicated
Labs, Studio, Workshop, Essays, Index, Bio, and Contact routes.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

The development server runs at `http://127.0.0.1:4321/` by default.

## Routes

- `/` - Home
- `/labs` - Research and systems artifacts
- `/studio` - Design and editorial artifacts
- `/workshop` - Build logs and prototypes
- `/essays` - Markdown essay index
- `/index` - Filterable archive table
- `/bio` - Biography
- `/contact` - Netlify contact form
- `/:slug` - Individual essays using the existing Markdown slugs

The old `/blog` path redirects to `/essays`.

## Structure

- `src/layouts/Layout.astro` - SEO shell, theme persistence, global frame
- `src/components/*.astro` - Foundry UI components
- `src/pages/*.astro` - Astro routes
- `src/content/posts/*.md` - existing essays
- `src/util/foundry-data.js` - mode artifacts and essay metadata
- `src/assets/scss/style.scss` - Foundry design tokens and component styles
- `static/` - public assets served by Astro
