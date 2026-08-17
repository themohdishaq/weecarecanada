import type { Metadata, Viewport } from "next";
import {
  Newsreader,
  Karla,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";
import "leaflet/dist/leaflet.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "WeeCare Canada | Personalized Home Care Services",
    template: "%s | WeeCare Canada",
  },

  description:
    "Compassionate, personalized home care for seniors and individuals with disabilities across Ontario. Book a consultation today.",

  keywords: [
    "WeeCare Canada",
    "Home Care Ontario",
    "Senior Care Kitchener",
    "Respite Care",
    "Companionship Support",
    "Dementia Care",
    "Personal Support Services",
    "Fall Prevention",
  ],

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    shortcut: "/favicon/favicon.ico",

    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",

  openGraph: {
    title: "WeeCare Canada | Personalized Home Care Services",
    description:
      "Compassionate, personalized home care for seniors and individuals with disabilities across Ontario.",
    url: "/",
    type: "website",
    locale: "en_CA",
    siteName: "WeeCare Canada",
    images: [
      {
        url: "/weecare-logo.svg",
        width: 667,
        height: 253,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WeeCare Canada | Personalized Home Care Services",
    description:
      "Compassionate, personalized home care for seniors and individuals with disabilities across Ontario.",
    images: ["/weecare-logo.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8C52A1",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeHealthCareService",
  name: SITE_NAME,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/weecare-logo.svg`,
  image: `${SITE_URL}/weecare-logo.svg`,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  areaServed: {
    "@type": "State",
    name: "Ontario",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${karla.variable} ${jetbrains.variable}`}
    >
      <body className="font-body antialiased min-h-screen flex flex-col bg-white text-gray-900">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}