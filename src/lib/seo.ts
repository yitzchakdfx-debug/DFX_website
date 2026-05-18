import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
};

export function buildPageMetadata({ title, description, pathname, image }: BuildPageMetadataInput): Metadata {
  const ogImage = image ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url: `${siteConfig.baseUrl}${pathname}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}