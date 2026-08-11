"use client";

import { useState } from "react";
import { FAQ } from "@/lib/types";

export default function FAQAccordion({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
}: {
  faqs: FAQ[];
  heading?: string;
  subheading?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-y">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">{heading}</h2>
          {subheading && <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">{subheading}</p>}
        </div>
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-semibold text-[var(--color-navy)]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-[var(--color-navy)] text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
