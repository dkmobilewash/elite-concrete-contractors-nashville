"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-hairline)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={siteConfig.name}>
            <Logo className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-charcoal-dark)] hover:text-[var(--color-navy)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-semibold text-[var(--color-navy)]"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-sm bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-navy-light)] transition-colors"
            >
              Request a Consultation
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phone}`} className="text-[var(--color-navy)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="p-2 text-[var(--color-navy)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-hairline)] bg-white">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[var(--color-charcoal-dark)] border-b border-[var(--color-hairline)] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-white"
            >
              Request a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
