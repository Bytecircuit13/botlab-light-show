"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28">
      {/* Right-aligned glass panel */}
      <div className="flex justify-end px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl p-10 md:p-14 glass-dark border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent-gold font-bold uppercase block mb-3">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase leading-tight mb-6">
            {CONTENT.about.headline}
          </h2>
          <div className="h-[2px] w-12 bg-accent-gold mb-8" />
          <p className="text-sm md:text-base text-white/70 leading-[1.9] font-light">
            {CONTENT.about.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
