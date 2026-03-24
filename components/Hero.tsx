"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // นำเข้า Image
import Link from "next/link";   // นำเข้า Link

const GOLD = "#B8965A";
const NAVY = "#1A2235";

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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden selection:bg-[#B8965A] selection:text-[#1A2235]"
      style={{ background: NAVY }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184,150,90,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184,150,90,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen"
          style={{
            background: `radial-gradient(circle, rgba(184,150,90,0.15) 0%, transparent 65%)`,
            filter: "blur(50px)",
          }}
        />
      </motion.div>

      {/* Big number */}
      <motion.div
        style={{ y: textY }}
        className="absolute right-[-2vw] top-[15%] select-none pointer-events-none font-black leading-none text-white/[0.03]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span style={{ fontSize: "clamp(200px, 30vw, 400px)" }}>01</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-20 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-12 lg:gap-0">
          {/* LEFT SIDE */}
          <div className="lg:col-span-8 lg:border-r lg:border-white/5 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Category */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="h-[2px] w-12"
                  style={{
                    background: `linear-gradient(to right, ${GOLD}, transparent)`,
                  }}
                />
                <span
                  className="font-mono text-[11px] tracking-[0.5em] uppercase font-bold"
                  style={{ color: GOLD }}
                >
                  Junior Developer
                </span>
              </div>

              {/* Name */}
              <h1
                className="font-black leading-[0.82] tracking-[-0.03em] mb-10 drop-shadow-2xl"
                style={{
                  fontSize: "clamp(50px, 9vw, 150px)",
                  color: "white",
                }}
              >
                KAN
                <span
                  style={{
                    backgroundImage: `linear-gradient(100deg, white 0%, ${GOLD} 35%, #FFF 50%, ${GOLD} 65%, white 100%)`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 4s linear infinite",
                  }}
                >
                  YADA
                </span>
                <br />
                <span style={{ color: GOLD }} className="opacity-90">
                  SUPAN
                </span>
              </h1>

              {/* Bio */}
              <p
                className="text-white/60 max-w-lg text-sm md:text-base leading-relaxed font-light border-l-2 pl-6"
                style={{ borderColor: `${GOLD}50` }}
              >
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

          {/* RIGHT SIDE */}
          <div className="lg:col-span-4 lg:pl-16 flex flex-col justify-end h-full pt-12 lg:pt-0">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-16"
            >
              <motion.div
                className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* glow */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{ background: `${GOLD}40` }}
                />
                
                {/* 📌 เปลี่ยนมาใช้ next/image */}
                <Image
                  src="/profile.png"
                  alt="Kanyada Supan"
                  fill // ให้รูปขยายเต็มพื้นที่ของ parent (w-[150px], w-[200px])
                  sizes="(max-width: 768px) 150px, 200px" // ช่วยลดขนาดไฟล์ที่โหลดบนมือถือ
                  className="object-cover rounded-full border-[3px] transition-transform duration-700 hover:scale-105 z-10"
                  style={{ borderColor: `${GOLD}80` }}
                />

                {/* Spinning dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-5 rounded-full border border-dashed opacity-50 pointer-events-none"
                  style={{ borderColor: GOLD }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Contact */}
              <div className="space-y-5">
                <p
                  className="text-[10px] uppercase tracking-[0.4em] font-mono"
                  style={{ color: `${GOLD}90` }}
                >
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
                  // 📌 เปลี่ยนมาใช้ next/link
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group text-white/50 w-fit"
                  >
                    <span
                      className="h-px w-6 group-hover:w-12 transition-all duration-500 ease-out"
                      style={{ background: GOLD }}
                    />
                    <span className="text-[11px] font-mono uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 h-[1px] w-full origin-left"
          style={{
            background: `linear-gradient(to right, ${GOLD}40, transparent)`,
          }}
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