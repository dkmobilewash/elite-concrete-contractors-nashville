import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Elite Concrete Contractors Of Nashville.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} currentPath="/privacy-policy/" />
      <section className="section-y">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-legal">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--color-charcoal)]">Last updated: August 2026</p>

          <div className="mt-8 space-y-6 text-[var(--color-charcoal)] leading-relaxed">
            <p>
              {siteConfig.legalName} (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) respects your privacy. This
              policy explains what information we collect through this website, how we use it, and the choices
              available to you.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Information We Collect</h2>
            <p>
              When you submit a consultation request or contact form, we collect the information you provide,
              which may include your name, email address, phone number, property address, and details about your
              project. We also collect standard technical information (such as browser type and pages visited)
              through normal website operation.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">How We Use Information</h2>
            <p>
              We use the information you provide to respond to your inquiry, schedule consultations, prepare
              proposals, and communicate with you about your project. We do not sell your personal information to
              third parties.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Cookies &amp; Analytics</h2>
            <p>
              This site may use cookies or similar technologies to understand how visitors use the site and to
              improve its performance. You can control cookies through your browser settings.
            </p>

            <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)]">Contact Us</h2>
            <p>
              If you have questions about this policy or how your information is handled, contact us at{" "}
              <a href={siteConfig.phoneHref} className="text-[var(--color-navy)] font-semibold">{siteConfig.phone}</a>{" "}
              or {siteConfig.address.full}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
