import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Bahçeşehir Çilingir | 7/24 Acil & Nöbetçi Çilingir Hizmeti",
  description:
    "Bahçeşehir çilingir hizmeti — 15 dakikada kapınızda. Çelik kapı açma, kilit değişimi, göbek değişimi ve nöbetçi çilingir hizmetinde Esenyurt Anahtar güvencesi.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Bahçeşehir Çilingir", href: "/bahcesehir-cilingir" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="BAHÇEŞEHİR"
      serviceLabel="Çilingir Hizmeti"
      ctaTitle="Bahçeşehir'e Çilingir Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Bahçeşehir çilingir</strong> hizmetinde İstanbul&apos;un en prestijli ve planlı
        yerleşim bölgelerinden birinde en yüksek kalitede hizmet sunuyoruz. Bahçeşehir; göl manzaralı
        villaları, lüks siteleri, rezidansları ve geniş yeşil alanlarıyla İstanbul&apos;un batı yakasının
        en değerli konut bölgelerinden biridir. Bu yapı, yüksek güvenlikli kapı ve kilit sistemlerine
        özel uzman çilingir ihtiyacını da beraberinde getirmektedir. Esenyurt Anahtar olarak tüm bu
        kapı ve kilit türlerinde profesyonel çözüm üretiyoruz.
      </p>
      <p>
        Bahçeşehir hizmet kapsamımız: 1. Kısım, 2. Kısım, 3. Kısım, 4. Kısım, 5. Kısım, 6. Kısım
        mahalleleri ile Akbatı çevresi ve çevre yerleşim alanları. Bu noktalarda konumlanan mobil
        ekiplerimiz <strong>ortalama 10-15 dakika</strong> içinde kapınızın önünde olur.
      </p>

      <div className="section-divider" />

      <h2>Bahçeşehir Acil Çilingir — Anında Müdahale</h2>
      <p>
        <strong>Bahçeşehir acil çilingir</strong> hizmetimizle kapıda kaldığınız anda bizi aramanız
        yeterlidir. GPS destekli servis araçlarımız bölgede daima hazır beklemekte olup çağrınızı
        aldıktan sonra ortalama 10-15 dakika içinde adresinize ulaşıyoruz. Bahçeşehir&apos;deki lüks
        site ve villaların güvenlik protolleri doğrultusunda, kapı açma öncesinde gerekli yetki
        teyidini en hızlı şekilde alıyoruz.
      </p>
      <p>
        Bahçeşehir&apos;in kapalı kapılı site yapıları, özel güvenlikli villalar ve akıllı giriş
        sistemleri gibi teknolojilere müdahale konusunda da ekibimiz tam donanımlıdır. Biyometrik
        destekli kapı sistemleri, akıllı kilit entegrasyonları ve çok noktalı üst segment kilit
        mekanizmalarında uzmanlığımız mevcuttur.
      </p>
      <h3>Acil Durumda Nelere Dikkat Etmeli?</h3>
      <ul>
        <li>Kapıyı zorlamaya çalışmayın — hasar riskini artırır</li>
        <li>Site veya villa güvenliğini bilgilendirin</li>
        <li>Adres ve kapı numarasını net şekilde verin</li>
        <li>Yetki gerektiren sistemler için kimlik bilginizi hazırlayın</li>
      </ul>

      <div className="section-divider" />

      <h2>Bahçeşehir Nöbetçi Çilingir — 365 Gün 24 Saat</h2>
      <p>
        <strong>Bahçeşehir nöbetçi çilingir</strong> hizmeti kapsamında ekibimiz haftanın 7 günü, günün
        24 saati, yılın 365 günü görevdedir. Gece 02:00&apos;de aradığınızda da gündüz 14:00&apos;te
        aradığınızda da aynı ekiple, aynı fiyatla ve aynı kaliteyle karşılaşırsınız. Gece mesai zammı
        veya acil dönem fiyatlaması uygulamıyoruz; tüm ücretler telefonda önceden bildirilir.
      </p>
      <p>
        Bahçeşehir&apos;in villa ve büyük site projelerinde, gece saatlerinde güvenlik önlemleri daha
        titiz uygulanabildiğinden kapıda kalmak daha kritik bir hal alabilir. Nöbetçi çilingir
        hizmetimizle gece yarısı bile hızlı ve güvenilir çözüm sunuyoruz.
      </p>

      <div className="section-divider" />

      <h2>Bahçeşehir Çelik Kapı Açma — Sıfır Hasar Garantisi</h2>
      <p>
        Bahçeşehir&apos;deki lüks konutların büyük çoğunluğunda yüksek güvenlikli B ve C sınıfı
        sertifikalı çelik kapılar kullanılmaktadır. <strong>Bahçeşehir çelik kapı açma</strong>{" "}
        hizmetimizde bu kapıların üreticiden bağımsız olarak güvenli ve hasarsız açılmasını garanti
        ediyoruz. Kale, IKON, Mul-T-Lock, Abloy, Gardesa, Çelik-İş ve tüm üst segment markalar
        uzmanlık kapsamımızda yer almaktadır.
      </p>
      <p>
        Özellikle villa ve rezidanslarda yer alan çok noktalı kilitleme sistemleri — üç, beş hatta
        yedi noktalı kilit mekanizmaları — standart yöntemlerle açılamaz. Bu sistemler için özel
        tension ve pick tekniklerini uygulayan teknisyenlerimiz kapıya hiçbir zarar vermeden açma
        işlemini tamamlar.
      </p>
      <h3>Desteklediğimiz Çelik Kapı Markaları</h3>
      <ul>
        <li>Kale, IKON, Mul-T-Lock, Abloy</li>
        <li>Çelik-İş, Gordion, Döktaş, Çalık</li>
        <li>Gardesa, Chubb, Dom, EVVA sistemi kapılar</li>
        <li>Üç noktalı ve çok noktalı kilitleme sistemleri</li>
        <li>Sertifikalı yangın/duman kapıları</li>
      </ul>

      <div className="section-divider" />

      <h2>Göbek ve Kilit Değişimi — Bahçeşehir&apos;de Güvenliği Yenileyin</h2>
      <p>
        Taşınma, kiracı değişikliği veya kayıp anahtar sonrasında kilit değiştirmek dijital güvenlik
        standartlarının zorunlu bir parçasıdır. <strong>Bahçeşehir göbek değişimi</strong> hizmetimizde
        mevcut kilidi söküp yerine B veya C sınıfı yüksek güvenlikli silindir takıyoruz. İşlem 15-20
        dakika içinde tamamlanır, yeni anahtarlarınız hemen teslim edilir ve fatura düzenlenir.
      </p>
      <p>
        Bahçeşehir&apos;deki prestijli konut projelerinde anahtar güvenliği kritiktir. Patentli kilit
        silindiri seçeneklerini de öneriyoruz; bu modeller üretici izni olmadan çoğaltılamayan
        anahtarlarla çalışır ve en yüksek güvenliği sağlar.
      </p>
      <h3>Kilit Değişiminde Önerdiğimiz Markalar</h3>
      <ul>
        <li>Kale Kilit — A, B, C sınıfı silindirler</li>
        <li>Mul-T-Lock — yüksek güvenlikli MT5 serisi</li>
        <li>Abloy — diskli kilit sistemi (bump proof)</li>
        <li>IKON — Alman mühendisliği silindirler</li>
        <li>Dom — pick ve kırılmaya dayanıklı modeller</li>
      </ul>
    </ServicePageShell>
  );
}
