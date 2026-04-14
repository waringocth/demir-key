import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FABButtons from "@/components/FABButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Demir Çilingir | 7/24 Profesyonel Çilingir - Esenyurt, Beylikdüzü, Avcılar",
    template: "%s | Demir Çilingir",
  },
  description:
    "Esenyurt, Beylikdüzü ve Avcılar'da 7/24 profesyonel çilingir ve oto anahtarcı hizmeti. 15 dakikada garantili kapı açma, kilit değişimi. Hemen arayın: 0531 813 68 60",
  keywords: [
    "çilingir",
    "esenyurt çilingir",
    "beylikdüzü çilingir",
    "avcılar çilingir",
    "oto anahtarcı",
    "7/24 çilingir",
    "acil çilingir",
  ],
  metadataBase: new URL("https://demircilingir.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Demir Çilingir",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${poppins.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-[family-name:var(--font-poppins)] bg-bg text-text antialiased flex flex-col min-h-screen relative z-10">
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <FABButtons />
      </body>
    </html>
  );
}
