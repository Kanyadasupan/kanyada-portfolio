"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link"; // 📌 นำเข้า Link

const GOLD = "#B8965A";
const NAVY = "#1A2235";

export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0F1520" }}
    >
      {/* Top border gradient */}
      <div
        className="w-full h-px"
        style={{ background: `linear-gradient(to right, transparent, ${GOLD}40, transparent)` }}
      />

      {/* Big KANYADA text */}
      <div
        className="absolute bottom-0 left-0 right-0 font-black leading-none select-none pointer-events-none text-center"
        aria-hidden
        style={{
          fontSize: "clamp(60px, 14vw, 200px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(184,150,90,0.05)",
          letterSpacing: "-0.05em",
          transform: "translateY(25%)",
        }}
      >
        KANYADA
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-20 z-10">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16"
        >
          {/* Name block */}
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.5em] uppercase mb-3"
              style={{ color: `${GOLD}70` }}
            >
              Available for work
            </p>
            <h2
              className="font-black tracking-tighter leading-none"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "white",
              }}
            >
              KANYADA
              <br />
              <span style={{ color: GOLD }}>SUPAN</span>
            </h2>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {[
              { label: "GitHub", href: "https://github.com/Kanyadasupan", target: "_blank" },
              { label: "kanyada2402@gmail.com", href: "mailto:kanyada2402@gmail.com" },
              { label: "061-983-4743", href: "tel:0619834743" },
            ].map(({ label, href, target }) => (
              // 📌 เปลี่ยนมาใช้ Link
              <Link
                key={label}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 group"
              >
                <span
                  className="h-px w-6 transition-all duration-500 group-hover:w-12"
                  style={{ background: GOLD }}
                />
                <span
                  className="font-mono text-[11px] uppercase tracking-widest transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom divider */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.05)" }} />

        {/* Copyright row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-6 flex items-center justify-center font-black text-[9px]"
              style={{ background: GOLD, color: NAVY }}
            >
              K
            </div>
            <span
              className="font-mono text-[9px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              © 2026 Kanyada Supan. All rights reserved.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};