"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import { Project } from "@/data/projects";

const GOLD = "#B8965A";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 snap-center md:snap-start group relative h-full"
      style={{ width: "clamp(300px, 80vw, 420px)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-500 bg-white/[0.02]"
        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Hover Border Glow */}
        <div
          className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
          style={{ borderColor: GOLD }}
        />

        {/* ส่วนแสดงรูปภาพ */}
        <div className="w-full h-56 relative overflow-hidden bg-[#151b2b] border-b border-white/5">
          {/* เช็คว่ามีรูปใน Array ไหม ถ้ามีให้โชว์รูปแรก ถ้าไม่มีให้โชว์ตัวอักษรแรกของชื่อโปรเจกต์ */}
          {project.images && project.images.length > 0 ? (
            <Image
              src={project.images[0]} // ดึงรูปแรกมาโชว์หน้าการ์ด
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="font-black text-8xl" style={{ color: GOLD }}>
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay gradient เพื่อให้ Badge เด่นขึ้น */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2235]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Index Badge */}
          <div
            className="absolute top-4 left-4 backdrop-blur-md bg-[#1A2235]/50 border px-3 py-1 rounded-full flex items-center gap-2 z-10"
            style={{ borderColor: `${GOLD}30` }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: GOLD }}
            />
            <span className="font-mono text-[9px] tracking-widest uppercase text-white">
              PRJ / 0{index + 1}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-1 p-8">
          <h5 className="font-black text-2xl leading-tight mb-3 text-white group-hover:text-[#B8965A] transition-colors duration-300">
            {project.title}
          </h5>

          <p className="text-sm leading-relaxed mb-8 line-clamp-2 flex-1 text-white/40">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded border transition-colors duration-300 group-hover:border-[#B8965A]/30"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.id}`}
              className="relative flex-1 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden group/btn"
              style={{ background: "rgba(184,150,90,0.1)", color: GOLD }}
            >
              <span
                className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"
                style={{ background: GOLD }}
              />
              <span className="relative z-10 group-hover/btn:text-[#1A2235] transition-colors duration-500 font-bold">
                View Details
              </span>
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden group/btn"
              style={{ border: `1px solid rgba(184,150,90,0.3)`, color: GOLD }}
            >
              <span
                className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"
                style={{ background: GOLD }}
              />
              <span className="relative z-10 group-hover/btn:text-[#1A2235] transition-colors duration-500 font-bold">
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};