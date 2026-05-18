import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxContent } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { allContentEntries, findContentByPath } from "@/lib/content";
import { RevealSection } from "@/components/ui/reveal-section";

type ContentPageParams = {
  category: string;
  slug: string;
};

export function generateStaticParams(): ContentPageParams[] {
  return allContentEntries().map((entry) => ({
    category: entry.category,
    slug: entry.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<ContentPageParams> }): Promise<Metadata> {
  const { category, slug } = await params;
  const entry = findContentByPath(category, slug);
  if (!entry) {
    return {};
  }

  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    pathname: `/${entry.category}/${entry.slug}`,
    image: entry.ogImage
  });
}

export default async function ContentPage({ params }: { params: Promise<ContentPageParams> }) {
  const { category, slug } = await params;
  const entry = findContentByPath(category, slug);
  if (!entry) {
    notFound();
  }

  const mdx = await compileMDX({
    source: entry.content,
    options: { parseFrontmatter: false }
  });
  const normalizedTitle = entry.title.trim().toLowerCase();
  const normalizedDescription = entry.description.trim().toLowerCase();
  const showTopDescription = entry.category !== "companies" && normalizedDescription !== normalizedTitle;

  return (
    <RevealSection><article className="space-y-5">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{entry.category}</p>
        <h1 className="text-3xl font-bold">{entry.title}</h1>
        {showTopDescription ? <p className="text-lg text-slate-700">{entry.description}</p> : null}
      </header>
      <MdxContent>{mdx.content}</MdxContent>
    </article></RevealSection>
  );
}

