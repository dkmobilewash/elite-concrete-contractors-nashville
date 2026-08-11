import Link from "next/link";
import { siteConfig, NOTE_PLACEHOLDER_STATS } from "@/lib/site-config";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  showTrustStrip?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  showTrustStrip = true,
  ctaLabel = "Request a Consultation",
  ctaHref = "/contact/",
}: HeroProps) {
  return (
    <section className="relative bg-[var(--color-navy)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, #fff 40px, #fff 41px)"
        }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
            {subheadline}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-4 text-sm font-semibold text-[var(--color-navy)] hover:bg-white/90 transition-colors"
            >
              {ctaLabel}
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>

        {showTrustStrip && (
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-white/15 pt-8">
            <TrustItem value={`${NOTE_PLACEHOLDER_STATS.reviewRating}★`} label={`${NOTE_PLACEHOLDER_STATS.reviewCount} Google Reviews`} />
            <TrustItem value={NOTE_PLACEHOLDER_STATS.yearsExperience} label="Years of Craftsmanship" />
            <TrustItem value="Licensed" label="& Fully Insured" />
            <TrustItem value="Nashville" label="Metro-Wide Service" />
          </div>
        )}
      </div>
    </section>
  );
}

function TrustItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-white/60 mt-1">{label}</p>
    </div>
  );
}
