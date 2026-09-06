import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = post.relatedServices
    .map((s) => services.find((service) => service.slug === s))
    .filter(Boolean) as typeof services;

  const relatedPosts = post.relatedPosts
    .map((s) => getBlogPostBySlug(s))
    .filter(Boolean) as typeof blogPosts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog/" },
              { name: post.title, url: `/blog/${post.slug}/` },
            ])
          ),
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}

      <PageBreadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: post.title }]}
        currentPath={`/blog/${post.slug}/`}
      />

      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="font-heading font-semibold uppercase tracking-[0.2em]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-bold leading-tight">{post.title}</h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <article className="section-y">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {post.intro.map((p, i) => (
              <p key={i} className="text-[var(--color-charcoal)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-bold text-[var(--color-navy)]">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[var(--color-charcoal)] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && <FAQAccordion faqs={post.faqs} heading="Frequently Asked Questions" />}

      <section className="section-y bg-[var(--color-off-white)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)] mb-4">Related Services</h3>
            <div className="flex flex-col gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="text-sm font-medium text-[var(--color-navy)] hover:underline"
                >
                  {s.name} →
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-[var(--color-navy)] mb-4">Related Reading</h3>
            <div className="flex flex-col gap-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="text-sm font-medium text-[var(--color-navy)] hover:underline"
                >
                  {p.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <Link
            href="/blog/"
            className="rounded-sm border border-[var(--color-hairline)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)]"
          >
            ← All Articles
          </Link>
        </div>
      </section>

      <CTASection
        headline="Request a Consultation"
        body="Have a question about your specific property or project? Reach out and we'll walk through it with you directly."
      />
    </>
  );
}
