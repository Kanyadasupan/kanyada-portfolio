"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Info", href: isHome ? "#info" : "/#info" },
    { name: "Skills", href: isHome ? "#skills" : "/#skills" },
    { name: "Projects", href: isHome ? "#projects" : "/#projects" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-6 flex justify-between items-center z-50 bg-[#1A2235] border-b border-[#B8965A]/10">
      <Link href="/" className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 flex items-center justify-center font-black text-[12px] cursor-pointer rounded-sm bg-[#B8965A] text-[#1A2235]"
        >
          K
        </motion.div>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase hidden sm:block transition-colors hover:text-white text-[#B8965A]/60">
          Portfolio 2026
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-white relative group text-[#B8965A]/50"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#B8965A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </div>
  );
};