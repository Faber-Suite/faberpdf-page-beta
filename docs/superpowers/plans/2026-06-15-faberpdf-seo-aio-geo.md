# FaberPDF SEO AIO GEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add localized technical SEO, AI-search-friendly structured data, and discoverability surfaces for FaberPDF.

**Architecture:** Keep SEO data in `lib/seo.ts` and have Next metadata routes consume it. Page components render JSON-LD scripts from typed builders so structured data stays aligned with visible localized copy.

**Tech Stack:** Next.js 16 App Router metadata routes, React Server Components, TypeScript, Vitest.

---

### Task 1: SEO Data Contract

**Files:**

- Create: `lib/seo.ts`
- Test: `lib/seo.test.ts`

- [x] Write failing tests for localized route coverage, hreflang alternates, search intent, and JSON-LD escaping.
- [x] Implement route descriptors, URL helpers, search-intent copy, and JSON-LD builders.
- [x] Run focused tests until they pass.

### Task 2: Metadata Routes

**Files:**

- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/manifest.ts`
- Test: `lib/metadata-routes.test.ts`

- [x] Write failing tests for sitemap, robots, and manifest outputs.
- [x] Implement metadata routes using `lib/seo.ts`.
- [x] Run focused tests until they pass.

### Task 3: Page Metadata And JSON-LD

**Files:**

- Modify: `app/[locale]/layout.tsx`
- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/download/page.tsx`
- Modify: `app/[locale]/feedback/page.tsx`
- Modify: `lib/i18n-server.ts`
- Test: `lib/public-copy.test.ts`

- [x] Write failing tests for locale keyword targeting and metadata helper behavior.
- [x] Render localized JSON-LD scripts on visible pages.
- [x] Extend metadata with robots preview controls, app metadata, and share-image hints.

### Task 4: Share Image

**Files:**

- Create: `app/opengraph-image.tsx`

- [x] Generate a static 1200x630 Open Graph/Twitter image with the FaberPDF brand and core promise.

### Task 5: Verification

**Files:**

- Existing project checks.

- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.
- [x] Run `bun run test`.
- [x] Run `bun run build`.
