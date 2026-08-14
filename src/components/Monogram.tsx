"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Monogram({
  size = 200,
  className = "",
  animate = true,
  style,
  src = "/LesoraLogo1.png",
}: {
  size?: number;
  color?: string;
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
  src?: string;
}) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, ...style }}
      initial={false}
      animate={
        animate
          ? { scale: [0.98, 1.02, 0.98], rotate: [0, 1.5, 0, -1.5, 0] }
          : undefined
      }
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt="Lesora logo"
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
}
