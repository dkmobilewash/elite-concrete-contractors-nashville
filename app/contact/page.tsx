import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us / Request a Consultation",
  description:
    "Request a consultation with Elite Concrete Contractors Of Nashville. Call (615) 392-4035 or fill out our project form to schedule a design consultation for your Nashville-area concrete project.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Request a Consultation</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            Tell us about your property and project, and we&apos;ll schedule a design consultation to walk the site and
            put together a detailed proposal — no pressure, no generic phone quote.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-lg font-semibold text-[var(--color-navy)]">Call or Visit</h2>
              <div className="mt-3 space-y-2 text-sm text-[var(--color-charcoal)]">
                <p>
                  <a href={siteConfig.phoneHref} className="font-semibold text-[var(--color-navy)]">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>{siteConfig.address.full}</p>
                <p className="text-[var(--color-charcoal)]/80">{siteConfig.hoursDisplay}</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-[var(--color-navy)]">What Happens Next</h2>
              <ol className="mt-3 space-y-3 text-sm text-[var(--color-charcoal)] list-decimal list-inside">
                <li>We follow up to confirm project details and schedule an on-site consultation.</li>
                <li>We walk your property and discuss design, materials, and timeline.</li>
                <li>You receive a detailed written proposal — no vague verbal estimates.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
