"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function VisionMission() {
  return (
    <section id="vision" className="relative bg-white py-28 lg:py-36 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute left-0 top-24 h-52 w-52 rounded-full bg-purple/10 blur-3xl"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <span className="font-display italic text-3xl text-gold">Vision</span>
          <div className="hairline w-16 mt-4 mb-6" />
          <p className="font-sans text-charcoal/80 text-lg leading-relaxed max-w-md">
            To be a leading creative agency known for building powerful
            brands, driving meaningful connections and helping businesses
            leave a lasting impression.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          transition={{ delay: 0.15 }}
        >
          <span className="font-display italic text-3xl text-gold">Mission</span>
          <div className="hairline w-16 mt-4 mb-6" />
          <p className="font-sans text-charcoal/80 text-lg leading-relaxed max-w-md">
            We craft premium branding and marketing solutions designed to
            help businesses stand out, grow, and make their mark.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-center">
          <div>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
              Creative output
            </span>
            <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-purple">
              Picture the possibilities.
            </h3>
            <p className="mt-6 max-w-2xl font-sans text-charcoal/80 text-lg leading-relaxed">
              From digital assets to brand systems, every visual touchpoint supports the story your audience remembers.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] overflow-hidden bg-purple/5 shadow-xl shadow-purple/10"
          >
            <Image
              src="/PicturePossibilities.png"
              alt="Creative visuals and design systems"
              width={450}
              height={450}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
