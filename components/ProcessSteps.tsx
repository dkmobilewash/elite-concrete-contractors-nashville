import { ProcessStep } from "@/lib/types";

export default function ProcessSteps({
  steps,
  heading = "Our Process",
  subheading,
}: {
  steps: ProcessStep[];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading text-3xl font-bold text-[var(--color-navy)]/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="hairline flex-1" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)]">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-charcoal)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
