import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Concrete Services",
  description:
    "Explore Elite Concrete Contractors Of Nashville's full range of concrete services — driveways, stamped concrete, foundations, retaining walls, flooring, and more, serving the Nashville metro area.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} currentPath="/services/" />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Concrete Services</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            Thirteen concrete specialties, each approached with the same engineering discipline and finish
            standard — from everyday driveways and repairs to signature decorative and structural work.
          </p>
        </div>
      </section>
      <ServiceGrid services={services} />
      <CTASection />
    </>
  );
}
