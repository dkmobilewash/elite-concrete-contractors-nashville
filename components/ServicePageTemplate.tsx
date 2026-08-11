import Link from "next/link";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps from "./ProcessSteps";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import AreaGrid from "./AreaGrid";
import PlaceholderImage from "./PlaceholderImage";
import { Service } from "@/lib/types";
import { areas } from "@/data/areas";
import { services } from "@/data/services";

export default function ServicePageTemplate({ service }: { service: Service }) {
  const related = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services/" }, { name: service.name }]} />
      <Hero eyebrow="Concrete Services" headline={service.heroHeadline} subheadline={service.heroSubheadline} showTrustStrip={false} />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)]">Overview</h2>
            {service.overview.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)] leading-relaxed">{p}</p>
            ))}
          </div>
          <div>
            <PlaceholderImage
              label={`${service.name} project example`}
              alt={`${service.name} project by Elite Concrete Contractors Of Nashville`}
              aspect="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <ProcessSteps heading={`Our ${service.shortName} Process`} steps={service.process} />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-5">
              Signs You Need {service.shortName}
            </h2>
            <ul className="space-y-3">
              {service.problems.map((p, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-charcoal)] leading-relaxed">
                  <span className="text-[var(--color-navy)] font-bold shrink-0">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-5">
              Materials &amp; Techniques
            </h2>
            <div className="space-y-4">
              {service.materials.map((m) => (
                <div key={m.name} className="border-l-2 border-[var(--color-navy)]/20 pl-4">
                  <h3 className="font-heading text-base font-semibold text-[var(--color-navy)]">{m.name}</h3>
                  <p className="text-sm text-[var(--color-charcoal)] mt-1">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
            Why Elite Concrete Contractors for {service.shortName}
          </h2>
          <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">
            {service.shortName} projects only look effortless when the sub-base, reinforcement, and finish work are
            executed with real precision. We bring a design consultation, a detailed written proposal, and a final
            walkthrough to every {service.name.toLowerCase()} project — the same process whether it&apos;s a single
            walkway repair or a full estate installation.
          </p>
        </div>
      </section>

      <AreaGrid
        areas={areas}
        serviceSlug={service.slug}
        heading={`${service.name} Across the Nashville Metro`}
        subheading={`Explore how we approach ${service.name.toLowerCase()} in each of the neighborhoods we serve.`}
      />

      <FAQAccordion faqs={service.faqs} heading={`${service.name} FAQ`} />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}/`}
                className="rounded-sm border border-[var(--color-hairline)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)]"
              >
                {r.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={`Request a Consultation for ${service.name}`}
        body={`Tell us about your ${service.name.toLowerCase()} project and we'll schedule a design consultation and put together a detailed proposal.`}
      />
    </>
  );
}
