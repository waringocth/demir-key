import { MetadataRoute } from 'next';

const BASE_URL = 'https://esenyurtanahtar.com';

const routes = [
  '',
  '/bahcesehir-cilingir',
  '/bahcesehir-oto-anahtar',
  '/esenyurt-cilingir',
  '/esenyurt-oto-anahtarci',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
