"use client";

import { useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";

const CATEGORIES: (CaseStudy["category"] | "All")[] = [
  "All",
  "Branding & Identity",
  "Embroidery & Merchandise",
  "Marketing Solutions",
  // "Paid Media Management",
];

export default function CaseStudiesGrid({ items }: { items: CaseStudy[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = filter === "All" ? items : items.filter((c) => c.category === filter);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sans text-[11px] tracking-[0.15em] uppercase px-4 py-2 border transition-colors button-pop ${
                filter === cat
                  ? "bg-purple text-white border-purple"
                  : "border-charcoal/20 text-charcoal/70 hover:border-purple hover:text-purple"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex min-h-[240px] items-center justify-center">
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-purple text-center">
            Coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
