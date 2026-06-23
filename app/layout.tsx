import type { Metadata } from "next";
import { Newsreader, Karla, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

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
  title: "WeeCare Canada | Pediatric Home Health Care Services",
  description:
    "Compassionate pediatric home health care across Ontario. WeeCare provides nursing services, personal support, respite care, behavioural support, and school nursing tailored to your child's unique needs.",
  keywords: [
    "WeeCare Canada",
    "Pediatric Home Care",
    "Pediatric Nursing",
    "Home Health Care Ontario",
    "Respite Care",
    "Behavioural Support",
    "School Nursing",
    "Personal Support Services",
  ],
  openGraph: {
    title: "WeeCare Canada | Pediatric Home Health Care Services",
    description:
      "Personalized pediatric home care and nursing services for families across Ontario.",
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

        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}