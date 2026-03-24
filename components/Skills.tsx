"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOLD = "#B8965A";
const NAVY = "#1A2235";

const skillCategories = [
  {
    title: "Languages",
    icon: "⌨",
    description: "Core logic and syntax",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: "◈",
    description: "Building UI & architecture",
    skills: ["Next.js", "React", "Flutter", "React Native", "Laravel", "Tailwind CSS"],
  },
  {
    title: "Backend & DB",
    icon: "◎",
    description: "Data and server management",
    skills: ["Node.js", "Supabase", "PostgreSQL", "Firebase", "MySQL", "Apache"],
  },
  {
    title: "Tools",
    icon: "◇",
    description: "Version control & deployment",
    skills: ["Vercel", "Git / GitHub", "Expo Go", "Figma", "Vite"],
  },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: "#FAFAFA" }} // เปลี่ยนเป็นสีขาวอมเทานิดๆ ให้การ์ดสีขาวโดดเด่นขึ้น
    >
      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${NAVY} 2px, transparent 2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Huge background text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-5%] bottom-[10%] font-black leading-none select-none pointer-events-none z-0"
        aria-hidden
        style={{
          fontSize: "clamp(120px, 20vw, 300px)",
          color: "transparent",
          WebkitTextStroke: `2px ${GOLD}15`,
          letterSpacing: "-0.05em",
        }}
      >
        STACK
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b pb-8"
          style={{ borderColor: `${NAVY}15` }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px]" style={{ background: GOLD }} />
              <p
                className="font-mono text-[10px] tracking-[0.5em] uppercase font-bold"
                style={{ color: GOLD }}
              >
                Technical Expertise
              </p>
            </div>
            <h2
              className="font-black leading-none tracking-tighter"
              style={{
                fontSize: "clamp(40px, 7vw, 96px)",
                color: NAVY,
              }}
            >
              SKILLS
            </h2>
          </div>
          <span
            className="font-mono text-[10px] tracking-widest hidden md:block px-4 py-2 rounded-full border mb-2"
            style={{ color: NAVY, borderColor: `${NAVY}20` }}
          >
            § Chapter 02
          </span>
        </motion.div>

        {/* Grid Layout สำหรับ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group bg-white p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              style={{
                borderColor: `${NAVY}10`,
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.03)",
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-8 right-8 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500 ease-out"
                style={{ background: GOLD }}
              />

              {/* Icon & Title */}
              <div className="mb-8">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-[#B8965A] group-hover:text-white"
                  style={{ background: `${NAVY}05`, color: GOLD, fontSize: 20 }}
                >
                  {cat.icon}
                </div>
                <h4
                  className="font-black text-2xl tracking-tight mb-2"
                  style={{ color: NAVY }}
                >
                  {cat.title}
                </h4>
                <p className="text-xs font-medium" style={{ color: `${NAVY}50` }}>
                  {cat.description}
                </p>
              </div>

              {/* Tags Container (flex-wrap) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.15 + si * 0.05, duration: 0.4 }}
                    className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded border cursor-default transition-all duration-300"
                    style={{
                      borderColor: `${NAVY}15`,
                      color: `${NAVY}80`,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = GOLD;
                      (e.target as HTMLElement).style.color = "white";
                      (e.target as HTMLElement).style.borderColor = GOLD;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = "transparent";
                      (e.target as HTMLElement).style.color = `${NAVY}80`;
                      (e.target as HTMLElement).style.borderColor = `${NAVY}15`;
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};