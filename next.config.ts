import type { NextConfig } from 'next';

// Static export: `npm run build` writes plain HTML, CSS and assets to ./out,
// which any static host (Cloudflare Pages, Vercel, GitHub Pages) can serve.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
