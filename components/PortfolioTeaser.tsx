import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

const projects = [
  { label: "Stamped Concrete Motor Court", area: "Belle Meade" },
  { label: "Outdoor Living Patio & Retaining Wall", area: "Franklin" },
  { label: "Polished Concrete Flooring", area: "The Gulch" },
  { label: "Estate Pool Deck & Coping", area: "Brentwood" },
];

export default function PortfolioTeaser() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
              Featured Projects
            </h2>
            <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">
              A sample of the craftsmanship-first work we deliver across Nashville&apos;s premium properties.
            </p>
          </div>
          <Link
            href="/portfolio/"
            className="shrink-0 text-sm font-semibold text-[var(--color-navy)] underline underline-offset-4"
          >
            View Full Portfolio →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.label}>
              <PlaceholderImage label={p.label} alt={`${p.label} project in ${p.area}, TN by Elite Concrete Contractors Of Nashville`} />
              <p className="mt-3 text-sm font-semibold text-[var(--color-navy)]">{p.label}</p>
              <p className="text-xs text-[var(--color-charcoal)]">{p.area}, TN</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
