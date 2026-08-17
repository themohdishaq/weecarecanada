# WeeCare Canada — Home Care Services Website

Marketing site and online booking system for WeeCare Canada, a home care
agency serving Kitchener and the wider Ontario region. Built with Next.js 14
(App Router) and TypeScript.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Google Fonts: Karla (body), JetBrains Mono (labels); Georgia is used for display text
- Nodemailer (SMTP) for contact and booking emails
- No external UI libraries — everything is hand-built and easy to edit

## Setup

```bash
npm install
cp .env.local.example .env.local   # then fill in real SMTP credentials
npm run dev
```

Then open http://localhost:3000

## Environment variables

See `.env.local.example` for the full list. At minimum, production needs:

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_EMAIL`, `SMTP_PASS` | Outbound email for booking/contact notifications |
| `SMTP_FROM` | From-address used on outgoing mail |
| `CEO_EMAIL` | Recipient for new booking/contact notifications |
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin, used by metadata, `sitemap.xml`, and `robots.txt` |

`.env.local` is git-ignored and must never be committed. See
`BOOKING_SYSTEM.md` for full details on the booking/email pipeline.

## Site structure

- `app/layout.tsx` — global metadata, JSON-LD business schema, fonts
- `app/robots.ts`, `app/sitemap.ts` — generated `robots.txt` / `sitemap.xml`
- `app/api/contact`, `app/api/bookings/submit` — form submission APIs
  (rate-limited, origin-checked, HTML-escaped — see `BOOKING_SYSTEM.md`)
- `lib/site.ts` — single source of truth for the production domain and
  business NAP (name/address/phone) used across metadata, sitemap, and
  structured data
- `components/*` — page sections (Header, Hero, Pillars, Services, Contact,
  Footer, etc.)

## Production checklist

- [ ] Set real SMTP credentials and `CEO_EMAIL` in the hosting provider's
      environment variables (never commit them)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live production origin
- [ ] Run `npm run build` and confirm it completes without errors
- [ ] Verify `/robots.txt` and `/sitemap.xml` resolve on the live domain and
      submit the sitemap in Google Search Console
- [ ] Consider `npm i sharp` for optimized production image serving
      (Next.js falls back to a slower default otherwise)
- [ ] Replace the placeholder social links in `components/Footer.tsx` (`#`)
      with real Facebook/Instagram/LinkedIn URLs, or remove them
