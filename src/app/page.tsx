import { Approach } from '@/components/Approach';
import { Contact } from '@/components/Contact';
import { Documents } from '@/components/Documents';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Work } from '@/components/Work';
import { links, profile } from '@/content/site';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photoFallback}`,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressRegion: 'VIC', addressCountry: 'AU' },
  worksFor: { '@type': 'Organization', name: 'Findex' },
  sameAs: [links.github, links.linkedin],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Work />
        <Experience />
        <Skills />
        <Documents />
      </main>
      <Contact />
      {/* Static structured data from the content file; "<" is escaped so it can never close the tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
