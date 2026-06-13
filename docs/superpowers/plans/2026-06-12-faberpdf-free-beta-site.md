# FaberPDF Free Beta Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the free FaberPDF beta marketing, download, and anonymous feedback site.

**Architecture:** The app remains a Next.js App Router site using shadcn `base-nova` and Tailwind v4. Static marketing and download content stays in server-rendered components, while the feedback form is a small Client Component that posts to a server route proxying Formspree.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind v4, shadcn/base UI, lucide-react, Bun.

---

## File Structure

- `lib/site.ts`: public beta content, download configuration, and feedback constants.
- `lib/feedback.ts`: feedback payload normalization, validation, and Formspree request shaping.
- `lib/feedback.test.ts`: tests for validation and request shaping.
- `app/api/feedback/route.ts`: route handler that validates feedback and forwards to Formspree.
- `app/api/feedback/route.test.ts`: tests for route outcomes with mocked `fetch`.
- `components/marketing/faber-logo.tsx`: lightweight brand mark.
- `components/marketing/product-workspace.tsx`: desktop app screenshot/window display.
- `components/marketing/site-header.tsx`: top navigation.
- `components/marketing/site-footer.tsx`: footer.
- `components/feedback/feedback-form.tsx`: anonymous feedback client form.
- `app/page.tsx`: full beta landing page.
- `app/layout.tsx`: metadata and font cleanup.
- `app/globals.css`: theme tokens and page polish.
- `README.md`: setup notes for Formspree and download URLs.

## Tasks

- [ ] Add test tooling with Vitest and create failing tests for feedback validation.
- [ ] Implement `lib/site.ts` and `lib/feedback.ts` until validation tests pass.
- [ ] Add failing route tests for missing Formspree config, invalid payload, honeypot, and successful forwarding.
- [ ] Implement `/api/feedback` until route tests pass.
- [ ] Build marketing components using installed shadcn components and lucide icons.
- [ ] Replace starter home page with the free beta landing experience.
- [ ] Update layout metadata and theme tokens.
- [ ] Update README setup instructions.
- [ ] Run `bun run lint`, `bun run typecheck`, `bun run test`, and `bun run build`.
- [ ] Start the dev server and verify desktop/mobile rendering in the browser.
