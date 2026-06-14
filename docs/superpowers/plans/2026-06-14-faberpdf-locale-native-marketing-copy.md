# FaberPDF Locale-Native Marketing Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the FaberPDF public beta website copy so English sells modern local-first desktop PDF editing, while Serbian Latin, Serbian Cyrillic, and Bosnian lead with qualified electronic certificate signing plus PDF editing features.

**Architecture:** Keep the existing Next.js 16 App Router structure, locale dictionaries, download behavior, and feedback flow. The implementation is limited to `lib/public-copy.test.ts`, `lib/site.ts`, and `lib/i18n.ts`, with validation through existing Vitest, lint, typecheck, build, and browser rendering checks.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, TypeScript, Vitest, Bun, Tailwind v4, shadcn/base UI.

---

## File Structure

- `lib/public-copy.test.ts`: public-copy regression tests, including locale-specific positioning assertions.
- `lib/site.ts`: global English site description and keyword positioning.
- `lib/i18n.ts`: localized marketing copy for English, Serbian Latin, Serbian Cyrillic, and Bosnian.

## Task 1: Add Failing Positioning Tests

**Files:**
- Modify: `lib/public-copy.test.ts`

- [ ] **Step 1: Add locale positioning tests**

Add this test inside `describe("public website copy", () => { ... })` after the existing banned-copy test:

```ts
  test("positions each locale with market-native conversion copy", () => {
    const english = collectStrings(getDictionary("en")).join("\n")
    const serbianLatin = collectStrings(getDictionary("sr-Latn")).join("\n")
    const serbianCyrillic = collectStrings(getDictionary("sr-Cyrl")).join("\n")
    const bosnian = collectStrings(getDictionary("bs")).join("\n")

    expect(english).toContain("modern local-first PDF editor")
    expect(english).toContain("without uploading documents to a browser tool")
    expect(english).toContain("Currently in beta")

    expect(serbianLatin).toContain(
      "potpisivanje kvalifikovanim elektronskim sertifikatom"
    )
    expect(serbianLatin).toContain("trenutno u beta verziji")

    expect(serbianCyrillic).toContain(
      "потписивање квалификованим електронским сертификатом"
    )
    expect(serbianCyrillic).toContain("тренутно у бета верзији")

    expect(bosnian).toContain(
      "potpisivanje kvalifikovanim elektronskim certifikatom"
    )
    expect(bosnian).toContain("trenutno u beta verziji")
  })
```

- [ ] **Step 2: Run the focused test to verify RED**

Run:

```bash
bun run test -- lib/public-copy.test.ts
```

Expected: FAIL because the current dictionaries do not contain the new exact positioning phrases.

- [ ] **Step 3: Commit the failing test**

Run:

```bash
git add lib/public-copy.test.ts
git commit -m "test: capture locale-native marketing positioning"
```

## Task 2: Update Global Site Positioning

**Files:**
- Modify: `lib/site.ts`

- [ ] **Step 1: Update site description and keywords**

Change `siteConfig.description` to:

```ts
  description:
    "A modern local-first PDF editor for signing, editing, annotating, and validating documents on your desktop.",
```

Extend `siteConfig.keywords` so it includes:

```ts
    "modern PDF editor",
    "local-first PDF editor",
    "qualified electronic certificate PDF signing",
```

Keep existing relevant keywords such as `desktop PDF editor`, `offline PDF editor`, `PDF signing`, `PDF annotation`, `edit PDF text`, and `local PDF editor`.

- [ ] **Step 2: Run the focused copy test**

Run:

```bash
bun run test -- lib/public-copy.test.ts
```

Expected: still FAIL until `lib/i18n.ts` receives the new dictionary copy.

- [ ] **Step 3: Commit global positioning**

Run:

```bash
git add lib/site.ts
git commit -m "feat: update global marketing positioning"
```

## Task 3: Rewrite Localized Marketing Dictionaries

**Files:**
- Modify: `lib/i18n.ts`

- [ ] **Step 1: Update English marketing copy**

Rewrite the English dictionary so the hero and supporting sections include these exact ideas:

```ts
metadata: {
  defaultTitle: `${siteConfig.name} - Modern local-first PDF editor`,
  titleTemplate: `%s - ${siteConfig.name}`,
  description:
    "A modern local-first PDF editor for signing, editing, annotating, and validating documents on your desktop.",
},
home: {
  hero: {
    badge: "Modern local-first PDF editor",
    secondaryBadge: "Currently in beta",
    title: "A modern local-first PDF editor for desktop work.",
    description:
      "FaberPDF helps you sign, edit, annotate, and validate PDFs without uploading documents to a browser tool.",
  },
}
```

Also update English feature, preview, trust, FAQ, download, and feedback copy so beta appears as supporting context and local-first desktop editing remains the main message.

- [ ] **Step 2: Update Serbian Latin marketing copy**

Rewrite the Serbian Latin dictionary so the hero and supporting sections include these exact ideas:

```ts
metadata: {
  defaultTitle: `${siteConfig.name} - PDF editor za elektronsko potpisivanje`,
  titleTemplate: `%s - ${siteConfig.name}`,
  description:
    "PDF editor za potpisivanje kvalifikovanim elektronskim sertifikatom, uređivanje, anotacije i proveru dokumenata.",
},
home: {
  hero: {
    badge: "Potpisivanje kvalifikovanim elektronskim sertifikatom",
    secondaryBadge: "Trenutno u beta verziji",
    title:
      "PDF editor za potpisivanje kvalifikovanim elektronskim sertifikatom.",
    description:
      "FaberPDF pomaže da potpišete, proverite, označite i uredite PDF dokumente na računaru, bez slanja fajlova kroz browser alat.",
  },
}
```

Use natural Serbian Latin phrasing across feature, preview, trust, FAQ, download, and feedback copy.

- [ ] **Step 3: Update Serbian Cyrillic marketing copy**

Rewrite the Serbian Cyrillic dictionary so the hero and supporting sections include these exact ideas:

```ts
metadata: {
  defaultTitle: `${siteConfig.name} - PDF едитор за електронско потписивање`,
  titleTemplate: `%s - ${siteConfig.name}`,
  description:
    "PDF едитор за потписивање квалификованим електронским сертификатом, уређивање, анотације и проверу докумената.",
},
home: {
  hero: {
    badge: "Потписивање квалификованим електронским сертификатом",
    secondaryBadge: "Тренутно у бета верзији",
    title:
      "PDF едитор за потписивање квалификованим електронским сертификатом.",
    description:
      "FaberPDF помаже да потпишете, проверите, означите и уредите PDF документе на рачунару, без слања фајлова кроз browser алат.",
  },
}
```

Use direct Cyrillic copy and keep conventional product names, OS names, and PDF in Latin.

- [ ] **Step 4: Update Bosnian marketing copy**

Rewrite the Bosnian dictionary so the hero and supporting sections include these exact ideas:

```ts
metadata: {
  defaultTitle: `${siteConfig.name} - PDF editor za elektronsko potpisivanje`,
  titleTemplate: `%s - ${siteConfig.name}`,
  description:
    "PDF editor za potpisivanje kvalifikovanim elektronskim certifikatom, uređivanje, anotacije i provjeru dokumenata.",
},
home: {
  hero: {
    badge: "Potpisivanje kvalifikovanim elektronskim certifikatom",
    secondaryBadge: "Trenutno u beta verziji",
    title:
      "PDF editor za potpisivanje kvalifikovanim elektronskim certifikatom.",
    description:
      "FaberPDF pomaže da potpišete, provjerite, označite i uredite PDF dokumente na računaru, bez slanja fajlova kroz browser alat.",
  },
}
```

Use Bosnian forms such as `provjera`, `izmjena`, `vrijedi`, `posjetioci`, and `certifikat`.

- [ ] **Step 5: Run the focused copy test to verify GREEN**

Run:

```bash
bun run test -- lib/public-copy.test.ts
```

Expected: PASS.

- [ ] **Step 6: Run all tests**

Run:

```bash
bun run test
```

Expected: PASS.

- [ ] **Step 7: Commit dictionary rewrite**

Run:

```bash
git add lib/i18n.ts lib/public-copy.test.ts lib/site.ts
git commit -m "feat: rewrite locale-native marketing copy"
```

## Task 4: Full Verification And Browser Review

**Files:**
- No source edits expected unless verification exposes a real issue.

- [ ] **Step 1: Run lint**

Run:

```bash
bun run lint
```

Expected: exit code 0.

- [ ] **Step 2: Run typecheck**

Run:

```bash
bun run typecheck
```

Expected: exit code 0.

- [ ] **Step 3: Run all tests**

Run:

```bash
bun run test
```

Expected: exit code 0.

- [ ] **Step 4: Run production build**

Run:

```bash
bun run build
```

Expected: exit code 0.

- [ ] **Step 5: Start local dev server**

Run:

```bash
bun run dev
```

Expected: Next.js dev server starts on an available localhost port.

- [ ] **Step 6: Browser-check localized pages**

Open these routes in the browser:

```text
/
/sr-Latn
/sr-Cyrl
/bs
/download
/sr-Latn/download
/sr-Cyrl/download
/bs/download
/feedback
/sr-Latn/feedback
/sr-Cyrl/feedback
/bs/feedback
```

Check desktop and mobile widths for non-overlapping hero text, badges, cards, and CTAs. Fix only confirmed layout/copy overflow issues.

- [ ] **Step 7: Commit verification fixes if needed**

If browser review requires edits, run focused verification again and commit:

```bash
git add lib/i18n.ts
git commit -m "fix: polish localized marketing copy rendering"
```
