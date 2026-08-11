type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  theme?: "light" | "dark";
};

/**
 * Wordmark recreated in SVG to match the supplied brand description
 * (no source PNG was available in this session — see build notes).
 */
export default function Logo({ className, variant = "full", theme = "light" }: LogoProps) {
  const navy = theme === "dark" ? "#ffffff" : "#0e2748";
  const charcoal = theme === "dark" ? "#c7cad0" : "#55575b";

  if (variant === "mark") {
    return (
      <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Elite Concrete Contractors Of Nashville">
        <rect x="1" y="1" width="62" height="62" rx="6" fill="none" stroke={navy} strokeWidth="2" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Barlow Semi Condensed, Arial Narrow, sans-serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="34"
          fill={navy}
        >
          E
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 96"
      className={className}
      role="img"
      aria-label="Elite Concrete Contractors Of Nashville"
    >
      <text
        x="0"
        y="30"
        fontFamily="Barlow Semi Condensed, Arial Narrow, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="30"
        letterSpacing="1"
        fill={navy}
      >
        ELITE
      </text>
      <text
        x="0"
        y="56"
        fontFamily="Barlow Semi Condensed, Arial Narrow, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="1.5"
        fill={charcoal}
      >
        CONCRETE
      </text>
      <line x1="0" y1="68" x2="34" y2="68" stroke={navy} strokeWidth="1" />
      <text
        x="40"
        y="72"
        fontFamily="Barlow Semi Condensed, Arial Narrow, sans-serif"
        fontWeight="600"
        fontSize="13"
        letterSpacing="2"
        fill={navy}
      >
        CONTRACTORS
      </text>
      <line x1="178" y1="68" x2="212" y2="68" stroke={navy} strokeWidth="1" />
      <text
        x="0"
        y="90"
        fontFamily="Barlow Semi Condensed, Arial Narrow, sans-serif"
        fontWeight="500"
        fontSize="13"
        letterSpacing="3"
        fill={charcoal}
      >
        OF NASHVILLE
      </text>
    </svg>
  );
}
