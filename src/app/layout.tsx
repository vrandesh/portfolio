import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/archivo/wdth.css';
import './globals.css';
import { profile } from '@/content/site';

const title = `${profile.name}, ${profile.role.toLowerCase()} in Melbourne`;
const description =
  'Forward deployed engineer for applied AI: agentic systems, retrieval and the deterministic controls that make them safe in production. 17 years of full stack and cloud engineering. Case studies, public code and CV.';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    title,
    description,
    siteName: profile.name,
    locale: 'en_AU',
    images: [{ url: profile.photoFallback, width: 800, height: 800, alt: profile.name }],
  },
  twitter: { card: 'summary', title, description, images: [profile.photoFallback] },
};

export const viewport: Viewport = {
  themeColor: '#0e3a35',
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
