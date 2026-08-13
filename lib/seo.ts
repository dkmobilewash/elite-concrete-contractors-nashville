import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * Single source of truth for per-page <head> metadata. Every page.tsx should
 * build its `metadata` export through this helper so canonical, Open Graph,
 * and Twitter Card tags stay consistent without being hand-duplicated per file.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
