import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Visible breadcrumb nav + matching BreadcrumbList JSON-LD in one component,
 * so a page can never show breadcrumbs without the structured data (or vice
 * versa). `items` follows the same convention as <Breadcrumbs>: every crumb
 * except the last (current page) needs an `href`. `currentPath` supplies the
 * absolute path for that final crumb in the schema, since the visible nav
 * intentionally renders it as plain text, not a link.
 */
export default function PageBreadcrumbs({
  items,
  currentPath,
}: {
  items: Crumb[];
  currentPath: string;
}) {
  const schemaItems = items.map((item, i) => ({
    name: item.name,
    url: i === items.length - 1 ? currentPath : item.href ?? currentPath,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }}
      />
      <Breadcrumbs items={items} />
    </>
  );
}
