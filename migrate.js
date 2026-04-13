const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, '..', '_backup');
const appDir = path.join(__dirname, 'app');

const files = fs.readdirSync(backupDir).filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
  const content = fs.readFileSync(path.join(backupDir, file), 'utf8');
  
  // Extract Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Extract Description
  const descMatch = content.match(/<meta name="description" content="(.*?)">/s);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract H1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const h1 = h1Match ? h1Match[1].trim().replace(/\n/g, ' ').replace(/\s+/g, ' ') : '';

  // Extract subtitle (first p after h1)
  const subtitleMatch = content.match(/<\/h1>\s*<p[^>]*>(.*?)<\/p>/s);
  const subtitle = subtitleMatch ? subtitleMatch[1].trim().replace(/\n/g, ' ').replace(/\s+/g, ' ') : '';

  // Extract H2
  const h2Match = content.match(/<h2[^>]*>(.*?)<\/h2>/s);
  const h2 = h2Match ? h2Match[1].trim() : '';

  // Extract paragraphs after H2
  const paragraphs = [];
  const h2Split = content.split(/<h2[^>]*>.*?<\/h2>/s);
  if (h2Split.length > 1) {
    const sectionPart = h2Split[1].split('</section>')[0];
    const pMatches = sectionPart.match(/<p[^>]*>(.*?)<\/p>/gs);
    if (pMatches) {
        pMatches.forEach(p => {
             paragraphs.push(p.replace(/<p[^>]*>/, '').replace('</p>', '').trim());
        });
    }
  }

  const routeName = file.replace('.html', '');
  const dirPath = path.join(appDir, routeName);
  if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
  }

  const code = `import type { Metadata } from 'next';
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "${title.replace(/"/g, '\\"')}",
  description: "${description.replace(/"/g, '\\"')}",
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brandblue via-blue-900 to-slate-900 text-white py-16 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brandyellow rounded-full opacity-10 filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 rounded-full opacity-20 filter blur-[100px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn type="fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              ${h1}
            </h1>
          </FadeIn>
          <FadeIn type="fade-up" delay={150}>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-blue-100 leading-relaxed">
              ${subtitle}
            </p>
          </FadeIn>
          <FadeIn type="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <a
                href="tel:+905318136860"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-brandblue bg-brandyellow hover:bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
              >
                <svg className="h-6 w-6 mr-3 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0531 813 68 60
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn type="fade-right" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-l-4 border-brandyellow pl-4 tracking-tight">
              ${h2}
            </h2>
            " + paragraphs.map(p => "<p className=\\"text-lg text-gray-600 leading-relaxed mb-6 font-light\\">" + p + "</p>").join("\\n            ") + "
          </FadeIn>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-brandblue to-blue-900 py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn type="fade-up">
            <h2 className="text-3xl font-bold mb-14 text-brandyellow">Neden Bizi Tercih Etmelisiniz?</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <FadeIn type="zoom-in" delay={100}>
              <div className="text-5xl font-black mb-3">15+</div>
              <div className="text-sm uppercase tracking-widest font-medium text-blue-200">Yıllık Tecrübe</div>
            </FadeIn>
            <FadeIn type="zoom-in" delay={200}>
              <div className="text-5xl font-black mb-3">15 Dk</div>
              <div className="text-sm uppercase tracking-widest font-medium text-blue-200">Hızlı Ulaşım</div>
            </FadeIn>
            <FadeIn type="zoom-in" delay={300}>
              <div className="text-5xl font-black mb-3">%100</div>
              <div className="text-sm uppercase tracking-widest font-medium text-blue-200">Müşteri Memnuniyeti</div>
            </FadeIn>
            <FadeIn type="zoom-in" delay={400}>
              <div className="text-5xl font-black mb-3">7/24</div>
              <div className="text-sm uppercase tracking-widest font-medium text-blue-200">Kesintisiz Destek</div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log('Migrated', routeName);
}
