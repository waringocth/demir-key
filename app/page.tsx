"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Framer Motion Variants ─────────────────────────── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const scrollReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ─── Static Data ────────────────────────────────────── */
const TRUST = [
  { icon: "👥", value: "500+", label: "Mutlu Müşteri" },
  { icon: "⚡", value: "15 Dk", label: "Ortalama Varış" },
  { icon: "🛡️", value: "7/24", label: "Aktif Hizmet" },
  { icon: "⭐", value: "%100", label: "Hasarsız Açma" },
];

const SERVICES = [
  {
    emoji: "🏠",
    title: "Ev & İşyeri Çilingir",
    desc: "Çelik kapı, ahşap kapı ve demir bariyerlerin tamamında sıfır hasar garantisiyle açma işlemi uyguluyoruz. Kilit silindiri (göbek) değişimi, yüksek güvenlikli A-sınıfı kilit montajı ve çok noktalı kilitleme sistemleri kurulumu uzmanlık alanlarımız arasındadır. Bina giriş kapılarından daire kapılarına, ofis güvenlik sistemlerinden depo kilitlemelerine kadar her ölçekteki işyeri güvenliğinizi sağlıyoruz. Müdahalemiz sonrasında kapınız ve çerçevesi fabrikasyon kalitesinde görünümünü korur.",
  },
  {
    emoji: "🚗",
    title: "Oto Anahtar & Çilingir",
    desc: "Araç içinde kalan ya da kaybolan anahtarlar için tüm marka ve model araçlarda (Volkswagen, Ford, Renault, Toyota, BMW, Mercedes vb.) immobilizer transponder anahtar kopyası yapıyoruz. Remote/kumanda anahtarı programlama, anahtar kılıfı değişimi ve yedek anahtar oluşturma hizmetlerimiz kapsamındadır. Kilitli kalan araç kapılarını sinyalizasyon sistemine zarar vermeksizin açıyoruz. Servis fiyatlarımız yetkili servis fiyatlarının çok altındadır; üstelik adresinize gelip işlemi tamamlıyoruz.",
  },
  {
    emoji: "🗄️",
    title: "Kasa Açma Uzmanı",
    desc: "Şifreli, anahtarlı veya elektronik kasa açma işlemlerinde 15 yıllık tecrübemizle kesme, delme veya patlama gibi tahribatlı yöntemler kullanmadan kasanızı açıyoruz. Kombinasyon yenileme, kilit mekanizması onarımı ve elektronik kasa kontrol ünitesi değişimi de hizmetlerimiz arasındadır. Marka bağımsız çalışıyoruz: Çelik Kasa, Döktaş, Onur Kasa, Gardesa, Chubb ve tüm ithal markalarda uzmanlığımız mevcuttur. İçerik ve dosyalarınıza tam güvenlikle erişmenizi sağlıyoruz.",
  },
  {
    emoji: "📱",
    title: "Akıllı Kilit Sistemleri",
    desc: "Yale, Nuki, Schlage, August ve tüm önde gelen markaların akıllı kilit (smart lock) sistemlerini kuruyoruz. Parmak izi tanımlama, şifre girişi, Bluetooth ve Wi-Fi entegrasyonu, NFC kart erişimi gibi modern güvenlik çözümlerini profesyonelce monte edip programlıyoruz. Mevcut kapı sisteminizle uyumlu cihaz seçimi konusunda ücretsiz danışmanlık veriyoruz. Kurulum sonrası uygulama yapılandırması ve kullanıcı eğitimi de hizmetimize dahildir.",
  },
  {
    emoji: "🔧",
    title: "Göbek Değişimi",
    desc: "Aşınan, kırılan veya zorla açılmaya çalışılan kilit gövdesi (göbek/silindir) değişimini yerinde ve hızlıca gerçekleştiriyoruz. Aynı markalı veya daha yüksek güvenlik sınıflı alternatif ürünler kullanarak kapınızı daha güvenli hale getiriyoruz.",
  },
];

const WHY_US = [
  {
    icon: "🏆",
    title: "15 Yıllık Tecrübe ve Uzmanlık",
    text: "Esenyurt Anahtar olarak 2009 yılından bu yana İstanbul'un batı yakasında — başta Esenyurt, Beylikdüzü ve Avcılar olmak üzere — binlerce müşteriye profesyonel çilingir hizmeti sunuyoruz. Ekibimiz İçişleri Bakanlığı onaylı güvenlik sertifikasına sahip, usta belgeli teknisyenlerden oluşmaktadır. Her yıl düzenlenen sektör eğitimlerine katılarak en yeni kilit teknolojileri ve açma yöntemleri konusunda güncel kalıyoruz. Bu deneyim, müdahale ettiğimiz her kapıda en doğru tekniği uygulamanın güvencesidir.",
  },
  {
    icon: "🛡️",
    title: "%100 Hasarsız Açma Garantisi",
    text: "Çilingir hizmetinde en büyük endişe, kapıya ya da kilide zarar verilmesidir. Esenyurt Anahtar olarak hiçbir çalışmamızda tahribatlı yöntem kullanmıyoruz. Kullandığımız profesyonel pick takımları, bump anahtar setleri ve dijital kilit analiz cihazları, kilit mekanizmasını yıpratmadan açmaya olanak tanır. İşlem sonrasında kapı ve kasanız orijinal görünümünü korur, kilidiniz bir sonraki kullanım için sağlıklı biçimde çalışmaya devam eder. Aksini kanıtlarsanız tüm maddi hasar bedelini karşılıyoruz — bu bir garanti değil, taahhüttür.",
  },
  {
    icon: "⚡",
    title: "15 Dakika Maksimum Varış Süresi",
    text: "Kapıda kalmak, özellikle gece veya kötü hava koşullarında son derece stresli ve tehlikeli bir durum olabilir. Bu yüzden Esenyurt, Beylikdüzü ve Avcılar bölgelerinde stratejik noktalarda konumlanan mobil servis araçlarımızla çağrınızdan itibaren ortalama 10-15 dakika içinde adresinizde oluyoruz. GPS takipli araçlarımız sayesinde trafiği anlık analiz ederek en hızlı rotayı kullanıyoruz. Gece yarısı, bayramlarda, hafta sonlarında — haftanın 7 günü, günün 24 saati bu hız garantisi geçerlidir.",
  },
];

const FAQS = [
  {
    q: "Geceleri ve bayраmlarda da hizmet veriyor musunuz?",
    a: "Evet, Esenyurt Anahtar olarak haftanın 7 günü, günün 24 saati — ulusal bayramlar, hafta sonları ve gece yarısı dahil — kesintisiz hizmet veriyoruz. Gece 03.00'te aradığınızda da aynı profesyonel ekip aynı fiyatla kapınıza geliyor; gece/gündüz fiyat farkı uygulamıyoruz. Tek yapmanız gereken numaramızı aramak veya WhatsApp'tan mesaj atmak; geri kalanını biz hallederiz.",
  },
  {
    q: "Kapıya ya da kilide zarar verir misiniz?",
    a: "Kesinlikle hayır. Tüm çalışmalarımızda uluslararası standartlarda profesyonel çilingir takımları ve non-destructive (tahribatsız) açma teknikleri kullanıyoruz. Kapı kasası, kaplama, boya ve kilit mekanizması orijinal durumunu korur. İşlem sonrasında kapınız ve kilidiniz mükemmel çalışmaya devam eder. Aksini yaşarsanız tüm hasar bedelini karşılama taahhüdümüz geçerlidir.",
  },
  {
    q: "Oto anahtar kopyalama ve immobilizer programlama yapıyor musunuz?",
    a: "Evet, tüm araç markaları ve modelleri için immobilizer transponder anahtar kopyası, uzaktan kumanda (remote key) programlama ve yedek anahtar üretimi yapıyoruz. Volkswagen, Renault, Ford, Toyota, Honda, Hyundai, BMW, Mercedes-Benz, Kia, Opel gibi hem Türkiye'de yaygın hem de nadiren aynı araç modellerinde uzmanız. Araçları yetkili servise çekmek yerine adresinizde aynı işlemi çok daha uygun fiyata ve hızlıca tamamlıyoruz.",
  },
  {
    q: "Fiyatlarınız önceden belli mi? Ekstra ücret çıkar mı?",
    a: "Telefonda ya da WhatsApp'ta durumu kısaca tarif etmeniz yeterli; size net ve sabit fiyat veriyoruz. Yerinde 'beklenmedik' ekstra ücret talep etmiyoruz. Standart kilit açma, göbek değişimi, oto anahtar ve kasa açma için sabit fiyat tarifemiz mevcuttur. Fiyatı kabul etmemeniz durumunda herhangi bir ücret almadan ayrılıyoruz. Şeffaflık politikamız gereği tüm işlemler için fatura düzenliyoruz.",
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Başta Esenyurt, Beylikdüzü ve Avcılar olmak üzere bu ilçelerin tüm mahallelerinde aktif servis sağlıyoruz. Esenyurt'ta Akıncılar, Fatih, Cumhuriyet, Pınar, Mehterçeşme mahallelerine; Beylikdüzü'nde Adnan Kahveci, Barış, Yakuplu, Gürpınar, Büyükşehir mahallelerine; Avcılar'da Cihangir, Firuzköy, Merkez, Tahtakale ve Ambarlı mahallelerine hızla ulaşıyoruz. Bunların dışındaki İstanbul bölgeleri için de iletişime geçmenizi öneririz.",
  },
];

const LOCAL_AREAS = [
  {
    district: "Esenyurt",
    desc: "Esenyurt çilingir hizmetimiz kapsamında; Akıncılar, Fatih, Cumhuriyet, Pınar, Mehterçeşme, Saadetdere, Hürriyet, Yeşilkent, Karaburçlar ve Çiğli mahallelerinde görev yapıyoruz.",
  },
  {
    district: "Bahçeşehir",
    desc: "Bahçeşehir çilingir hizmetimiz kapsamında; 1. Kısım, 2. Kısım, 3. Kısım, 4. Kısım, 5. Kısım ve 6. Kısım mahallelerine kesintisiz destek veriyoruz. Villa ve rezidans projelerinde uzman ekibimizle hizmetinizdeyiz.",
  },
];

/* ─── FAQ Accordion Component ────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2a2a32] rounded-2xl overflow-hidden bg-[#111114] hover:border-[#FFCC00]/30 transition-colors duration-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-bold text-sm sm:text-base leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#FFCC00] text-2xl font-light flex-shrink-0 mt-0.5 leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[#7a7a8c] text-sm sm:text-base leading-relaxed border-t border-[#2a2a32] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex flex-col items-start lg:items-center justify-start lg:justify-center overflow-hidden bg-[#0a0a0b]">
        {/* Glow orbs */}
        <div className="absolute top-[-15%] left-[15%] w-[700px] h-[700px] rounded-full bg-[#FFCC00] opacity-[0.035] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#FFCC00] opacity-[0.045] blur-[120px] pointer-events-none" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,204,0,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,204,0,.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-5 pb-6 sm:pt-10 lg:py-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center gap-3 sm:gap-5 lg:gap-7">
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 border border-[#FFCC00]/30 bg-[#FFCC00]/8 text-[#FFCC00] text-xs font-bold uppercase tracking-[0.22em] px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,204,0,0.1)]">
                <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
                7/24 Aktif &bull; Esenyurt &bull; Bahçeşehir
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-black tracking-tight leading-[1.05] text-white"
            >
              Esenyurt Anahtar<br />
              <span className="gradient-text glow-accent">15 Dakikada</span><br />
              <span className="text-white/90">Kesin Çözüm</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-[#9a9aac] text-base sm:text-lg max-w-2xl leading-snug sm:leading-relaxed font-medium">
              Esenyurt ve Bahçeşehir bölgesinde kapıda mı kaldınız? Profesyonel, yetki belgeli
              ustalarımızla 7/24 garantili, hasarsız kapı açma, kilit değiştirme ve oto çilingir hizmeti sunuyoruz.
            </motion.p>

            {/* Trust pills */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-2 w-full sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 sm:gap-2.5 bg-[#111114] border border-[#2a2a32] rounded-full px-3 py-2 sm:px-4 sm:py-2.5 hover:border-[#FFCC00]/40 transition-colors duration-300">
                  <span className="text-sm sm:text-base shrink-0">{t.icon}</span>
                  <span className="text-[#FFCC00] font-black text-xs sm:text-sm whitespace-nowrap">{t.value}</span>
                  <span className="text-[#7a7a8c] text-[11px] sm:text-xs font-medium leading-tight">{t.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+905318136860"
                className="group inline-flex items-center justify-center gap-3 bg-[#FFCC00] text-[#0a0a0b] font-black text-lg px-9 py-4 rounded-2xl shadow-[0_0_36px_rgba(255,204,0,0.45)] hover:shadow-[0_0_54px_rgba(255,204,0,0.75)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara: 0531 813 68 60
              </a>
              <a
                href="https://wa.me/905318136860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#111114] border border-[#2a2a32] text-white font-bold text-base px-8 py-4 rounded-2xl hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <span className="text-[#5a5a6c] text-[9px] uppercase tracking-[0.25em]">Kaydır</span>
          <svg className="w-4 h-4 text-[#FFCC00]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          NEDEN BİZİ SEÇMELİSİNİZ?
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#111114] border-y border-[#2a2a32] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,204,0,0.05) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div {...scrollReveal()} className="text-center mb-16">
            <span className="inline-block text-[#FFCC00] text-xs font-bold uppercase tracking-[0.22em] mb-3">Avantajlarımız</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Neden <span className="gradient-text">Bizi Seçmelisiniz?</span>
            </h2>
            <p className="text-[#7a7a8c] text-base sm:text-lg max-w-2xl mx-auto">
              Yüzlerce müşterinin güvendiği, sektörün standartlarını belirleyen bir ekiple çalışıyorsunuz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                {...scrollReveal(i * 0.13)}
                className="card-glow bg-[#0a0a0b] border border-[#2a2a32] rounded-2xl p-8 relative group"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-white font-black text-lg mb-4 group-hover:text-[#FFCC00] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#7a7a8c] text-sm leading-relaxed">{item.text}</p>
                {/* Accent bottom bar */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Big stat row */}
          <motion.div {...scrollReveal(0.3)} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "15+", l: "Yıllık Tecrübe" },
              { v: "2.500+", l: "Tamamlanan İş" },
              { v: "15 Dk", l: "Maks. Varış" },
              { v: "%100", l: "Müşteri Memnuniyeti" },
            ].map((s) => (
              <div key={s.l} className="text-center bg-[#0a0a0b] border border-[#2a2a32] rounded-2xl py-7 px-4 hover:border-[#FFCC00]/30 transition-colors duration-300">
                <div className="text-4xl sm:text-5xl font-black text-[#FFCC00] glow-accent mb-2">{s.v}</div>
                <div className="text-[#7a7a8c] text-xs uppercase tracking-[0.14em] font-semibold">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HİZMETLERİMİZ
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0a0a0b] relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%,rgba(255,204,0,0.04) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...scrollReveal()} className="text-center mb-16">
            <span className="inline-block text-[#FFCC00] text-xs font-bold uppercase tracking-[0.22em] mb-3">Ne Yapıyoruz?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Tüm <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-[#7a7a8c] text-base sm:text-lg max-w-xl mx-auto">
              Kilit, kapı ve güvenlik sistemleriyle ilgili her konuda profesyonel destek alın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                {...scrollReveal(i * 0.1)}
                whileHover={{ y: -6 }}
                className="card-glow bg-[#111114] border border-[#2a2a32] rounded-2xl p-8 cursor-default group transition-all duration-300"
              >
                <span className="text-4xl mb-5 block">{s.emoji}</span>
                <h3 className="text-white font-black text-lg mb-4 group-hover:text-[#FFCC00] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[#7a7a8c] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div {...scrollReveal(SERVICES.length * 0.1)} className="bg-[#FFCC00]/8 border border-[#FFCC00]/25 rounded-2xl p-8 flex flex-col justify-between gap-6">
              <div>
                <span className="text-4xl mb-5 block">📞</span>
                <h3 className="text-white font-black text-lg mb-3">Hizmetiniz Listede Yok mu?</h3>
                <p className="text-[#7a7a8c] text-sm leading-relaxed">
                  Kilit, kapı veya güvenlik sistemiyle ilgili farklı bir ihtiyacınız varsa bizi arayın. Yerinde
                  değerlendirme yaparak size en uygun çözümü sunuyoruz.
                </p>
              </div>
              <a
                href="tel:+905318136860"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC00] text-[#0a0a0b] font-black text-sm py-3 rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,204,0,0.35)]"
              >
                Hemen Ara
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SSS — FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#111114] border-t border-[#2a2a32]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...scrollReveal()} className="text-center mb-14">
            <span className="inline-block text-[#FFCC00] text-xs font-bold uppercase tracking-[0.22em] mb-3">SSS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
            <p className="text-[#7a7a8c] text-base">
              Aklınızdaki soruları aşağıda bulabilirsiniz. Cevap bulamazsanız bizi arayın.
            </p>
          </motion.div>

          <motion.div {...scrollReveal(0.1)} className="space-y-3">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div {...scrollReveal(0.2)} className="text-center mt-12">
            <p className="text-[#7a7a8c] text-sm mb-4">Aklınıza başka soru takılırsa:</p>
            <a
              href="tel:+905318136860"
              className="inline-flex items-center gap-2 text-[#FFCC00] font-black text-lg hover:text-white transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0531 813 68 60
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HİZMET BÖLGELERİ (Local SEO)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#0a0a0b] border-t border-[#2a2a32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...scrollReveal()} className="text-center mb-14">
            <span className="inline-block text-[#FFCC00] text-xs font-bold uppercase tracking-[0.22em] mb-3">Kapsama Alanımız</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Hizmet <span className="gradient-text">Bölgelerimiz</span>
            </h2>
            <p className="text-[#7a7a8c] text-base max-w-2xl mx-auto">
              İstanbul&apos;un batı yakasında iki bölgede mahalle mahalle kesintisiz hizmet veriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {LOCAL_AREAS.map((area, i) => (
              <motion.div
                key={area.district}
                {...scrollReveal(i * 0.12)}
                className="bg-[#111114] border border-[#2a2a32] rounded-2xl p-7 hover:border-[#FFCC00]/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FFCC00]/10 border border-[#FFCC00]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-black text-lg">{area.district}</h3>
                </div>
                <p className="text-[#7a7a8c] text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* SEO rich paragraph */}
          <motion.div
            {...scrollReveal(0.2)}
            className="bg-[#111114] border border-[#2a2a32] rounded-2xl p-8 sm:p-10"
          >
            <h3 className="text-white font-black text-xl mb-5 flex items-center gap-3">
              <span className="w-1 h-7 bg-[#FFCC00] rounded-full flex-shrink-0" />
              İstanbul Batı Yakasının En Hızlı Çilingiri
            </h3>
            <div className="space-y-4 text-[#7a7a8c] text-sm sm:text-base leading-relaxed">
              <p>
                Esenyurt Anahtar olarak İstanbul&apos;un en kalabalık ve hızla büyüyen bölgelerinden olan Esenyurt ve
                Bahçeşehir&apos;de birinci sınıf çilingir hizmeti sunuyoruz. Bu iki bölgenin toplam nüfusu 1 milyonun
                üzerinde olup, bölgede her gün yaşanan kapıda kalma, anahtar kayıp ve kilit arızası vakalarına anında
                müdahale etmek için sahadayız.
              </p>
              <p>
                <strong className="text-white">Esenyurt çilingir</strong> hizmetlerimizde Akıncılar Mahallesi, Fatih Mahallesi,
                Cumhuriyet Mahallesi, Pınar Mahallesi, Mehterçeşme Mahallesi, Saadetdere Mahallesi, Hürriyet Mahallesi,
                Yeşilkent Mahallesi ve Karaburçlar Mahallesi&apos;nde aktif ekiplerimiz görev yapmaktadır.{" "}
                <strong className="text-white">Bahçeşehir çilingir</strong> kapsamında 1. Kısım, 2. Kısım, 3. Kısım,
                4. Kısım, 5. Kısım ve 6. Kısım mahallelerine hızla yetişiyoruz. Villa ve rezidanslardaki
                üst segment kilit sistemlerine müdahalede uzmanlaşmış ekibimiz 10-15 dakikada kapınızda.
              </p>
              <p>
                Bu bölgelerde yaşayan veya çalışan tüm müşterilerimiz için ev, daire, dükkan, depo, araç ve kasa açma hizmetlerini
                yüksek standartlarda sunmaya devam ediyoruz. Servis araçlarımız bölgede sabit konuşlandırılmış olup ortalama varış
                süremiz 10-15 dakikadır. Yüksek sezon, tatil ve bayramlarda da ekibimiz tam kadro görev başındadır.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA STRIP
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#111114] border-t border-[#2a2a32]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            {...scrollReveal()}
            className="bg-[#0a0a0b] border border-[#FFCC00]/20 rounded-3xl p-10 md:p-16 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#FFCC00] opacity-[0.04] blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 border border-[#FFCC00]/30 text-[#FFCC00] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
                Acil Yardım Hattı
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
                Kapıda mı <span className="gradient-text">Kaldınız?</span>
              </h2>
              <p className="text-[#7a7a8c] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Strese girmeyin. Hemen arayın, 15 dakika içinde kapınızın önündeyiz. Gece gündüz, yağmur çamur,
                tatil veya bayram — 365 gün 24 saat hizmetinizdeyiz.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+905318136860"
                  className="inline-flex items-center justify-center gap-3 bg-[#FFCC00] text-[#0a0a0b] font-black text-xl px-10 py-5 rounded-2xl shadow-[0_0_36px_rgba(255,204,0,0.4)] hover:shadow-[0_0_56px_rgba(255,204,0,0.75)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0531 813 68 60
                </a>
                <a
                  href="https://wa.me/905318136860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-[#25D366]/40 text-[#25D366] font-bold text-base px-8 py-5 rounded-2xl hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
