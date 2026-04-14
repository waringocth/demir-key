import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Avcılar Çilingir | 7/24 Acil & Nöbetçi Çilingir Hizmeti",
  description:
    "Avcılar çilingir hizmeti — 15 dakikada kapınızda. Çelik kapı açma, kilit değişimi, göbek değişimi ve nöbetçi çilingir hizmetinde Esenyurt Anahtar güvencesi.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Avcılar Çilingir", href: "/avcilar-cilingir" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="AVCILAR"
      serviceLabel="Çilingir Hizmeti"
      ctaTitle="Avcılar'a Çilingir Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Avcılar çilingir</strong> hizmetinde İstanbul&apos;un köklü ilçelerinden birinde en hızlı ve kaliteli
        çilingir deneyimini sunuyoruz. Avcılar; sahil şeridi, üniversite kampüsü ve yoğun konut dokusundan
        oluşan heterojen yapısıyla çilingir ihtiyacı açısından oldukça aktif bir bölgedir. Esenyurt Anahtar olarak
        bu bölgede daima hazır ekibimizle 7/24 hizmetinizdeyiz.
      </p>
      <p>
        Avcılar hizmet kapsamımız: Cihangir Mahallesi, Firuzköy Mahallesi, Merkez Mahallesi, Tahtakale Mahallesi,
        Ambarlı Mahallesi ve Denizköşkler Mahallesi. Bu mahallelerin tamamında <strong>ortalama 10-15 dakika</strong>
        içinde adresinizde oluyoruz.
      </p>

      <div className="section-divider" />

      <h2>Avcılar Acil Çilingir — 15 Dakikada Kapınızda</h2>
      <p>
        <strong>Avcılar acil çilingir</strong> hizmetimiz, kapıda kaldığınız andan itibaren saniyeler içinde
        devreye girmektedir. Çağrınızı aldıktan hemen sonra en yakın servis aracımızı bilgilendirip adresinize
        yönlendiriyoruz. Avcılar&apos;ın trafik yoğунluğu yüksek E-5 güzergahını da hesaba katarak GPS navigasyon ile
        en hızlı rotayı seçiyoruz.
      </p>
      <p>
        Avcılar&apos;da gece geç saatte veya hafta sonunun erken saatlerinde kapıda kalmak özellikle stresli olabilir.
        Sahil şeridine yakın mahallelerde gece görüşü kısıtlı ortamlarda beklemek güvenlik riski oluşturabilir. Bu
        nedenle hız bizim için bir öncelik değil, taahhüttür. Müşterimiz telefonu kapattıktan sonra varış
        güncellemelerini paylaşıyoruz.
      </p>
      <h3>Acil Çilingir Kapsamımız</h3>
      <ul>
        <li>Daire ve villa kapısı acil açma</li>
        <li>Bina ve site giriş kapısı açma</li>
        <li>İçeride kalan anahtar veya insan durumları</li>
        <li>Kırık anahtar parçası çıkarma</li>
        <li>Kilitlenmiş ofis ve depo kapısı açma</li>
      </ul>

      <div className="section-divider" />

      <h2>Avcılar Nöbetçi Çilingir — Gece Gündüz Yanınızda</h2>
      <p>
        <strong>Avcılar nöbetçi çilingir</strong> hizmetimizle gece 00:00&apos;dan sabah 07:00&apos;ye kadar olan saatler
        dahil günün her anında görev yapıyoruz. Ekibimiz rotasyonlu çalışma sistemiyle her zaman dinç ve hazır
        vaziyette tutulmaktadır. Uzun bekleyişler, cevapsız aramalar veya "şu an hizmet veremiyoruz" açıklamaları
        bizde yaşanmaz.
      </p>
      <p>
        Avcılar&apos;da İstanbul Üniversitesi Avcılar Kampüsü yakınındaki konutlar, Ambarlı liman bölgesindeki işyerleri
        ve sahile yakın yazlık tipi daireler gece kapı sorunlarıyla öne çıkan yerlerdir. Bu bölgelerin tamamına
        aynı hızda ve aynı fiyatla yanıt veriyoruz. Gece/gündüz, hafta içi/hafta sonu fiyat farkı yok.
      </p>

      <div className="section-divider" />

      <h2>Avcılar Çelik Kapı Açma — Uzman Ellerde Hasarsız Açma</h2>
      <p>
        Avcılar&apos;da hem eski yapı hem de yeni inşaat konutları bulunmaktadır. Eski yapılardaki ahşap kapılar kolayca
        açılabilecekmiş gibi görünse de kötü yöntemler uygulandığında kasa ve menteşe hasar görür. Yeni yapılarda
        ise B/C sınıfı çelik kapılar kullanılmaktadır. <strong>Avcılar çelik kapı açma</strong> hizmetimizde her
        iki kapı türünde de hasarsız açma garantisi sunuyoruz.
      </p>
      <p>
        Çelik kapı açmada kullandığımız profesyonel pick setleri, kilit silindirini aşındırmadan, çerçeveye zarar
        vermeden ve boya çizerek açma yöntemi kullanılarak yapılan tüm diğer girişimlerin aksine izler bırakmadan
        işlemi tamamlar. İşlem ortalama 5-15 dakika sürer; kapı tipi ve kilit markasına göre değişiklik
        gösterebilir.
      </p>

      <div className="section-divider" />

      <h2>Göbek ve Kilit Değişimi — Avcılar&apos;da Güvenlik Güncellemesi</h2>
      <p>
        <strong>Avcılar kilit değişimi</strong> hizmetimizde mevcut silindirinizi yüksek güvenlik sınıflı bir
        modelle değiştiriyoruz. Bu işlem; ev sahibi değişikliği, kiracı çıkışı, anahtar kaybı veya güvenlik
        endişesi gibi durumlarda kesinlikle önerilen bir önlemdir. Silindir değişiminde hem kapıya uyum hem de
        güvenlik sınıfı önceliklerimiz arasındadır.
      </p>
      <p>
        Patentli anahtar (kopyalanamaz anahtar) sistemine geçiş de göbek değişiminde tercih edeceğiniz bir
        seçenektir. Bu sistemlerde anahtar yalnızca üretici fabrikasında çoğaltılabilir; herhangi bir anahtarcıda
        kopyalanamaz. Özellikle Avcılar&apos;da yoğun kiracı döngüsü olan binalarda yüksek oranda tercih edilmektedir.
      </p>
      <h3>Önerdiğimiz Yüksek Güvenlik Kilit Seçenekleri</h3>
      <ul>
        <li>Kale MAX — B sınıfı, 6 pin, yüksek tolerans</li>
        <li>Mul-T-Lock MT5+ — patentli, en yüksek güvenlik</li>
        <li>IKON TurboS — Avrupa standardı C sınıfı</li>
        <li>Dom Sigma Plus — anti-pick, anti-bump sistemi</li>
      </ul>
    </ServicePageShell>
  );
}
