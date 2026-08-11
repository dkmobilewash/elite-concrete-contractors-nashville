import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Elite Concrete Contractors Of Nashville.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />
      <section className="section-y">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">Terms of Service</h1>
          <p className="mt-4 text-sm text-[var(--color-charcoal)]">Last updated: August 2026</p>

          <div className="mt-8 space-y-6 text-[var(--color-charcoal)] leading-relaxed">
            <p>
              These Terms of Service govern your use of the {siteConfig.legalName} website. By using this site, you
              agree to these terms.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Website Use</h2>
            <p>
              Content on this website is provided for general informational purposes about our services and service
              areas. It does not constitute a binding quote, contract, or guarantee of pricing, availability, or
              project timeline. Actual project terms are established in a separate written proposal and contract.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">No Professional Guarantee From Website Content</h2>
            <p>
              Permitting, jurisdiction, and soil/climate information described on this site is provided as general
              guidance and may change. Requirements for your specific property should be confirmed directly with us
              and the relevant permitting authority before work begins.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and logos, is the property of {siteConfig.legalName}
              {" "}unless otherwise noted, and may not be reproduced without permission.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={siteConfig.phoneHref} className="text-[var(--color-navy)] font-semibold">{siteConfig.phone}</a>{" "}
              or {siteConfig.address.full}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
