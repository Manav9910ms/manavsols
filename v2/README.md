# MANAV SOLS V2

A clean rebuild of MANAV SOLS using Astro.

## Architecture

```text
v2/
├── public/            robots, sitemap, manifest, favicon
├── src/
│   ├── components/    reusable UI and homepage composition
│   ├── data/          site, services, projects, locale definitions
│   ├── features/      auth, client, admin, requests, quote boundaries
│   ├── layouts/       shared HTML/SEO shell
│   ├── locales/       localization plan and copy boundary
│   ├── pages/         file-based routes and dynamic detail routes
│   └── styles/        shared responsive design system
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment

The repository's root `vercel.json` builds this directory with Astro and publishes `v2/dist`. The old root source files remain in Git history while migration work happens inside V2.

## Principles

- Static-first rendering for speed and SEO.
- Reusable components instead of duplicated page markup.
- Data-driven services and projects.
- Localization separated from page structure.
- Dynamic Firebase/Vercel features added behind feature boundaries.
- No giant global script; each workflow gets its own module.

## Next build layers

1. Complete translated locale copy and localized internal routes.
2. Add request/quote intake with validation and tracking.
3. Add Firebase authentication only when the client portal is ready.
4. Add protected client and admin systems with server-side authorization.
