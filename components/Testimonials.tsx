const placeholders = [
  { area: "Belle Meade", service: "Stamped Concrete Motor Court" },
  { area: "Franklin", service: "Outdoor Living Patio & Retaining Wall" },
  { area: "Green Hills", service: "Polished Concrete Flooring" },
];

export default function Testimonials() {
  return (
    <section className="section-y bg-[var(--color-off-white)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Client Reviews
          </h2>
          <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">
            Real client testimonials are being compiled from our Google Business Profile and will replace these
            placeholders as they come in.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {placeholders.map((p) => (
            <div key={p.area} className="rounded-sm border border-dashed border-[var(--color-hairline)] bg-white p-6">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-charcoal)]/60 mb-3">
                Testimonial Pending
              </p>
              <p className="text-sm text-[var(--color-charcoal)] leading-relaxed italic">
                &ldquo;Placeholder review pending — client testimonial for a {p.service.toLowerCase()} project in {p.area} to be added here once collected.&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold text-[var(--color-navy)]">
                {p.area} Client &middot; {p.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
