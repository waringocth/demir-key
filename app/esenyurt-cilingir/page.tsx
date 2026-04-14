import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Esenyurt Çilingir | 7/24 Acil & Nöbetçi Çilingir Hizmeti",
  description:
    "Esenyurt çilingir hizmeti — 15 dakikada kapınızda. Çelik kapı açma, kilit değişimi, göbek değişimi ve nöbetçi çilingir hizmetinde Esenyurt Anahtar güvencesi.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Esenyurt Çilingir", href: "/esenyurt-cilingir" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="ESENYURT"
      serviceLabel="Çilingir Hizmeti"
      ctaTitle="Esenyurt'a Çilingir Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      {/* ── Intro ── */}
      <p>
        <strong>Esenyurt çilingir</strong> hizmetinde Esenyurt Anahtar olarak 15 yılı aşkın deneyimimizle bölgenin en
        güvenilir adresi olmaya devam ediyoruz. Esenyurt&apos;un hızla büyüyen nüfusu ve yoğun konut yapısı, nitelikli
        çilingir hizmetine olan ihtiyacı her geçen gün artırmaktadır. Biz bu ihtiyaca cevap verebilmek için
        Esenyurt&apos;ta stratejik noktalarda konumlanan mobil servis araçlarımızla sahadadayız ve çağrınızdan itibaren{" "}
        <strong>ortalama 10-15 dakika</strong> içinde adresinizde oluyoruz.
      </p>
      <p>
        Hizmet verdiğimiz başlıca Esenyurt mahalleleri şunlardır: Akıncılar, Fatih, Cumhuriyet, Pınar,
        Mehterçeşme, Saadetdere, Hürriyet, Yeşilkent, Karaburçlar, Çiğli. Bu mahallelerin tamamında aynı hız ve
        kalitede hizmet sunmak temel prensiplerimizden biridir.
      </p>

      <div className="section-divider" />

      {/* ── Acil Çilingir ── */}
      <h2>Esenyurt Acil Çilingir — Kapıda Kaldınız mı?</h2>
      <p>
        Kapıda kalmak, özellikle gece geç saatlerde veya kötü hava koşullarında büyük bir stres ve güvenlik riski
        oluşturabilir. <strong>Esenyurt acil çilingir</strong> hizmetimizle bu tür durumlara anında müdahale ediyoruz.
        7 gün 24 saat aktif olan ekibimiz, telefonunuzu kapattıktan sonra GPS destekli araçlarıyla en kısa rotayı
        seçerek 15 dakika içinde kapınızın önünde oluyor.
      </p>
      <p>
        Acil durumda zaman her şeydir. Bu nedenle telefonda uzun bilgi almak yerine adresi teyit eder, yola çıkarız.
        Çağrımızdan varışımıza kadar sizi bilgilendirmeye devam ediyor, tahmini varış süresini paylaşıyoruz. Aynı zamanda
        müdahale öncesinde mümkün olan en net fiyat bilgisini veriyoruz; sürpriz ücret uygulaması yapmıyoruz.
      </p>
      <h3>Acil Çilingir Hizmetimiz Kapsamındakiler</h3>
      <ul>
        <li>Kilitli kalan daire ve villa kapısı açma</li>
        <li>İçeride unutan çocuk veya yaşlı için acil kapı açma</li>
        <li>Kırılan veya içinde kalan anahtar çıkarma</li>
        <li>Hasarlı kilit mekanizması acil değişimi</li>
        <li>Bina giriş kapısı ve ofis kapısı acil açma</li>
      </ul>

      <div className="section-divider" />

      {/* ── Nöbetçi Çilingir ── */}
      <h2>Esenyurt Nöbetçi Çilingir — Gece ve Hafta Sonu Hizmeti</h2>
      <p>
        <strong>Esenyurt nöbetçi çilingir</strong> hizmetinde gece 00:00&apos;dan sabah 06:00&apos;ya kadar olan dilim
        dahil günün her saatinde görev yapıyoruz. Hafta sonları, resmi tatiller ve ulusal bayramlarda ekibimiz tam
        kadro çalışmakta; aynı kalite ve aynı fiyatla hizmet sunmaktadır. Gece ve gündüz fiyat farkı
        uygulamıyoruz — bu konuda müşterilerimize her zaman açık ve dürüst davranıyoruz.
      </p>
      <p>
        Pek çok çilingir firması hafta sonu veya gece aramalarına ya cevap vermiyor ya da normal fiyatın iki katı
        talep ediyor. Esenyurt Anahtar&apos;da bu yaklaşım kesinlikle geçerli değildir. Esenyurt bölgesindeki nöbetçi ekibimiz
        yıl boyunca — Kurban Bayramı, Ramazan Bayramı, yılbaşı, 23 Nisan, 29 Ekim dahil — 365 gün aktiftir.
      </p>
      <h3>Neden Gece Çilingiri Kritiktir?</h3>
      <p>
        Gece saatlerinde kapıda kalmak, cadde veya apartman girişinde beklemek güvenlik açısından ciddi riskler
        taşır. Özellikle Esenyurt gibi nüfus yoğunluğu yüksek bölgelerde bu tür durumlar hem stresli hem de
        istemediğiniz dikkat çekici olabilir. Nöbetçi çilingir hizmetimizle gecenin herhangi bir saatinde güvenle
        evine girme imkânı sunuyoruz.
      </p>

      <div className="section-divider" />

      {/* ── Çelik Kapı Açma ── */}
      <h2>Esenyurt Çelik Kapı Açma — Hasarsız ve Profesyonel</h2>
      <p>
        Esenyurt&apos;ta inşa edilen modern konutların büyük çoğunluğunda çelik kapı kullanılmaktadır. Bu kapılar
        güvenlik açısından ideal olsa da kilitlendiğinde açılması teknik bilgi ve özel ekipman gerektiren kapılardır.{" "}
        <strong>Esenyurt çelik kapı açma</strong> hizmetimizde marka ve model fark etmeksizin tüm çelik kapılarla
        çalışıyoruz: Çelik-İş, Gordion, Kale, Mul-T-Lock, Abloy, Çalık ve daha fazlası.
      </p>
      <p>
        Piyasada bazı çilingirler kapıyı tornavida veya levye ile zorlayarak açma girişiminde bulunur. Bu yöntem
        hem kapı kasasına hem de kilit mekanizmasına kalıcı hasar verir. Esenyurt Anahtar&apos;ın teknisyenleri
        uluslararası standartlarda non-destructive (tahribatsız) pick ve tension tekniklerini kullanır; silindir
        içi mekanizmayı hasar vermeden açar. İşlem sonunda kapınız ve kilidiniz fabrikasyon durumundadır.
      </p>
      <h3>Desteklediğimiz Çelik Kapı Markaları</h3>
      <ul>
        <li>Çelik-İş, Döktaş, Gordion, Çalık</li>
        <li>Kale, IKON, IKEA, Gardesa, Chubb</li>
        <li>Mul-T-Lock, Abloy, Dom, EVVA sistemi kapılar</li>
        <li>Üç noktalı ve çok noktalı kilitleme sistemleri</li>
        <li>Sertifikalı yangın/duman kapıları</li>
      </ul>

      <div className="section-divider" />

      {/* ── Göbek & Kilit Değişimi ── */}
      <h2>Göbek ve Kilit Değişimi — Esenyurt&apos;ta Güvenliği Artırın</h2>
      <p>
        Kilit silindiri (göbek) zamanla aşınır, yabancılar tarafından kopyalanmış anahtarlarla açılır hale gelebilir
        ya da zorla açma girişiminden hasar görebilir. Bu durumlarda <strong>Esenyurt kilit değişimi</strong>{" "}
        hizmetimizle mevcut kilidi söküp yerine daha yüksek güvenlik sınıflı bir model kuruyoruz.
      </p>
      <p>
        Göbek değişimi işlemi ortalama 15-25 dakika sürer ve ek sökme/montaj ücretleri dahil tek bir sabit fiyatla
        gerçekleştirilir. Yeni kilit olarak B veya C sınıfı (EN1303 standardı) silindirler öneriyoruz; bu modeller
        pick saldırısına, bump açmaya ve manyetik saldırıya karşı üstün direnç gösterir.
      </p>
      <p>
        Ev sahibi değişikliği sonrasında, kiracı çıkışında veya anahtar kayıplarının ardından kilit değişimi
        yaptırmak, evinizin güvenliğini sıfırlamanın en etkili yoludur. Esenyurt genelinde tüm mahallelerde yerinde
        göbek ve kilit değişimi yapıyor; yeni anahtarlarınızı teslim ediyor ve fatura düzenliyoruz.
      </p>
      <h3>Kilit Değişiminde Önerdiğimiz Markalar</h3>
      <ul>
        <li>Kale Kilit — A, B, C sınıfı silindirler</li>
        <li>Mul-T-Lock — yüksek güvenlikli MT5 serisi</li>
        <li>Abloy — diskli kilit sistemi (bump proof)</li>
        <li>IKON — Alman mühendisliği silindirler</li>
        <li>Çelik-İş marka kapılara uyumlu orijinal silindirler</li>
      </ul>
    </ServicePageShell>
  );
}
