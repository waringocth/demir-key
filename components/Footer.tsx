import Link from "next/link";

const serviceAreas = [
  { name: "Esenyurt Çilingir", href: "/esenyurt-cilingir" },
  { name: "Bahçeşehir Çilingir", href: "/bahcesehir-cilingir" },
];
const quickLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Esenyurt Oto Anahtarcı", href: "/esenyurt-oto-anahtarci" },
  { name: "Bahçeşehir Oto Anahtar", href: "/bahcesehir-oto-anahtar" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-[#2a2a32] pt-16 pb-8">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent mb-12 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#FFCC00] flex items-center justify-center shadow-[0_0_16px_rgba(255,204,0,0.4)]">
                <svg className="w-5 h-5 text-[#0a0a0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <span className="font-black text-xl text-white">
                Esenyurt <span className="text-[#FFCC00]">Anahtar</span>
              </span>
            </div>
            <p className="text-[#7a7a8c] text-sm leading-relaxed mb-6">
              Esenyurt, Beylikdüzü ve Avcılar bölgelerinde hızlı, güvenilir ve uygun fiyatlı çilingir çözümleri sunuyoruz. Ev, iş yeri ve otomotiv güvenliğiniz uzman ellerde.
            </p>
            <a
              href="tel:+905318136860"
              className="inline-flex items-center gap-2.5 text-[#FFCC00] font-black text-2xl hover:text-white transition-colors duration-300 group"
            >
              <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0531 813 68 60
            </a>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FFCC00]" />
              Hizmet Bölgelerimiz
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#7a7a8c] text-sm hover:text-[#FFCC00] hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#FFCC00]" />
              Hızlı Menü
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#7a7a8c] text-sm hover:text-[#FFCC00] hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a32] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#7a7a8c]">
          <p>&copy; {new Date().getFullYear()} Esenyurt Anahtar. Tüm Hakları Saklıdır.</p>
          <p className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
            7/24 Aktif Servis
          </p>
        </div>
      </div>
    </footer>
  );
}
