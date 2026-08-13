import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import ComboPageTemplate from "@/components/ComboPageTemplate";
import { getComboContent } from "@/lib/combo-content";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const params: { slug: string; area: string }[] = [];
  for (const s of services) {
    for (const a of areas) {
      params.push({ slug: s.slug, area: a.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const area = areas.find((a) => a.slug === areaSlug);
  if (!service || !area) return {};

  const content = getComboContent(service, area);
  return pageMetadata({
    title: `${service.name} in ${area.name}, TN`,
    description: content.metaDescription,
    path: `/${service.slug}/${area.slug}/`,
  });
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const area = areas.find((a) => a.slug === areaSlug);

  if (!service || !area) notFound();

  const content = getComboContent(service, area);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service, area)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services/" },
              { name: service.name, url: `/${service.slug}/` },
              { name: area.name, url: `/${service.slug}/${area.slug}/` },
            ])
          ),
        }}
      />
      <ComboPageTemplate service={service} area={area} />
    </>
  );
}
