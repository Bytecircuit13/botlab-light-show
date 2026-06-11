"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 glass-dark"
    >
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-9 w-44 shrink-0 hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="BotLab Dynamics"
            fill
            priority
            sizes="176px"
            className="object-contain"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {CONTENT.nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-accent-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="px-5 py-2 border border-accent-gold text-accent-gold text-[10px] font-black uppercase tracking-[0.25em] hover:bg-accent-gold hover:text-black transition-all duration-300"
        >
          Book a Show
        </Link>
      </div>
    </motion.header>
  );
}
