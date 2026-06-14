# Cookie Consent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a future-ready cookie consent dialog that gates Vercel Analytics and supports stable future tracking categories.

**Architecture:** Keep consent rules in a pure `lib/cookie-consent.ts` module and browser persistence in a small client provider. The locale layout passes localized dictionary copy into the provider and renders Vercel Analytics through a category gate.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Vitest, shadcn/base UI, Tailwind v4, Vercel Analytics.

---

## File Structure

- Create `lib/cookie-consent.ts`: category definitions, storage key/version, defaults, validation, and helper functions.
- Create `lib/cookie-consent.test.ts`: Vitest coverage for consent defaults, presets, validation, and category checks.
- Create `components/consent/cookie-consent-provider.tsx`: client context, localStorage persistence, dialog UI, and preferences reopen control.
- Create `components/consent/consent-managed-analytics.tsx`: Vercel Analytics gate for the `analytics` category.
- Modify `lib/i18n.ts`: add localized cookie consent copy to all dictionaries.
- Modify `app/[locale]/layout.tsx`: wrap the site in the consent provider and replace direct `<Analytics />` with the gated component.

## Tasks

### Task 1: Pure Consent Model

- [ ] Write failing tests in `lib/cookie-consent.test.ts` for default consent, accept all, reject non-essential, stored payload validation, and category checks.
- [ ] Run `bunx vitest run lib/cookie-consent.test.ts` and verify the tests fail because the module does not exist.
- [ ] Implement `lib/cookie-consent.ts` with the exact categories from the design.
- [ ] Re-run `bunx vitest run lib/cookie-consent.test.ts` and verify the tests pass.

### Task 2: Consent Provider UI

- [ ] Create `components/consent/cookie-consent-provider.tsx` as a Client Component.
- [ ] Use existing `Button`, `Badge`, `Field`, `FieldSet`, `Switch`, and `Separator` components.
- [ ] Load consent from localStorage once on mount.
- [ ] Hide the dialog when valid consent exists.
- [ ] Support accept-all, reject-non-essential, customize, save choices, and reopen preferences.
- [ ] Keep `necessary` locked on.

### Task 3: Analytics Gate And Localization

- [ ] Create `components/consent/consent-managed-analytics.tsx` as a Client Component that renders `<Analytics />` only when `analytics` is granted.
- [ ] Add `cookieConsent` dictionary copy to English, Serbian Latin, Serbian Cyrillic, and Bosnian dictionaries.
- [ ] Update `app/[locale]/layout.tsx` to render `CookieConsentProvider` around the site body and `ConsentManagedAnalytics` inside the provider.

### Task 4: Verification

- [ ] Run `bunx vitest run lib/cookie-consent.test.ts`.
- [ ] Run `bun run typecheck`.
- [ ] Run `bun run lint`.
- [ ] Run `bun run build`.
