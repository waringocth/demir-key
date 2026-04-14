import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Beylikdüzü Oto Anahtarcı | İmmobilizer, Yedek ve Kayıp Anahtar",
  description:
    "Beylikdüzü oto anahtarcı — tüm marka araçlarda yedek anahtar, kayıp anahtar, immobilizer programlama ve sustalı anahtar yapımı. 7/24 mobile servis.",
};

const BREADCRUMBS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmet Bölgeleri", href: "/#bolge" },
  { label: "Beylikdüzü Oto Anahtarcı", href: "/beylikduzu-oto-anahtarci" },
];

export default function Page() {
  return (
    <ServicePageShell
      district="BEYLİKDÜZÜ"
      serviceLabel="Oto Anahtarcı Hizmeti"
      ctaTitle="Beylikdüzü'ne Oto Anahtarcı Çağır"
      breadcrumbs={BREADCRUMBS}
    >
      <p>
        <strong>Beylikdüzü oto anahtarı</strong> hizmetinde Esenyurt Anahtar, bölgenin en kapsamlı mobil oto anahtar
        servisini sunmaktadır. Beylikdüzü&apos;nün geniş caddeleri, büyük AVM otoparklarında ve konut sitesi
        garajlarında yaşanan anahtar kayıplarına, kilitlenme sorunlarına ve yedek anahtar ihtiyaçlarına 15 dakika
        içinde cevap veriyoruz.
      </p>
      <p>
        Beylikdüzü&apos;nde yüksek trafik yoğunluğu nedeniyle araç anahtarıyla ilgili sorunlar işlek noktalarda ve
        otoparklarda sık yaşanmaktadır. Mobil servis ekibimiz bu bölgenin trafik dinamiklerini iyi bilerek en hızlı
        rotayla aracınıza ulaşmaktadır. Hizmet kapsamı: Adnan Kahveci, Barış, Yakuplu, Gürpınar, Büyükşehir ve
        Dereağzı mahalleleri.
      </p>

      <div className="section-divider" />

      <h2>Beylikdüzü Oto Yedek Anahtar — Tüm Marka ve Modeller</h2>
      <p>
        <strong>Oto yedek anahtar</strong> yaptırmak, anahtarınızı kaybetmeden önce almanız gereken en önemli
        güvenlik önlemlerinden biridir. Beylikdüzü&apos;nde hizmet verdiğimiz tüm noktalarda aracınızın markası ve
        modeline özel yedek anahtar üretiyoruz. Kesimden programlamaya kadar tüm işlem sahada ve araç başında
        gerçekleştirilir; servise çekme gerekmez.
      </p>
      <p>
        Yedek anahtar üretiminde kullandığımız ham anahtarlar orijinal üretici standartlarını karşılamaktadır.
        Anahtar kesiminde hassas CNC makineleri kullanıyoruz ve ardından araç immobilizer sistemine transponder
        çipi programlıyoruz. Teslim öncesinde kontak, kapı kilidi ve bagaj ile başarılı test yapıyoruz.
      </p>
      <h3>Yedek Anahtar Avantajları</h3>
      <ul>
        <li>Kayıp anında aracınız yerde kalmaz</li>
        <li>Yetkili servis fiyatlarının %50-70 altında maliyet</li>
        <li>Servis randevusu bekleme zamanı yok</li>
        <li>Adresinizde tamamlanan işlem, zaman tasarrufu</li>
      </ul>

      <div className="section-divider" />

      <h2>Beylikdüzü Oto Kayıp Anahtar — Sıfırdan Çözüm</h2>
      <p>
        Tüm anahtarlarınızı kaybettiğinizde araç sistemi sıfırlanarak yeni anahtar tanımlanması gerekir. Bu işlem
        teknik açıdan en karmaşık oto anahtar prosedürlerinden biridir ve sahada yapılabilmesi için özel cihaz ve
        uzmanlık gerektirir. <strong>Beylikdüzü kayıp anahtar</strong> hizmetimizde tüm bu işlemleri adresinizde
        gerçekleştiriyoruz.
      </p>
      <p>
        Güvenlik açısından kritik nokta şudur: kayıp anahtar ile birlikte eski tüm anahtar tanımlamaları sistemden
        temizlenmeli ve yeni anahtar tek kayıtlı anahtar olarak sisteme girilmelidir. Bu sayede kaybolan anahtar
        bir daha araç açmak için kullanılamaz. Müşterilerimize bu süreci eksiksiz ve doğru biçimde uyguluyoruz.
      </p>

      <div className="section-divider" />

      <h2>İmmobilizer Anahtar Kopyalama ve Çip Programlama</h2>
      <p>
        İmmobilizer sistemi, yalnızca araç tarafından tanınan transponder çipi olan anahtarların çalışmasına izin
        verir. <strong>Beylikdüzü immobilizer kopyalama</strong> hizmetimizde AUTEL MaxiIM, XTOOL X100 PAD ve
        KeyProg cihazlarıyla H çipleri dahil tüm nesil transponder protokollerini programlayabiliyoruz.
      </p>
      <p>
        Kopyalama işlemi mümkün olan durumlarda orijinal anahtardan klonlama yoluyla yapılır ve sisteme yük
        bindirilmez. Klonlamanın mümkün olmadığı kriptolu sistemlerde (örn. HITAG3, JMA serie) pin kod
        yöntemiyle sisteme doğrudan kayıt yapılır. Her iki yöntemde de sonuç aynıdır: tam işlevsel, tanınan bir
        yedek anahtar.
      </p>

      <div className="section-divider" />

      <h2>Sustalı Anahtar Yapımı — Beylikdüzü&apos;nde Dönüşüm Hizmeti</h2>
      <p>
        Düz anahtarlı aracınızı <strong>sustalı (flip) anahtar</strong>a dönüştürmek hem pratik hem de estetik açıdan
        büyük fark yaratır. Katlanabilir bıçak yapısı cebinizi yırtmaz, çantanıza zarar vermez ve kullanım
        sırasında son derece konforludur. Esenyurt Anahtar olarak Beylikdüzü&apos;nde bu dönüşümü araç başında
        gerçekleştiriyoruz.
      </p>
      <p>
        Mevcut düz anahtarınızdaki transponder çipi çıkarılıp sustalı anahtar gövdesine aktarılır. Yeni bıçak
        yüksek hassasiyetli CNC makinesiyle kesilir. Uzaktan kumanda işlevi orijinal programını korur. İşlem
        süresi genellikle 20-30 dakikadır ve ek gün/randevu gerekmez.
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
