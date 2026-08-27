import type { Metadata } from "next";

import Monogram from "@/components/Monogram";
import Skyline from "@/components/Skyline";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Lesora Creative",
  description:
    "Lesora Creative is a branding and marketing agency built on one idea: help ambitious businesses make their mark.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero / About Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <Skyline className="absolute bottom-0 left-0 h-40 w-full text-purple/[0.05]" />

        <Reveal className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Monogram size={216} />

          <span className="mt-8 block font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            About Lesora Creative
          </span>

          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-purple lg:text-6xl">
            Behind every mark
            <br />
            is a <span className="italic text-gold">method.</span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl font-sans text-[15px] leading-relaxed text-stone">
            We lead with performance because brands need more than visibility —
            they need movement. Our marketing work is built around clear
            objectives, audience understanding, strong creative, measurable
            KPIs, and continuous optimisation.
          </p>

          {/* Marketing Process */}
          <div className="mt-10 max-w-2xl space-y-5 font-sans">
            {[
              {
                number: "01",
                title: "DISCOVER",
                text: "Understand the business, audience, market and objectives.",
              },
              {
                number: "02",
                title: "STRATEGISE",
                text: "Build the marketing and creative direction around the goal.",
              },
              {
                number: "03",
                title: "CREATE",
                text: "Develop content and assets designed to capture attention.",
              },
              {
                number: "04",
                title: "EXECUTE",
                text: "Launch across the right platforms and touchpoints.",
              },
              {
                number: "05",
                title: "MEASURE",
                text: "Track agreed KPIs and turn performance into insight.",
              },
              {
                number: "06",
                title: "OPTIMISE",
                text: "Use data to improve the next decision.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex gap-5 border-b border-purple/10 pb-5"
              >
                {/* Number */}
                <span className="min-w-[32px] font-display text-lg text-gold">
                  {step.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-sans text-sm font-bold tracking-[0.12em] text-purple">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-relaxed text-stone">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="mt-10 max-w-2xl font-sans text-[15px] leading-relaxed text-stone">
            Because a strong brand should do more than look good. It should
            communicate value, build credibility, create connection, and give
            businesses the confidence to compete on more than price.
          </p>
        </Reveal>
      </section>

      {/* Vision & Mission */}
      <VisionMission />

      {/* Values */}
      <Values />

      {/* Process */}
      <Process />

      {/* Statistics */}
      <Stats />

      {/* Call To Action */}
      <CTA eyebrow="Want to work together?" href="/#contact" />
    </main>
  );
}