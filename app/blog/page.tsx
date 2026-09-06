import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import BlogGrid from "@/components/BlogGrid";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Concrete Contractor Resources & FAQ",
  description:
    "Straight answers to the questions Nashville homeowners actually search before hiring a concrete contractor — cost factors, cure times, cracking causes, material comparisons, and more.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <>
      <PageBreadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} currentPath="/blog/" />
      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Concrete Contractor Resources & FAQ</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
            Straight, specific answers to the questions we hear most often from homeowners researching concrete
            work — cost factors, cure times, common causes of cracking, material comparisons, and what to ask
            before you hire anyone.
          </p>
        </div>
      </section>

      <BlogGrid posts={sortedPosts} />

      <CTASection
        headline="Have a Question We Haven't Answered?"
        body="Reach out and we'll walk you through it directly — no generic phone quote, just a straight answer for your specific project."
      />
    </>
  );
}
