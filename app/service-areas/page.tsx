import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AreaGrid from "@/components/AreaGrid";
import CTASection from "@/components/CTASection";
import { areas } from "@/data/areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Elite Concrete Contractors Of Nashville proudly serves Belle Meade, Brentwood, Franklin, Green Hills, Forest Hills, East Nashville, The Gulch, Downtown Nashville, Hendersonville, Gallatin, Murfreesboro, Smyrna, and Lebanon, TN.",
  alternates: { canonical: "/service-areas/" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]} />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Service Areas</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            From the estate properties of Belle Meade to the growing communities of Wilson and Rutherford
            County, we bring the same craftsmanship standard across the full Nashville metro area.
          </p>
        </div>
      </section>
      <AreaGrid areas={areas} />
      <CTASection />
    </>
  );
}
