"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Esenyurt Çilingir", href: "/esenyurt-cilingir" },
  { name: "Esenyurt Oto Anahtar", href: "/esenyurt-oto-anahtarci" },
  { name: "Beylikdüzü Çilingir", href: "/beylikduzu-cilingir" },
  { name: "Beylikdüzü Oto Anahtar", href: "/beylikduzu-oto-anahtarci" },
  { name: "Avcılar Çilingir", href: "/avcilar-cilingir" },
  { name: "Avcılar Oto Anahtar", href: "/avcilar-oto-anahtarci" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu when route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-[#2a2a32] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Demir Çilingir Ana Sayfa">
            <motion.div
              className="w-9 h-9 rounded-xl bg-[#FFCC00] flex items-center justify-center shadow-[0_0_16px_rgba(255,204,0,0.5)] group-hover:shadow-[0_0_28px_rgba(255,204,0,0.8)] transition-shadow duration-300"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <svg className="w-5 h-5 text-[#0a0a0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </motion.div>
            <span className="font-black text-lg tracking-tight text-white group-hover:text-[#FFCC00] transition-colors duration-300">
              Demir <span className="text-[#FFCC00]">Çilingir</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Ana menü">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 whitespace-nowrap",
                    active
                      ? "text-[#FFCC00]"
                      : "text-[#7a7a8c] hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[#FFCC00]/10 border border-[#FFCC00]/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <a
            href="tel:+905318136860"
            className="hidden xl:inline-flex items-center gap-2 bg-[#FFCC00] text-[#0a0a0b] font-black text-sm px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_16px_rgba(255,204,0,0.4)] hover:shadow-[0_0_28px_rgba(255,204,0,0.7)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hemen Ara
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden p-2 text-[#7a7a8c] hover:text-[#FFCC00] transition-colors"
            aria-expanded={open}
            aria-label={open ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            <motion.svg
              key={open ? "x" : "menu"}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden bg-[#111114]/98 backdrop-blur-xl border-t border-[#2a2a32]"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobil menü">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                      active
                        ? "bg-[#FFCC00]/10 text-[#FFCC00] border border-[#FFCC00]/20"
                        : "text-[#7a7a8c] hover:bg-[#18181c] hover:text-white"
                    )}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]" />}
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="tel:+905318136860"
                className="flex items-center justify-center gap-2 mt-3 bg-[#FFCC00] text-[#0a0a0b] font-black py-3.5 rounded-xl text-base shadow-[0_0_20px_rgba(255,204,0,0.4)]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0531 813 68 60
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
