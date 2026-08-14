import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import CTA from "@/components/CTA";
import Monogram from "@/components/Monogram";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Case Study — Lesora Creative`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main className="pt-20">
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <Monogram
          size={1080}
          animate={false}
          color="rgba(200,162,93,0.06)"
          className="absolute -right-24 -top-24 pointer-events-none"
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-stone hover:text-purple transition-colors"
          >
            <ArrowLeft size={14} /> All Case Studies
          </Link>

          <span className="mt-8 block font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            {cs.category}
          </span>
          <h1 className="mt-4 font-display text-5xl lg:text-6xl leading-tight text-purple">
            {cs.client}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-stone text-lg italic font-display">
            {cs.tagline}
          </p>
        </div>
      </section>

      <section className="bg-gold py-10">
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-3 gap-6">
          {cs.results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-purple">{r.stat}</p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-wide text-purple/70">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-display italic text-2xl text-gold">The Challenge</span>
            <div className="hairline w-14 mt-4 mb-6" />
            <p className="font-sans text-charcoal/80 leading-relaxed">{cs.challenge}</p>
          </div>

          <div>
            <span className="font-display italic text-2xl text-gold">Our Approach</span>
            <div className="hairline w-14 mt-4 mb-6" />
            <ul className="space-y-4">
              {cs.approach.map((step) => (
                <li key={step} className="font-sans text-charcoal/80 leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-gold" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA eyebrow="Like what you see?" href="/#contact" />
    </main>
  );
}
