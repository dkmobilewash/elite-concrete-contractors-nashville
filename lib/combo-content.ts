import { Service, Area, FAQ } from "./types";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

function pick<T>(arr: T[], index: number): T {
  return arr[((index % arr.length) + arr.length) % arr.length];
}

function idx(service: Service): number {
  return services.findIndex((s) => s.slug === service.slug);
}

function aIdx(area: Area): number {
  return areas.findIndex((a) => a.slug === area.slug);
}

export type ComboContent = {
  heroHeadline: string;
  heroSubheadline: string;
  whyMattersHeading: string;
  whyMattersParagraphs: string[];
  jurisdictionNote: string;
  whyEliteParagraph: string;
  faqs: FAQ[];
  ctaHeadline: string;
  ctaBody: string;
  metaTitle: string;
  metaDescription: string;
};

const openingTemplates: ((s: Service, a: Area, landmark: string, problem: string) => string[])[] = [
  (s, a, landmark, problem) => [
    `${a.name} properties near ${landmark} present a specific set of conditions for ${s.name.toLowerCase()} — and a specific opportunity to get it right the first time. We bring the same engineering discipline and finish standard to every ${s.shortName.toLowerCase()} project in ${a.name} that we'd apply on any signature Nashville property.`,
    `A common reason ${a.name} homeowners call us is exactly this: ${problem} It's the kind of problem that's straightforward to solve correctly, and expensive to solve twice after a rushed first attempt.`,
  ],
  (s, a, landmark, problem) => [
    `${s.name} in ${a.name} isn't a generic service line for us — it's shaped by the specific character of streets like those near ${landmark} and by the real soil and grade conditions of the neighborhood. We design every project around what a ${a.name} property actually needs, not a one-size-fits-all template.`,
    `Among the projects we see most often here: ${problem} We treat that as a design and engineering problem first, then a construction problem.`,
  ],
  (s, a, landmark, problem) => [
    `Working in ${a.name}, close to ${landmark}, means designing ${s.name.toLowerCase()} for this neighborhood's particular mix of architecture, soil, and expectations — not adapting a generic plan after the fact. Every ${a.name} project starts with understanding what's already on the property and around it.`,
    `We regularly hear from ${a.name} property owners dealing with a specific version of this problem: ${problem} Getting the diagnosis right is most of what separates a lasting fix from a repeat visit.`,
  ],
  (s, a, landmark, problem) => [
    `${a.name}'s combination of housing stock, terrain, and homeowner expectations calls for a deliberate approach to ${s.name.toLowerCase()} — one that accounts for the neighborhood's realities around ${landmark} as much as the service itself. That's the standard we hold every ${a.name} project to.`,
    `One of the more common situations we're brought in for here: ${problem} We start every project by understanding exactly why that happened before proposing how to fix or prevent it.`,
  ],
];

const whyMattersTemplates: ((s: Service, a: Area, material: string) => string[])[] = [
  (s, a, material) => [
    `${a.neighborhoodCharacter[0]}`,
    `That context matters directly for ${s.name.toLowerCase()}. ${a.soilAndClimateNotes} For a project like this, that often means specifying ${material.toLowerCase()} and a sub-base approach engineered for exactly these conditions, rather than a generic regional default.`,
  ],
  (s, a, material) => [
    `${a.neighborhoodCharacter.length > 1 ? a.neighborhoodCharacter[1] : a.neighborhoodCharacter[0]}`,
    `${s.name} has to hold up to that context. ${a.soilAndClimateNotes} On our ${a.name} projects, that typically shapes decisions like using ${material.toLowerCase()} and planning reinforcement and drainage around the site's actual grade rather than a standard assumption.`,
  ],
];

const whyEliteTemplates: ((s: Service, a: Area) => string)[] = [
  (s, a) =>
    `Choosing Elite Concrete Contractors Of Nashville for ${s.name.toLowerCase()} in ${a.name} means working with a team that treats design consultation, engineered preparation, and finish quality as inseparable parts of the same project — not a fast-quote, fast-pour operation. We bring sample panels, material specs, and a clear process to every ${a.name} proposal, and we hold ourselves to the same standard whether the project is a single walkway or a full estate motor court.`,
  (s, a) =>
    `${a.name} clients choose us for ${s.name.toLowerCase()} because we manage the whole project — design, engineering, permitting coordination, and craftsmanship — under one roof, with the meticulous communication a reputation-conscious property owner expects. We don't treat ${a.name} as an afterthought market; it's one of the neighborhoods where our attention to finish detail matters most.`,
  (s, a) =>
    `We built our process around the standards ${a.name} properties actually require: a documented design consultation, a detailed written proposal, precision installation, and a final walkthrough where nothing gets signed off until it matches what was approved. For ${s.name.toLowerCase()}, that process protects you from the two most common failure points in concrete work — rushed sub-base preparation and finish mismatches.`,
  (s, a) =>
    `For ${s.name.toLowerCase()} in ${a.name}, the difference between an acceptable contractor and the right one shows up years later, not on installation day. We engineer every project for Middle Tennessee's real soil and climate conditions and back that with meticulous project management, so the work still looks and performs the way it should long after the crew has left.`,
];

const ctaTemplates: ((s: Service, a: Area) => { headline: string; body: string })[] = [
  (s, a) => ({
    headline: `Request a Consultation for ${s.name} in ${a.name}`,
    body: `Tell us about your ${a.name} property and we'll schedule a design consultation to walk the site, discuss options, and put together a detailed written proposal — no pressure, no generic phone quote.`,
  }),
  (s, a) => ({
    headline: `Discuss Your ${a.name} ${s.shortName} Project`,
    body: `Every ${s.shortName.toLowerCase()} project in ${a.name} starts with a conversation about your property, your goals, and your timeline. Reach out to schedule a consultation with our team.`,
  }),
  (s, a) => ({
    headline: `Ready to Talk Through Your ${s.shortName} Plans in ${a.name}?`,
    body: `We'll walk your ${a.name} property, answer your questions honestly, and provide a detailed proposal for ${s.name.toLowerCase()} — built around your property's specific conditions, not a generic estimate.`,
  }),
];

function comboFaqs(s: Service, a: Area, landmark: string, material: string): FAQ[] {
  const templated: FAQ[] = [
    {
      question: `Do you handle the ${a.jurisdictionLabel} permit process for ${s.name.toLowerCase()} in ${a.name}?`,
      answer: `In most cases, yes. ${a.permitAuthorityNote}`,
    },
    {
      question: `What makes ${s.name.toLowerCase()} in ${a.name} different from a standard project elsewhere in the metro?`,
      answer: `${a.name}'s specific soil, grade, and site conditions shape our approach: ${a.soilAndClimateNotes} For ${s.name.toLowerCase()} specifically, we often recommend ${material.toLowerCase()} as part of the design given those conditions.`,
    },
  ];
  const areaSpecific = a.localFaqs.map((f) => ({ ...f }));
  const serviceSpecific = s.faqs.slice(0, 2).map((f) => ({ ...f }));
  return [...templated, ...areaSpecific, ...serviceSpecific];
}

export function getComboContent(service: Service, area: Area): ComboContent {
  const si = idx(service);
  const ai = aIdx(area);
  const comboIndex = si * 13 + ai;

  const landmark = pick(area.landmarks, si);
  const problem = pick(service.problems, ai);
  const material = service.materials.length
    ? pick(service.materials, ai + 1).name
    : "engineered reinforcement";

  const opening = pick(openingTemplates, comboIndex)(service, area, landmark, problem);
  const mattersParas = pick(whyMattersTemplates, comboIndex)(service, area, material);
  const whyElite = pick(whyEliteTemplates, comboIndex)(service, area);
  const cta = pick(ctaTemplates, comboIndex)(service, area);

  const heroHeadlineVariants = [
    `${service.name} in ${area.name}, TN`,
    `${area.name} ${service.name}, Built to Elite Standards`,
    `Precision ${service.name} for ${area.name} Properties`,
    `${service.shortName} in ${area.name}: Engineered, Not Improvised`,
  ];
  const heroSubVariants = [
    `${service.shortDescription} Proudly serving ${area.name} and the surrounding ${area.county}.`,
    `Serving ${area.name} property owners with ${service.shortDescription.toLowerCase()}`,
    `${area.name}'s premium properties deserve ${service.shortDescription.toLowerCase()} We deliver exactly that.`,
  ];

  return {
    heroHeadline: pick(heroHeadlineVariants, comboIndex),
    heroSubheadline: pick(heroSubVariants, comboIndex + 1),
    whyMattersHeading: `Why ${service.name} Matters in ${area.name}`,
    whyMattersParagraphs: [...opening, ...mattersParas],
    jurisdictionNote: `${area.permitAuthorityNote} For ${service.name.toLowerCase()} specifically, we confirm the applicable requirements for your address before scheduling work, so there are no surprises mid-project.`,
    whyEliteParagraph: whyElite,
    faqs: comboFaqs(service, area, landmark, material),
    ctaHeadline: cta.headline,
    ctaBody: cta.body,
    metaTitle: `${service.name} in ${area.name}, TN | Elite Concrete Contractors Of Nashville`,
    metaDescription: `Precision ${service.name.toLowerCase()} for ${area.name}, TN properties. Design consultation, engineered installation, and meticulous craftsmanship from Elite Concrete Contractors Of Nashville. Call (615) 392-4035.`,
  };
}
