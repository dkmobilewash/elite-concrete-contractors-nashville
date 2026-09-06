import Link from "next/link";
import { BlogPost } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogGrid({
  posts,
  heading,
  subheading,
}: {
  posts: BlogPost[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="max-w-2xl mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">{heading}</h2>
            {subheading && <p className="mt-4 text-[var(--color-charcoal)] leading-relaxed">{subheading}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group block rounded-sm border border-[var(--color-hairline)] p-6 hover:border-[var(--color-navy)] transition-colors"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--color-charcoal)]/70">
                <span className="font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                  {post.category}
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-[var(--color-navy)] group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-charcoal)] leading-relaxed">{post.excerpt}</p>
              <span className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                Read Article →<span className="font-normal normal-case text-[var(--color-charcoal)]/70">{post.readTime}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
