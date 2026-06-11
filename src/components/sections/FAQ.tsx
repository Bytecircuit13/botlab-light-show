"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-28">
      {/* Right-aligned glass panel */}
      <div className="flex justify-end px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full p-10 md:p-14 glass-dark border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent-gold font-bold uppercase block mb-3">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase mb-6">
            FAQs
          </h2>
          <div className="h-[2px] w-12 bg-accent-gold mb-10" />

          <div className="space-y-4">
            {CONTENT.faq.map((item, i) => (
              <div
                key={i}
                className="border border-white/8 hover:border-accent-gold/20 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/80">
                    {item.q}
                  </span>
                  <span
                    className={`text-accent-gold text-lg font-light transition-transform duration-300 shrink-0 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-xs text-white/50 font-light leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
