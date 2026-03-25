"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickInfo } from "@/components/QuickInfo";
import { Skills } from "@/components/Skills";
import { ProjectSection } from "@/components/ProjectSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-[#A98E56] selection:text-white overflow-x-hidden">
      
      
      <Navbar />

      
      <Hero />

      
      <div id="info">
        <QuickInfo />
      </div>

      
      <div id="skills" className="bg-white scroll-mt-20">
        <Skills />
      </div>

      
      <div id="projects" className="bg-[#242D3E] scroll-mt-20">
        <ProjectSection />
      </div>

      <Footer />

      <style jsx global>{`
        /* เปิดใช้งาน Smooth Scrolling ทั้งหน้าเว็บเพื่อให้ตอนกดลิงก์แล้วเลื่อนสมูท */
        html {
          scroll-behavior: smooth;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
