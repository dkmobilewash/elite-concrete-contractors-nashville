import { siteConfig, realReviewData } from "./site-config";
import { areas } from "@/data/areas";
import { Service } from "./types";
import { Area } from "./types";
import { FAQ } from "./types";
import { BlogPost } from "./types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    image: `${siteConfig.url}/opengraph-image`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((h) => !("closed" in h) || !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "open" in h ? h.open : undefined,
        closes: "close" in h ? h.close : undefined,
      })),
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.name}, TN`,
    })),
    // Only emitted once real review data is set in lib/site-config.ts —
    // never fabricated. See realReviewData for how to activate this.
    ...(realReviewData
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: realReviewData.ratingValue,
            reviewCount: realReviewData.reviewCount,
          },
        }
      : {}),
  };
}

export function serviceSchema(service: Service, area?: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: area
      ? { "@type": "City", name: `${area.name}, TN` }
      : areas.map((a) => ({ "@type": "City", name: `${a.name}, TN` })),
    description: service.shortDescription,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: `${siteConfig.url}/opengraph-image`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
