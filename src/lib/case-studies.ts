export type CaseStudy = {
  slug: string;
  client: string;
  category: "Branding & Identity" | "Embroidery & Merchandise" | "Marketing Solutions" | "Paid Media Management";
  tagline: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { stat: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "solace-skincare",
    client: "Solace Skincare",
    category: "Branding & Identity",
    tagline: "From drugstore shelf to premium apothecary",
    summary:
      "A full identity overhaul that repositioned an everyday skincare line as a premium, ingredient-led apothecary brand.",
    challenge:
      "Solace had strong products but a generic, drugstore-adjacent identity that undersold their formulations and made it hard to compete on anything but price.",
    approach: [
      "Rebuilt the brand identity around a refined wordmark, apothecary-inspired color palette, and considered packaging system",
      "Developed a tone-of-voice guide that let the product speak plainly and confidently, without over-claiming",
      "Rolled the new identity out across packaging, retail displays, and e-commerce",
    ],
    results: [
      { stat: "3.1x", label: "Increase in average order value" },
      { stat: "+2", label: "New national retail partners" },
      { stat: "48%", label: "Lift in repeat purchase rate" },
    ],
  },
  {
    slug: "forge-fitness",
    client: "Forge Fitness Co.",
    category: "Embroidery & Merchandise",
    tagline: "Turning members into a walking billboard",
    summary:
      "A branded merchandise and embroidery program that gave a 40-location gym franchise a new revenue line and stronger member loyalty.",
    challenge:
      "Forge had a loyal member base but no consistent branded merchandise, missing an easy revenue stream and a low-cost way to build local visibility.",
    approach: [
      "Designed a core apparel and accessories line built around a simplified, embroidery-friendly mark",
      "Set up a franchise-wide ordering system so every location could stock and reorder consistently",
      "Introduced seasonal drops to keep the range feeling fresh rather than static",
    ],
    results: [
      { stat: "40+", label: "Locations onboarded to the program" },
      { stat: "New", label: "Revenue line from merchandise sales" },
      { stat: "22%", label: "Increase in member referrals" },
    ],
  },
  {
    slug: "nettle-and-co",
    client: "Nettle & Co",
    category: "Marketing Solutions",
    tagline: "Repositioning a café chain as a neighborhood ritual",
    summary:
      "A brand repositioning and local marketing campaign that turned a mid-size café chain into a genuine neighborhood habit.",
    challenge:
      "Nettle & Co had good coffee and worse foot traffic than nearby independents, with marketing that read as corporate rather than local.",
    approach: [
      "Repositioned messaging around neighborhood rituals rather than product features",
      "Built a local-first content and events calendar for each location",
      "Coordinated in-store, social, and community partnerships around a single seasonal theme",
    ],
    results: [
      { stat: "65%", label: "Increase in weekday foot traffic" },
      { stat: "2.4x", label: "Growth in social following" },
      { stat: "12", label: "Local partnerships launched in year one" },
    ],
  },
  {
    slug: "vantage-realty-group",
    client: "Vantage Realty Group",
    category: "Paid Media Management",
    tagline: "Cutting cost-per-lead without cutting corners",
    summary:
      "A paid media overhaul that improved lead quality and cut acquisition costs for a regional real estate group.",
    challenge:
      "Vantage was spending steadily on ads but leads were inconsistent in quality, and the team had no clear view of which campaigns actually converted.",
    approach: [
      "Audited existing campaigns and rebuilt tracking so every lead could be traced to its source",
      "Restructured campaigns around buyer intent rather than broad geographic targeting",
      "Ran a continuous testing cycle on creative and landing pages",
    ],
    results: [
      { stat: "3.2x", label: "Return on ad spend" },
      { stat: "-51%", label: "Reduction in cost-per-lead" },
      { stat: "+34%", label: "Increase in qualified showings booked" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
