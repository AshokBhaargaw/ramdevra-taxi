import { MetadataRoute } from "next";
import { BUSINESS_INFO, POPULAR_ROUTES } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.siteUrl;
  const lastMod = new Date("2026-10-28");

  // Core static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: lastMod,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: lastMod,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fleet`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic route pages
  const routePages = POPULAR_ROUTES.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...routePages];
}
