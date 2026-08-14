"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Discover", copy: "We dig into your business, audience, and competitors before a single design decision is made." },
  { n: "02", title: "Define", copy: "Strategy, positioning, and messaging get locked down so every choice after this has a reason." },
  { n: "03", title: "Design", copy: "Identity, marketing, and merchandise come to life, built to hold up across every touchpoint." },
  { n: "04", title: "Deliver", copy: "We launch, measure, and keep refining — a brand is a system, not a one-time project." },
];

export default function Process() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
          How We Work
        </span>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-purple max-w-lg">
          A process built for clarity, not chaos.
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display italic text-3xl text-gold">{s.n}</span>
              <h3 className="mt-3 font-display text-xl text-purple">{s.title}</h3>
              <p className="mt-2 font-sans text-sm text-stone leading-relaxed">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
