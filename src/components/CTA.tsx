"use client";

import { motion } from "framer-motion";
import Monogram from "./Monogram";

// A reusable "call to action" banner. It's used at the bottom of several
// pages, so the button link and optional eyebrow text are passed in as
// props rather than hard-coded.
export default function CTA({
  href = "#contact",
  eyebrow,
}: {
  href?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative bg-white py-28 lg:py-36 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-0 top-8 h-36 w-36 rounded-full bg-purple/10 blur-3xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-sans text-[11px] tracking-[0.3em] uppercase text-gold"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Monogram size={192} className="mx-auto" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 font-display text-4xl sm:text-5xl leading-tight text-purple"
        >
          Make your mark.
          <br />
          <span className="italic text-gold">We&rsquo;ll make it unforgettable.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href={href}
            className="inline-flex items-center gap-3 bg-purple text-white px-8 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-purple/90 transition-colors button-pop"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
