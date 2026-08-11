const differentiators = [
  {
    title: "Design Consultation, Not a Phone Quote",
    description:
      "Every project starts with an on-site consultation — we walk the property, discuss materials and finish options, and bring sample panels for decorative work before anything is priced.",
  },
  {
    title: "Engineered for Middle Tennessee Conditions",
    description:
      "Every design accounts for the region's clay soil, freeze-thaw cycles, and drainage realities — the details that determine whether a project lasts two years or twenty.",
  },
  {
    title: "Meticulous Project Management",
    description:
      "A detailed written proposal, a clear schedule, and a single point of contact from consultation through final walkthrough — no surprises, no scope creep.",
  },
  {
    title: "Craftsmanship-First Standards",
    description:
      "We hold every project, from a walkway repair to a full estate motor court, to the same finish standard — because the work carries our name either way.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
            Why Nashville Chooses Elite Concrete Contractors
          </h2>
          <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">
            We built our process around discerning clients who expect precision, communication, and a finished result that matches the standard of their property.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="hairline w-10 shrink-0 mt-3" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-charcoal)] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
