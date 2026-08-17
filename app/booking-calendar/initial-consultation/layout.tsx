import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule an Initial Consultation",
  description: "Pick a date, time, and preferred staff member for your initial consultation.",
  alternates: {
    canonical: "/booking-calendar/initial-consultation",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function InitialConsultationCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
