import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Beylikdüzü Çilingir | 7/24 Acil & Nöbetçi Çilingir Hizmeti",
  description:
    "Beylikdüzü çilingir hizmeti — 15 dakikada kapınızda. Çelik kapı açma, kilit değişimi, göbek değişimi ve nöbetçi çilingir hizmetinde Esenyurt Anahtar güvencesi.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Beylikdüzü Çilingir", href: "/beylikduzu-cilingir" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="BEYLİKDÜZÜ"
      serviceLabel="Çilingir Hizmeti"
      ctaTitle="Beylikdüzü'ne Çilingir Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Beylikdüzü çilingir</strong> hizmetinde İstanbul&apos;un en düzenli ve modern ilçelerinden birinde en
        yüksek kalitede hizmet sunuyoruz. Beylikdüzü, planlı kentsel yapısı, geniş caddeleri ve büyük konut
        kompleksleriyle diğer ilçelerden ayrışan bir profil çizmektedir. Bu yapı, rezidans, site ve toplu konut
        kapılarına özel uzman çilingir ihtiyacını da beraberinde getirmektedir. Esenyurt Anahtar olarak tüm bu
        kapı ve kilit türlerinde çözüm üretiyoruz.
      </p>
      <p>
        Beylikdüzü hizmet kapsamımız: Adnan Kahveci Mahallesi, Barış Mahallesi, Yakuplu Mahallesi, Gürpınar
        Mahallesi, Büyükşehir Mahallesi ve Dereağzı Mahallesi. Bu mahallelerin her birinde görevdeki ekiplerimiz
        <strong> ortalama 10-15 dakika</strong> içinde kapınızın önünde olur.
      </p>

      <div className="section-divider" />

      <h2>Beylikdüzü Acil Çilingir — Anında Müdahale</h2>
      <p>
        <strong>Beylikdüzü acil çilingir</strong> hizmetimizle kapıda kaldığınız anda bizi aramanız yeterlidir.
        GPS destekli servis araçlarımız bölgede daima hazır beklemekte olup çağrınızı aldıktan sonra
        ortalama 10-15 dakika içinde adresinize ulaşıyoruz. Rezidans sitelerine giriş, asansör karşısında bekleme
        gibi vakit kayıplarını en aza indirmek için site güvenlik yönetimi ile önceden koordinasyon sağlıyoruz.
      </p>
      <p>
        Beylikdüzü&apos;ndeki modern rezidans ve sitelerde kapı erişim sistemleri farklılık gösterebilir. Manyetik kilitli
        kapılar, dijital şifreli giriş sistemleri ve akıllı kapı kilitleri gibi teknolojilere müdahale konusunda da
        ekibimiz yetkindir. Hangi sistemle karşılaştığımıza bakılmaksızın doğru teknikle açma işlemi uyguluyoruz.
      </p>
      <h3>Acil Durumda Nelere Dikkat Etmeli?</h3>
      <ul>
        <li>Kapıyı zorlamaya çalışmayın — hasar riskini artırır</li>
        <li>Site veya bina güvenliğini bilgilendirin</li>
        <li>Adres ve kat bilginizi net şekilde verin</li>
        <li>Kapıyı açmak için gereksiz deneme yapmaktan kaçının</li>
      </ul>

      <div className="section-divider" />

      <h2>Beylikdüzü Nöbetçi Çilingir — 365 Gün 24 Saat</h2>
      <p>
        <strong>Beylikdüzü nöbetçi çilingir</strong> hizmeti kapsamında ekibimiz haftanın 7 günü, günün 24 saati,
        yılın 365 günü görevdedir. Gece 02:00&apos;de aradığınızda da gündüz 14:00&apos;te aradığınızda da aynı ekiple, aynı
        fiyatla ve aynı kaliteyle karşılaşırsınız. Gece mesai zammı veya acil dönem fiyatlaması uygulamıyoruz;
        tüm ücretler telefonda önceden bildirilir.
      </p>
      <p>
        Beylikdüzü&apos;nün yaygın AVM&apos;leri, ofis alanları ve konut siteleri gece saatlerinde de kilit sorunlarıyla
        karşılaşmaya açıktır. Depoda kalan yetkili personel, gece vardiyasında ofise erişim sorunu yaşayan çalışan
        veya gece geç saatte eve dönüp kapıda kalan biri için anında müdahale ediyoruz.
      </p>

      <div className="section-divider" />

      <h2>Beylikdüzü Çelik Kapı Açma — Sıfır Hasar Garantisi</h2>
      <p>
        Beylikdüzü&apos;nün yeni yapı konutlarının tamamına yakınında B veya C sınıfı sertifikalı çelik kapılar
        kullanılmaktadır. <strong>Beylikdüzü çelik kapı açma</strong> hizmetimizde bu kapıların üreticiden bağımsız
        olarak güvenli ve hasarsız açılmasını garanti ediyoruz. Kale, IKON, Çelik-İş, Gordion, Gardesa ve diğer
        tüm markalar uzmanlık kapsamımızda yer almaktadır.
      </p>
      <p>
        Özellikle site ve rezidanslarda yer alan çok noktalı kilitleme sistemleri — üç veya beş noktalı kilit
        mekanizmaları — standart yöntemlerle açılamaz. Bu sistemler için özel tension ve pick tekniklerini
        uygulayan teknisyenlerimiz kapıya hiçbir zarar vermeden açma işlemini tamamlar.
      </p>

      <div className="section-divider" />

      <h2>Göbek ve Kilit Değişimi — Beylikdüzü&apos;nde Güvenliği Yenileyin</h2>
      <p>
        Taşınma, kiracı değişikliği veya kayıp anahtar sonrasında kilit değiştirmek dijital güvenlik standartlarının
        zorunlu bir parçasıdır. <strong>Beylikdüzü göbek değişimi</strong> hizmetimizde mevcut kilidi söküp
        yerine B veya C sınıfı yüksek güvenlikli silindir takıyoruz. İşlem 15-20 dakika içinde tamamlanır,
        yeni anahtarlarınız hemen teslim edilir.
      </p>
      <p>
        Özellikle Beylikdüzü&apos;nün büyük site projelerinde daireler arasında anahtar modellerinin benzerliğinden
        kaynaklanan riskler mevcuttur. Kopyalanmış anahtara karşı güvenli olan patentli kilit silindiri seçeneklerini
        de öneriyoruz; bu modeller üretici izni olmadan çoğaltılamayan anahtarlarla çalışır.
      </p>
    </ServicePageShell>
  );
}
