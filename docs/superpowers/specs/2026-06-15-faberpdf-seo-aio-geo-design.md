# FaberPDF SEO AIO GEO Design

## Goal

Improve FaberPDF search visibility for classic SEO and AI-assisted discovery without relying on unsupported AI-specific hacks.

## Search Positioning

English pages target global product intent around a modern, local-first, offline desktop PDF editor. The strongest terms are local PDF editor, modern PDF editor, offline PDF editor, desktop PDF editor, PDF signing, PDF annotation, and focused PDF text editing.

Serbian Latin, Serbian Cyrillic, and Bosnian pages target Balkan-language intent around qualified electronic certificate signing, while still presenting FaberPDF as a practical desktop PDF editor for local document work.

## Technical Surfaces

Add first-class metadata and machine-readable discovery surfaces:

- A localized sitemap with canonical URLs and hreflang alternates for home, download, and feedback pages.
- A robots route that allows indexing and points crawlers to the sitemap.
- A web manifest that describes the public site and downloadable desktop app.
- Locale-aware SEO data in a focused library module so metadata, sitemap, and structured data share one source of truth.
- JSON-LD for WebSite, Organization, SoftwareApplication, download/offers, and FAQ where the visible page supports those facts.
- A generated Open Graph/Twitter image for better link previews.

## Constraints

Do not add thin keyword pages, hidden text, fake reviews, fake ratings, fake prices, account/paywall copy, or unsupported claims. JSON-LD must match visible content. The existing localized route structure remains in place.

## Testing

Add tests that prove the sitemap covers every localized public route, hreflang alternates are present, robots and manifest point at the right canonical host, locale search intent is explicit, and structured data includes the supported product/app facts without unsafe HTML.
