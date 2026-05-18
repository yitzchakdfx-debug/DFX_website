import type { MetadataRoute } from "next";
import { allContentEntries } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const staticPages = ["", "/about", "/contact"];
  const contentPages = allContentEntries().map((entry) => `/${entry.category}/${entry.slug}`);

  return [...staticPages, ...contentPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
