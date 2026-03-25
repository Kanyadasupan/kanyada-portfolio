"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#0F1520]"
    >
      <div className="w-full h-px bg-[linear-gradient(to_right,transparent,#B8965A40,transparent)]" />

      <div
        className="absolute bottom-0 left-0 right-0 font-black leading-none select-none pointer-events-none text-center text-[clamp(60px,14vw,200px)] text-transparent [-webkit-text-stroke:1px_rgba(184,150,90,0.05)] tracking-[-0.05em] translate-y-[25%]"
        aria-hidden
      >
        KANYADA
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-3 text-[#B8965A70]">
              Available for work
            </p>
            <h2 className="font-black tracking-tighter leading-none text-white text-[clamp(36px,5vw,72px)]">
              KANYADA
              <br />
              <span className="text-[#B8965A]">SUPAN</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "GitHub", href: "https://github.com/Kanyadasupan", target: "_blank" },
              { label: "kanyada2402@gmail.com", href: "mailto:kanyada2402@gmail.com" },
              { label: "061-983-4743", href: "tel:0619834743" },
            ].map(({ label, href, target }) => (
              <Link
                key={label}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 group"
              >
                <span className="h-px w-6 transition-all duration-500 group-hover:w-12 bg-[#B8965A]" />
                <span className="font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 text-white/35 group-hover:text-white">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="h-px mb-8 bg-white/5" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center font-black text-[9px] bg-[#B8965A] text-[#1A2235]">
              K
            </div>
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/20">
              © 2026 Kanyada Supan. All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};