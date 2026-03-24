"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const GOLD = "#B8965A";
const NAVY = "#1A2235";
const categories = ["Next.js", "React Native", "Flutter"] as const;

export const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index];
    if (container) {
      // เลื่อนไป 1 ใบพอดี (ความกว้างการ์ด 420px + gap 24px)
      const scrollAmount = direction === "left" ? -444 : 444; 
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: NAVY }}
    >
      {/* Blueprint Grid & Background Text (เหมือนเดิม) */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(184,150,90,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(184,150,90,0.05) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between border-b pb-8"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px]" style={{ background: GOLD }} />
              <p className="font-mono text-[10px] tracking-[0.5em] uppercase font-bold" style={{ color: GOLD }}>
                Selected Experience
              </p>
            </div>
            <h2 className="font-black tracking-tighter leading-none text-white text-[clamp(40px,7vw,96px)]">
              PROJECTS
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Categories & Horizontal Scroll */}
      <div className="space-y-40 relative z-10">
        {categories.map((cat, ci) => {
          const filtered = projects.filter((p) => p.category === cat);
          if (!filtered.length) return null;

          return (
            <div key={cat} className="relative group/row">
              {/* Category header */}
              <div className="max-w-7xl mx-auto px-8 mb-10 flex items-center gap-6">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#B8965A]/60">0{ci + 1}</span>
                <h4 className="font-black text-2xl md:text-3xl text-white">{cat}</h4>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* 📌 คอนเทนเนอร์หลักที่คุมปุ่มและรายการการ์ด */}
              <div className="relative px-4 md:px-12">
                
                {/* 📌 ปุ่มลูกศรซ้าย - Floating */}
                <button
                  onClick={() => scroll(ci, "left")}
                  aria-label="Previous"
                  className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-[#1A2235]/80 backdrop-blur-md flex items-center justify-center text-[#B8965A] opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:bg-[#B8965A] hover:text-[#1A2235] shadow-2xl hidden md:flex"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>

                {/* 📌 รายการการ์ด (Scroll Area) */}
                <div 
                  ref={(el) => { scrollRefs.current[ci] = el; }}
                  className="w-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
                >
                  {/* กำหนด padding-left/right เพื่อไม่ให้การ์ดตัวแรกและตัวสุดท้ายชิดขอบจอเกินไป */}
                  <div className="flex gap-6 px-4 md:px-20 w-max pb-10">
                    {filtered.map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                </div>

                {/* 📌 ปุ่มลูกศรขวา - Floating */}
                <button
                  onClick={() => scroll(ci, "right")}
                  aria-label="Next"
                  className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 bg-[#1A2235]/80 backdrop-blur-md flex items-center justify-center text-[#B8965A] opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:bg-[#B8965A] hover:text-[#1A2235] shadow-2xl hidden md:flex"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};