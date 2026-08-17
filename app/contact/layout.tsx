import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WeeCare Canada. Call, email, or visit our Kitchener, Ontario office to discuss your home care needs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact WeeCare Canada",
    description:
      "Get in touch with WeeCare Canada. Call, email, or visit our Kitchener, Ontario office to discuss your home care needs.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
