import { getServiceBySlug } from "./services";
import { getAreaBySlug } from "./areas";

export type PortfolioProjectEntry = {
  serviceSlug: string;
  areaSlug: string;
  label: string;
  image?: string;
};

// Real completed projects, added incrementally as photography becomes
// available. Referenced by slug (not array index) so a new service or area
// can never silently shift which project a card points at.
export const portfolioProjects: PortfolioProjectEntry[] = [
  { serviceSlug: "stamped-concrete", areaSlug: "belle-meade", label: "Stamped Motor Court", image: "/images/portfolio/stamped-motor-court.webp" },
  { serviceSlug: "retaining-walls", areaSlug: "brentwood", label: "Terraced Retaining Wall & Patio" },
  { serviceSlug: "concrete-flooring", areaSlug: "the-gulch", label: "Polished Concrete Interior Flooring" },
  { serviceSlug: "concrete-driveways", areaSlug: "franklin", label: "Estate Driveway Replacement", image: "/images/portfolio/estate-driveway-replacement.webp" },
  { serviceSlug: "concrete-sidewalks", areaSlug: "green-hills", label: "Garden Walkway System", image: "/images/portfolio/garden-walkway-system.webp" },
  { serviceSlug: "slab-foundations", areaSlug: "gallatin", label: "Slab Foundation, New Construction", image: "/images/portfolio/slab-foundation-new-construction.webp" },
  { serviceSlug: "stamped-concrete", areaSlug: "forest-hills", label: "Covered Patio & Entry Steps", image: "/images/portfolio/covered-patio-entry-steps.webp" },
  { serviceSlug: "stamped-concrete", areaSlug: "hendersonville", label: "Backyard Patio Installation", image: "/images/portfolio/backyard-patio-installation.webp" },
  { serviceSlug: "stamped-concrete", areaSlug: "murfreesboro", label: "Pool Deck Slab", image: "/images/portfolio/pool-deck-slab.webp" },
  { serviceSlug: "concrete-sidewalks", areaSlug: "east-nashville", label: "Historic Home Walkway", image: "/images/portfolio/historic-home-walkway.webp" },
  { serviceSlug: "concrete-driveways", areaSlug: "smyrna", label: "Two-Tone Diamond Driveway", image: "/images/portfolio/two-tone-diamond-driveway.webp" },
];

export type ResolvedPortfolioProject = {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
  area: NonNullable<ReturnType<typeof getAreaBySlug>>;
  label: string;
  image?: string;
};

export function getPortfolioProjects(): ResolvedPortfolioProject[] {
  const resolved: ResolvedPortfolioProject[] = [];
  for (const p of portfolioProjects) {
    const service = getServiceBySlug(p.serviceSlug);
    const area = getAreaBySlug(p.areaSlug);
    if (!service || !area) continue;
    resolved.push({ service, area, label: p.label, image: p.image });
  }
  return resolved;
}

/** Real completed project photos for a given service area, for cross-linking
 *  area pages to project case studies in that same neighborhood. */
export function getPortfolioProjectsByArea(areaSlug: string): ResolvedPortfolioProject[] {
  return getPortfolioProjects().filter((p) => p.area.slug === areaSlug && p.image);
}
