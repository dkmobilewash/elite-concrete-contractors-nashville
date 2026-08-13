import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "A showcase of Elite Concrete Contractors Of Nashville's featured projects — stamped patios, estate motor courts, polished flooring, and structural work across the Nashville metro area.",
  path: "/portfolio/",
});

const featured = [
  { service: services[11], area: areas[0], label: "Stamped Motor Court" },
  { service: services[10], area: areas[2], label: "Terraced Retaining Wall & Patio" },
  { service: services[6], area: areas[9], label: "Polished Concrete Interior Flooring" },
  { service: services[0], area: areas[4], label: "Estate Driveway Replacement" },
  { service: services[5], area: areas[3], label: "Garden Walkway System" },
  { service: services[9], area: areas[6], label: "Slab Foundation, New Construction" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Portfolio" }]} currentPath="/portfolio/" />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Featured Projects</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            A sample of our craftsmanship across Nashville&apos;s premium properties. Full project photography is in
            production — each slot below is reserved for a specific, completed project.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <div key={i}>
              <PlaceholderImage
                label={p.label}
                alt={`${p.label} — ${p.service.name} project in ${p.area.name}, TN by Elite Concrete Contractors Of Nashville`}
              />
              <h3 className="mt-3 font-heading text-base font-semibold text-[var(--color-navy)]">{p.label}</h3>
              <p className="text-sm text-[var(--color-charcoal)]">
                {p.service.name} &middot; {p.area.name}, TN
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        headline="See What We Could Build for Your Property"
        body="Request a consultation and we'll discuss the kind of finished result you can expect for your specific project."
      />
    </>
  );
}
