import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Avcılar Oto Anahtarcı | İmmobilizer, Yedek ve Kayıp Anahtar",
  description:
    "Avcılar oto anahtarcı — tüm marka araçlarda yedek anahtar, kayıp anahtar, immobilizer programlama ve sustalı anahtar yapımı. 7/24 mobile servis.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Avcılar Oto Anahtarcı", href: "/avcilar-oto-anahtarci" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="AVCILAR"
      serviceLabel="Oto Anahtarcı Hizmeti"
      ctaTitle="Avcılar'a Oto Anahtarcı Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Avcılar oto anahtarcı</strong> hizmetimizle araç anahtar sorunlarınıza sahada, anında ve uygun
        fiyatla çözüm üretiyoruz. Avcılar&apos;ın E-5 kenarında yoğun trafik koridorlarındaki otoparklardan sahil
        şeridindeki plaka parklarına kadar her noktada mobilize hizmet sunuyoruz. Çağrınızdan itibaren 15 dakika
        içinde araç başındayız.
      </p>
      <p>
        Demir Çilingir Avcılar mobil oto anahtar ekibi; Cihangir, Firuzköy, Merkez, Tahtakale, Ambarlı ve
        Denizköşkler mahallelerini kapsamaktadır. Araç markanız veya modeliniz ne olursa olsun uzmanlık
        kapsamımızda yer alıyor.
      </p>

      <div className="section-divider" />

      <h2>Avcılar Oto Yedek Anahtar — Anında Üretim</h2>
      <p>
        <strong>Avcılar oto yedek anahtar</strong> hizmetimizde mevcut çalışan anahtarınız üzerinden yeni bir yedek
        üretiyoruz. İşlem aracı hareket ettirmeyi veya servise çekmeyi gerektirmez; araç başında tamamlanır.
        CNC kesim makinemiz ve programlama cihazlarımız sahada yanımızda olduğu için hem fiziksel kesim hem de
        elektronik programlama aynı anda yapılır.
      </p>
      <p>
        Yedek anahtar maliyeti yetkili servisteki muadiline kıyasla genellikle %50-70 daha düşüktür. Daha önemlisi,
        randevu beklemenize gerek yoktur; araç başında 20-45 dakika içinde işleminiz tamamlanır.
        Marka garantisi ve çalışma garantisi veriyoruz — anahtar çalışmazsa tam iade.
      </p>

      <div className="section-divider" />

      <h2>Avcılar Oto Kayıp Anahtar — Tüm Anahtarları Kaybolanlar İçin</h2>
      <p>
        Aracınızın tüm anahtarlarını kaybettiğinizde yetkili servise çekilme maliyeti ve bekleme süresi ciddi
        sorunlar yaratır. <strong>Avcılar kayıp anahtar</strong> hizmetimizde bu sorunu sahada çözüyoruz. OBD
        portundan pin kod tespiti veya transponder okuma sistemleriyle aracın güvenlik kodunu buluyoruz ve
        sisteme kayıtlı tüm eski anahtarları silerek yeni anahtar oluşturuyoruz.
      </p>
      <p>
        Önemli güvenlik notu: kayıp anahtar işleminde yalnızca araç sahibinin başvurusu kabul edilir. İşlem
        öncesinde araç ruhsatı ve kimlik belgesi kontrolü yapıyoruz. Bu prosedür hem sizin güvenliğiniz hem de
        hukuki uyumluluk açısından zorunludur ve sektörün etik standardını oluşturmaktadır.
      </p>
      <h3>Kayıp Anahtar İşlem Adımları</h3>
      <ul>
        <li>Kimlik ve ruhsat doğrulaması</li>
        <li>OBD veya transponder ile pin kod tespiti</li>
        <li>Eski anahtar kayıtlarının sistemden silinmesi</li>
        <li>Yeni anahtar kesimi ve programlama</li>
        <li>Çalışma testi ve teslimat</li>
      </ul>

      <div className="section-divider" />

      <h2>İmmobilizer Anahtar Kopyalama — Avcılar&apos;da Güvenli Programlama</h2>
      <p>
        <strong>İmmobilizer</strong> sistemi, araç motorunun yalnızca tanımlı transponder çip içeren anahtarla
        çalıştırılmasına izin verir. Bu sistemin kopyalanması ya klonlama yöntemiyle ya da sisteme pin üzerinden
        doğrudan kayıt yapılarak gerçekleştirilir. Demir Çilingir Avcılar ekibi her iki yöntemi de uygulamaya
        yetkili ve donanımlıdır.
      </p>
      <p>
        AUTEL MaxiIM IM608, XTOOL X100 PAD3 ve Abrites Commander cihazlarıyla Avcılar&apos;da sahada tam immobilizer
        programlama yapıyoruz. T5, PCF7936, ID46, ID48, ID63, ID4D ve HITAG2/3 dahil tüm yaygın çip
        protokollerini destekliyoruz. Bazı şifreli protokollerde (HITAG3, DST+) özel donanım gerekmektedir;
        ekibimiz bu donanıma da sahiptir.
      </p>

      <div className="section-divider" />

      <h2>Sustalı Anahtar Yapımı ve Kabuk Değişimi</h2>
      <p>
        <strong>Sustalı anahtar</strong> (flip key) dönüşümünde mevcut düz anahtarınızın iç elektronik bileşenleri
        — transponder çipi ve kümanda devre kartı — korunarak yeni bir sustalı kabuk içine yerleştirilir.
        Yeni flip bıçak hassas CNC kesimle hazırlanır. Sonuçta hem görünüm hem kullanım açısından premium bir
        anahtar deneyimi yaşarsınız.
      </p>
      <p>
        Kırık veya aşınan sustalı anahtar kabukları için de değişim hizmeti sunuyoruz. Orijinal elektronik
        bileşenleriniz sağlamsa yalnızca dış kabuk ve bıçak değişimiyle bütçe dostu bir yenileme yapılabilir.
        Uzaktan kumanda tuş takımı değişimi, batarya değişimi ve kumanda senkronizasyonu da bu kapsamda
        değerlendirilir.
      </p>
      <h3>Sustalı Anahtar Hizmeti Detayları</h3>
      <ul>
        <li>Düz anahtardan flip anahtara dönüşüm</li>
        <li>Kırık sustalı anahtar kabuk değişimi</li>
        <li>Sustalı anahtar bıçak yenileme ve kesim</li>
        <li>Remote kumanda tuş takımı değişimi</li>
        <li>Kumanda senkronizasyonu ve test</li>
        <li>CR2032 / CR2025 batarya değişimi</li>
      </ul>
    </ServicePageShell>
  );
}
