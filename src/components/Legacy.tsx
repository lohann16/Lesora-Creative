"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Skyline from "./Skyline";

export default function Legacy() {
  return (
    <section className="relative bg-white py-32 lg:py-44 overflow-hidden">
      <Skyline className="absolute bottom-0 left-0 w-full h-40 text-purple/[0.05]" />
      <motion.div
        className="pointer-events-none absolute right-10 top-10 h-44 w-44 rounded-full bg-gold/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 overflow-hidden rounded-[2rem] border border-charcoal/10 bg-purple/5 shadow-[0_30px_80px_-40px_rgba(98,70,234,0.25)]"
        >
          <Image
            src="/Legacy.png"
            alt="Global brand legacy"
            width={1200}
            height={700}
            className="w-full object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-purple"
        >
          We don&rsquo;t just create brands,
          <br />
          we build <span className="italic text-gold">legacies.</span>
        </motion.p>
      </div>
    </section>
  );
}
