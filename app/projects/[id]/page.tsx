"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useRef, use, useState } from "react";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const decodedId = decodeURIComponent(resolvedParams.id).toLowerCase();
  const project = projects.find((p) => p.id.toLowerCase() === decodedId);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return notFound();
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount =
        direction === "left" ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      if (itemWidth > 0) {
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <main className="min-h-screen text-white selection:bg-[#B8965A] selection:text-[#1A2235] pb-32 bg-[#1A2235]">
      <Navbar />

      <section className="pt-40 max-w-6xl mx-auto px-6 md:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] mb-16 transition-all duration-300 hover:text-[#B8965A] text-white/40 group"
        >
          <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12"></span>
          Back to Projects
        </Link>

        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#B8965A]" />
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase font-bold text-[#B8965A]">
              {project.category}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black mb-10 leading-[0.9] tracking-tighter drop-shadow-lg">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#B8965A]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mb-16 md:mb-24 group/slider">
          <div className="relative w-full bg-[#0F1520] rounded-2xl md:rounded-4xl border overflow-hidden transition-[height] duration-500 ease-in-out border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] rounded-full blur-[100px] opacity-20 pointer-events-none bg-[#B8965A]" />

            {project.images && project.images.length > 0 ? (
              <>
                {project.images.length > 1 && (
                  <button
                    onClick={() => scroll("left")}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-[#B8965A] hover:border-[#B8965A] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}

                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar relative z-10 w-full"
                >
                  {project.images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="w-full shrink-0 snap-center relative p-4 md:p-8"
                    >
                      <div className="relative w-full">
                        <Image
                          src={imgSrc}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1920}
                          height={1080}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "75vh",
                          }}
                          className="object-contain rounded-lg mx-auto shadow-2xl"
                          priority={index === 0}
                          unoptimized={imgSrc.endsWith(".gif")}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {project.images.length > 1 && (
                  <button
                    onClick={() => scroll("right")}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:bg-[#B8965A] hover:border-[#B8965A] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}
              </>
            ) : (
              <div className="relative z-10 flex flex-col items-center gap-6 opacity-50 py-32">
                <span className="text-6xl">💻</span>
                <span className="font-mono text-white/50 uppercase tracking-[0.5em] text-xs font-bold">
                  Showcase coming soon
                </span>
              </div>
            )}
          </div>

          {project.images && project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background:
                      index === activeIndex ? "#B8965A" : "rgba(255,255,255,0.15)",
                    transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-black mb-8 tracking-wide text-[#B8965A]">
              OVERVIEW
            </h3>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light border-l-2 pl-6 border-[#B8965A]/30">
                {project.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div>
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6">
                  {"// Deliverables"}
                </p>
                <div className="flex flex-col gap-4">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full py-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-xl overflow-hidden group/demo shadow-2xl transition-all duration-300 bg-[#B8965A] text-[#1A2235]"
                    >
                      <span className="relative z-10 font-black">
                        Live Demo
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/demo:translate-y-0 transition-transform duration-500" />
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full py-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] rounded-xl overflow-hidden group/btn border transition-all duration-300 border-[#B8965A]/40 text-[#B8965A]"
                  >
                    <span className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out bg-[#B8965A]" />
                    <span className="relative z-10 group-hover/btn:text-[#1A2235] transition-colors duration-500 font-bold">
                      Source Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}