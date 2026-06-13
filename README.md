# FaberPDF beta website

Next.js 16 marketing site for the free FaberPDF desktop preview.

The preview site focuses on explaining the desktop app, hosting platform
download links, and collecting anonymous feedback through Formspree. Convex,
Paddle, and license delivery stay out of this project until the commercial site
comes back.

## Development

```bash
bun install
bun run dev
```

## Environment

Feedback is proxied through `app/api/feedback/route.ts` so the frontend can post
to `/api/feedback`. Copy `.env.example` to `.env.local` and fill in the values
needed for your environment.

```bash
FORMSPREE_FORM_ID="your-form-id"
```

Download buttons are enabled per platform when their public URLs are present:

```bash
NEXT_PUBLIC_FABERPDF_WINDOWS_URL="https://example.com/FaberPDF-Setup.exe"
NEXT_PUBLIC_FABERPDF_MACOS_URL="https://example.com/FaberPDF.dmg"
NEXT_PUBLIC_FABERPDF_LINUX_URL="https://example.com/FaberPDF.AppImage"
```

Missing download URLs render as honest pending states instead of dead links.

## Checks

```bash
bun run lint
bun run typecheck
bun run test
bun run build
```
