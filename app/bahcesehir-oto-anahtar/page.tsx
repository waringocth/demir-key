import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Bahçeşehir Oto Anahtarcı | İmmobilizer, Yedek ve Kayıp Anahtar",
  description:
    "Bahçeşehir oto anahtarcı — tüm marka araçlarda yedek anahtar, kayıp anahtar, immobilizer programlama ve sustalı anahtar yapımı. 7/24 mobil servis. Esenyurt Anahtar.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Bahçeşehir Oto Anahtarcı", href: "/bahcesehir-oto-anahtar" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="BAHÇEŞEHİR"
      serviceLabel="Oto Anahtarcı Hizmeti"
      ctaTitle="Bahçeşehir'e Oto Anahtarcı Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Bahçeşehir oto anahtarcı</strong> hizmetinde Esenyurt Anahtar, bölgenin en kapsamlı
        mobil oto anahtar servisini sunmaktadır. Bahçeşehir&apos;in geniş villa bahçeleri, kapalı
        otoparklı rezidansları ve alışveriş merkezi alanlarında yaşanan anahtar kayıplarına,
        kilitlenme sorunlarına ve yedek anahtar ihtiyaçlarına 15 dakika içinde cevap veriyoruz.
      </p>
      <p>
        Bahçeşehir&apos;de üst segment araç sahipliğinin yoğunluğu nedeniyle BMW, Mercedes-Benz,
        Audi, Volvo ve Porsche gibi premium markalarda anahtar işlemleri sıkça talep edilmektedir.
        Mobil servis ekibimiz bu araçların gelişmiş transponder ve proximity sistemleri ile tam
        uyumlu profesyonel cihazlarla donanmıştır.
      </p>

      <div className="section-divider" />

      <h2>Bahçeşehir Oto Yedek Anahtar — Tüm Marka ve Modeller</h2>
      <p>
        <strong>Oto yedek anahtar</strong> yaptırmak, anahtarınızı kaybetmeden önce almanız gereken
        en önemli güvenlik önlemlerinden biridir. Bahçeşehir&apos;de hizmet verdiğimiz tüm noktalarda
        aracınızın markası ve modeline özel yedek anahtar üretiyoruz. Kesimden programlamaya kadar
        tüm işlem sahada ve araç başında gerçekleştirilir; servise çekme gerekmez.
      </p>
      <p>
        Yedek anahtar üretiminde kullandığımız ham anahtarlar orijinal üretici standartlarını
        karşılamaktadır. Anahtar kesiminde hassas CNC makineleri kullanıyoruz ve ardından araç
        immobilizer sistemine transponder çipi programlıyoruz. Teslim öncesinde kontak, kapı kilidi
        ve bagaj ile başarılı test yapıyoruz.
      </p>
      <h3>Yedek Anahtar Yaptırabileceğiniz Markalar</h3>
      <ul>
        <li>BMW, Mercedes-Benz, Audi, Volvo, Porsche</li>
        <li>Volkswagen, Seat, Škoda (VAG grubu)</li>
        <li>Ford, Renault, Peugeot, Citroën, Opel</li>
        <li>Toyota, Honda, Hyundai, Kia, Mitsubishi</li>
        <li>Fiat, Alfa Romeo, Jeep, Land Rover</li>
      </ul>

      <div className="section-divider" />

      <h2>Bahçeşehir Oto Kayıp Anahtar — Sıfırdan Çözüm</h2>
      <p>
        Tüm anahtarlarınızı kaybettiğinizde araç sistemi sıfırlanarak yeni anahtar tanımlanması
        gerekir. Bu işlem teknik açıdan en karmaşık oto anahtar prosedürlerinden biridir ve sahada
        yapılabilmesi için özel cihaz ve uzmanlık gerektirir.{" "}
        <strong>Bahçeşehir kayıp anahtar</strong> hizmetimizde tüm bu işlemleri adresinizde
        gerçekleştiriyoruz.
      </p>
      <p>
        Güvenlik açısından kritik nokta şudur: kayıp anahtar ile birlikte eski tüm anahtar
        tanımlamaları sistemden temizlenmeli ve yeni anahtar tek kayıtlı anahtar olarak sisteme
        girilmelidir. Bu sayede kaybolan anahtar bir daha araç açmak için kullanılamaz. Müşterilerimize
        bu süreci eksiksiz ve doğru biçimde uyguluyoruz.
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

      <h2>İmmobilizer Anahtar Kopyalama ve Çip Programlama</h2>
      <p>
        İmmobilizer sistemi, yalnızca araç tarafından tanınan transponder çipi olan anahtarların
        çalışmasına izin verir. <strong>Bahçeşehir immobilizer kopyalama</strong> hizmetimizde AUTEL
        MaxiIM, XTOOL X100 PAD ve KeyProg cihazlarıyla H çipleri dahil tüm nesil transponder
        protokollerini programlayabiliyoruz.
      </p>
      <p>
        Kopyalama işlemi mümkün olan durumlarda orijinal anahtardan klonlama yoluyla yapılır ve
        sisteme yük bindirilmez. Klonlamanın mümkün olmadığı kriptolu sistemlerde (örn. HITAG3,
        JMA serie) pin kod yöntemiyle sisteme doğrudan kayıt yapılır. Her iki yöntemde de sonuç
        aynıdır: tam işlevsel, tanınan bir yedek anahtar.
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

      <h2>Sustalı Anahtar Yapımı — Bahçeşehir&apos;de Dönüşüm Hizmeti</h2>
      <p>
        Düz anahtarlı aracınızı <strong>sustalı (flip) anahtar</strong>a dönüştürmek hem pratik hem
        de estetik açıdan büyük fark yaratır. Katlanabilir bıçak yapısı cebinizi yırtmaz, çantanıza
        zarar vermez ve kullanım sırasında son derece konforludur. Esenyurt Anahtar olarak
        Bahçeşehir&apos;de bu dönüşümü araç başında gerçekleştiriyoruz.
      </p>
      <p>
        Mevcut düz anahtarınızdaki transponder çipi çıkarılıp sustalı anahtar gövdesine aktarılır.
        Yeni bıçak yüksek hassasiyetli CNC makinesiyle kesilir. Uzaktan kumanda işlevi orijinal
        programını korur. İşlem süresi genellikle 20-30 dakikadır ve ek gün/randevu gerekmez.
      </p>
      <h3>Sustalı Anahtar Uygulayabildiğimiz Markalar</h3>
      <ul>
        <li>Volkswagen, Seat, Škoda, Audi (VAG serisi)</li>
        <li>Ford Edge, Focus, Fiesta akıllı anahtarlar</li>
        <li>Renault Megane, Clio, Laguna</li>
        <li>Opel Astra, Insignia, Corsa</li>
        <li>Fiat Doblo, Linea, Egea</li>
      </ul>
    </ServicePageShell>
  );
}
