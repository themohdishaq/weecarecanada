import type { MetadataRoute } from "next";
import ServiceList from "@/components/services/Service";
import { SITE_URL } from "@/lib/site";

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/booking`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = ServiceList.map((service) => ({
    url: `${SITE_URL}/services/${slugify(service.heading)}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // The noindex booking-form and calendar steps do not belong in a sitemap.
  return [...staticRoutes, ...serviceRoutes];
}
