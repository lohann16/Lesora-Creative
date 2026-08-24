"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        hasScrolled ? "shadow-sm border-b border-charcoal/5" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/LesoraLogo1.png"
            alt="Lesora Creative"
            width={50}
            height={50}
            className="h-8 w-8 rounded-full object-cover"
            priority
          />
          <span className="font-[Montserrat] font-large text-lg tracking-wide text-charcoal">
    LESORA <span className="text-gold">CREATIVE</span>
</span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 font-sans text-[11px] tracking-[0.2em] uppercase text-charcoal/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-2 hover:text-purple transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 bg-purple text-white text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-purple/90 transition-colors button-pop"
        >
          Make Your Mark
        </Link>
      </nav>
    </motion.header>
  );
}