# Molecule-AI Landing Page

The marketing site for [Molecule-AI](https://git.moleculesai.app/molecule-ai) — the organizing layer for heterogeneous AI agent teams.

Built with [Astro](https://astro.build) and Tailwind CSS v4, optimized for SEO and zero-JS performance.

## Stack

- **Astro 5** — static-first, zero-JS by default
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **@astrojs/sitemap** — auto-generated sitemap
- JSON-LD structured data (Organization / WebSite / SoftwareApplication)
- OpenGraph + Twitter cards
- `robots.txt`, canonical URLs, semantic HTML

## Development

```bash
pnpm install
pnpm dev         # http://localhost:4321
pnpm build       # production build to ./dist
pnpm preview     # preview the production build
```

## Project structure

```
src/
├── components/      # Section components (Hero, WhyNow, UseCases, ThemeToggle, ...)
├── data/
│   └── content.ts   # All copy lives here — edit in one place
├── layouts/
│   └── Layout.astro # SEO meta, JSON-LD, base document, theme stamping
├── pages/
│   └── index.astro
├── scripts/
│   └── theme.ts     # Cookie helpers + inline boot script
└── styles/
    └── global.css   # Tailwind v4 theme + utilities
```

All copy is centralized in `src/data/content.ts`. To change wording, edit that file — components are purely structural.

## Theme architecture

The site supports light + dark mode via a 3-layer system designed to be **FOUC-free** (no flash of unstyled / wrong-themed content) and zero-JS-friendly:

1. **Cookie** — `molecule_theme` on domain `.moleculesai.app` (so a toggle on the marketplace or app surfaces is honored when the user lands here). Values: `system | light | dark`. Helpers live in `src/scripts/theme.ts`.
2. **Inline boot script** — `themeBootScript` (also in `src/scripts/theme.ts`) is injected synchronously into `<head>` via `<script is:inline>` in `Layout.astro`. It reads the cookie, resolves `system` → `light`/`dark` via `matchMedia`, and stamps `data-theme` on `<html>` *before first paint*. This is why we never flash the wrong theme.
3. **`:root[data-theme]` cascade** — every theme-aware selector in `src/styles/global.css` and component `<style>` blocks scopes off `:root[data-theme="light"]` / `:root[data-theme="dark"]`. Only `<html>` ever gets the attribute; `<body>` and descendants inherit via the cascade. This avoids a JS body-update step that would race with `DOMContentLoaded`.

### Per-page defaults (SSR)

`Layout.astro` accepts a `theme?: "light" | "dark"` prop (default: `"dark"`). Astro builds static HTML, so this value is what crawlers and the very first paint frame see. Real users get their cookie/system preference applied by the boot script <1ms later.

- Default brand identity is **dark** (preserves contrast for crawlers and screenshots).
- `src/pages/index.astro` and `src/pages/zh/index.astro` opt into `theme="light"` explicitly to match the warm-paper landing aesthetic.

### Toggle UI

`src/components/ThemeToggle.tsx` is a 3-way picker (System / Light / Dark) hydrated with `client:idle`. It is mounted in `src/components/Landing.astro` inside the `v2-nav-cta` div, next to the Sign In button. Pricing and legal pages do **not** currently surface the toggle — known scope limitation; the cookie still applies, just no in-page control.

### React 19 quirk — `import * as React from "react"`

Astro emits classic-runtime JSX (`React.createElement(...)`) when rendering `.tsx` components on the server. React 19 no longer ships a default export named `React`, so a plain `import React from "react"` resolves to `undefined` at SSR time and you'll see:

```
ReferenceError: React is not defined
```

Use the namespace import in every `.tsx` component used by Astro:

```ts
import * as React from "react";
```

This is why `ThemeToggle.tsx` (and any future React island) starts with that line. Future maintainers: don't "clean it up" to a default import.

## Deployment

The site is static. Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

Before deploying, update `site` in `astro.config.mjs` and the URL in `public/robots.txt` to the production domain.

## License

Open source under the Molecule-AI organization.
