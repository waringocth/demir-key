"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: "fade-up" | "fade-right" | "zoom-in";
}

export default function FadeIn({ children, delay = 0, className = "", type = "fade-up" }: FadeInProps) {
  let initial = {};
  let animate = {};

  if (type === "fade-up") {
    initial = { opacity: 0, y: 50 };
    animate = { opacity: 1, y: 0 };
  } else if (type === "fade-right") {
    initial = { opacity: 0, x: -50 };
    animate = { opacity: 1, x: 0 };
  } else if (type === "zoom-in") {
    initial = { opacity: 0, scale: 0.8 };
    animate = { opacity: 1, scale: 1 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
