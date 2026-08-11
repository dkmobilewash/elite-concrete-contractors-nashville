import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhyChoose from "@/components/WhyChoose";
import { siteConfig, NOTE_PLACEHOLDER_STATS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Elite Concrete Contractors Of Nashville is a premium concrete contractor serving Nashville's finest residential and commercial properties with precision craftsmanship and meticulous project management.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">About Elite Concrete Contractors Of Nashville</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            A premium concrete contractor built for Nashville&apos;s most discerning residential and commercial clients.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-navy)]">Our Story</h2>
            <p className="text-[var(--color-charcoal)] leading-relaxed">
              Elite Concrete Contractors Of Nashville was founded on the belief that concrete work — arguably the
              most permanent material decision on any property — deserves the same design attention, engineering
              rigor, and finish standard as any other architectural element of a home or building. We saw too many
              premium Nashville properties settle for builder-grade slabs simply because concrete was treated as an
              afterthought rather than a craft.
            </p>
            <p className="text-[var(--color-charcoal)] leading-relaxed">
              Today, we work across the full Nashville metro area — from estate properties in Belle Meade and
              Brentwood to urban infill projects in The Gulch and East Nashville — on everything from driveways and
              stamped patios to structural foundations and commercial parking lots. What ties every project
              together is the same process: a real design consultation, a detailed written proposal, precision
              installation, and a final walkthrough where nothing is signed off until it matches what was approved.
            </p>
            <p className="text-[var(--color-charcoal)] leading-relaxed">
              We&apos;re headquartered at {siteConfig.address.full}, and our crews are equipped and trained to handle
              both the decorative, design-forward work that defines our residential projects and the structural,
              spec-driven work our commercial and institutional clients depend on.
            </p>
          </div>
          <PlaceholderImage
            label="Elite Concrete Contractors team on site"
            alt="Elite Concrete Contractors Of Nashville crew on a Nashville job site"
            aspect="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <Stat value={NOTE_PLACEHOLDER_STATS.yearsExperience} label="Years in Business" />
          <Stat value="13" label="Communities Served" />
          <Stat value="13" label="Concrete Specialties" />
          <Stat value="Licensed" label="& Fully Insured" />
        </div>
      </section>

      <WhyChoose />

      <CTASection />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-3xl font-bold text-[var(--color-navy)]">{value}</p>
      <p className="mt-1 text-xs text-[var(--color-charcoal)]">{label}</p>
    </div>
  );
}
