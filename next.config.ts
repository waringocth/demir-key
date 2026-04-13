import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/esenyurt-cilingir.html", destination: "/esenyurt-cilingir", permanent: true },
      { source: "/esenyurt-oto-anahtarci.html", destination: "/esenyurt-oto-anahtarci", permanent: true },
      { source: "/beylikduzu-cilingir.html", destination: "/beylikduzu-cilingir", permanent: true },
      { source: "/beylikduzu-oto-anahtarci.html", destination: "/beylikduzu-oto-anahtarci", permanent: true },
      { source: "/avcilar-cilingir.html", destination: "/avcilar-cilingir", permanent: true },
      { source: "/avcilar-oto-anahtarci.html", destination: "/avcilar-oto-anahtarci", permanent: true },
    ];
  },
};

export default nextConfig;
