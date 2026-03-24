"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOLD = "#B8965A";
const NAVY = "#1A2235";
const LIGHT_BG = "#F7F4F0";

const items = [
  {
    label: "Education",
    primary: "Southeast Asia University",
    secondary: "Faculty of Liberal Arts and Sciences",
    meta: "2023 – 2026 (Expected)",
    num: "01",
    icon: "🎓" // เพิ่ม Icon เล็กๆ
  },
  {
    label: "High School",
    primary: "Srinagarindra the Princess Mother School Samutsakhon",
    meta: "2017 – 2023",
    num: "02",
    icon: "🏫"
  },
  {
    label: "Languages",
    primary: "Thai · English",
    secondary: "English · Intermediate",
    meta: "Thai · Native",
    num: "03",
    icon: "🌐"
  },
];

export const QuickInfo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 lg:py-40"
      style={{ background: LIGHT_BG }}
    >
      {/* Decorative large label - เปลี่ยนสีและเส้นให้ดูมีมิติขึ้น */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[-5%] top-[5%] font-black leading-none select-none pointer-events-none z-0"
        aria-hidden
        style={{
          fontSize: "clamp(120px, 20vw, 300px)",
          color: "transparent",
          WebkitTextStroke: `2px ${GOLD}15`,
          letterSpacing: "-0.05em",
        }}
      >
        INFO
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-24"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px]" style={{ background: GOLD }} />
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: NAVY }}>
              BACKGROUND
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1" style={{ background: `${NAVY}20` }} />
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full border"
            style={{ color: NAVY, borderColor: `${NAVY}30` }}
          >
            § Chapter 01
          </span>
        </motion.div>

        {/* Items - เปลี่ยนเป็น Grid Card Layout ที่ดูหรูขึ้น */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(184,150,90,0.1)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[320px]"
            >
              {/* Card Hover Effect - ขยายสีทองจากมุมขวาล่าง */}
              <div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full transition-transform duration-700 ease-out group-hover:scale-[3] opacity-0 group-hover:opacity-10 z-0"
                style={{ background: GOLD }}
              />

              {/* Number Background */}
              <span
                className="absolute top-4 right-6 font-black text-6xl opacity-5 select-none z-0"
                style={{ color: NAVY }}
              >
                {item.num}
              </span>

              {/* Top Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xl">{item.icon}</span>
                  <p
                    className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold"
                    style={{ color: GOLD }}
                  >
                    {item.label}
                  </p>
                </div>
                
                <h4
                  className="font-black text-2xl mb-3 leading-tight group-hover:-translate-y-1 transition-transform duration-300"
                  style={{ color: NAVY }}
                >
                  {item.primary}
                </h4>
                <p className="text-sm font-medium leading-relaxed" style={{ color: `${NAVY}80` }}>
                  {item.secondary}
                </p>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-8 pt-8 border-t border-dashed" style={{ borderColor: `${NAVY}15` }}>
                <span
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold"
                  style={{ color: NAVY }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                  {item.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};