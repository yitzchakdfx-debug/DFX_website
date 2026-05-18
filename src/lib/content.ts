import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentEntry = {
  title: string;
  description: string;
  category: string;
  slug: string;
  published?: boolean;
  ogImage?: string;
  order?: number;
};

export type ContentDocument = ContentEntry & {
  content: string;
};

const contentRoot = path.join(process.cwd(), "src/content");

function getAllMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllMdxFiles(fullPath);
    }
    return fullPath.endsWith(".mdx") ? [fullPath] : [];
  });
}

function readMdxFile(filePath: string): ContentDocument {
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return { ...(data as ContentEntry), content };
}

export function allContentEntries(): ContentEntry[] {
  return getAllMdxFiles(contentRoot)
    .map(readMdxFile)
    .filter((entry) => entry.published !== false)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function findContentByPath(category: string, slug: string): ContentDocument | undefined {
  return getAllMdxFiles(contentRoot)
    .map(readMdxFile)
    .find((entry) => entry.category === category && entry.slug === slug && entry.published !== false);
}
