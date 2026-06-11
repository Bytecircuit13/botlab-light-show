"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function Awards() {
  return (
    <section id="awards" className="relative z-10 py-28">
      {/* Left-aligned glass panel */}
      <div className="flex justify-start px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full p-10 md:p-14 glass-dark border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent-gold font-bold uppercase block mb-3">
            Accolades
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase mb-6">
            {CONTENT.awards.headline}
          </h2>
          <div className="h-[2px] w-12 bg-accent-gold mb-10" />

          <div className="space-y-6">
            {CONTENT.awards.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pb-6 border-b border-white/5 last:border-b-0 last:pb-0"
              >
                <span className="text-[9px] tracking-widest text-accent-gold font-bold uppercase block mb-1">
                  {item.role}
                </span>
                <h3 className="text-base font-black uppercase tracking-wider mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">
                  {item.award}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
