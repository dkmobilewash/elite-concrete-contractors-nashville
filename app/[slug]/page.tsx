import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...areas.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service) {
    return pageMetadata({
      title: service.name,
      description: `${service.shortDescription} Serving the Nashville metro area with precision craftsmanship. Call (615) 392-4035.`,
      path: `/${service.slug}/`,
    });
  }
  const area = areas.find((a) => a.slug === slug);
  if (area) {
    return pageMetadata({
      title: `Concrete Contractor in ${area.name}, TN`,
      description: `Elite Concrete Contractors Of Nashville serves ${area.name}, TN with precision driveways, stamped concrete, retaining walls, and more. Request a consultation today.`,
      path: `/${area.slug}/`,
    });
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (service) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Services", url: "/services/" },
                { name: service.name, url: `/${service.slug}/` },
              ])
            ),
          }}
        />
        <ServicePageTemplate service={service} />
      </>
    );
  }

  const area = areas.find((a) => a.slug === slug);
  if (area) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(area.localFaqs)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Service Areas", url: "/service-areas/" },
                { name: area.name, url: `/${area.slug}/` },
              ])
            ),
          }}
        />
        <AreaPageTemplate area={area} />
      </>
    );
  }

  notFound();
}
