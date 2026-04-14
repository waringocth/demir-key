import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FABButtons from "@/components/FABButtons";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Esenyurt Anahtar | 7/24 Profesyonel Çilingir - Esenyurt, Bahçeşehir",
    template: "%s | Esenyurt Anahtar",
  },
  description:
    "Esenyurt ve Bahçeşehir'de 7/24 profesyonel çilingir ve oto anahtarcı hizmeti. 15 dakikada garantili kapı açma, kilit değişimi. Hemen arayın: 0531 813 68 60",
  keywords: [
    "çilingir",
    "esenyurt çilingir",
    "bahçeşehir çilingir",
    "esenyurt oto anahtarcı",
    "oto anahtarcı",
    "7/24 çilingir",
    "acil çilingir",
  ],
  metadataBase: new URL("https://esenyurtanahtar.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://esenyurtanahtar.com",
    siteName: "Esenyurt Anahtar",
    title: "Esenyurt Anahtar | 7/24 Profesyonel Çilingir - Esenyurt, Bahçeşehir",
    description:
      "Esenyurt ve Bahçeşehir'de 7/24 profesyonel çilingir ve oto anahtarcı hizmeti. 15 dakikada garantili kapı açma, kilit değişimi. Hemen arayın: 0531 813 68 60",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Esenyurt Anahtar - 7/24 Profesyonel Çilingir Hizmeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esenyurt Anahtar | 7/24 Profesyonel Çilingir",
    description:
      "Esenyurt ve Bahçeşehir'de 7/24 çilingir hizmeti. 15 dakikada kapınızda. 0531 813 68 60",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://esenyurtanahtar.com",
    languages: {
      "tr-TR": "https://esenyurtanahtar.com",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "name": "Esenyurt Anahtar",
  "url": "https://esenyurtanahtar.com",
  "telephone": "+905318136860",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Esenyurt"
    },
    {
      "@type": "City",
      "name": "Bahçeşehir"
    },
    {
      "@type": "City",
      "name": "İstanbul"
    }
  ],
  "image": "https://esenyurtanahtar.com/og-image.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-[family-name:var(--font-poppins)] bg-bg text-text antialiased flex flex-col min-h-screen relative z-10">
        <GoogleTagManager gtmId="GTM-NRPKGL78" />
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <FABButtons />
      </body>
    </html>
  );
}
