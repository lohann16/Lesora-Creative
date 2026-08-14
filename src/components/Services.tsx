"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PenTool, Shirt, Megaphone, TrendingUp } from "lucide-react";

// The four services we offer. Each one just needs an icon, a title, and a

const SERVICES = [
  {
    icon: PenTool,
    title: "Branding & Identity",
    description: "Memorable brands that reflect your business and resonate with your audience.",
    imageSrc: "/Branding.jpeg",
    imageAlt: "Branding and identity visuals",
  },
  {
    icon: Shirt,
    title: "Embroidery & Merchandise",
    description: "Quality embroidery and branded merchandise that brings your brand to life.",
    imageSrc: "/Embroidery.jpeg",
    imageAlt: "Merchandise and embroidery mockup",
  },
  {
    icon: Megaphone,
    title: "Marketing Solutions",
    description: "Strategic marketing solutions that increase visibility and drive engagement.",
    imageSrc: "/Marketing.jpeg",
    imageAlt: "Marketing visuals and strategy",
  },
  {
    icon: TrendingUp,
    title: "Paid Media Management",
    description: "Targeted campaigns that deliver results and maximize your return on investment.",
    imageSrc: "/Ads.jpeg",
    imageAlt: "Paid media campaign performance",
  },
];


const listAnimation = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-purple/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl mb-16">
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-purple">
            Every service, one standard.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={listAnimation}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardAnimation}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="bg-white p-8 border-t-2 border-transparent hover:border-gold transition-colors duration-300 group"
            >
              <div className="mb-6 overflow-hidden rounded-[1.5rem] bg-purple/5">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={350}
                  height={220}
                  className="h-full w-full object-cover"
                />
              </div>
              <service.icon
                strokeWidth={1.25}
                size={32}
                className="text-gold group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-6 font-display text-xl text-purple">{service.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 rounded-[2rem] border border-charcoal/10 bg-purple/5 p-8 lg:flex lg:items-center lg:justify-between gap-8">
          <div className="max-w-3xl">
            <h3 className="font-display text-3xl text-purple">
              Visual systems that shape customer journeys.
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal/80">
              Every brand deserves imagery that feels premium and performs seamlessly across print, web, and campaigns.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[260px] lg:mx-0">
            <Image
              src="/Visual.png"
              alt="Brand and marketing visuals"
              width={260}
              height={260}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
