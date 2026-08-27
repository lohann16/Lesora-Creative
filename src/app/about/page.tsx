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
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <Skyline className="absolute bottom-0 left-0 w-full h-40 text-purple/[0.05]" />
        <Reveal className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Monogram size={216} />
          <span className="mt-8 block font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            About Lesora Creative
          </span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl leading-tight max-w-2xl text-purple">
            Behind every mark
            <br />
            is a <span className="italic text-gold">method.</span>
          </h1>
          <p className="mt-6 max-w-lg font-sans text-stone text-[15px] leading-relaxed">
           We lead with performance because brands need more than visibility — they need movement. Our marketing work is built around clear objectives, audience understanding, strong creative, measurable KPIs, and continuous optimisation. 01 DISCOVER — Understand the business, audience, market and objectives. 02 STRATEGISE — Build the marketing and creative direction around the goal. 03 CREATE — Develop content and assets designed to capture attention.04 EXECUTE — Launch across the right platforms and touchpoints. 05 MEASURE — Track agreed KPIs and turn performance into insight. 06 OPTIMISE — Use data to improve the next decision. Because a strong brand should do more than look good. It should communicate value, build credibility, create connection and give businesses the confidence to compete on more than price.
          </p>
        </Reveal>
      </section>

      <VisionMission />
      <Values />
      <Process />
      <Stats />
      <CTA eyebrow="Want to work together?" href="/#contact" />
    </main>
  );
}
