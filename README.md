# Elite Concrete Contractors Of Nashville

Production-ready, local-SEO-optimized marketing site for Elite Concrete Contractors Of Nashville, built as a
data-driven Next.js (App Router) site: 196 statically generated pages covering 13 services, 13 service areas, and
the full 13×13 service×area matrix.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build, generates all 196+ static routes
npm run start   # serve the production build
npm run lint
```

## Architecture

- **Content model**: `data/services.ts` (13 services) and `data/areas.ts` (13 areas) hold hand-authored, unique
  copy per Section 7 of the build spec. `lib/combo-content.ts` assembles the 169 service×area pages as a genuine
  *intersection* of service and area data (not concatenation) — unique opening paragraphs, a "why this matters
  here" section grounded in that area's real soil/climate/housing-stock facts, a jurisdiction-specific permitting
  note, a combo-specific FAQ set, and varied CTA copy — using several rotated sentence templates so the ~169
  generated pages don't read as an obvious mail-merge.
- **Routes**: `app/[slug]/page.tsx` renders either a service or an area page depending on which slug matches;
  `app/[slug]/[area]/page.tsx` renders the combination pages. Both use `generateStaticParams` so all pages are
  pre-rendered at build time.
- **SEO**: `lib/schema.ts` provides LocalBusiness/GeneralContractor, Service, FAQPage, and BreadcrumbList JSON-LD.
  `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt` covering all 196 pages. Every page sets
  a self-referencing canonical via `alternates.canonical`.
- **Forms**: `/contact/` posts to `app/api/consultation/route.ts`, which validates input and emails a formatted
  lead notification via [Resend](https://resend.com). **Set `RESEND_API_KEY` in Vercel → Settings → Environment
  Variables before launch** — without it, submissions are only logged server-side, not delivered anywhere.
  Optional env vars: `LEAD_NOTIFICATION_EMAIL` (destination address, defaults to `dc2978757@gmail.com`) and
  `RESEND_FROM_EMAIL` (defaults to Resend's shared `onboarding@resend.dev` sender, which can only deliver to the
  email address the Resend account itself was created with — verify a custom domain in Resend and point this at
  e.g. `leads@eliteconcretecontractorsnashville.com` once ready to send to other inboxes). `CONSULTATION_WEBHOOK_URL`
  is still supported as an optional secondary integration (e.g. a CRM) and runs alongside the email, not instead
  of it.
- **Technical SEO hardening**: `next.config.ts` redirects the apex domain to `www` (301/308) and sets security
  headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy) sitewide.
  `lib/seo.ts` (`pageMetadata()`) is the single helper every page's metadata export goes through, so canonical,
  Open Graph (title/description/url/type/site_name/image), and Twitter Card tags stay consistent automatically.
  `components/PageBreadcrumbs.tsx` pairs the visible breadcrumb nav with its `BreadcrumbList` JSON-LD so the two
  can't drift apart. Favicons (`favicon.ico`, 16×16/32×32 PNGs, apple-touch-icon, manifest icons) are static files
  in `public/`, generated from the same navy "E" mark as the wordmark. `app/not-found.tsx` is a branded 404 page.
- **Map**: `components/MapEmbed.tsx` renders the Google Business Profile map (via `siteConfig.mapEmbedUrl`) on
  `/contact/`, in a responsive aspect-ratio container so it never overflows on mobile.

### Activating real review data

`lib/site-config.ts` exports `realReviewData`, set to `null` on purpose — `organizationSchema()` in `lib/schema.ts`
only emits schema.org `aggregateRating` when this is non-null, since fabricating review markup risks a Search
Console manual action. Once you have real Google numbers, set:

```ts
export const realReviewData = { ratingValue: 4.9, reviewCount: 187 };
```

and the homepage `LocalBusiness` schema will start including the rating automatically — no other code changes
needed. The same real numbers should also replace `NOTE_PLACEHOLDER_STATS.reviewRating` / `reviewCount` (used in
the visible Reviews page copy, not schema) once available.

## Open items to confirm with the client (see build spec Section 12)

These were explicitly flagged in the build spec as requiring client confirmation rather than assumption:

1. ~~**Shared address**~~ — Resolved. The business address is now `402 Bna Dr, Nashville, TN 37217`, matching the
   real Google Business Profile (the map embed on `/contact/` points at the verified GBP pin), so this no longer
   overlaps with the address originally flagged for a separate, unrelated build spec.
2. **No logo file was actually attached to this build session** despite the spec describing one. The header/footer
   currently use an SVG wordmark (`components/Logo.tsx`) recreated from the spec's written description (navy
   "ELITE" italic, charcoal "CONCRETE", navy "CONTRACTORS" with hairline rules, charcoal "OF NASHVILLE"). Swap in
   the real logo file when available.
3. **Placeholder stats**: review rating/count (`lib/site-config.ts` → `NOTE_PLACEHOLDER_STATS`), years in business,
   and license/insurance numbers are placeholders and clearly labeled as such in the Reviews and About pages — they
   are not fabricated attributions to real people. Replace with real figures before launch.
4. **All project photography is placeholder** (`components/PlaceholderImage.tsx`) with descriptive, page-specific
   alt text ready for real photos to drop in.
5. **Financing**: a single, soft mention of "flexible financing available" is included on the homepage FAQ.
   Confirm whether this is accurate and how prominently it should appear.
6. **Business hours** in `lib/site-config.ts` are a reasonable default (Mon–Fri 7–6, Sat 8–2) — confirm actual hours.
7. **"Concrete Road Construction"** was reframed per the spec's own guidance as private/estate road and HOA
   community access-road construction, not public highway contracting — confirm this framing matches real scope.
8. **Permitting authority names** in `data/areas.ts` reflect standard, publicly known jurisdiction structures
   (Metro Nashville Codes, City of Franklin Building & Neighborhood Services, City of Brentwood, etc.) but should be
   re-verified against current department names/URLs before publishing, per the spec's instruction not to
   fabricate permit fee figures or department names — none are stated here, only general process descriptions.
9. ~~**Geo-coordinates**~~ — Resolved. `lib/site-config.ts`'s `geo.latitude`/`geo.longitude` are now the exact
   coordinates from the real Google Business Profile map embed (not an approximation), also used as
   `mapEmbedUrl` for the live map on `/contact/`.
10. **Area drive-time framing was re-estimated, not re-routed**: moving the address from Midtown to near Nashville
    International Airport (402 Bna Dr) meaningfully changes real driving relationships to every service area —
    west-side areas (Belle Meade, Forest Hills, Franklin) got noticeably farther, east/southeast areas (East
    Nashville, Murfreesboro, Smyrna, Lebanon) got noticeably closer. Every area's `distanceFraming` and
    `driveTimeMinutes` in `data/areas.ts` was rewritten to reflect the new location's real position relative to
    Nashville's interstate network (I-40, I-24, I-440, I-65), but — same as the original build — these are
    reasoned estimates, not pulled from a live routing API. Worth a real drive-time check (Google Maps) per area
    before treating the specific minute ranges as guaranteed.

## Content depth note

Per Section 8 of the build spec, the 169 service×area pages use a disciplined hybrid approach: fully unique,
hand-authored data per service (13) and per area (13) — including area-specific neighborhood character, soil/
climate notes, and permitting notes, and service-specific overviews, problems, and materials — assembled through a
template that produces genuine per-page intersection content (unique landmarks, problems, materials, and FAQs
selected per combination, with rotated paragraph structures). This satisfies the spec's own allowance to build a
system supporting full depth rather than hand-writing 169 fully bespoke long-form pages in one pass. A further
editorial pass hand-tuning individual combination pages (especially the 7 premium-weighted areas called out in
Section 5.3) would further strengthen uniqueness and is a reasonable next step, not a blocker to launch.
