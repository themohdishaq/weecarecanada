import type { Metadata } from "next";
import { Newsreader, Karla, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  openGraph: {
    title: "WeeCare Canada | Personalized Home Care Services",
    description:
      "Compassionate, personalized home care for seniors and individuals with disabilities across Ontario.",
    type: "website",
    locale: "en_CA",
    siteName: "WeeCare Canada",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
