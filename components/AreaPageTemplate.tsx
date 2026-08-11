import Link from "next/link";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import ServiceGrid from "./ServiceGrid";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import PlaceholderImage from "./PlaceholderImage";
import { Area } from "@/lib/types";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export default function AreaPageTemplate({ area }: { area: Area }) {
  const nearby = area.nearbyAreas
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter(Boolean) as Area[];

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas/" }, { name: area.name }]} />
      <Hero
        eyebrow={`Serving ${area.name}, TN`}
        headline={`Premium Concrete Contractor Serving ${area.name}, TN`}
        subheadline={`Precision concrete craftsmanship for ${area.name}'s homes and properties — engineered for ${area.county}'s soil and climate, finished to match the neighborhood's standard.`}
        showTrustStrip={false}
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)]">About Serving {area.name}</h2>
            {area.neighborhoodCharacter.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)] leading-relaxed">{p}</p>
            ))}
            <div className="rounded-sm bg-[var(--color-off-white)] border border-[var(--color-hairline)] p-5 mt-6">
              <p className="text-sm text-[var(--color-charcoal)]">
                <span className="font-semibold text-[var(--color-navy)]">Soil &amp; Climate: </span>
                {area.soilAndClimateNotes}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <PlaceholderImage
              label={`${area.name} project example`}
              alt={`Concrete project in ${area.name}, TN by Elite Concrete Contractors Of Nashville`}
              aspect="aspect-[3/4]"
            />
            <div className="rounded-sm border border-[var(--color-hairline)] p-5">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                From Our Shop
              </h3>
              <p className="mt-2 text-sm text-[var(--color-charcoal)]">{area.distanceFraming}</p>
              <p className="mt-1 text-xs text-[var(--color-charcoal)]/70">Typical drive time: {area.driveTimeMinutes}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
            Why {area.name} Chooses Elite Concrete Contractors
          </h2>
          <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">
            {area.name} properties call for a contractor who understands the neighborhood&apos;s character as well as
            the technical demands of {area.county}&apos;s soil and terrain. We bring the same design consultation,
            engineered preparation, and finish standard to every {area.name} project, whether it&apos;s a single
            repair or a full estate-scale installation.
          </p>
        </div>
      </section>

      <ServiceGrid
        services={services}
        areaSlug={area.slug}
        heading={`Services Available in ${area.name}`}
        subheading={`Explore each of our thirteen concrete specialties as they apply to ${area.name} properties.`}
      />

      <section className="section-y">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-4">
            Permitting &amp; Jurisdiction Notes for {area.name}
          </h2>
          <p className="text-[var(--color-charcoal)] leading-relaxed">{area.permitAuthorityNote}</p>
          <p className="mt-3 text-xs text-[var(--color-charcoal)]/70">
            Jurisdiction: {area.jurisdictionLabel} · Permitting authority: {area.permitAuthority}. Requirements can
            change — we confirm current requirements for your specific address before scheduling work.
          </p>
        </div>
      </section>

      <FAQAccordion faqs={area.localFaqs} heading={`${area.name} FAQ`} />

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)] mb-6">Nearby Areas We Serve</h2>
          <div className="flex flex-wrap gap-4">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/${n.slug}/`}
                className="rounded-sm border border-[var(--color-hairline)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)]"
              >
                {n.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={`Request a Consultation for Your ${area.name} Property`}
        body={`Tell us about your ${area.name} project and we'll schedule a design consultation and put together a detailed proposal.`}
      />
    </>
  );
}
