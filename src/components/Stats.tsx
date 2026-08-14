"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const durationMs = 1500;
    const steps = 40; // how many times we update the number during the animation
    const stepTime = durationMs / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCount(Math.round(to * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// The three business goals shown in this section, taken from the brand's
// goals list. Add or remove goals here without touching the layout below.
const GOALS = [
  { value: 1000, suffix: "+", label: "Businesses empowered with strong brands" },
  { value: 2, suffix: " continents", label: "Local and global reach expanding" },
  { value: 1, suffix: "st choice", label: "The go-to creative partner for ambitious brands" },
];

export default function Stats() {
  return (
    <section id="impact" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl mb-16">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            Our Goals
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-charcoal">
            Purpose. Passion. Progress.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-12">
          {GOALS.map((goal, index) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-5xl lg:text-6xl text-purple">
                <Counter to={goal.value} suffix={goal.suffix} />
              </p>
              <div className="hairline w-12 my-5" />
              <p className="font-sans text-stone text-sm leading-relaxed max-w-[220px]">
                {goal.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
