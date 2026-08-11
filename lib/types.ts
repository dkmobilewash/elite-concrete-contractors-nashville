export type FAQ = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string[];
  process: ProcessStep[];
  problems: string[];
  materials: { name: string; description: string }[];
  faqs: FAQ[];
  relatedServices: string[];
  icon: string;
};

export type Area = {
  slug: string;
  name: string;
  county: string;
  jurisdictionLabel: string;
  permitAuthority: string;
  permitAuthorityNote: string;
  neighborhoodCharacter: string[];
  soilAndClimateNotes: string;
  distanceFraming: string;
  driveTimeMinutes: string;
  localFaqs: FAQ[];
  premiumTier: "signature" | "growth";
  landmarks: string[];
  nearbyAreas: string[];
};
