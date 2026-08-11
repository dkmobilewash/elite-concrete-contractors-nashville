import Link from "next/link";
import { Service } from "@/lib/types";

export default function ServiceGrid({
  services,
  areaSlug,
  heading = "Our Services",
  subheading,
}: {
  services: Service[];
  areaSlug?: string;
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">{heading}</h2>
          {subheading && <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">{subheading}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const href = areaSlug ? `/${s.slug}/${areaSlug}/` : `/${s.slug}/`;
            return (
              <Link
                key={s.slug}
                href={href}
                className="group block rounded-sm border border-[var(--color-hairline)] p-6 hover:border-[var(--color-navy)] transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)] group-hover:underline">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-charcoal)] leading-relaxed">{s.shortDescription}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
