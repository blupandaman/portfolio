"use client";

import { motion } from "framer-motion";

export function ProjectCard() {
  return (
    <motion.div
      className="size-20 bg-red-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
