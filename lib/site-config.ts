export const siteConfig = {
  name: "Elite Concrete Contractors Of Nashville",
  shortName: "Elite Concrete Contractors",
  legalName: "Elite Concrete Contractors Of Nashville",
  url: "https://www.eliteconcretecontractorsnashville.com",
  phone: "(615) 392-4035",
  phoneHref: "tel:+16153924035",
  email: "info@eliteconcretecontractorsnashville.com",
  address: {
    street: "110 29th Ave N",
    city: "Nashville",
    state: "TN",
    stateFull: "Tennessee",
    zip: "37203",
    full: "110 29th Ave N, Nashville, TN 37203",
  },
  geo: {
    latitude: 36.15723,
    longitude: -86.79815,
  },
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
