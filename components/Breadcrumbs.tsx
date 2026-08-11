import Link from "next/link";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[var(--color-off-white)] border-b border-[var(--color-hairline)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-charcoal)]">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--color-navy)]">
                  {item.name}
                </Link>
              ) : (
                <span className="text-[var(--color-navy)] font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
