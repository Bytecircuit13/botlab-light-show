"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import Link from "next/link";

export default function Footer() {
  const c = CONTENT.contact;

  return (
    <footer id="contact" className="relative z-10 py-20">
      {/* Center glass panel for contact */}
      <div className="flex justify-center px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full p-10 md:p-16 glass-dark border border-white/10 backdrop-blur-xl text-center"
        >
          <h2 className="text-2xl md:text-4xl font-black tracking-[0.2em] uppercase mb-10">
            {c.headline}
          </h2>

          <Link
            href={`mailto:${c.email}`}
            className="inline-block px-12 py-4 bg-accent-gold text-black text-sm font-black uppercase tracking-[0.3em] hover:bg-accent-gold/90 hover:shadow-[0_0_30px_rgba(224,186,77,0.4)] transition-all duration-300 mb-12"
          >
            Get in Touch
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/8 pt-10">
            <div>
              <span className="text-[9px] tracking-widest text-accent-gold font-bold uppercase block mb-2">Location</span>
              <p className="text-xs text-white/50 font-light leading-relaxed">{c.address}</p>
              <p className="text-[10px] text-white/30 font-light mt-1">{c.hours}</p>
            </div>
            <div>
              <span className="text-[9px] tracking-widest text-accent-gold font-bold uppercase block mb-2">Phone</span>
              {c.phones.map((phone) => (
                <Link
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block text-xs text-white/50 font-light hover:text-accent-gold transition-colors"
                >
                  {phone}
                </Link>
              ))}
            </div>
            <div>
              <span className="text-[9px] tracking-widest text-accent-gold font-bold uppercase block mb-2">Email</span>
              <Link
                href={`mailto:${c.email}`}
                className="text-xs text-white/50 font-light hover:text-accent-gold transition-colors"
              >
                {c.email}
              </Link>
            </div>
          </div>

          <div className="border-t border-white/5 mt-10 pt-6">
            <p className="text-[9px] text-white/20 tracking-widest uppercase font-light">
              {c.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
