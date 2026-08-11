import { Area } from "@/lib/types";

export const areas: Area[] = [
  {
    slug: "belle-meade",
    name: "Belle Meade",
    county: "Davidson County",
    jurisdictionLabel: "City of Belle Meade (satellite city within Metro Nashville)",
    permitAuthority: "Belle Meade City Hall, coordinating with Metro Nashville's Department of Codes & Building Safety",
    permitAuthorityNote:
      "Belle Meade is one of Davidson County's incorporated satellite cities. Exterior and structural work — including new slabs, retaining walls over code thresholds, and additions tied to a driveway or patio project — typically requires a permit coordinated between Belle Meade City Hall and Metro Nashville's codes department. Many Belle Meade properties also carry deed restrictions or garden-district guidance on visible hardscape changes, so we confirm requirements before scheduling.",
    neighborhoodCharacter: [
      "Belle Meade is Nashville's most established estate district — rolling lots, mature hardwoods, long gated drives, and homes ranging from 1920s Georgian and Tudor estates to more recent architect-built residences on Chickering, Page, and Jackson Boulevard. Lot sizes here run large by Nashville standards, often a half-acre to several acres, and the properties are built to be looked at from the street as much as lived in.",
      "Concrete work in Belle Meade is rarely a standalone project — it's almost always part of a larger landscape or renovation plan involving a landscape architect, and it has to read as intentional, not incidental. A new motor court, a stamped-and-stained terrace, or a retaining wall along a sloped side yard needs to look like it was there when the house was built. That's the standard we hold ourselves to on every Belle Meade job.",
    ],
    soilAndClimateNotes:
      "Belle Meade sits on the rolling terrain west of the Harpeth Hills, with the region's typical mix of shrink-swell clay subsoil and, in places, shallow limestone. Long driveways and motor courts crossing varied grade need engineered base prep and control-joint layout that accounts for both drainage and Middle Tennessee's freeze-thaw cycles — we don't shortcut sub-base compaction here, since a settling driveway on an estate property is a highly visible, expensive mistake to fix later.",
    distanceFraming: "A short, direct run from our shop on 29th Ave N — typically one of our fastest response times in the metro for consultations and follow-up service.",
    driveTimeMinutes: "10-15 minutes",
    localFaqs: [
      {
        question: "Do you work with our landscape architect or designer?",
        answer:
          "Regularly. On most Belle Meade projects we're one contractor on a team that includes a landscape architect and sometimes a general contractor or architect. We provide shop drawings, sample panels, and material specs that plug directly into their plan set, and we coordinate our schedule around planting and irrigation phases.",
      },
      {
        question: "Will new concrete work need approval from the city or our neighborhood association?",
        answer:
          "It depends on scope and your specific property — some Belle Meade streets carry additional deed or garden-district guidance beyond the standard Metro permit process. We identify what applies to your address during the consultation and handle the permit coordination with Belle Meade City Hall and Metro Codes.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Belle Meade Boulevard", "Percy Warner Park", "Belle Meade Plantation", "Chickering Road"],
    nearbyAreas: ["forest-hills", "green-hills", "downtown-nashville"],
  },
  {
    slug: "forest-hills",
    name: "Forest Hills",
    county: "Davidson County",
    jurisdictionLabel: "City of Forest Hills (satellite city within Metro Nashville)",
    permitAuthority: "Forest Hills City Hall, coordinating with Metro Nashville's Department of Codes & Building Safety",
    permitAuthorityNote:
      "Like its neighbor Belle Meade, Forest Hills is an incorporated satellite city with its own zoning overlay layered on top of Metro Nashville's permitting process. Grading and impervious-surface rules are taken seriously here given the hilly, wooded terrain, so driveway and patio projects that change stormwater flow are reviewed with drainage in mind, not just structural specs.",
    neighborhoodCharacter: [
      "Forest Hills is defined by its topography — steep, wooded lots along winding roads like Vaughns Gap and Chickering, with homes sited to take advantage of grade changes rather than fight them. Large-lot zoning and a strong preference for privacy mean many of the most interesting concrete projects here involve significant elevation change: stepped terraces, sloped driveways, and retaining structures that make a difficult lot usable.",
      "Because so many Forest Hills properties are wooded and low-visibility from the street, homeowners here often invest heavily in the parts of the property they actually use — a pool terrace, an outdoor kitchen slab, a motor court tucked behind trees — rather than street-facing curb appeal. That shifts our design conversations toward function and long-term durability on grade as much as finish selection.",
    ],
    soilAndClimateNotes:
      "The hillside lots common in Forest Hills mean drainage and slope stabilization drive more of the engineering decisions than in flatter parts of the metro. We pay close attention to how surface water moves across a sloped site before we finalize a driveway or retaining wall design, and we design footings and drainage behind walls to handle the region's clay soil and seasonal saturation.",
    distanceFraming: "A quick, direct trip from our 29th Ave N shop, comparable to our Belle Meade response time.",
    driveTimeMinutes: "10-15 minutes",
    localFaqs: [
      {
        question: "Can you design around a steep or wooded lot without removing mature trees?",
        answer:
          "Yes — this is one of the more common design challenges in Forest Hills. We regularly design stepped or curved driveway alignments, retaining walls, and terraces that work around root zones and grade rather than clear-cutting a straight run. We'll walk the site with you before finalizing a layout.",
      },
      {
        question: "Does changing our driveway or patio footprint affect stormwater compliance?",
        answer:
          "It can, since Forest Hills' hillside zoning pays close attention to impervious surface and runoff. We account for grading and drainage in the design and coordinate any required review with the city before construction starts.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Vaughns Gap Road", "Chickering Lane", "Percy Warner Park (western edge)"],
    nearbyAreas: ["belle-meade", "green-hills", "brentwood"],
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    county: "Williamson County",
    jurisdictionLabel: "City of Brentwood",
    permitAuthority: "City of Brentwood Building & Codes Department",
    permitAuthorityNote:
      "Brentwood issues its own building permits through the City of Brentwood, separate from both Metro Nashville and unincorporated Williamson County. Many Brentwood neighborhoods are also governed by active HOAs with architectural review committees, so decorative concrete changes — color, pattern, or a driveway footprint change — often need HOA design approval in addition to the city permit.",
    neighborhoodCharacter: [
      "Brentwood is Williamson County's flagship suburb of large custom homes, established country-club neighborhoods, and a steady pipeline of new construction on estate-sized lots. Communities like Governors Club, Annandale, and the areas around Concord and Split Log Road mix long-standing luxury homes with newer architect-designed builds, and HOA architectural standards are a real, active part of how projects get approved here.",
      "Outdoor living is central to how Brentwood homeowners use their properties — pool decks, outdoor kitchens, motor courts, and multi-level patios connecting to finished lower levels are the norm rather than the exception on new-construction and major-renovation projects. We spend real time in the design phase on matching stone, brick, and existing hardscape finishes so a new concrete element reads as part of the original plan.",
    ],
    soilAndClimateNotes:
      "Brentwood sits on Williamson County's typical clay-over-limestone geology, with rolling terrain in the older neighborhoods and engineered pad sites in newer developments. New-construction lots sometimes have inconsistent fill from grading, so we verify sub-base conditions independently rather than assuming a builder's pad is ready for a finish pour.",
    distanceFraming: "A straightforward drive south from our 29th Ave N shop via I-65 — well within our standard same-day response radius.",
    driveTimeMinutes: "20-25 minutes",
    localFaqs: [
      {
        question: "Will our HOA need to approve a new driveway or patio design before we start?",
        answer:
          "In most Brentwood communities with an active architectural review committee, yes — especially for anything visible from the street or that changes color, pattern, or footprint. We can prepare renderings and material samples formatted for HOA submission as part of the proposal process.",
      },
      {
        question: "Can you match new concrete to our home's existing stone or brick exterior?",
        answer:
          "Yes — matching integral color and texture to a home's existing masonry or a neighboring hardscape element is one of the most common requests we get in Brentwood, and it's a core part of our design consultation process.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Governors Club", "Concord Road", "Crockett Park", "Maryland Farms"],
    nearbyAreas: ["franklin", "forest-hills", "green-hills"],
  },
  {
    slug: "green-hills",
    name: "Green Hills",
    county: "Davidson County",
    jurisdictionLabel: "Metro Nashville-Davidson County",
    permitAuthority: "Metro Nashville Department of Codes & Building Safety",
    permitAuthorityNote:
      "Green Hills falls under standard Metro Nashville permitting. Because it's one of the most built-out, in-demand neighborhoods inside the urban core, many lots here also carry setback and lot-coverage constraints from Metro's zoning code that affect how large a new patio, driveway, or addition-related slab can be — we check this early so a design doesn't stall in review.",
    neighborhoodCharacter: [
      "Green Hills mixes some of Nashville's most established mid-century and traditional homes with an active wave of teardown-and-rebuild construction, particularly around Hobbs Road, Hillsboro Pike-adjacent streets, and the Woodmont area. Lots tend to be smaller and more tightly built than Belle Meade or Brentwood, which puts a premium on precise, efficient concrete design — every square foot of hardscape has to earn its place.",
      "A lot of our Green Hills work pairs with whole-home renovations or new builds where the concrete has to match a very specific, often architect-driven aesthetic — clean-lined modern patios, minimalist driveways with narrow control joints, or polished interior flooring that continues the home's material palette from indoors to out.",
    ],
    soilAndClimateNotes:
      "Green Hills sits in a low-lying basin relative to some surrounding neighborhoods, and older parts of the area can have mature drainage infrastructure that wasn't sized for today's larger hardscape footprints. We evaluate site drainage carefully on tighter urban lots so a new driveway or patio doesn't shift water toward a foundation or a neighboring property.",
    distanceFraming: "One of our closest service areas — a short trip from our 29th Ave N shop via Hillsboro Pike or 21st Ave.",
    driveTimeMinutes: "10-15 minutes",
    localFaqs: [
      {
        question: "Our lot is small and tightly built — can you still fit a real patio or motor court?",
        answer:
          "Yes, and it's one of the more common design challenges we solve in Green Hills. Careful layout, permeable-adjacent detailing, and efficient use of every foot of hardscape allowance let us deliver a real outdoor living space even on a compact urban lot.",
      },
      {
        question: "Does Metro zoning limit how much of our lot we can cover with new concrete?",
        answer:
          "Potentially — Metro's lot-coverage and setback rules vary by zoning district, and Green Hills has several. We check your specific parcel's limits during the design consultation before finalizing a layout.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Hillsboro Village", "Hobbs Road", "The Mall at Green Hills"],
    nearbyAreas: ["belle-meade", "forest-hills", "downtown-nashville"],
  },
  {
    slug: "franklin",
    name: "Franklin",
    county: "Williamson County",
    jurisdictionLabel: "City of Franklin (Williamson County seat)",
    permitAuthority: "City of Franklin Building & Neighborhood Services",
    permitAuthorityNote:
      "As the Williamson County seat, Franklin issues permits through its own Building & Neighborhood Services department, and its Historic Zoning Commission has direct authority over exterior changes to properties within the downtown Franklin historic districts — including some hardscape and driveway work visible from a historic street. Properties outside the historic overlay follow standard city review, but newer master-planned communities often add HOA architectural approval on top of that.",
    neighborhoodCharacter: [
      "Franklin spans a striking range — the walkable historic downtown with its 19th-century homes and brick storefronts, established in-town neighborhoods like Fieldstone Farms, and a wide arc of newer master-planned luxury communities such as Westhaven, Nolensville-adjacent estates, and the countryside custom-home lots toward Leiper's Fork. Each context calls for a different approach: sympathetic, code-appropriate work near the historic core, and bolder architectural statements in new construction.",
      "Franklin has one of the region's fastest-growing concentrations of high-end, architect-designed new construction, and outdoor living space is often planned into the home from the start rather than added later — pool decks, covered outdoor kitchens, and motor courts that need to feel cohesive with the home's exterior materials from day one.",
    ],
    soilAndClimateNotes:
      "Williamson County's rolling, clay-based terrain is consistent across Franklin, with the added factor that many newer developments sit on graded pad sites where fill quality varies lot to lot. On historic-district properties we also account for older, sometimes uneven original grading when tying new concrete into existing walkways or foundations.",
    distanceFraming: "A direct run south on I-65 from our 29th Ave N shop — well within our standard service radius for both consultations and warranty follow-up.",
    driveTimeMinutes: "25-30 minutes",
    localFaqs: [
      {
        question: "Does our property fall inside Franklin's historic overlay, and does that affect a driveway or patio project?",
        answer:
          "Properties inside the downtown Franklin historic districts can require Historic Zoning Commission review for street-visible exterior changes, including some hardscape work. We confirm whether your address falls inside an overlay and, if so, prepare the documentation the Commission needs.",
      },
      {
        question: "For new-construction communities like Westhaven, do you coordinate with the builder or design guidelines?",
        answer:
          "Yes — Franklin's master-planned communities typically have their own architectural design guidelines, and we build our proposals to match those standards, coordinating timing with your builder or general contractor where relevant.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Downtown Franklin Historic District", "Westhaven", "The Factory at Franklin", "Cool Springs"],
    nearbyAreas: ["brentwood", "smyrna", "murfreesboro"],
  },
  {
    slug: "hendersonville",
    name: "Hendersonville",
    county: "Sumner County",
    jurisdictionLabel: "City of Hendersonville",
    permitAuthority: "City of Hendersonville Building & Codes Department",
    permitAuthorityNote:
      "Hendersonville issues its own permits through the city's Building & Codes Department, distinct from Sumner County's process for unincorporated areas. Lakefront and lake-adjacent parcels along Old Hickory Lake can carry additional setback or shoreline considerations that affect where a patio, retaining wall, or dock-adjacent slab can be built.",
    neighborhoodCharacter: [
      "Hendersonville's identity is shaped by Old Hickory Lake — waterfront and near-waterfront homes along Sanders Ferry, Rockland, and Saundersville Roads represent some of Sumner County's highest-value real estate, alongside a broader base of well-maintained established neighborhoods and newer subdivisions further from the shoreline. It's a market where premium outdoor living investment is concentrated around the lake and steadily expanding elsewhere as the city grows.",
      "Lakefront properties in particular call for concrete work that holds up to grade change down to the water, handles moisture exposure well, and looks intentional next to a dock or boathouse — stamped and stained patios, retaining walls managing the slope to the shoreline, and durable pool decks are common requests.",
    ],
    soilAndClimateNotes:
      "Proximity to Old Hickory Lake means many Hendersonville lots deal with higher water tables and more significant grade change down to the shoreline than inland Sumner County properties. We factor drainage and slope stabilization heavily into retaining wall and patio designs near the water.",
    distanceFraming: "A straightforward drive northeast from our 29th Ave N shop via I-65 and Vietnam Veterans Blvd.",
    driveTimeMinutes: "30-35 minutes",
    localFaqs: [
      {
        question: "Are there special rules for concrete work near the lake shoreline?",
        answer:
          "Lakefront and near-shoreline parcels can carry additional setback or grading considerations tied to the lake, separate from standard city permitting. We identify what applies to your specific property before finalizing a design.",
      },
      {
        question: "Can a retaining wall help stabilize a sloped lakefront yard?",
        answer:
          "In many cases, yes — a properly engineered retaining wall is one of the most effective ways to manage grade change and erosion on a lake-adjacent lot while creating usable, level space for a patio or lawn above the shoreline.",
      },
    ],
    premiumTier: "growth",
    landmarks: ["Old Hickory Lake", "Sanders Ferry Road", "Downtown Hendersonville"],
    nearbyAreas: ["gallatin", "downtown-nashville", "east-nashville"],
  },
  {
    slug: "gallatin",
    name: "Gallatin",
    county: "Sumner County",
    jurisdictionLabel: "City of Gallatin (Sumner County seat)",
    permitAuthority: "City of Gallatin Building Codes Department",
    permitAuthorityNote:
      "As the Sumner County seat, Gallatin manages its own permitting through the city's Building Codes Department, with Sumner County's process applying to unincorporated areas just outside city limits. Gallatin's downtown historic square carries some architectural review for exterior work directly on historic storefronts, though this rarely extends to residential hardscape projects outside that core.",
    neighborhoodCharacter: [
      "Gallatin pairs a historic downtown square and older in-town neighborhoods with a fast-growing ring of new residential development, much of it drawing lake-area and commuter buyers priced out of Hendersonville and Nashville proper. The result is a widening market for higher-end concrete work — larger new-construction homes on Long Hollow Pike and toward the lake are increasingly investing in real outdoor living space rather than a builder-standard patio slab.",
      "We see growing demand in Gallatin for stamped and stained driveways and pool decks on newer custom homes, alongside practical repair and leveling work on the area's older housing stock near downtown, where original concrete has aged past its service life.",
    ],
    soilAndClimateNotes:
      "Gallatin shares Sumner County's clay-based soil profile with the added variability of a fast-growing development pattern — newer subdivisions on recently graded land need careful sub-base verification, since fill consistency varies by builder and phase.",
    distanceFraming: "A direct run northeast from our 29th Ave N shop via I-65 and US-31E — comfortably within our standard service radius.",
    driveTimeMinutes: "35-40 minutes",
    localFaqs: [
      {
        question: "Is Gallatin part of your standard service area, or is there an extra trip charge?",
        answer:
          "Gallatin is a standard part of our Nashville metro service area — we don't add a special trip fee for scheduled consultations or scoped projects here.",
      },
      {
        question: "Can you help bring an older driveway near downtown Gallatin back to level and crack-free?",
        answer:
          "Yes — concrete leveling and repair are common requests on Gallatin's older in-town housing stock, and we evaluate whether leveling, patching, or a full replacement makes the most sense for the slab's condition.",
      },
    ],
    premiumTier: "growth",
    landmarks: ["Gallatin Public Square", "Long Hollow Pike", "Triple Creek Park"],
    nearbyAreas: ["hendersonville", "lebanon", "east-nashville"],
  },
  {
    slug: "east-nashville",
    name: "East Nashville",
    county: "Davidson County",
    jurisdictionLabel: "Metro Nashville-Davidson County",
    permitAuthority: "Metro Nashville Department of Codes & Building Safety",
    permitAuthorityNote:
      "East Nashville falls under standard Metro Nashville permitting, with the added layer that several of its neighborhoods — including Lockeland Springs, Edgefield, and parts of Historic Buchanan Street — sit within Metro Historic Zoning overlays. Exterior changes visible from the street on a designated historic property, including some driveway and walkway work, can require Metro Historic Zoning Commission review in addition to a standard permit.",
    neighborhoodCharacter: [
      "East Nashville is defined by its bungalow and Victorian-era housing stock, dense infill construction, and some of the highest renovation activity in the metro. Lots are typically small and close together, and a growing share of homes here have been fully renovated or newly built to a high standard — which has pushed demand for concrete work that matches that same level of finish, not builder-grade slabs.",
      "Historic districts like Lockeland Springs and Edgefield call for driveway and walkway work that respects the neighborhood's period character even when the underlying home has been completely modernized, while newer infill construction on streets like Riverside and Gallatin Pike gives more design latitude for contemporary stained and polished finishes.",
    ],
    soilAndClimateNotes:
      "East Nashville's dense, older infrastructure means drainage easements and utility placement can be tighter than in newer suburban areas — we verify underground conditions before excavation on tight urban lots, and design driveways and patios with East Nashville's typical narrow side-yard setbacks in mind.",
    distanceFraming: "A short trip across the Cumberland River from our 29th Ave N shop — one of our faster response areas.",
    driveTimeMinutes: "10-20 minutes",
    localFaqs: [
      {
        question: "Our house is in a historic district — does that limit what we can do with our driveway?",
        answer:
          "It can affect material and visual choices for street-facing work, but it doesn't rule out quality concrete improvements. We design within Metro Historic Zoning guidance for districts like Lockeland Springs and Edgefield and handle the review submission when it's required.",
      },
      {
        question: "Can you work on a tight urban lot with limited side-yard access?",
        answer:
          "Yes — East Nashville's narrow lots are one of our more common site conditions. We plan equipment access and material staging around tight setbacks and close neighboring structures as a standard part of project planning here.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Lockeland Springs", "Five Points", "Shelby Park", "Edgefield Historic District"],
    nearbyAreas: ["downtown-nashville", "the-gulch", "hendersonville"],
  },
  {
    slug: "murfreesboro",
    name: "Murfreesboro",
    county: "Rutherford County",
    jurisdictionLabel: "City of Murfreesboro (Rutherford County seat)",
    permitAuthority: "City of Murfreesboro Codes Department",
    permitAuthorityNote:
      "As the Rutherford County seat and one of the fastest-growing cities in the state, Murfreesboro manages permitting through its own Codes Department, with Rutherford County covering unincorporated pockets outside city limits. Many of Murfreesboro's newer master-planned subdivisions also carry active HOA architectural guidelines affecting driveway color, pattern, and front-facing hardscape changes.",
    neighborhoodCharacter: [
      "Murfreesboro's growth over the past two decades has been dramatic, and it shows in the housing stock: large new-construction subdivisions around Blackman, Rockvale, and toward Salem Road sit alongside an established, historic downtown around the Rutherford County Courthouse square. New-construction buyers here increasingly want their homes to stand out from standard builder finishes, which is where premium decorative concrete has real room to grow.",
      "We see strong demand in Murfreesboro for elevating newer subdivision homes above standard builder-grade concrete — stamped and stained driveways, upgraded patios, and outdoor kitchen slabs that give a newer home a custom, established feel rather than a look identical to every other house on the street.",
    ],
    soilAndClimateNotes:
      "Rutherford County's soil and grading conditions vary significantly by subdivision phase and age, since so much of Murfreesboro has been developed recently. We independently verify sub-base compaction on newer lots rather than assuming builder grading is pour-ready, and account for regional clay soil movement in control-joint spacing.",
    distanceFraming: "A direct drive southeast from our 29th Ave N shop via I-24 — within our standard metro service radius for scheduled work.",
    driveTimeMinutes: "40-45 minutes",
    localFaqs: [
      {
        question: "Can you upgrade a standard builder-grade driveway to a decorative finish after move-in?",
        answer:
          "Yes — this is one of the most common projects we take on in Murfreesboro's newer subdivisions. In many cases the existing slab can be evaluated for a resurfacing or overlay treatment, or we can plan a full replacement with stamped or stained finishes.",
      },
      {
        question: "Will our HOA need to approve a driveway color or pattern change?",
        answer:
          "Many of Murfreesboro's newer communities have architectural review requirements for street-facing exterior changes. We prepare material samples and layout plans suited for HOA submission as part of our proposal process.",
      },
    ],
    premiumTier: "growth",
    landmarks: ["Rutherford County Courthouse Square", "Blackman", "Stones River National Battlefield"],
    nearbyAreas: ["smyrna", "franklin", "lebanon"],
  },
  {
    slug: "the-gulch",
    name: "The Gulch",
    county: "Davidson County",
    jurisdictionLabel: "Metro Nashville-Davidson County",
    permitAuthority: "Metro Nashville Department of Codes & Building Safety",
    permitAuthorityNote:
      "The Gulch falls under standard Metro Nashville permitting, but its urban design overlay and dense mixed-use zoning mean concrete work here is almost always tied to a building-level project — a rooftop terrace, a ground-floor commercial entry, or a shared courtyard — rather than a standalone residential slab. Coordination with a building's HOA, property manager, or general contractor is standard.",
    neighborhoodCharacter: [
      "The Gulch is Nashville's most concentrated urban infill district — high-rise and mid-rise residential towers, ground-floor retail, and a small number of remaining industrial-turned-commercial buildings, all built on tight urban lots with minimal setback. There is essentially no traditional single-family concrete work here; the relevant projects are polished or stained concrete flooring in condo lobbies and units, rooftop terrace slabs, structural elements tied to renovations, and small-footprint commercial patios.",
      "Precision matters more in The Gulch than almost anywhere else we work — tight site access, structural load considerations for elevated terraces, and a design language that's uniformly modern and architectural mean there's very little room for an imprecise finish or an off-spec pour.",
    ],
    soilAndClimateNotes:
      "Most Gulch projects involve concrete over structural decks or existing slabs rather than new soil-bearing foundations, which shifts the technical focus toward waterproofing, structural load capacity, and finish adhesion rather than traditional sub-base and soil considerations.",
    distanceFraming: "One of our closest service areas — minutes from our 29th Ave N shop.",
    driveTimeMinutes: "5-10 minutes",
    localFaqs: [
      {
        question: "Can you install polished concrete flooring inside a condo unit or commercial space?",
        answer:
          "Yes — interior polished and stained concrete flooring is one of our most requested services in The Gulch, particularly for condo renovations and ground-floor commercial buildouts that want an architectural, industrial-modern finish.",
      },
      {
        question: "How do you handle site access on a tight, high-density urban lot?",
        answer:
          "We plan equipment, material delivery, and building access in advance with the property manager or general contractor — a standard part of scoping any Gulch project, given limited street access and loading dock scheduling.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["12th Ave South corridor", "Station Inn", "The Gulch Pedestrian Bridge"],
    nearbyAreas: ["downtown-nashville", "east-nashville", "green-hills"],
  },
  {
    slug: "downtown-nashville",
    name: "Downtown Nashville",
    county: "Davidson County",
    jurisdictionLabel: "Metro Nashville-Davidson County",
    permitAuthority: "Metro Nashville Department of Codes & Building Safety",
    permitAuthorityNote:
      "Downtown Nashville falls under standard Metro Nashville permitting, with additional coordination often required through building management, the Metro Nashville Downtown Partnership's public-realm guidelines, or historic overlays in districts like Lower Broadway and Printers Alley for street-facing commercial work.",
    neighborhoodCharacter: [
      "Downtown Nashville's concrete work spans high-rise residential and commercial towers, historic commercial buildings along Second Avenue and Lower Broadway, and an expanding footprint of mixed-use development in SoBro and the Capitol View district. Projects here are almost entirely commercial or multi-family in scale — building entries, structural repairs, polished interior flooring, and plaza-level hardscape rather than residential driveways.",
      "Given downtown's visibility and reputation-sensitive tenants — hospitality, retail, and Class A office space — concrete work here has to meet a standard of finish and reliability that reflects on the building owner's brand as much as the material itself.",
    ],
    soilAndClimateNotes:
      "Downtown's built environment means most projects involve structural concrete, existing foundations, and above-grade slabs rather than native soil conditions. Where ground-level work does interface with soil, downtown's riverside geology near the Cumberland requires careful attention to moisture and grading.",
    distanceFraming: "A short trip from our 29th Ave N shop — minutes to most downtown addresses.",
    driveTimeMinutes: "5-10 minutes",
    localFaqs: [
      {
        question: "Do you take on commercial and multi-family concrete projects downtown?",
        answer:
          "Yes — the majority of our downtown work is commercial or multi-family: building entries, plaza and courtyard hardscape, structural repair, and polished or stained interior flooring for retail and office space.",
      },
      {
        question: "Can you work around building access restrictions and loading dock schedules?",
        answer:
          "Yes — we coordinate site logistics with property management and general contractors in advance, which is standard for any downtown project given permit parking, loading dock windows, and pedestrian safety requirements.",
      },
    ],
    premiumTier: "signature",
    landmarks: ["Lower Broadway", "SoBro", "Second Avenue Historic District", "Bicentennial Capitol Mall"],
    nearbyAreas: ["the-gulch", "east-nashville", "green-hills"],
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    county: "Rutherford County",
    jurisdictionLabel: "Town of Smyrna",
    permitAuthority: "Town of Smyrna Codes Enforcement Department",
    permitAuthorityNote:
      "Smyrna issues permits through its own Codes Enforcement Department, distinct from Rutherford County's process for unincorporated land. Smyrna's continued industrial and residential growth around the I-24 corridor means the town has been actively updating its zoning and design standards, so we confirm current requirements before finalizing a project scope.",
    neighborhoodCharacter: [
      "Smyrna has grown from a smaller Rutherford County town into a significant residential and industrial hub, driven in part by nearby manufacturing employment and its position on I-24 between Nashville and Murfreesboro. Residential growth includes both established neighborhoods near downtown Smyrna and a substantial wave of newer subdivisions, giving the town a similar profile to Murfreesboro but at a smaller scale.",
      "As Smyrna's housing stock matures and newer subdivisions fill in, we're seeing steady demand for both practical concrete work — driveways, sidewalks, foundation-related slabs for growing families — and a rising share of decorative upgrades as homeowners look to differentiate newer homes from builder-standard finishes.",
    ],
    soilAndClimateNotes:
      "Smyrna shares Rutherford County's clay-based soil, with drainage patterns influenced by its position along the West Fork Stones River. We assess site-specific drainage carefully on lots near creek corridors before finalizing grading for driveways or patios.",
    distanceFraming: "A direct drive southeast from our 29th Ave N shop via I-24 — within our standard metro service radius.",
    driveTimeMinutes: "35-40 minutes",
    localFaqs: [
      {
        question: "Do you serve both established Smyrna neighborhoods and the newer subdivisions?",
        answer:
          "Yes — we work across Smyrna's full range of housing, from older in-town streets needing repair or leveling work to newer subdivisions looking to upgrade a builder-grade driveway or patio to a decorative finish.",
      },
      {
        question: "Is Smyrna within your standard service radius, or does it cost more to schedule work there?",
        answer:
          "Smyrna is part of our standard Nashville metro service area — there's no special surcharge for scheduling a consultation or project here.",
      },
    ],
    premiumTier: "growth",
    landmarks: ["Sam Ridley Parkway", "Smyrna Airport", "The Boro"],
    nearbyAreas: ["murfreesboro", "franklin", "lebanon"],
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "Wilson County",
    jurisdictionLabel: "City of Lebanon (Wilson County seat)",
    permitAuthority: "City of Lebanon Building & Codes Department",
    permitAuthorityNote:
      "As the Wilson County seat, Lebanon manages its own permitting through the city's Building & Codes Department, with Wilson County's process applying outside city limits. Lebanon's historic public square carries some design consideration for exterior work on designated buildings, though this rarely applies to residential concrete projects outside the immediate downtown core.",
    neighborhoodCharacter: [
      "Lebanon combines a historic downtown square and older established neighborhoods with fast-growing residential development pushed outward from Nashville along the I-40 corridor. Newer subdivisions toward Mount Juliet and along Highway 231 are bringing larger, higher-value new construction to a market that was historically more modest, and outdoor living investment is growing alongside it.",
      "We see a mix of project types in Lebanon — practical driveway, sidewalk, and foundation-related work for the area's steady residential growth, and an increasing number of decorative concrete requests from newer-construction homeowners who want their outdoor space to match the quality of the home itself.",
    ],
    soilAndClimateNotes:
      "Wilson County's soil profile follows the broader Middle Tennessee clay pattern, with some areas around Lebanon showing more variable drainage due to the region's karst limestone features. We evaluate site-specific soil and drainage conditions rather than assuming uniform conditions across the county.",
    distanceFraming: "A direct drive east from our 29th Ave N shop via I-40 — at the outer edge of our standard metro service radius, still comfortably served for scheduled consultations and projects.",
    driveTimeMinutes: "40-45 minutes",
    localFaqs: [
      {
        question: "Is Lebanon too far outside Nashville for your team to service?",
        answer:
          "No — Lebanon is part of our standard Nashville metro service area. It's at the outer edge of our radius, so we typically schedule Lebanon consultations and project days with that drive time factored into routing.",
      },
      {
        question: "Do you work on new-construction homes in Lebanon's growing subdivisions near Mount Juliet?",
        answer:
          "Yes — we've seen steady growth in decorative and structural concrete requests in this part of Lebanon's market as new construction there trends toward larger, higher-end homes.",
      },
    ],
    premiumTier: "growth",
    landmarks: ["Wilson County Courthouse Square", "Cumberland University", "James E. Ward Agricultural Center"],
    nearbyAreas: ["smyrna", "murfreesboro", "hendersonville"],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
