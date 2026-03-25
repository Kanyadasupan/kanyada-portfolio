"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const categories = ["Next.js", "React Native", "Flutter"] as const;

export const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index];
    if (container) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = direction === "left" 
        ? (isMobile ? -320 : -444) 
        : (isMobile ? 320 : 444); 
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-32 lg:py-40 overflow-hidden bg-[#1A2235]"
    >
      <div className="max-w-7xl mx-auto px-8 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between border-b pb-8 border-white/5"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-[#B8965A]" />
              <p className="font-mono text-[10px] tracking-[0.5em] uppercase font-bold text-[#B8965A]">
                Selected Experience
              </p>
            </div>
            <h2 className="font-black tracking-tighter leading-none text-white text-[clamp(40px,7vw,96px)]">
              PROJECTS
            </h2>
          </div>
          
          <div className="md:hidden mt-4 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.2em] text-white/30">
             <span>Swipe</span>
             <motion.span
               animate={{ x: [0, 5, 0] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
             >
               →
             </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="space-y-40 relative z-10">
        {categories.map((cat, ci) => {
          const filtered = projects.filter((p) => p.category === cat);
          if (!filtered.length) return null;

          return (
            <div key={cat} className="relative group/row">
              <div className="max-w-7xl mx-auto px-8 mb-10 flex items-center gap-6">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#B8965A]/60">0{ci + 1}</span>
                <h4 className="font-black text-2xl md:text-3xl text-white">{cat}</h4>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="relative px-2 md:px-12">
                <button
                  onClick={() => scroll(ci, "left")}
                  aria-label="Previous"
                  className="absolute left-1 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-[#1A2235]/90 backdrop-blur-md flex items-center justify-center text-[#B8965A] md:opacity-0 group-hover/row:opacity-100 transition-all duration-300 active:scale-90 shadow-2xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>

                <div 
                  ref={(el) => { scrollRefs.current[ci] = el; }}
                  className="w-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
                >
                  <div className="flex gap-4 md:gap-6 px-6 md:px-20 w-max pb-10">
                    {filtered.map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scroll(ci, "right")}
                  aria-label="Next"
                  className="absolute right-1 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-[#1A2235]/90 backdrop-blur-md flex items-center justify-center text-[#B8965A] md:opacity-0 group-hover/row:opacity-100 transition-all duration-300 active:scale-90 shadow-2xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};