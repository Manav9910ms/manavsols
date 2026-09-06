# MANAV SOLS

Modern websites, software & digital solutions.

This repository is the production MANAV SOLS website built with Astro. The project is intentionally organized as a single root Astro application so the source structure matches the deployed site directly.

## Architecture

```text
/
├── public/              Static public assets
├── src/
│   ├── components/     Reusable UI
│   ├── data/           Site and business data
│   ├── features/       Business feature boundaries
│   ├── layouts/        Shared page shells and SEO
│   ├── pages/          English-only file-based routes
│   └── styles/         Global design system
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── vercel.json
└── firestore.rules
```

Astro generates the final HTML from `src/pages`. The public website is English-only. Request, admin, invoice verification, Firebase and email workflows are kept as application features around the core site.

## Development

```bash
npm install
npm run dev
npm run build
npm run check
```
