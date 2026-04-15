# Molecule-AI Landing Page

The marketing site for [Molecule-AI](https://github.com/Molecule-AI) — the organizing layer for heterogeneous AI agent teams.

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
├── components/     # Section components (Hero, WhyNow, UseCases, ...)
├── data/
│   └── content.ts  # All copy lives here — edit in one place
├── layouts/
│   └── Layout.astro # SEO meta, JSON-LD, base document
├── pages/
│   └── index.astro
└── styles/
    └── global.css   # Tailwind v4 theme + utilities
```

All copy is centralized in `src/data/content.ts`. To change wording, edit that file — components are purely structural.

## Deployment

The site is static. Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

Before deploying, update `site` in `astro.config.mjs` and the URL in `public/robots.txt` to the production domain.

## License

Open source under the Molecule-AI organization.
