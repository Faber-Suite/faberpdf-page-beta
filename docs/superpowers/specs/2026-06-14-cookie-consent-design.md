# Cookie Consent Design

## Goal

Add a future-ready cookie consent layer for FaberPDF that gates Vercel Analytics today and provides stable categories for future analytics, marketing, personalization, functional, security, and performance integrations.

## Consent Model

Consent is strict opt-in for every non-essential category. The `necessary` category is always enabled and cannot be disabled. The stored payload is versioned so future category changes can invalidate old choices intentionally.

Categories:

- `necessary`: always on, required for core site operation and storing consent.
- `analytics`: Vercel Analytics and future product analytics.
- `marketing`: ad pixels, retargeting, campaign attribution.
- `personalization`: remembered preferences and personalized content beyond essentials.
- `functional`: optional embedded services or enhanced site features.
- `security`: optional fraud, abuse, bot, or risk monitoring beyond required server protections.
- `performance`: optional performance monitoring, diagnostics, and speed insights.

## Architecture

`lib/cookie-consent.ts` owns pure types, defaults, serialization, validation, and category checks. It has no browser or React dependency, so it is easy to test and reuse.

`components/consent/cookie-consent-provider.tsx` is the only browser-aware consent state owner. It reads and writes `localStorage`, exposes a React context, renders the dialog, and keeps future tracking gates out of the dialog implementation.

`components/consent/consent-managed-analytics.tsx` renders Vercel Analytics only when `analytics` is granted. Future tracking providers should follow the same pattern by checking a category from the provider.

## UI

The initial surface is a compact fixed bottom dialog using the existing shadcn/base components and semantic theme tokens. It offers:

- Accept all.
- Reject non-essential.
- Customize.
- Save choices from the preferences view.

The preferences view shows every category. `necessary` is locked on; all other categories are independent switches. A footer link/button allows reopening preferences after a choice.

## Localization

Consent copy lives in the existing dictionary structure for all supported locales: English, Serbian Latin, Serbian Cyrillic, and Bosnian. The provider receives the localized copy from the locale layout.

## Testing

Pure consent behavior is covered with Vitest before implementation:

- default consent enables only `necessary`.
- accept-all grants every category.
- reject-non-essential disables every optional category.
- stored consent only loads when schema version and category shape are valid.
- `hasCookieConsentCategory` denies invalid or missing optional consent.
