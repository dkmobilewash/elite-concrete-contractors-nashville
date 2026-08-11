import Link from "next/link";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps from "./ProcessSteps";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import PlaceholderImage from "./PlaceholderImage";
import { Service, Area } from "@/lib/types";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { getComboContent } from "@/lib/combo-content";

export default function ComboPageTemplate({ service, area }: { service: Service; area: Area }) {
  const content = getComboContent(service, area);

  const otherServicesInArea = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceInNearbyAreas = area.nearbyAreas
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter(Boolean) as Area[];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: service.name, href: `/${service.slug}/` },
          { name: area.name },
        ]}
      />
      <Hero
        eyebrow={`${service.name} · ${area.name}, TN`}
        headline={content.heroHeadline}
        subheadline={content.heroSubheadline}
        showTrustStrip={false}
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)]">{content.whyMattersHeading}</h2>
            {content.whyMattersParagraphs.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)] leading-relaxed">{p}</p>
            ))}
          </div>
          <div>
            <PlaceholderImage
              label={`${service.name} in ${area.name}`}
              alt={`${service.name} project in ${area.name}, TN by Elite Concrete Contractors Of Nashville`}
              aspect="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <ProcessSteps
        heading={`Our ${service.shortName} Process in ${area.name}`}
        steps={service.process}
      />

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-4">
            Permitting in {area.name} for {service.name}
          </h2>
          <p className="text-[var(--color-charcoal)] leading-relaxed">{content.jurisdictionNote}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
            Why Elite Concrete Contractors Of Nashville
          </h2>
          <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">{content.whyEliteParagraph}</p>
        </div>
      </section>

      <FAQAccordion faqs={content.faqs} heading={`${service.name} in ${area.name} — FAQ`} />

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)] mb-4">
              Other Services in {area.name}
            </h3>
            <div className="flex flex-col gap-3">
              {otherServicesInArea.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${area.slug}/`}
                  className="text-sm font-medium text-[var(--color-navy)] hover:underline"
                >
                  {s.name} in {area.name} →
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)] mb-4">
              {service.shortName} in Nearby Areas
            </h3>
            <div className="flex flex-col gap-3">
              {serviceInNearbyAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${service.slug}/${a.slug}/`}
                  className="text-sm font-medium text-[var(--color-navy)] hover:underline"
                >
                  {service.name} in {a.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap gap-4">
          <Link
            href={`/${service.slug}/`}
            className="rounded-sm border border-[var(--color-hairline)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)]"
          >
            ← All {service.name}
          </Link>
          <Link
            href={`/${area.slug}/`}
            className="rounded-sm border border-[var(--color-hairline)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)]"
          >
            ← All Services in {area.name}
          </Link>
        </div>
      </section>

      <CTASection headline={content.ctaHeadline} body={content.ctaBody} />
    </>
  );
}
