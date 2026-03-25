"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="shrink-0 snap-center md:snap-start group relative h-full w-[clamp(300px,80vw,420px)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-500 bg-white/2 border border-white/5">
        
        <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 border-[#B8965A]" />

        <div className="w-full h-56 relative overflow-hidden bg-[#151b2b] border-b border-white/5">
          
          {project.images && project.images.length > 0 ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="font-black text-8xl text-[#B8965A]">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-[#1A2235]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 left-4 backdrop-blur-md bg-[#1A2235]/50 border px-3 py-1 rounded-full flex items-center gap-2 z-10 border-[#B8965A]/30">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#B8965A]" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-white">
              PRJ / 0{index + 1}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-8">
          <h5 className="font-black text-2xl leading-tight mb-3 text-white group-hover:text-[#B8965A] transition-colors duration-300">
            {project.title}
          </h5>

          <p className="text-sm leading-relaxed mb-8 line-clamp-2 flex-1 text-white/40">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded border transition-colors duration-300 group-hover:border-[#B8965A]/30 border-white/8 text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.id}`}
              className="relative flex-1 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden group/btn bg-[#B8965A]/10 text-[#B8965A]"
            >
              <span className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out bg-[#B8965A]" />
              <span className="relative z-10 group-hover/btn:text-[#1A2235] transition-colors duration-500 font-bold">
                View Details
              </span>
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-lg overflow-hidden group/btn border border-[#B8965A]/30 text-[#B8965A]"
            >
              <span className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out bg-[#B8965A]" />
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