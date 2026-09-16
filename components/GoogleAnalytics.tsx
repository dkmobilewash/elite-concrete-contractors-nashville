import Script from "next/script";

/**
 * Loads gtag.js and initializes GA4, but only when a real Measurement ID is
 * configured (see siteConfig.gaMeasurementId) — renders nothing otherwise,
 * so local dev and any environment without the env var set stays silent
 * rather than sending events to a placeholder or missing property.
 */
export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
