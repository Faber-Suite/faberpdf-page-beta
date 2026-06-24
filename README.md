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

Download buttons load the current public release manifest from
`downloads.faberpdf.com`:

```bash
FABERPDF_DOWNLOADS_MANIFEST_URL="https://downloads.faberpdf.com/downloads.json"
```

The manifest is generated and uploaded by the desktop app release workflow. If
the manifest cannot be loaded or does not validate, the site falls back to the
bundled Cloudflare R2 URLs:

```bash
https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe
https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64_en-US.msi
https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage
https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.deb
https://downloads.faberpdf.com/linux/FaberPDF-0.1.0-1.x86_64.rpm
```

macOS installer downloads are temporarily disabled until Apple distribution is
ready. Any macOS entries from the runtime manifest are hidden by the site.

The fallback package environment variables are
`NEXT_PUBLIC_FABERPDF_WINDOWS_URL` and `NEXT_PUBLIC_FABERPDF_LINUX_URL`.
Additional optional overrides cover the MSI, DEB, and RPM packages. See
`.env.example` for the full list.

## Checks

```bash
bun run lint
bun run typecheck
bun run test
bun run build
```
