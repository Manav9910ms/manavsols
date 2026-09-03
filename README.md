# MANAV SOLS

Modern websites, software & digital solutions.

This repository is the production MANAV SOLS website built with Astro. The project is intentionally organized as a single root Astro application so the source structure matches the deployed site directly.

## Architecture

```text
/
├── public/              Static public assets
├── src/
│   ├── components/     Reusable UI
│   ├── data/           Site data and locale definitions
│   ├── features/       Business feature boundaries
│   ├── layouts/        Shared page shells and SEO
│   ├── locales/        Translation/content layer
│   ├── pages/          File-based routes
│   └── styles/         Global design system
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── vercel.json
└── firestore.rules
```

Astro generates the final HTML from `src/pages`. The public site is static-first, while feature folders are reserved for future authentication, client, admin and request workflows.

## Development

```bash
npm install
npm run dev
npm run build
npm run check
```
