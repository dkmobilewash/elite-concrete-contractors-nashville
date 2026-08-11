import Link from "next/link";
import { Area } from "@/lib/types";

export default function AreaGrid({
  areas,
  serviceSlug,
  heading = "Service Areas",
  subheading,
}: {
  areas: Area[];
  serviceSlug?: string;
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="section-y bg-[var(--color-off-white)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">{heading}</h2>
          {subheading && <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">{subheading}</p>}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((a) => {
            const href = serviceSlug ? `/${serviceSlug}/${a.slug}/` : `/${a.slug}/`;
            return (
              <Link
                key={a.slug}
                href={href}
                className="block rounded-sm border border-[var(--color-hairline)] bg-white px-5 py-4 hover:border-[var(--color-navy)] transition-colors"
              >
                <span className="font-heading text-sm font-semibold text-[var(--color-navy)]">{a.name}</span>
                <span className="block text-xs text-[var(--color-charcoal)] mt-0.5">{a.county}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
