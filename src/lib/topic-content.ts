import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export const topicContent: Record<string, TopicContent> = {
  "choosing-a-spray-foam-rig-trailer-vs-truck-mount": {
    slug: "choosing-a-spray-foam-rig-trailer-vs-truck-mount",
    heroImage: "/images/topic-rig-trailer.jpg",
    heroImageAlt: "Enclosed trailer rig set up for spray foam application at a job site",
    intro: [
      "Every new spray foam operation eventually asks the same question: trailer or truck-mount. Both are real, common configurations used across the industry, and neither is universally correct — the right choice depends on your service radius, the jobs you're targeting, and how much you can put down up front.",
    ],
    sections: [
      {
        heading: "What a Trailer Rig Actually Gives You",
        paragraphs: [
          "An enclosed trailer rig houses the proportioner, drums, generator, and hose reels inside a dedicated enclosed trailer that hitches to any suitable tow vehicle. The core advantage is flexibility on the tow vehicle side — you can use a truck you already own, and if that truck needs replacing, the rig itself doesn't have to move. Trailers also tend to be easier to resell as a standalone unit, since the buyer isn't also inheriting your specific truck.",
          "The tradeoff is towing logistics: parking, backing up on tight residential job sites, and the added length can be a real daily friction, especially for crews working in dense suburban neighborhoods or multi-unit developments with limited maneuvering room.",
        ],
      },
      {
        heading: "What a Truck-Mounted Rig Actually Gives You",
        paragraphs: [
          "A truck-mounted rig integrates the equipment directly into a box truck or flatbed, eliminating the towing/backing-up problem entirely — you drive one vehicle, park it, and you're set up. This tends to be the preferred configuration for crews doing a high volume of small residential jobs in tight urban or suburban settings where trailer maneuvering costs real time every single day.",
          "The tradeoff is that the equipment and the vehicle are now one asset — if the truck needs major mechanical work or eventually needs replacing, the equipment transition is more involved than simply re-hitching a trailer to a different tow vehicle. Resale is also more constrained, since you're selling a specific truck-plus-equipment package rather than two separable assets.",
        ],
      },
      {
        heading: "Service Radius Changes the Right Answer",
        paragraphs: [
          "An operation doing mostly local, short-radius residential work often leans truck-mount for the daily convenience. An operation covering a wide multi-county or multi-state radius, doing larger commercial jobs, or running multiple crews off a shared equipment pool tends to lean trailer, since a trailer can be dropped at a job site and the tow vehicle freed up for other use, and a spare trailer is a cheaper way to add capacity than a second full truck-mounted unit.",
        ],
      },
      {
        heading: "New vs. Used, Either Configuration",
        paragraphs: [
          "Both trailer and truck-mount rigs show up regularly on the used equipment market, and a well-maintained used rig with a documented service history and legitimate hour count on the proportioner can be a genuinely reasonable way to enter the trade at lower upfront cost than new. The real risk with used equipment isn't the age of the trailer or truck body — it's the condition and calibration history of the proportioner itself, which is the expensive core of either configuration and the harder thing to properly inspect before buying.",
        ],
      },
    ],
    keyTakeaways: [
      "Trailer rigs offer tow-vehicle flexibility and easier resale as a standalone asset; truck-mounted rigs eliminate towing/backing-up friction on tight job sites.",
      "A high volume of small, local residential jobs tends to favor truck-mount; wide service radius or multi-crew commercial operations tend to favor trailers.",
      "Neither configuration is more \"professional\" than the other — both are standard, common setups across the industry.",
      "For used equipment, the proportioner's condition and calibration history matters far more to inspect carefully than the trailer or truck body's age.",
    ],
    faqs: [
      {
        question: "Is a trailer or truck-mounted spray foam rig better?",
        answer: "Neither is universally better — it depends on service radius and job type. Truck-mount tends to suit high-volume local residential work; trailers tend to suit wider-radius or multi-crew commercial operations, and offer easier resale as a standalone asset.",
      },
      {
        question: "Is a used spray foam rig a reasonable way to start?",
        answer: "Yes, if the proportioner's condition and calibration/service history checks out — that's the expensive core component and the harder thing to properly inspect, more important than the age of the trailer or truck body itself.",
      },
      {
        question: "Can I put spray foam equipment in a truck I already own?",
        answer: "Not directly as a true truck-mount configuration (that requires purpose-built integration into a box truck or flatbed), but a trailer rig can hitch to most suitable tow vehicles you may already have, which is one of its main practical advantages.",
      },
    ],
  },

  "spray-foam-proportioner-buying-guide": {
    slug: "spray-foam-proportioner-buying-guide",
    heroImage: "/images/topic-proportioner.jpg",
    heroImageAlt: "Spray foam proportioner equipment with heated hoses on a rig",
    intro: [
      "The proportioner is the single most expensive and most consequential piece of equipment on a spray foam rig — it's the machine that pumps, heats, and mixes the two chemical components at the correct ratio. Every off-ratio failure this industry deals with traces back to this piece of equipment, which is exactly why buying the right one matters more than any other equipment decision.",
    ],
    sections: [
      {
        heading: "What Actually Separates Proportioner Price Tiers",
        paragraphs: [
          "Entry-level proportioners handle lower output rates and simpler ratio-control systems, adequate for smaller residential jobs but limiting for larger commercial work where a crew needs to lay down significant volume in a workday. Mid-tier and high-output proportioners add higher pumping capacity, more sophisticated electronic ratio monitoring, and generally more robust heating systems for the hoses — the part of the machine most exposed to cold-weather ratio drift.",
          "The price difference between tiers isn't marketing markup — it reflects real differences in pump durability, heating system sophistication, and how tightly the machine holds ratio across a full workday of varying ambient conditions.",
        ],
      },
      {
        heading: "Electronic Ratio Monitoring Is Worth Understanding Before You Buy",
        paragraphs: [
          "Older or more basic proportioners rely on the operator watching gauges and reacting to drift manually. Newer machines increasingly include electronic ratio monitoring that actively tracks and corrects pressure/temperature imbalance in real time, reducing dependence on operator attentiveness alone. For a new business relying on less-experienced crew early on, that electronic monitoring genuinely reduces the risk of the off-ratio failures that create expensive callbacks and reputation damage — it's a real safety margin, not just a convenience feature.",
        ],
      },
      {
        heading: "Output Rate and Matching the Machine to Your Job Mix",
        paragraphs: [
          "Proportioners are rated by output (commonly measured in pounds per minute). Buying more output capacity than your typical job actually needs adds cost without adding value — a machine sized for large commercial roof decks is overkill and harder to control precisely on small residential attic jobs. Buying too little output capacity for the commercial work you're targeting means longer job times and thinner margins on larger contracts. Matching proportioner output to your actual, realistic job mix — not your aspirational job mix — is one of the most common and most costly mistakes new operators make.",
        ],
      },
      {
        heading: "Serviceability and Parts Availability Matter as Much as the Spec Sheet",
        paragraphs: [
          "A proportioner that goes down mid-job with no parts available regionally, or with a service network that requires shipping the whole unit out for weeks, costs you real income every day it's down. Before buying, it's worth confirming what regional service and parts support actually exists for that specific brand and model in your area — a slightly more expensive machine with strong local service support is often the better business decision than the cheapest machine with none.",
        ],
      },
    ],
    keyTakeaways: [
      "Price tier differences reflect real differences in pump durability, heating sophistication, and ratio-holding accuracy, not just brand markup.",
      "Electronic ratio monitoring reduces dependence on operator attentiveness alone — a real risk-reduction feature, especially for newer crews.",
      "Match output rate (lbs/min) to your realistic job mix, not your aspirational job mix — both over- and under-buying capacity are common, costly mistakes.",
      "Regional parts and service availability for a specific brand/model can matter as much as the spec sheet — downtime costs real income.",
    ],
    faqs: [
      {
        question: "What's the most important factor when buying a spray foam proportioner?",
        answer: "Matching output capacity to your realistic job mix, and confirming real regional parts/service support exist for that brand — both matter more day-to-day than any single spec-sheet number.",
      },
      {
        question: "Do I need electronic ratio monitoring on my first proportioner?",
        answer: "It's not strictly required, but it meaningfully reduces off-ratio risk, especially with less-experienced crew — a real safety margin worth weighing against the cost difference.",
      },
      {
        question: "Why do proportioners vary so much in price?",
        answer: "Real differences in pump durability, heating-system sophistication for the hoses, and how tightly the machine holds ratio under varying conditions — not just brand markup.",
      },
    ],
  },

  "what-it-actually-costs-to-start-a-spray-foam-business": {
    slug: "what-it-actually-costs-to-start-a-spray-foam-business",
    heroImage: "/images/topic-startup-costs.jpg",
    heroImageAlt: "Spray foam contractor reviewing startup budget and equipment costs",
    intro: [
      "Most \"how to start a spray foam business\" content either rounds up to an impressively large number to sound serious, or rounds down to a suspiciously low number to sound achievable. Neither helps someone actually planning a budget. This page covers the real cost categories honestly, without pretending there's one correct total.",
    ],
    sections: [
      {
        heading: "Equipment Is the Largest Single Line Item, and It's a Real Range",
        paragraphs: [
          "A complete rig — proportioner, trailer or truck integration, generator, hoses, spray gun, and related equipment — spans a wide real range depending on new vs. used and entry-level vs. high-output configuration. A used, lower-output trailer setup sits at the affordable end of that range; a new, high-output truck-mounted rig with electronic ratio monitoring sits at the expensive end. Anyone quoting a single number without asking which configuration you're planning is giving you marketing, not a budget.",
        ],
      },
      {
        heading: "Chemical Costs Are Recurring, Not One-Time",
        paragraphs: [
          "Unlike the rig itself, chemical cost is an ongoing, per-job expense that scales with volume sprayed — covered in more operational detail on the chemical suppliers topic page. A realistic budget needs working capital set aside for the first several jobs' worth of chemical purchases before revenue from those jobs actually arrives, since suppliers generally expect payment on delivery or short terms, not payment after your customer pays you.",
        ],
      },
      {
        heading: "PPE, Training, and Certification Are Real Costs Often Left Off the List",
        paragraphs: [
          "Proper respiratory protection (covered in detail on the PPE topic page), initial manufacturer or SPFA-aligned training, and any certification costs are real upfront expenses that a lot of informal cost estimates simply omit. They're smaller than the equipment line item, but they're not optional, and skipping them to save money upfront is a false economy given the real health and liability stakes of isocyanate exposure.",
        ],
      },
      {
        heading: "Licensing, Business Formation, and Insurance Are Real Costs Too",
        paragraphs: [
          "Business registration, any state-specific contractor licensing requirements, and general liability coverage appropriate to spray foam work are standard costs of operating any contracting business legally — not unique to spray foam, but real and easy to underestimate if you're budgeting only for equipment and chemicals.",
        ],
      },
      {
        heading: "Working Capital Matters More Than People Expect",
        paragraphs: [
          "Beyond the one-time and recurring costs above, having enough working capital to cover a slow first few months — before referrals and repeat business start generating predictable cash flow — is one of the most commonly underestimated parts of a realistic startup budget. Underfunding this specific category is a more common reason new operations struggle in year one than underfunding the equipment purchase itself.",
        ],
      },
    ],
    keyTakeaways: [
      "Equipment cost spans a real range driven by new-vs-used and output/configuration choices — anyone quoting one number without asking your configuration is giving marketing, not a budget.",
      "Chemical cost is a recurring per-job expense requiring working capital before the revenue from those jobs arrives, not a one-time line item.",
      "PPE, training, and certification are real, commonly-omitted upfront costs — skipping them is a false economy given the actual health and liability stakes.",
      "Underfunded working capital for the slow early months is a more common cause of first-year struggle than underfunding equipment itself.",
    ],
    faqs: [
      {
        question: "How much does it cost to start a spray foam business?",
        answer: "There's a real, wide range depending on new vs. used equipment and output configuration — plus recurring chemical costs, PPE, training, licensing, insurance, and working capital for the slow early months. Anyone giving a single flat number without asking your specifics is oversimplifying.",
      },
      {
        question: "What startup costs do people most commonly forget to budget for?",
        answer: "Working capital to cover a slow first few months, and PPE/training/certification costs — both are real and commonly left off informal cost estimates that focus only on the rig itself.",
      },
      {
        question: "Are chemical costs a one-time or ongoing expense?",
        answer: "Ongoing — chemical cost scales per job with volume sprayed, and generally needs to be paid to the supplier before or at delivery, meaning you need working capital to cover chemical costs before your customer's payment arrives.",
      },
    ],
  },

  "spray-foam-chemical-suppliers-what-to-know-before-you-buy": {
    slug: "spray-foam-chemical-suppliers-what-to-know-before-you-buy",
    heroImage: "/images/topic-chemical-drums.jpg",
    heroImageAlt: "Spray foam chemical drums staged for delivery to a contractor",
    intro: [
      "Most new operators assume they'll buy chemicals directly from a manufacturer like BASF, Huntsman/Icynene-Lapolla, Carlisle, or similar. In practice, most contractors — especially at smaller volumes — buy through a regional distributor instead. Understanding how that actually works before your first order saves real confusion and cost.",
    ],
    sections: [
      {
        heading: "Manufacturer vs. Distributor: What Actually Changes",
        paragraphs: [
          "Manufacturers generally sell at volumes and terms structured for larger operations or through their own distributor networks rather than direct small-account relationships. Regional distributors — who purchase from manufacturers at scale and resell in smaller quantities — are the practical entry point for most new and smaller operators, and often also carry equipment, parts, and technical support alongside the chemicals themselves.",
        ],
      },
      {
        heading: "Minimum Order Quantities and What They Mean for Your Cash Flow",
        paragraphs: [
          "Most distributors have minimum order quantities, since two-component spray foam systems are shipped and stored as matched sets (A-side and B-side drums or totes together). A new operator needs to plan cash flow around that minimum order size, not around exactly how much a single job actually consumes — you're generally financing a chemical inventory buffer, not buying chemical job-by-job.",
        ],
      },
      {
        heading: "Storage and Shelf-Life Realities",
        paragraphs: [
          "Spray foam chemical components have real shelf-life and storage-temperature requirements — both components can degrade or become unusable if stored improperly or held too long before use. A new operator's chemical purchasing plan needs to account for realistic job volume so inventory actually gets used within its shelf life, rather than over-ordering to hit a distributor discount tier and then losing product to expiration.",
        ],
      },
      {
        heading: "Technical Support Is a Real Differentiator Between Suppliers",
        paragraphs: [
          "Beyond price, a distributor's willingness to provide real technical support — troubleshooting an off-ratio complaint, helping with product selection for an unusual assembly, standing behind a batch issue — varies meaningfully between suppliers. For a new operator without years of chemistry experience to fall back on, that support relationship is often worth more than a marginally better per-unit price, particularly in the first year or two while building that experience directly.",
        ],
      },
      {
        heading: "Building a Relationship With More Than One Supplier",
        paragraphs: [
          "Relying on a single supplier creates real business risk if that supplier has a supply disruption, price spike, or service issue. Many established operators maintain a working relationship with at least a backup supplier, even if they primarily buy from one — a reasonable practice to build toward as the business grows past its first year, rather than something a brand-new operator necessarily needs to set up day one.",
        ],
      },
    ],
    keyTakeaways: [
      "Most contractors buy through regional distributors, not directly from manufacturers — distributors are the practical entry point at smaller volumes.",
      "Minimum order quantities mean you're financing a chemical inventory buffer, not buying job-by-job — plan cash flow accordingly.",
      "Real shelf-life and storage-temperature limits mean over-ordering to hit a discount tier can cost you product to expiration.",
      "A distributor's technical support quality is a real differentiator worth weighing against price, especially for a new operator's first year or two.",
    ],
    faqs: [
      {
        question: "Do spray foam contractors buy chemicals directly from manufacturers like BASF or Huntsman?",
        answer: "Usually not at smaller volumes — most contractors buy through a regional distributor, who purchases from manufacturers at scale and resells in smaller quantities, often alongside equipment and technical support.",
      },
      {
        question: "Why do chemical suppliers require minimum order quantities?",
        answer: "Two-component systems ship and store as matched A-side/B-side sets, so distributors set minimum quantities around that — a new operator needs to plan cash flow around the minimum order size, not per-job consumption.",
      },
      {
        question: "Can spray foam chemicals expire before you use them?",
        answer: "Yes — both components have real shelf-life and storage-temperature requirements. Over-ordering to hit a discount tier without the job volume to use it in time risks losing product to expiration.",
      },
    ],
  },

  "ppe-and-safety-equipment-every-spray-foam-rig-needs": {
    slug: "ppe-and-safety-equipment-every-spray-foam-rig-needs",
    heroImage: "/images/topic-ppe.jpg",
    heroImageAlt: "Respirator and PPE equipment staged for a spray foam application job",
    intro: [
      "Spray foam PPE isn't generic construction safety gear — the primary hazard is airborne isocyanate exposure (almost always MDI) during and shortly after application, which calls for specific respiratory protection, not a standard dust mask or generic half-face respirator rated for other trades.",
    ],
    sections: [
      {
        heading: "Respiratory Protection Is the Core Requirement, and It's Application-Specific",
        paragraphs: [
          "The correct respiratory protection level depends on the specific application — an open, well-ventilated space allows different protection than a confined attic or crawlspace. Options range from a properly fitted, isocyanate-rated air-purifying respirator with the correct cartridges for open applications, up to supplied-air respirator systems for confined or poorly ventilated spaces where air-purifying protection isn't sufficient. Choosing the wrong protection level for the specific job — not just wearing \"a respirator\" — is the real safety requirement.",
        ],
      },
      {
        heading: "Fit Testing Isn't Optional",
        paragraphs: [
          "A respirator that isn't properly fit-tested to the individual wearer doesn't provide its rated protection level, regardless of how good the equipment itself is. Facial hair, an improperly sized mask, or a damaged seal all compromise protection in ways that are easy to overlook and genuinely dangerous given the specific hazard involved. Fit testing is a real, recurring requirement, not a one-time equipment purchase.",
        ],
      },
      {
        heading: "Coveralls, Gloves, and Eye Protection Round Out the Core Kit",
        paragraphs: [
          "Beyond respiratory protection, disposable or reusable coveralls appropriate for chemical exposure, chemical-resistant gloves, and eye protection are standard for anyone in or near the active spray zone. These are lower-cost items relative to respiratory equipment, but skipping them creates real skin and eye exposure risk that a respirator alone doesn't address.",
        ],
      },
      {
        heading: "Ventilation and Re-Entry Timing Are Part of the Safety Equipment Conversation",
        paragraphs: [
          "Adequate ventilation equipment (fans, exhaust setups appropriate to the space) and a clear understanding of manufacturer-specified re-entry timing after application are part of a complete safety plan, not separate from PPE. Correctly used PPE during application doesn't eliminate the need to manage air quality and re-entry timing for anyone entering the space afterward, including the homeowner.",
        ],
      },
      {
        heading: "Budgeting for PPE as an Ongoing Cost, Not a One-Time Purchase",
        paragraphs: [
          "Respirator cartridges, disposable coveralls, and gloves are consumables that need regular replacement — a new operator's budget should account for PPE as a recurring per-job cost, not a single upfront purchase that lasts indefinitely. Treating PPE replacement as optional to save money is a false economy given the real exposure risk involved.",
        ],
      },
    ],
    keyTakeaways: [
      "Respiratory protection needs match the specific application — confined spaces may require supplied-air systems, not just an air-purifying respirator.",
      "Fit testing is a real, recurring requirement — an improperly fitted respirator doesn't provide its rated protection regardless of equipment quality.",
      "Coveralls, gloves, and eye protection address real skin/eye exposure risk that respiratory protection alone doesn't cover.",
      "PPE consumables (cartridges, coveralls, gloves) are a recurring per-job cost to budget for, not a one-time equipment purchase.",
    ],
    faqs: [
      {
        question: "What respiratory protection does spray foam application actually require?",
        answer: "It depends on the specific application — open, well-ventilated spaces may allow a properly fitted, isocyanate-rated air-purifying respirator, while confined spaces like attics or crawlspaces often require supplied-air systems instead.",
      },
      {
        question: "Is fit testing really necessary for a spray foam respirator?",
        answer: "Yes — an improperly fitted respirator doesn't deliver its rated protection level regardless of equipment quality. Facial hair, wrong sizing, or a damaged seal all compromise protection.",
      },
      {
        question: "Is PPE a one-time cost when starting a spray foam business?",
        answer: "No — cartridges, disposable coveralls, and gloves are consumables that need regular replacement, so PPE should be budgeted as a recurring per-job cost, not a single upfront purchase.",
      },
    ],
  },

  "spray-foam-training-and-certification-where-to-start": {
    slug: "spray-foam-training-and-certification-where-to-start",
    heroImage: "/images/topic-training.jpg",
    heroImageAlt: "Hands-on spray foam application training session",
    intro: [
      "There's no single universal license required to spray foam nationwide, which makes the training and certification landscape genuinely confusing for someone starting out. This page covers the real, practical paths — manufacturer certification, SPFA resources, and hands-on training — rather than implying there's one official credential everyone needs.",
    ],
    sections: [
      {
        heading: "Manufacturer Certification Is Often the Practical Starting Point",
        paragraphs: [
          "Many chemical manufacturers and their distributors offer product-specific training and certification tied to the equipment and chemistry they sell — covering correct application technique, ratio awareness, and safety practices specific to that product line. This is frequently the most accessible entry point for a new operator, since it's often bundled with or available through the same relationship you're already building with an equipment or chemical supplier.",
        ],
      },
      {
        heading: "The Spray Polyurethane Foam Alliance (SPFA)",
        paragraphs: [
          "SPFA is the industry's professional association, and offers accreditation programs, technical resources, and professional certification pathways that carry credibility across the industry rather than being tied to one manufacturer's product line. SPFA credentials can matter for larger commercial jobs, some code-compliance contexts, and building general industry credibility beyond what a single manufacturer's certification demonstrates.",
        ],
      },
      {
        heading: "Hands-On Training Is Genuinely Different From Classroom or Online Certification",
        paragraphs: [
          "Correct spray-gun technique — distance, angle, pass speed, overlap — is a physical, practiced skill that classroom or online certification alone doesn't teach. Real hands-on training, whether through a manufacturer's in-person program, an experienced mentor, or working alongside an established crew before going independent, is a genuinely different and complementary requirement to formal certification, not a redundant extra step.",
        ],
      },
      {
        heading: "State and Local Licensing Requirements Vary and Need Separate Research",
        paragraphs: [
          "Beyond industry certification, state and local contractor licensing requirements for insulation or spray foam work vary significantly by jurisdiction, and are a separate research task from manufacturer or SPFA certification. Checking your specific state and local requirements directly — rather than assuming a national standard exists — is a necessary, easy-to-skip step.",
        ],
      },
      {
        heading: "A Realistic Sequencing for Someone Starting Out",
        paragraphs: [
          "A practical path for most new operators: research state/local licensing requirements first (since this can affect timeline and cost), pursue manufacturer certification tied to the equipment and chemistry you're planning to use, get genuine hands-on practice before working unsupervised, and consider SPFA accreditation as the business grows and commercial opportunities that value that credential come up. Skipping straight to buying equipment before understanding this sequence is a common, avoidable mistake.",
        ],
      },
    ],
    keyTakeaways: [
      "There's no single universal national license — manufacturer certification, SPFA accreditation, and state/local licensing are separate, complementary pieces.",
      "Manufacturer certification is often the most accessible starting point, frequently bundled with equipment or chemical supplier relationships.",
      "SPFA accreditation offers industry-wide credibility beyond any single manufacturer's product-specific certification.",
      "Hands-on practice is genuinely distinct from classroom/online certification — spray-gun technique is a physical skill that has to be practiced, not just studied.",
    ],
    faqs: [
      {
        question: "Is there a single national certification required to spray foam?",
        answer: "No — there's no universal national license. Manufacturer certification, SPFA accreditation, and state/local contractor licensing are separate pieces that vary by product line and jurisdiction.",
      },
      {
        question: "Where should someone new to the trade start with training?",
        answer: "Research state/local licensing requirements first, then pursue manufacturer certification tied to your planned equipment, get real hands-on practice before working unsupervised, and consider SPFA accreditation as the business grows.",
      },
      {
        question: "Is online certification enough to start spraying foam professionally?",
        answer: "No — correct spray-gun technique is a physical, practiced skill. Classroom or online certification is a genuinely different requirement from real hands-on training, not a substitute for it.",
      },
    ],
  },
};
