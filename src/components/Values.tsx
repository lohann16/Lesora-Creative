"use client";

import { motion } from "framer-motion";

const VALUES: { word: string; copy: string }[] = [
  { word: "Creative", copy: "We look for the angle no one else has tried yet." },
  { word: "Authentic", copy: "Your brand should sound like you, not like everyone else." },
  { word: "Strategic", copy: "Every decision traces back to a business goal." },
  { word: "Bold", copy: "Safe brands get ignored. We build ones that don't." },
  { word: "Impactful", copy: "We measure success in outcomes, not just deliverables." },
  { word: "Premium", copy: "Craft and care show up in the smallest details." },
  
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Values() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
          What We Stand For
        </span>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-charcoal max-w-lg">
          Seven words we hold ourselves to.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10"
        >
          {VALUES.map((v) => (
            <motion.div key={v.word} variants={item} className="bg-white p-8">
              <h3 className="font-display italic text-2xl text-purple">{v.word}</h3>
              <p className="mt-3 font-sans text-sm text-stone leading-relaxed">{v.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
