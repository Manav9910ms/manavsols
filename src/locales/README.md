# Localization architecture

Public copy will be moved into locale modules so page structure is shared across languages instead of duplicating entire HTML pages.

Planned locale keys:
- `en-IN` — default
- `hi`
- `tr`
- `vi`
- `es`
- `ru`
- `id`
- `de`
- `fr`

Rules:
1. Routes and components stay shared where possible.
2. SEO title, description, hreflang and visible copy are locale data.
3. No keyword-stuffed city-page duplication.
4. Geo routing remains a deployment concern, not business logic inside every page.
