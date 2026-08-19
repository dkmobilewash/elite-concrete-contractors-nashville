import { siteConfig } from "@/lib/site-config";

export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${className} relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-sm border border-[var(--color-hairline)]`}
    >
      <iframe
        src={siteConfig.mapEmbedUrl}
        title={`Map showing the location of ${siteConfig.name} at ${siteConfig.address.full}`}
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
