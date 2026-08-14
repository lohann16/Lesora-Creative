"use client";

import { motion } from "framer-motion";

// The words that scroll across the gold banner.
const WORDS = ["Creative", "Authentic", "Strategic", "Bold", "Impactful", "Premium", "Growth"];

export default function Marquee() {
  
  const words = [...WORDS, ...WORDS];

  return (
    <div className="relative bg-gold py-4 overflow-hidden select-none">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {/* Two identical copies of the word list, so the animation loops seamlessly */}
        {[0, 1].map((copyNumber) => (
          <div key={copyNumber} className="flex">
            {words.map((word, index) => (
              <span
                key={`${copyNumber}-${index}`}
                className="mx-6 font-sans text-[13px] font-semibold tracking-[0.25em] uppercase text-purple flex items-center gap-6"
              >
                {word}
                <span className="text-purple/40">&#9670;</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
