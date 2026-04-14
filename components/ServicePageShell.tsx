"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Crumb { label: string; href: string }

interface ServicePageShellProps {
  /** e.g. "ESENYURT" */
  district: string;
  /** e.g. "Çilingir Hizmeti" */
  serviceLabel: string;
  /** e.g. "Esenyurt Çilingir Çağır" */
  ctaTitle: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function ServicePageShell({
  district,
  serviceLabel,
  ctaTitle,
  breadcrumbs,
  children,
}: ServicePageShellProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* ── Hero top band ── */}
      <section className="relative overflow-hidden bg-[#0a0a0b] pt-10 pb-14 border-b border-[#2a2a32]">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#FFCC00] opacity-[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            {...fadeUp(0)}
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-[#5a5a6c] font-medium mb-4"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="opacity-40">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#9a9aac]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#FFCC00] transition-colors duration-200">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>

          {/* Back link */}
          <motion.div {...fadeUp(0.05)} className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#7a7a8c] text-sm hover:text-[#FFCC00] transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Tüm Bölgeler
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2.5 bg-[#111114] border border-[#2a2a32] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-full text-[#9a9aac]">
              <svg className="w-4 h-4 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
              Avrupa Yakası &bull; 7/24 Aktif
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
          >
            <span className="text-white">{district}</span>{" "}
            <span className="text-[#FFCC00]">{serviceLabel}</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Two-column body ── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── Left: Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="w-full row-start-2 lg:row-start-1 lg:col-span-8"
            >
              {/* Glassmorphism card */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm">
                {/* Yellow top accent line */}
                <div className="w-full h-1 bg-gradient-to-r from-[#FFCC00] via-[#FFCC00]/60 to-transparent" />
                <div className="p-8 sm:p-10 lg:p-12 prose-custom">
                  {children}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Sticky CTA ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="w-full row-start-1 lg:row-start-1 lg:col-span-4"
            >
              <div className="sticky top-24 bg-[#111114] border border-[#2a2a32] rounded-2xl overflow-hidden">
                {/* Yellow top accent */}
                <div className="w-full h-1 bg-[#FFCC00]" />
                <div className="p-7">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFCC00]/10 border border-[#FFCC00]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h2 className="text-white font-black text-base leading-snug">{ctaTitle}</h2>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-2 mb-6 px-3 py-2.5 bg-[#0a0a0b] rounded-xl border border-[#2a2a32]">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
                    <span className="text-xs text-[#7a7a8c] font-medium">Şu an aktif &bull; 15 dk içinde geliyoruz</span>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href="tel:+905318136860"
                    className="flex items-center justify-center gap-3 w-full bg-[#FFCC00] text-[#0a0a0b] font-black text-base py-4 rounded-xl mb-3 shadow-[0_0_24px_rgba(255,204,0,0.35)] hover:shadow-[0_0_40px_rgba(255,204,0,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hemen Ara
                  </a>

                  {/* Secondary CTA */}
                  <a
                    href="https://wa.me/905318136860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#0a0a0b] border border-[#2a2a32] text-[#7a7a8c] font-bold text-sm py-3.5 rounded-xl hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    WhatsApp&apos;tan Yaz
                  </a>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-[#2a2a32] space-y-3">
                    {[
                      { icon: "⚡", text: "15 Dakika Varış Garantisi" },
                      { icon: "🛡️", text: "%100 Hasarsız Açma" },
                      { icon: "💰", text: "Şeffaf & Sabit Fiyat" },
                      { icon: "🏆", text: "15 Yıllık Tecrübe" },
                    ].map((b) => (
                      <div key={b.text} className="flex items-center gap-2.5 text-xs text-[#7a7a8c]">
                        <span className="text-sm">{b.icon}</span>
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Phone number display */}
                  <div className="mt-6 text-center">
                    <a href="tel:+905318136860" className="text-[#FFCC00] font-black text-lg hover:text-white transition-colors duration-200">
                      0531 813 68 60
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
