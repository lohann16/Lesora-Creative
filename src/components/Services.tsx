"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PenTool, Shirt, Megaphone,TrendingUp, Phone,Tent, Gift,} from "lucide-react";

const SERVICES = [
  {
    icon: PenTool,
    title: "Branding & Identity",
    description:
      "Memorable brands that reflect your business and resonate with your audience.",
    imageSrc: "/Branding.jpeg",
    imageAlt: "Branding and identity visuals",
  },
  {
    icon: Shirt,
    title: "Embroidery & Merchandise",
    description:
      "Quality embroidery and branded merchandise that brings your brand to life.",
    imageSrc: "/Embroidery.jpeg",
    imageAlt: "Merchandise and embroidery mockup",
  },
  {
    icon: Megaphone,
    title: "Marketing Solutions",
    description:
      "Strategic marketing solutions that increase visibility and drive engagement.",
    imageSrc: "/Marketing.jpeg",
    imageAlt: "Marketing visuals and strategy",
  },
  {
    icon: TrendingUp,
    title: "Paid Media Management",
    description:
      "Targeted campaigns that deliver results and maximize your return on investment.",
    imageSrc: "/Ads.jpeg",
    imageAlt: "Paid media campaign performance",
  },
  {
    icon: Phone,
    title: "Content Creation",
    description:
      "Engaging content that tells your story and connects with your audience.",
    imageSrc: "/Content.png",
    imageAlt: "Content creation visuals",
  },
  {
    icon: Tent,
    title: "Event Planning & Management",
    description:
      "Seamless event planning and management that leaves a lasting impression.",
    imageSrc: "/Event.png",
    imageAlt: "Event planning and management visuals",
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    description:
      "Thoughtful corporate gifts that strengthen relationships and show appreciation.",
    imageSrc: "/Gift.png",
    imageAlt: "Corporate gifts and branding",
  },
  {
    icon: Megaphone,
    title: "Posters, Flyers, and Signage",
    description:
      "Eye-catching posters, flyers, and signage that effectively communicate your message.",
    imageSrc: "/Posters.png",
    imageAlt: "Posters, flyers, and signage visuals",
  },
];

const listAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28 lg:py-36"
    >
      {/* Decorative Gold Glow */}
      <motion.div
        initial={{
          opacity: 0,
          x: -120,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Decorative Purple Glow */}
      <motion.div
        initial={{
          opacity: 0,
          x: 120,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-purple/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mb-16 max-w-xl">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            What We Do
          </span>

          <h2 className="mt-4 font-display text-4xl leading-tight text-purple lg:text-5xl">
            Every service, one standard.
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={listAnimation}
          className="grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              className="group border-t-2 border-transparent bg-white p-8 transition-colors duration-300 hover:border-gold"
            >
              {/* Service Image with Gold Border */}
              <div className="mb-6 overflow-hidden rounded-[1.5rem] border-2 border-gold bg-purple/5">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={350}
                  height={220}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Service Icon */}
              <service.icon
                strokeWidth={1.25}
                size={32}
                className="text-gold transition-transform duration-300 group-hover:scale-110"
              />

              {/* Service Title */}
              <h3 className="mt-6 font-display text-xl text-purple">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Systems */}
        <div className="mt-16 gap-8 rounded-[2rem] border border-charcoal/10 bg-white p-8 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="font-display text-3xl text-purple">
              Visual systems that shape customer journeys.
            </h3>

            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal/80">
              Every brand deserves imagery that feels premium and performs
              seamlessly across print, web, and campaigns.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[260px] lg:mx-0">
            <Image
              src="/Visual.png"
              alt="Brand and marketing visuals"
              width={260}
              height={260}
              className="h-full w-full rounded-[1.5rem] border-2 border-gold object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}