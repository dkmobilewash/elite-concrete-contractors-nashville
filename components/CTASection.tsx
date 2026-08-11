import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection({
  headline = "Request a Consultation",
  body = "Tell us about your project and we'll schedule a design consultation to walk the site and put together a detailed proposal.",
}: {
  headline?: string;
  body?: string;
}) {
  return (
    <section className="bg-[var(--color-charcoal-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">{headline}</h2>
            <p className="mt-3 text-white/75 leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-sm bg-[var(--color-navy)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--color-navy-light)] transition-colors"
            >
              Request a Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
