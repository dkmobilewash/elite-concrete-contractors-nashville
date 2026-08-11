export default function PlaceholderImage({
  label,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`${aspect} ${className} relative flex items-center justify-center overflow-hidden rounded-sm border border-[var(--color-hairline)] bg-[var(--color-off-white)]`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 12px, var(--color-hairline) 12px, var(--color-hairline) 13px)",
        }}
        aria-hidden="true"
      />
      <div className="relative text-center px-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--color-charcoal)" strokeWidth={1.2} className="h-8 w-8 mx-auto mb-2 opacity-50">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 15l-5-5-11 11" />
        </svg>
        <p className="text-xs font-medium text-[var(--color-charcoal)] leading-snug">{label}</p>
        <p className="text-[10px] text-[var(--color-charcoal)]/60 mt-1">Project photography pending</p>
      </div>
    </div>
  );
}
