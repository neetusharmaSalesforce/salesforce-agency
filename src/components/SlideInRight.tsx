"use client";

import { motion } from "framer-motion";

type SlideInRightProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function SlideInRight({
  children,
  delay = 0,
}: SlideInRightProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}