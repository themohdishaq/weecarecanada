import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Home Visit",
  description: "Pick a date, time, and preferred staff member for your home visit.",
  alternates: {
    canonical: "/booking-calendar/home-visit",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function HomeVisitCalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
