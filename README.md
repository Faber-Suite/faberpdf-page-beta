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

Download buttons default to the public Cloudflare R2 URLs on
`downloads.faberpdf.com`:

```bash
https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe
https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64_en-US.msi
https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_aarch64.dmg
https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_x64.dmg
https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz
https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage
https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.deb
https://downloads.faberpdf.com/linux/FaberPDF-0.1.0-1.x86_64.rpm
```

The primary package environment variables are
`NEXT_PUBLIC_FABERPDF_WINDOWS_URL`, `NEXT_PUBLIC_FABERPDF_MACOS_URL`, and
`NEXT_PUBLIC_FABERPDF_LINUX_URL`. Additional optional overrides cover the MSI,
macOS Apple Silicon DMG, macOS Intel DMG, DEB, and RPM packages. See
`.env.example` for the full list.

## Checks

```bash
bun run lint
bun run typecheck
bun run test
bun run build
```
