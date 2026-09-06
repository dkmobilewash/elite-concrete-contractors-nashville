import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "about",
    "contact",
    "portfolio",
    "reviews",
    "blog",
    "services",
    "service-areas",
    "privacy-policy",
    "terms",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}/${route ? `${route}/` : ""}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  for (const service of services) {
    entries.push({
      url: `${siteConfig.url}/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const area of areas) {
    entries.push({
      url: `${siteConfig.url}/${area.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${siteConfig.url}/blog/${post.slug}/`,
      lastModified: new Date(post.updatedDate || post.publishedDate),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const service of services) {
    for (const area of areas) {
      entries.push({
        url: `${siteConfig.url}/${service.slug}/${area.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
