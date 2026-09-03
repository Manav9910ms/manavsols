# MANAV SOLS V2

A clean rebuild of MANAV SOLS using Astro.

## Principles

- Keep the current production site untouched until V2 is ready.
- Separate pages, reusable UI, feature logic, data, services and styles.
- Prefer static-first rendering for performance and SEO.
- Add dynamic Vercel/Firebase features only where they provide real value.
- Keep localization data separate from page markup.

## Structure

```text
v2/
├── public/          Static assets
├── src/
│   ├── components/  Reusable UI
│   ├── data/        Site content and configuration
│   ├── layouts/     Shared page shells
│   ├── pages/       URL routes
│   ├── services/    Firebase/API integrations
│   ├── styles/      Design system and global CSS
│   └── features/    Feature-specific client/server logic
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The V2 project is intentionally isolated in `v2/` so the existing root website and production deployment remain unchanged during migration.
