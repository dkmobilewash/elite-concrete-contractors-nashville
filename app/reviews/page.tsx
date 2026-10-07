import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Reviews",
  description:
    "See what Nashville-area clients say about working with Elite Concrete Contractors Of Nashville on driveways, stamped concrete, retaining walls, and more.",
  path: "/reviews/",
});

export default function ReviewsPage() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} currentPath="/reviews/" />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Client Reviews</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            Read what Nashville-area clients say about working with us, directly on our Google Business Profile —
            or see a few of their stories below.
          </p>
          {siteConfig.social.googleBusinessProfile && (
            <a
              href={siteConfig.social.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] hover:bg-white/90"
            >
              Read Our Google Reviews →
            </a>
          )}
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </>
  );
}
