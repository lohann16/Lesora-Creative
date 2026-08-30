"use client";

import { motion } from "framer-motion";
import Monogram from "./Monogram";
import Skyline from "./Skyline";

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/Hero.jpeg')" }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute right-10 top-28 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pt-28 pb-20">
        <div className="grid gap-12 items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealContainer}
          >
            <motion.p
              variants={revealItem}
              className="mt-8 font-sans text-[11px] tracking-[0.35em] uppercase text-gold"
            >
              Branding &middot; Marketing &middot; Impact
            </motion.p>

            <motion.h1
              variants={revealItem}
              className="mt-6 font-display font-bold leading-[0.95] text-[13vw] sm:text-7xl lg:text-8xl text-purple"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  Make Your
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block italic text-gold"
                >
                  Mark.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              variants={revealItem}
              className="mt-8 max-w-md font-sans text-white text-[15px] leading-relaxed"
            >
              Lesora Creative builds premium brand identities and marketing
              systems for businesses ready to be unmistakable. Our vision. Our
              purpose. Your impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}