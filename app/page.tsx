import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import AreaGrid from "@/components/AreaGrid";
import WhyChoose from "@/components/WhyChoose";
import ProcessSteps from "@/components/ProcessSteps";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Premium Concrete Contractor in Nashville, TN",
  description:
    "Elite Concrete Contractors Of Nashville delivers precision stamped, stained, polished, and structural concrete work for discerning residential and commercial clients across the Nashville metro. Request a consultation today.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "What makes Elite Concrete Contractors different from other Nashville concrete companies?",
    answer:
      "We're built around a premium, craftsmanship-first positioning — meticulous design consultation, engineered site preparation, and finish quality standards that match the discerning residential and commercial properties we serve. We're not the fastest or cheapest option in the market, and we don't try to be.",
  },
  {
    question: "Do you serve both residential and commercial clients?",
    answer:
      "Yes. We work with residential clients on estate properties, custom builds, and high-end renovations, and with commercial and institutional clients — offices, retail, HOAs, and multi-family properties — who need a contractor they can trust with reputation-sensitive projects.",
  },
  {
    question: "How far in advance should we schedule a project?",
    answer:
      "It depends on scope and season — decorative work like stamped concrete and larger structural projects benefit from scheduling several weeks ahead, especially during our busier spring and fall seasons. Reach out early in your planning process and we'll give you a realistic timeline.",
  },
  {
    question: "What areas of the Nashville metro do you serve?",
    answer:
      "We serve the full Nashville metro area, including Belle Meade, Forest Hills, Green Hills, Brentwood, Franklin, East Nashville, The Gulch, Downtown Nashville, Hendersonville, Gallatin, Murfreesboro, Smyrna, and Lebanon. Visit our service area directory for details on each.",
  },
  {
    question: "Do you provide design renderings or sample panels before installation?",
    answer:
      "For decorative concrete work — stamped, stained, or polished finishes — we provide physical sample panels and, for larger projects, work directly with your landscape architect or designer's renderings so you can approve the exact look before we pour.",
  },
  {
    question: "Is project financing available?",
    answer:
      "Flexible financing options are available for qualifying projects. Ask about financing during your consultation and we'll walk you through what's available.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <Hero
        eyebrow="Nashville's Premium Concrete Contractor"
        headline="Precision concrete craftsmanship for Nashville's finest properties"
        subheadline="From estate motor courts in Belle Meade to architectural flooring in The Gulch, we design and build concrete work engineered to last and finished to a standard that matches your property."
      />

      <ServiceGrid
        services={services}
        heading="Concrete Services"
        subheading="Thirteen specialties, one standard of craftsmanship — explore how we approach each."
      />

      <AreaGrid
        areas={areas}
        heading="Where We Work"
        subheading="Proudly serving Nashville's premium neighborhoods and the surrounding metro area."
      />

      <WhyChoose />

      <ProcessSteps
        heading="Our Process"
        subheading="A meticulous, consultative approach from first conversation to final walkthrough."
        steps={[
          { title: "Design Consultation", description: "We walk your property, discuss goals and materials, and understand how the space will actually be used." },
          { title: "Detailed Proposal", description: "A written proposal covering scope, materials, timeline, and cost — no vague verbal estimates." },
          { title: "Precision Installation", description: "Engineered sub-base preparation, correct reinforcement, and hand-finished detailing on every project." },
          { title: "Quality Control Checkpoints", description: "We inspect our own work at every phase, not just at the end, so issues are caught before they're permanent." },
          { title: "Final Walkthrough & Sign-Off", description: "We walk the completed project with you against the approved plan before calling it done." },
        ]}
      />

      <PortfolioTeaser />

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
              A Nashville Concrete Company Built on Standards, Not Shortcuts
            </h2>
            <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed">
              Elite Concrete Contractors Of Nashville was founded on a simple premise: Nashville&apos;s finest properties
              deserve a concrete contractor who treats every project — residential or commercial, large or small —
              with the same engineering discipline and finish standard. We&apos;re headquartered at 110 29th Ave N in
              Nashville, and our crews work across the full metro area.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-block text-sm font-semibold text-[var(--color-navy)] underline underline-offset-4"
            >
              Read Our Story →
            </Link>
          </div>
          <div className="hairline lg:hidden" />
        </div>
      </section>

      <Testimonials />

      <FAQAccordion
        faqs={homeFaqs}
        heading="Frequently Asked Questions"
        subheading="Answers to the questions we hear most from Nashville property owners."
      />

      <CTASection
        headline="Request a Consultation"
        body="Tell us about your property and project — we'll schedule a design consultation and put together a detailed proposal built around exactly what you need."
      />
    </>
  );
}
