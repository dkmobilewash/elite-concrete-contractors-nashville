import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo className="h-14 w-auto" theme="dark" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-white/60">{siteConfig.hoursDisplay}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {siteConfig.social.googleBusinessProfile && (
                <a href={siteConfig.social.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Google
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Facebook
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Instagram
                </a>
              )}
              {siteConfig.social.yelp && (
                <a href={siteConfig.social.yelp} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Yelp
                </a>
              )}
              {siteConfig.social.houzz && (
                <a href={siteConfig.social.houzz} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Houzz
                </a>
              )}
              {siteConfig.social.bbb && (
                <a href={siteConfig.social.bbb} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  BBB
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="text-sm text-white/70 hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2 columns-2 md:columns-1">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/${a.slug}/`} className="text-sm text-white/70 hover:text-white">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about/" className="text-sm text-white/70 hover:text-white">About</Link></li>
              <li><Link href="/portfolio/" className="text-sm text-white/70 hover:text-white">Portfolio</Link></li>
              <li><Link href="/blog/" className="text-sm text-white/70 hover:text-white">Blog</Link></li>
              <li><Link href="/reviews/" className="text-sm text-white/70 hover:text-white">Reviews</Link></li>
              <li><Link href="/contact/" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
              <li><Link href="/services/" className="text-sm text-white/70 hover:text-white">All Services</Link></li>
              <li><Link href="/service-areas/" className="text-sm text-white/70 hover:text-white">All Service Areas</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 opacity-30" />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
