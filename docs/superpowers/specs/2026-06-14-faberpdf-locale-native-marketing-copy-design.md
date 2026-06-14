# FaberPDF Locale-Native Marketing Copy Design

## Goal

Rewrite the public FaberPDF beta website copy so it reads like a focused marketing website rather than a translated product note. The site should sell the strongest reason to try FaberPDF in each market while keeping the current free beta status as supporting context, not the main headline.

## Audience And Positioning

English visitors should understand FaberPDF as a modern local-first PDF editor for desktop work. The English promise is that people can edit, sign, annotate, validate, and make focused PDF fixes without starting from a cloud upload.

Serbian Latin, Serbian Cyrillic, and Bosnian visitors should see qualified electronic certificate signing as the lead value. The regional promise is that FaberPDF helps with `potpisivanje kvalifikovanim elektronskim sertifikatom` / `потписивање квалификованим електронским сертификатом` while also offering practical PDF editing features such as annotations, document review, validation, and small text fixes.

The beta status remains visible as availability and expectation-setting copy: currently in beta, free to try, feedback welcome, current desktop build available. It should not dominate the hero or make the product feel unfinished before the value is understood.

## Locale Strategy

Each locale gets native marketing copy, not literal translation.

English copy should sound concise, confident, and product-led. It should avoid over-explaining the Balkans certificate-signing use case unless the feature is mentioned as part of broader signing support.

Serbian Latin copy should use natural Serbian phrasing and keep the certificate-signing phrase clear and searchable. It should avoid English filler words where Serbian phrasing is stronger.

Serbian Cyrillic copy should be written directly in Cyrillic, not mechanically transliterated after the fact. Product names, OS names, and technical acronyms may remain in Latin where conventional.

Bosnian copy should be adapted for Bosnian usage and should not be a Serbian Latin copy with only a few character changes. It should use natural Bosnian forms such as `provjera`, `izmjena`, `vrijedi`, and a market-appropriate certificate phrasing.

## Copy Surfaces

Update the shared dictionary in `lib/i18n.ts` across all four locales:

- Metadata titles and descriptions.
- Navigation labels where stronger wording helps conversion.
- Header and footer summary copy.
- Home hero badges, headline, description, and CTAs.
- Feature section titles, descriptions, and cards.
- Screenshot/product-preview section copy.
- Beta/preview cards.
- Feedback section copy.
- Trust section badges and explanatory notes.
- FAQ questions and answers.
- Download page title, badges, helper cards, and feedback CTA.
- Feedback page framing and form-adjacent helper copy.

Update `lib/site.ts` only where global English metadata or keyword positioning should support the new market promise.

## Conversion Principles

The page should answer these questions quickly:

- What is FaberPDF?
- Why should I download it instead of using a browser PDF tool?
- Does it handle signing and practical editing workflows?
- Is it local-first?
- Is it safe to try while it is in beta?
- Where do I download it?

The hero should sell the product, not the implementation. The free beta message should lower friction after the value proposition is clear. The feedback request should feel like a useful beta loop, not the primary purpose of the site.

## Constraints

Do not add account, checkout, Paddle, Convex, licensing, paid plan, or sign-in copy. The existing public-copy guard should continue to prevent those concepts from returning.

Do not change routing, download behavior, Formspree behavior, or page structure unless a small copy-specific adjustment is necessary. The implementation should mostly be dictionary and metadata work.

Keep technical labels accurate. Marketing sections can be rewritten freely, but button states, platform names, installer formats, and form labels must remain clear.

Avoid claims that are not supported by the current app or site. If qualified certificate signing has product limitations, the copy should phrase it as support for the workflow without promising unsupported legal, compliance, or platform coverage.

## Testing And Verification

Add or update focused tests that assert the new positioning is present:

- English dictionary contains modern local-first desktop PDF editor positioning.
- Serbian Latin and Serbian Cyrillic contain qualified electronic certificate signing positioning.
- Bosnian contains its own certificate-signing positioning.
- Public copy still excludes account, checkout, sign-in, login, and paid-flow language.

Run the existing validation gate after implementation: `bun run lint`, `bun run typecheck`, `bun run test`, and `bun run build`.

After code implementation, use the browser to inspect the localized pages on desktop and mobile viewports. Pay special attention to hero line breaks and longer Serbian/Bosnian phrases inside cards, badges, and buttons.

## Out Of Scope

This change does not redesign the visual layout, add new routes, change the download pipeline, add pricing, or create a paid commercial funnel. It is a conversion-focused rewrite inside the existing beta website.
