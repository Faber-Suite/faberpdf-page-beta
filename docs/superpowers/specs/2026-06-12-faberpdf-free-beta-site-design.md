# FaberPDF Free Beta Site Design

## Goal

Build `faberpdf-page-beta` as the main marketing and download website for the free FaberPDF beta. The site should not include account creation, Paddle checkout, Convex, licensing, or paid-access flows.

## Audience

People evaluating a desktop PDF editor beta who need a trustworthy place to understand the product, download the app for their operating system, and send anonymous feedback.

## Experience

The site presents FaberPDF as a local desktop PDF editor for signing documents, annotating PDFs, validating documents, and making focused text edits offline. It leads with the free beta offer, shows the actual app screenshots when available, and explains that feedback is anonymous and does not require an account.

## Architecture

Use the existing Next.js App Router project with shadcn `base-nova`, Tailwind v4, and mostly Server Components. Keep interactivity limited to a feedback form client component and a small route handler that forwards feedback to Formspree.

## Pages And Sections

- Home page with hero, feature pillars, product preview, download cards, beta expectations, feedback CTA, FAQ, and footer.
- Downloads are shown inline on the home page for Windows, macOS, and Linux. Empty or missing installer URLs render as disabled "coming soon" states instead of fake links.
- Feedback is collected anonymously through a shadcn form. The form supports category, platform, optional app version, message, optional reply email, and a honeypot field.

## Feedback Backend

The client posts to `/api/feedback`. The route validates the payload, rejects honeypot submissions, and forwards valid feedback to a Formspree endpoint derived from `FORMSPREE_FORM_ID`. If the form ID is not configured, the route returns a clear configuration error without crashing the page.

## Visual Direction

Use a refined desktop-product aesthetic: quiet, sharp, and credible, with a strong document-work motif. Avoid a paid SaaS funnel feeling. The site should make "free beta, local desktop app, anonymous feedback" immediately clear.

## Testing And Verification

Add focused tests for feedback validation and Formspree forwarding behavior. Run lint, typecheck, tests, build, and browser verification across desktop and mobile viewports before calling the implementation complete.
