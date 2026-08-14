import type { Metadata } from "next";
import Link from "next/link";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Lesora Creative",
  description:
    "Real results from Lesora Creative's branding, merchandise, marketing, and paid media work.",
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">
      <section className="bg-white py-24 lg:py-32">
        <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            Case Studies
          </span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl leading-tight max-w-2xl text-purple">
            Proof, not promises.
          </h1>
          <p className="mt-6 max-w-lg font-sans text-stone text-[15px] leading-relaxed">
            Every brand we build is measured against real outcomes. Here&rsquo;s
            a look at how that plays out across branding, merchandise,
            marketing, and paid media.
          </p>
        </Reveal>
      </section>

      <CaseStudiesGrid items={CASE_STUDIES} />

      <CTA
        eyebrow="Ready to see your own results here?"
        href="/#contact"
      />
    </main>
  );
}
