"use client";

import { motion } from "framer-motion";

interface SubPageHeroProps {
  h1: string;
  subtitle: string;
  h2: string;
  paragraphs: string[];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const STATS = [
  { value: "15+", label: "Yıllık Tecrübe" },
  { value: "15 Dk", label: "Hızlı Ulaşım" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "7/24", label: "Kesintisiz Destek" },
];

export default function SubPageLayout({ h1, subtitle, h2, paragraphs }: SubPageHeroProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0a0a0b] overflow-hidden">
        <div className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#FFCC00] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#FFCC00] opacity-[0.04] blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,204,0,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,204,0,0.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 border border-[#FFCC00]/30 bg-[#FFCC00]/8 text-[#FFCC00] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
                7/24 Profesyonel Servis
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight"
            >
              {h1.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="gradient-text glow-accent"> {word}</span>
                ) : (
                  i === 0 ? <span key={i}>{word}</span> : <span key={i}> {word}</span>
                )
              )}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#7a7a8c] text-lg sm:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+905318136860"
                className="inline-flex items-center justify-center gap-3 bg-[#FFCC00] text-[#0a0a0b] font-black text-lg px-8 py-4 rounded-2xl shadow-[0_0_28px_rgba(255,204,0,0.4)] hover:shadow-[0_0_44px_rgba(255,204,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara: 0531 813 68 60
              </a>
              <a
                href="https://wa.me/905318136860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#111114] text-white font-bold text-base px-8 py-4 rounded-2xl border border-[#2a2a32] hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 .003 5.384.003 12.03c0 2.128.556 4.205 1.611 6.036L.048 24l6.096-1.597c1.761.965 3.738 1.472 5.887 1.472h.005c6.645 0 12.029-5.383 12.029-12.031C24.062 5.385 18.678 0 12.031 0zm5.486 14.353c-.301-.151-1.782-.879-2.062-.979-.279-.101-.482-.151-.685.151-.202.302-.781.98-.958 1.18-.176.202-.353.227-.655.076-.301-.151-1.272-.469-2.42-1.492-.893-.796-1.496-1.78-1.672-2.083-.176-.302-.019-.465.132-.616.136-.136.302-.353.453-.529.151-.176.202-.302.302-.503.101-.202.051-.378-.025-.529-.076-.151-.685-1.652-.938-2.261-.247-.595-.497-.514-.685-.524-.176-.008-.378-.008-.579-.008-.202 0-.529.076-.806.378-.277.302-1.058 1.034-1.058 2.518 0 1.484 1.083 2.92 1.233 3.12.151.202 2.128 3.251 5.157 4.557.721.31 1.282.496 1.722.635.723.23 1.38.197 1.897.12.58-.086 1.782-.729 2.034-1.433.251-.705.251-1.31.176-1.434-.075-.126-.279-.202-.581-.353z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 bg-[#111114] border-y border-[#2a2a32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#FFCC00]/10 border border-[#FFCC00]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{h2}</h2>
            </div>
            <div className="border-l-2 border-[#FFCC00]/30 pl-6 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[#7a7a8c] leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#FFCC00] text-xs font-bold uppercase tracking-[0.2em] mb-12"
          >
            Neden Bizi Tercih Etmelisiniz?
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#FFCC00] mb-2 glow-accent">{s.value}</div>
                <div className="text-[#7a7a8c] text-xs uppercase tracking-[0.15em] font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
