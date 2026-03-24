"use client";

import { Navbar } from "@/components/Navbar"; // <-- Import Navbar ตรงนี้
import { Hero } from "@/components/Hero";
import { QuickInfo } from "@/components/QuickInfo";
import { Skills } from "@/components/Skills";
import { ProjectSection } from "@/components/ProjectSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-[#A98E56] selection:text-white overflow-x-hidden">
      
      {/* เรียกใช้ Navbar ไว้บนสุดของหน้า */}
      <Navbar />

      {/* ส่วน Hero Section */}
      <Hero />

      {/* ใส่ id="info" สำหรับประวัติการศึกษา */}
      <div id="info">
        <QuickInfo />
      </div>

      {/* ใส่ id="skills" สำหรับหมวดหมู่ทักษะ */}
      <div id="skills" className="bg-white scroll-mt-20">
        <Skills />
      </div>

      {/* ใส่ id="projects" สำหรับผลงาน */}
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
