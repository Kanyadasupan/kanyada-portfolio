"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GOLD = "#B8965A";
const NAVY = "#1A2235";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // 📌 แยกรายการเมนูออกมา เพื่อให้กำหนดลิงก์ได้แม่นยำขึ้น
  const navItems = [
    { name: "Home", href: "/" }, // เพิ่มปุ่ม Home ลิงก์ไปหน้าแรกสุดเสมอ
    { name: "Info", href: isHome ? "#info" : "/#info" },
    { name: "Skills", href: isHome ? "#skills" : "/#skills" },
    { name: "Projects", href: isHome ? "#projects" : "/#projects" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-6 flex justify-between items-center z-50 bg-[#1A2235] border-b border-[#B8965A]/10">
      
      {/* โลโก้ */}
      <Link href="/" className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 flex items-center justify-center font-black text-[12px] cursor-pointer rounded-sm"
          style={{ background: GOLD, color: NAVY }}
        >
          K
        </motion.div>
        <span
          className="font-mono text-[10px] tracking-[0.3em] uppercase hidden sm:block transition-colors hover:text-white"
          style={{ color: `${GOLD}99` }}
        >
          Portfolio 2026
        </span>
      </Link>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href} // ดึงค่า href ที่เราตั้งเงื่อนไขไว้ด้านบนมาใช้
            className="font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-white relative group"
            style={{ color: `${GOLD}80` }}
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B8965A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </div>
  );
};