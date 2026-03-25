"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden selection:bg-[#B8965A] selection:text-[#1A2235] bg-[#1A2235]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,rgba(184,150,90,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,150,90,0.06)_1px,transparent_1px)] bg-size-[80px_80px]" />

      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen bg-[radial-gradient(circle,rgba(184,150,90,0.15)_0%,transparent_65%)] blur-[50px]" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute right-[-2vw] top-[15%] select-none pointer-events-none font-black leading-none text-white/3 text-[clamp(200px,30vw,400px)]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span>01</span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-20 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12 lg:gap-0">
          <div className="lg:col-span-8 lg:border-r lg:border-white/5 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-linear-to-r from-[#B8965A] to-transparent" />
                <span className="font-mono text-[11px] tracking-[0.5em] uppercase font-bold text-[#B8965A]">
                  Junior Developer
                </span>
              </div>

              <h1 className="font-black leading-[0.82] tracking-[-0.03em] mb-10 drop-shadow-2xl text-[clamp(50px,9vw,150px)] text-white">
                KAN
                <span className="bg-[linear-gradient(100deg,white_0%,#B8965A_35%,#FFF_50%,#B8965A_65%,white_100%)] bg-size-[200%_auto] bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite]">
                  YADA
                </span>
                <br />
                <span className="text-[#B8965A] opacity-90">SUPAN</span>
              </h1>

              <p className="text-white/60 max-w-lg text-sm md:text-base leading-relaxed font-light border-l-2 pl-6 border-[#B8965A50]">
                I am a third-year Digital Technology and Innovation student. My
                core strengths are Next.js and React Native, primarily using
                TypeScript. I am currently focusing on further improving my
                skills in programming logic and API integration. I am a fast
                learner, especially through hands-on experience, which helps me
                grasp and retain new knowledge effectively. I am now seeking an
                opportunity to experience real-world working environments at a
                professional company to prepare for my future career.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end h-full pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-16"
            >
              <motion.div
                className="relative w-37.5 h-37.5 md:w-50 md:h-50"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 rounded-full blur-2xl bg-[#B8965A40]" />

                <Image
                  src="/profile.jpg"
                  alt="Kanyada Supan"
                  fill
                  sizes="(max-width: 768px) 150px, 200px"
                  className="object-cover rounded-full border-[3px] transition-transform duration-700 hover:scale-105 z-10 border-[#B8965A80]"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-5 rounded-full border border-dashed opacity-50 pointer-events-none border-[#B8965A]"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="space-y-5">
                <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#B8965A90]">
                  {"// Contact"}
                </p>

                {[
                  { label: "GitHub", href: "https://github.com/Kanyadasupan" },
                  {
                    label: "kanyada2402@gmail.com",
                    href: "mailto:kanyada2402@gmail.com",
                  },
                  { label: "061-983-4743", href: "tel:0619834743" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group text-white/50 w-fit"
                  >
                    <span className="h-px w-6 group-hover:w-12 transition-all duration-500 ease-out bg-[#B8965A]" />
                    <span className="text-[11px] font-mono uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 h-px w-full origin-left bg-linear-to-r from-[#B8965A40] to-transparent"
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
};