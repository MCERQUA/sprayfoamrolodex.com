export const site = {
  businessName: "SprayFoamRolodex",
  tagline: "Your Reference Guide to Starting and Running a Spray Foam Business",
  domain: "sprayfoamrolodex.com",
  url: "https://www.sprayfoamrolodex.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Angle: a buyer's-guide/business-education resource for people starting or scaling a
// spray foam insulation business — rig/proportioner selection, startup costs, chemical
// suppliers, PPE, training/certification. Grounded in real (modest) DataForSEO demand
// (spray foam rig ~1,000/mo, spray foam equipment ~1,000/mo, etc.), NOT a raw supplier
// directory (SprayFoam.com/SprayFoamMagazine.com already run an established one — a
// clone would compete uselessly against an entrenched incumbent instead of filling a
// gap). NOT insurance — zero insurance-sales language anywhere. Structurally distinct
// from sibling sprayfoamqr.com (a homeowner-facing trust/credential-verification
// directory) — this site's audience is aspiring/current contractors themselves.
export const topics: Topic[] = [
  {
    slug: "choosing-a-spray-foam-rig-trailer-vs-truck-mount",
    name: "Choosing a Spray Foam Rig: Trailer vs. Truck-Mount",
    shortName: "Rig: Trailer vs. Truck-Mount",
    summary: "The real tradeoffs between a trailer rig and a truck-mounted rig — mobility, cost, maintenance access, and resale — for a new or growing spray foam operation.",
  },
  {
    slug: "spray-foam-proportioner-buying-guide",
    name: "Spray Foam Proportioner Buying Guide",
    shortName: "Proportioner Buying Guide",
    summary: "What actually separates proportioner classes and price tiers — ratio-control precision, output rate, and serviceability — before you commit to equipment.",
  },
  {
    slug: "what-it-actually-costs-to-start-a-spray-foam-business",
    name: "What It Actually Costs to Start a Spray Foam Business",
    shortName: "Real Startup Costs",
    summary: "A realistic, itemized look at rig cost, chemical costs, PPE, training, and working capital — the numbers most \"how to start\" content skips.",
  },
  {
    slug: "spray-foam-chemical-suppliers-what-to-know-before-you-buy",
    name: "Spray Foam Chemical Suppliers: What to Know Before You Buy",
    shortName: "Chemical Suppliers 101",
    summary: "How the major manufacturer/distributor landscape actually works — direct vs. distributor purchasing, minimum orders, and what changes as you scale.",
  },
  {
    slug: "ppe-and-safety-equipment-every-spray-foam-rig-needs",
    name: "PPE & Safety Equipment Every Spray Foam Rig Needs",
    shortName: "PPE & Safety Equipment",
    summary: "The actual respiratory protection, supplied-air, and safety equipment list for isocyanate exposure — not a generic construction-PPE checklist.",
  },
  {
    slug: "spray-foam-training-and-certification-where-to-start",
    name: "Spray Foam Training & Certification: Where to Start",
    shortName: "Training & Certification",
    summary: "Manufacturer certification, SPFA resources, and hands-on training options — what a realistic path into this trade actually looks like.",
  },
] as const;
