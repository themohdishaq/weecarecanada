/**
 * Central site configuration — single source of truth for the production
 * domain and business details used across metadata, sitemap, robots, and
 * structured data (JSON-LD).
 */

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : "https://weecarecanada.com");

// Normalize: no trailing slash.
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_NAME = "WeeCare Canada";

export const BUSINESS = {
  legalName: "Wee Care Canada Inc.",
  telephone: "+1-647-561-5549",
  email: "CEO@weecarecanada.com",
  streetAddress: "203 Max Becker Drive",
  addressLocality: "Kitchener",
  addressRegion: "ON",
  postalCode: "N2E 4G2",
  addressCountry: "CA",
  latitude: 43.40390823306172,
  longitude: -80.50967597145795,
} as const;
