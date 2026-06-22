# Larkspur Home Care — Website Template

An original Next.js (App Router) template for a home-care / senior-support
agency, in the same general structural style as common home-care sites
(hero → trust pillars → daily-rhythm timeline → services grid → testimonial
→ contact → footer) — built with original copy, an original brand name, and
an abstract SVG hero graphic instead of stock photography.

**This is a template.** Swap in your real business name, address, phone,
email, services, and testimonials before publishing.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What to customize

- `app/layout.tsx` — page title / meta description, business name
- `components/Header.tsx` — logo/wordmark, nav links
- `components/Hero.tsx` — headline, subhead, stats
- `components/Pillars.tsx` — your three core value props
- `components/DayInLife.tsx` — sample visit timeline
- `components/Services.tsx` — your actual service list
- `components/Testimonial.tsx` — a real client quote (with permission)
- `components/Contact.tsx` — real address/phone/email; wire the form up to
  an email service (e.g. Resend, Formspree) or your own API route — it
  currently only simulates a submission client-side
- `components/Footer.tsx` — nav, newsletter, copyright

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Google Fonts: Newsreader (display), Karla (body), JetBrains Mono (labels)
- No external UI libraries — everything is hand-built and easy to edit
