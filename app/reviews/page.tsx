import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { NOTE_PLACEHOLDER_STATS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Nashville-area clients say about working with Elite Concrete Contractors Of Nashville on driveways, stamped concrete, retaining walls, and more.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Client Reviews</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            A {NOTE_PLACEHOLDER_STATS.reviewRating}-star average across {NOTE_PLACEHOLDER_STATS.reviewCount} Google
            reviews — figures to be confirmed and linked directly to our Google Business Profile at launch.
          </p>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </>
  );
}
