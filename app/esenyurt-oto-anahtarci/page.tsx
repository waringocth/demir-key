import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Esenyurt Oto Anahtarcı | İmmobilizer, Yedek ve Kayıp Anahtar",
  description:
    "Esenyurt oto anahtarcı — tüm marka araçlarda yedek anahtar, kayıp anahtar, immobilizer programlama ve sustalı anahtar yapımı. 7/24 mobile servis.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Esenyurt Oto Anahtarcı", href: "/esenyurt-oto-anahtarci" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="ESENYURT"
      serviceLabel="Oto Anahtarcı Hizmeti"
      ctaTitle="Esenyurt'a Oto Anahtarcı Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      {/* ── Intro ── */}
      <p>
        <strong>Esenyurt oto anahtarı</strong> hizmetinde Esenyurt Anahtar, İstanbul&apos;un batı yakasının en donanımlı
        mobil oto anahtar servisini sunmaktadır. Araç anahtarınızı kaybettiniz, kırdınız veya araç içinde
        unuttunuz mu? Esenyurt&apos;un tüm mahallelerine 15 dakikada ulaşan teknisyenlerimiz; yetkili servis kalitesinde
        işleri yetkili servisin çok altında bir fiyatla ve adresinizde gerçekleştiriyor.
      </p>
      <p>
        Araç anahtarı teknolojisi son yıllarda son derece karmaşık bir hale gelmiştir. Transponder çipler,
        push-start sistemleri, proximity (yakınlık) anahtarları ve tam entegre immobilizer sistemleri artık neredeyse
        her yeni araçta standart olarak yer almaktadır. Esenyurt Anahtar teknisyenleri bu teknolojilerin tamamına
        hâkimdir ve sahada çözüm üretebilecek profesyonel cihazlarla donanmıştır.
      </p>

      <div className="section-divider" />

      {/* ── Yedek Anahtar ── */}
      <h2>Esenyurt Oto Yedek Anahtar — Tüm Markalar</h2>
      <p>
        <strong>Oto yedek anahtar</strong>, her araç sahibinin sahip olması gereken temel bir güvenlik önlemidir.
        Esenyurt&apos;ta hizmet verdiğimiz tüm mahallelerde — Akıncılar, Fatih, Yeşilkent, Karaburçlar ve diğerleri — araç
        markanız ve modeliniz ne olursa olsun orijinal kalitede yedek anahtar üretiyoruz.
      </p>
      <p>
        Yedek anahtar üretiminde iki temel adım işliyoruz: mekanik kesim ve elektronik programlama. Anahtarın
        fiziksel kısmı CNC anahtar kesme makinemizle hassas biçimde işlenir; ardından transponder çipi araç
        immobilizer sistemine programlanır. İşlem sonunda yeni anahtar, orijinal anahtarınızla birebir aynı işlevselliğe
        sahiptir.
      </p>
      <h3>Yedek Anahtar Yaptırabileceğiniz Markalar</h3>
      <ul>
        <li>Volkswagen, Audi, Seat, Škoda (VAG grubu)</li>
        <li>Ford, Renault, Peugeot, Citroën, Opel</li>
        <li>Toyota, Honda, Hyundai, Kia, Mitsubishi</li>
        <li>BMW, Mercedes-Benz, Volvo, Jaguar</li>
        <li>Fiat, Alfa Romeo, Jeep, Chrysler</li>
      </ul>

      <div className="section-divider" />

      {/* ── Kayıp Anahtar ── */}
      <h2>Esenyurt Oto Kayıp Anahtar — Sıfırdan Anahtar Üretimi</h2>
      <p>
        <strong>Oto kayıp anahtar</strong> durumu, yedek anahtarınız da yoksa çok daha ciddi bir sorun haline gelir.
        Bu durumda araç sistemi tamamen sıfırlanarak yeni anahtar set programlanması gerekir. Piyasada çok az sayıda
        oto anahtarcı bu işlemi sahada gerçekleştirebilir; biz Esenyurt&apos;ta doğrudan aracınızın yanında bu hizmetle
        sunuyoruz.
      </p>
      <p>
        Kayıp anahtar durumunda önce araç pin kodunu güvenli yöntemlerle tespit ediyor, ardından yeni anahtar
        üretiyoruz. İşlem sürecinde eski tüm anahtar tanımlarını sistemden siliyoruz — bu sayede kaybolan anahtarla
        bir daha araç açılamaz. Güvenliğiniz sıfırlanmış, aracınız korunmuş olur.
      </p>
      <h3>Kayıp Anahtar Sürecimiz</h3>
      <ul>
        <li>Araç ruhsatı ve kimlik doğrulama (sahiplik teyidi)</li>
        <li>Pin kod tespiti (OBD veya transponder okuma)</li>
        <li>Eski anahtar tanımlarının sistemden silinmesi</li>
        <li>Yeni anahtar kesimi ve programlama</li>
        <li>Kapı, kontak ve bagaj test kontrolü</li>
      </ul>

      <div className="section-divider" />

      {/* ── İmmobilizer ── */}
      <h2>İmmobilizer Anahtar Kopyalama — Çip Programlama</h2>
      <p>
        Modern araçlar, yabancı bir anahtarla çalıştırılmayı engelleyen <strong>immobilizer</strong> sistemleriyle
        donatılmıştır. Bu sistem, anahtar içindeki transponder çipin araç ECU&apos;suyla eşleşmesini şart koşar. Esenyurt
        Anahtar&apos;ın Esenyurt mobil ekibi; T5, ID48, ID46, ID63, 4D ve HITAG2/HITAG3 gibi yaygın transponder
        protokollerini programlayabilecek AUTEL, XTOOL ve Keyprog cihazlarıyla donatılmıştır.
      </p>
      <p>
        İmmobilizer kopyalama işlemi, orijinal anahtarın programını klonlayarak yedek bir anahtara aktarmayı
        kapsar. Bu yöntemle araç sistemine kayıt yapılmadan kopyalama mümkündür. Bazı araç modellerinde ise
        sisteme kayıtlı anahtar sayısına bağlı kısıtlamalar bulunur; bu durumda pin kod yöntemiyle sisteme
        doğrudan kayıt yapılır.
      </p>
      <h3>Desteklediğimiz Transponder Çip Protokolleri</h3>
      <ul>
        <li>Texas ID46 (Volkswagen, Ford, Peugeot)</li>
        <li>ID48 / ID48 Can (VW, Audi, Seat, Škoda)</li>
        <li>HITAG2 / HITAG Pro (BMW, Audi Smart Key)</li>
        <li>4D60 / 4D63 (Toyota, Mazda, Ford)</li>
        <li>ID63 (Mercedes NEC sistemi)</li>
        <li>PCF7936 T5 (evrensel, çoğu marka)</li>
      </ul>

      <div className="section-divider" />

      {/* ── Sustalı Anahtar ── */}
      <h2>Sustalı Anahtar Yapımı — Stil ve Fonksiyon</h2>
      <p>
        <strong>Sustalı (flip) anahtar</strong>, düz anahtarlı araçlarda hem görsel hem de pratik bir yükseltme
        sunar. Kemerinize veya çantanıza zarar vermeyen katlanabilir bıçaklı yapısı ve uzaktan kumanda
        entegrasyonuyla son derece kullanışlıdır. Esenyurt Anahtar olarak Esenyurt&apos;ta orijinal kumandanıza uyumlu
        sustalı anahtar kabuğu ve bıçak üretimi yapıyoruz.
      </p>
      <p>
        İşlem basittir: mevcut düz anahtarınızın transponder çipini alıp sustalı anahtar gövdesine aktarıyoruz,
        yeni bıçakla kesim yapıyoruz ve uzaktan kumanda işlevini test ediyoruz. Orjinal çip kullanıldığı için
        immobilizer programlama gerektirmez; araç mevcut sistemini tanımaya devam eder.
      </p>
      <h3>Sustalı Anahtar Hizmetimiz</h3>
      <ul>
        <li>Düz anahtardan flip anahtara dönüşüm</li>
        <li>Kırık veya aşınan sustalı anahtar kabuk değişimi</li>
        <li>Sustalı anahtar bıçak değişimi ve kesim</li>
        <li>Uzaktan kumanda tuş takımı değişimi</li>
        <li>Anahtar bataryası değişimi ve test</li>
      </ul>
    </ServicePageShell>
  );
}
