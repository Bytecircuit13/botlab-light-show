"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen w-full flex flex-col justify-center px-8 md:px-20 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] md:text-xs tracking-[0.4em] text-accent-gold font-bold uppercase mb-4"
        >
          BotLab Dynamics
        </motion.p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-white leading-[1.05] uppercase drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
          {CONTENT.hero.title}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="#contact"
            className="inline-block px-10 py-4 bg-accent-gold text-black text-sm font-black uppercase tracking-[0.3em] hover:bg-accent-gold/90 hover:shadow-[0_0_30px_rgba(224,186,77,0.4)] transition-all duration-300"
          >
            {CONTENT.hero.cta}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-8 md:left-20 lg:left-32 flex items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-accent-gold/40 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute w-full h-4 bg-accent-gold"
          />
        </div>
        <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
