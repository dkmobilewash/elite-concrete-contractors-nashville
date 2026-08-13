import type { NextConfig } from "next";

const APEX_HOST = "eliteconcretecontractorsnashville.com";
const WWW_HOST = "www.eliteconcretecontractorsnashville.com";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // Canonicalize the apex domain to www — siteConfig.url, all schema, and
      // the sitemap treat www as canonical, so this closes the duplicate-host
      // gap flagged in the technical SEO audit (both hosts otherwise resolve
      // independently, splitting ranking signals across every page).
      {
        source: "/:path*",
        has: [{ type: "host", value: APEX_HOST }],
        destination: `https://${WWW_HOST}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
