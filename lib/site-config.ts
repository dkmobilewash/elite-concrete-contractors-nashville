export const siteConfig = {
  name: "Elite Concrete Contractors Of Nashville",
  shortName: "Elite Concrete Contractors",
  legalName: "Elite Concrete Contractors Of Nashville",
  url: "https://www.eliteconcretecontractorsnashville.com",
  phone: "(615) 392-4035",
  phoneHref: "tel:+16153924035",
  email: "info@eliteconcretecontractorsnashville.com",
  address: {
    street: "402 Bna Dr",
    city: "Nashville",
    state: "TN",
    stateFull: "Tennessee",
    zip: "37217",
    full: "402 Bna Dr, Nashville, TN 37217",
  },
  // Sourced directly from the Google Business Profile map embed (exact pin
  // location), not an approximation.
  geo: {
    latitude: 36.13774727244346,
    longitude: -86.70138662419177,
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.183410485577!2d-86.70138662419177!3d36.13774727244346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886469fed717b36d%3A0xf6f0e6506d01e843!2sElite%20Concrete%20Contractors%20Of%20Nashville!5e0!3m2!1sen!2sus!4v1787111096113!5m2!1sen!2sus",
  hours: [
    { day: "Monday", open: "07:00", close: "18:00" },
    { day: "Tuesday", open: "07:00", close: "18:00" },
    { day: "Wednesday", open: "07:00", close: "18:00" },
    { day: "Thursday", open: "07:00", close: "18:00" },
    { day: "Friday", open: "07:00", close: "18:00" },
    { day: "Saturday", open: "08:00", close: "14:00" },
    { day: "Sunday", closed: true },
  ],
  hoursDisplay: "Mon–Fri: 7:00 AM – 6:00 PM · Sat: 8:00 AM – 2:00 PM · Sun: Closed",
  social: {
    facebook: "",
    instagram: "",
    houzz: "",
  },
  founded: 2011,
  tagline: "Precision concrete craftsmanship for Nashville's finest properties.",
} as const;

export const NOTE_PLACEHOLDER_STATS = {
  reviewRating: "4.9",
  reviewCount: "180+",
  yearsExperience: `${new Date().getFullYear() - siteConfig.founded}+`,
};

/**
 * Real Google review data, once available. Deliberately `null` until real
 * numbers are supplied — schema.org `aggregateRating` must reflect actual
 * review data, and Google can penalize (or Search Console can flag) fabricated
 * review markup. Set this to real values and `organizationSchema()` in
 * lib/schema.ts will start emitting `aggregateRating` automatically; nothing
 * else needs to change.
 *
 * Example once real data is available:
 *   export const realReviewData = { ratingValue: 4.9, reviewCount: 187 };
 */
export const realReviewData: { ratingValue: number; reviewCount: number } | null = null;
