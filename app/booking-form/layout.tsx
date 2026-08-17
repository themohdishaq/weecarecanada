import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Details",
  description: "Enter your details to complete your WeeCare Canada booking.",
  alternates: {
    canonical: "/booking-form",
  },
  // Transactional step with no standalone content value — keep it out of
  // search results while still allowing link equity to flow through.
  robots: {
    index: false,
    follow: true,
  },
};

export default function BookingFormLayout({ children }: { children: React.ReactNode }) {
  return children;
}
