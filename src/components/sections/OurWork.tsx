"use client";

import { motion, Variants } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function OurWork() {
  const itemVars: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="work" className="relative z-10 py-28">
      {/* Left-aligned glass panel */}
      <div className="flex justify-start px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full p-10 md:p-14 glass-dark border border-white/10 backdrop-blur-xl"
        >
          <span className="text-[10px] tracking-[0.4em] text-accent-gold font-bold uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase mb-6">
            {CONTENT.work.headline}
          </h2>
          <div className="h-[2px] w-12 bg-accent-gold mb-10" />

          <div className="space-y-0">
            {CONTENT.work.events.map((event, i) => (
              <motion.div
                key={i}
                variants={itemVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="group grid grid-cols-12 gap-4 items-baseline py-4 border-b border-white/5 last:border-b-0"
              >
                <div className="col-span-3">
                  <span className="text-xl md:text-2xl font-black text-accent-gold tracking-wide">
                    {event.drones}
                  </span>
                  <span className="block text-[8px] tracking-widest text-white/30 uppercase font-bold mt-0.5">
                    Drones
                  </span>
                </div>
                <div className="col-span-9">
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-white/90">
                    {event.title}
                  </h3>
                  <p className="text-[11px] text-white/40 font-light mt-0.5 leading-relaxed">
                    {event.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
