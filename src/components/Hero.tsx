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
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/Hero.jpeg')",
        }}
        aria-hidden="true"
      />

      {/* Gold glow */}
      <motion.div
        className="pointer-events-none absolute right-10 top-28 h-64 w-64 rounded-full blur-3xl"
        style={{
          backgroundColor: "rgba(185, 154, 91, 0.10)",
        }}
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealContainer}
          >

            {/* Eyebrow */}
            <motion.p
              variants={revealItem}
              className="mt-8 font-sans text-[11px] uppercase tracking-[0.35em]"
              style={{
                color: "#B99A5B",
              }}
            >
              Branding &middot; Marketing &middot; Impact
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={revealItem}
              className="mt-6 font-display font-bold leading-[0.95] text-[13vw] sm:text-7xl lg:text-8xl"
            >

              {/* MAKE YOUR */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 32,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                  style={{
                    color: "#211117",
                    WebkitTextStroke: "1.5px #B99A5B",
                    paintOrder: "stroke fill",
                  }}
                >
                  WE BUILD BRANDS PEOPLE
                </motion.span>
              </span>

              {/* MARK */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 32,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block italic"
                  style={{
                    color: "#B99A5B",
                  }}
                >
                  REMEMBER
                </motion.span>
              </span>

            </motion.h1>

            {/* Description */}
            <motion.p
              variants={revealItem}
              className="mt-8 max-w-md font-sans text-[15px] leading-relaxed"
              style={{
                color: "#D8C9B0",
              }}
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