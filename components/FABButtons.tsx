"use client";

import { motion } from "framer-motion";

export default function FABButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* WhatsApp FAB */}
      <motion.a
        href="https://wa.me/905318136860"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile ulaşın"
        initial={{ opacity: 0, scale: 0.5, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)]"
      >
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ripple_2s_ease-out_infinite]" style={{ opacity: 0 }} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ripple_2s_ease-out_1s_infinite]" style={{ opacity: 0 }} />
        <svg className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 .003 5.384.003 12.03c0 2.128.556 4.205 1.611 6.036L.048 24l6.096-1.597c1.761.965 3.738 1.472 5.887 1.472h.005c6.645 0 12.029-5.383 12.029-12.031C24.062 5.385 18.678 0 12.031 0zm.006 21.84c-1.802 0-3.565-.483-5.111-1.398l-.367-.217-3.799.996 1.015-3.705-.238-.379c-1.006-1.602-1.537-3.468-1.537-5.4A9.972 9.972 0 0112.038 2.055 9.967 9.967 0 0121.996 12.03c0 5.498-4.475 9.974-9.963 9.974l.004.164zm5.48-7.487c-.301-.151-1.782-.879-2.062-.979-.279-.101-.482-.151-.685.151-.202.302-.781.98-.958 1.18-.176.202-.353.227-.655.076-.301-.151-1.272-.469-2.42-1.492-.893-.796-1.496-1.78-1.672-2.083-.176-.302-.019-.465.132-.616.136-.136.302-.353.453-.529.151-.176.202-.302.302-.503.101-.202.051-.378-.025-.529-.076-.151-.685-1.652-.938-2.261-.247-.595-.497-.514-.685-.524-.176-.008-.378-.008-.579-.008-.202 0-.529.076-.806.378-.277.302-1.058 1.034-1.058 2.518 0 1.484 1.083 2.92 1.233 3.12.151.202 2.128 3.251 5.157 4.557.721.31 1.282.496 1.722.635.723.23 1.38.197 1.897.12.58-.086 1.782-.729 2.034-1.433.251-.705.251-1.31.176-1.434-.075-.126-.279-.202-.581-.353z" />
        </svg>
      </motion.a>

      {/* Phone FAB */}
      <motion.a
        href="tel:+905318136860"
        aria-label="Telefon ile arayın"
        initial={{ opacity: 0, scale: 0.5, x: 60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.0 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FFCC00] flex items-center justify-center shadow-[0_4px_24px_rgba(255,204,0,0.5)]"
      >
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#FFCC00] animate-[ripple_2s_ease-out_0.5s_infinite]" style={{ opacity: 0 }} />
        <span className="absolute inset-0 rounded-full bg-[#FFCC00] animate-[ripple_2s_ease-out_1.5s_infinite]" style={{ opacity: 0 }} />
        <svg className="w-7 h-7 md:w-8 md:h-8 text-[#0a0a0b] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.a>
    </div>
  );
}
