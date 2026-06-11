"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "cyan" | "blue";
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "cyan",
}: ButtonProps) {
  const isCyan = variant === "cyan";
  const borderColor = isCyan ? "border-accent-cyan" : "border-accent-blue";
  const textColor = isCyan ? "text-accent-cyan" : "text-accent-blue";
  const hoverBg = isCyan ? "hover:bg-accent-cyan/15" : "hover:bg-accent-blue/15";
  const glowColor = isCyan ? "rgba(0, 229, 255, 0.3)" : "rgba(41, 98, 255, 0.3)";

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        boxShadow: `0 0 25px ${glowColor}, inset 0 0 10px ${glowColor}` 
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-8 py-3 bg-transparent border-2 ${borderColor} ${textColor} ${hoverBg} font-sans text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  );
}
