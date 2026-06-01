import type { MetadataRoute } from "next";
import { allContentEntries } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const staticPages = ["", "/about", "/contact", "/services"];
  const contentPages = allContentEntries()
    .filter((entry) => !(entry.category === "products" && entry.slug === "services"))
    .map((entry) => `/${entry.category}/${entry.slug}`);

  return [...staticPages, ...contentPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}

