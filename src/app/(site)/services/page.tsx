import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxContent } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { findContentByPath } from "@/lib/content";
import { RevealSection } from "@/components/ui/reveal-section";

const servicesEntry = findContentByPath("products", "services");

export const metadata: Metadata = servicesEntry
  ? buildPageMetadata({
      title: servicesEntry.title,
      description: servicesEntry.description,
      pathname: "/services",
      image: servicesEntry.ogImage
    })
  : {};

export default async function ServicesPage() {
  const entry = findContentByPath("products", "services");
  if (!entry) {
    notFound();
  }

  const mdx = await compileMDX({
    source: entry.content,
    options: { parseFrontmatter: false }
  });

  return (
    <RevealSection>
      <article className="space-y-5">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">services</p>
          <h1 className="text-3xl font-bold">{entry.title}</h1>
          <p className="text-lg text-slate-700">{entry.description}</p>
        </header>
        <MdxContent>{mdx.content}</MdxContent>
      </article>
    </RevealSection>
  );
}
