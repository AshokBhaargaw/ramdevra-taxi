import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/data/siteData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS_INFO.siteUrl}/sitemap.xml`,
  };
}
