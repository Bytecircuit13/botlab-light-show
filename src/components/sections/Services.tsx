"use client";

import { motion, Variants } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function Services() {
  const cardVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="relative z-10 py-28">
      {/* Right-aligned glass panel */}
      <div className="flex justify-end px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full p-10 md:p-14 glass-dark border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent-gold font-bold uppercase block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase mb-4">
            {CONTENT.services.headline}
          </h2>
          <div className="h-[2px] w-12 bg-accent-gold mb-6" />
          <p className="text-sm text-white/55 font-light leading-relaxed mb-10">
            {CONTENT.services.intro}
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CONTENT.services.categories.map((cat, i) => (
              <motion.div
                key={i}
                variants={cardVars}
                className="p-6 border border-white/8 bg-white/[0.03] group hover:border-accent-gold/25 transition-all duration-300"
              >
                <span className="text-[8px] tracking-widest text-white/20 font-bold uppercase block mb-4">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-black uppercase tracking-wider mb-4 group-hover:text-accent-gold transition-colors duration-300">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/50 font-light leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 bg-accent-gold/60 rotate-45 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
