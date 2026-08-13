import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

// Next.js automatically injects `<meta name="robots" content="noindex">` for
// the not-found boundary — no need to duplicate it here.
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]">
          404 Error
        </p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-[var(--color-navy)]">
          We Couldn&apos;t Find That Page
        </h1>
        <p className="mt-5 text-[var(--color-charcoal)] leading-relaxed max-w-xl mx-auto">
          The page you&apos;re looking for may have moved or no longer exists. Here are a few places to pick back
          up, or call us directly at{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-[var(--color-navy)]">
            {siteConfig.phone}
          </a>
          .
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-[var(--color-navy)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--color-navy-light)] transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-sm border border-[var(--color-hairline)] px-7 py-4 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-navy)] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>

        <div className="hairline mt-14 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
              Browse Services
            </h2>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-navy)]">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services/" className="mt-3 inline-block text-sm font-semibold text-[var(--color-navy)] underline underline-offset-4">
              View All Services →
            </Link>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
              Browse Service Areas
            </h2>
            <ul className="mt-3 space-y-2">
              {areas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}/`} className="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-navy)]">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/service-areas/" className="mt-3 inline-block text-sm font-semibold text-[var(--color-navy)] underline underline-offset-4">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
