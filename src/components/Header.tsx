import { cv, links, profile } from '@/content/site';
import { Icon } from './Icon';

const sections = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#documents', label: 'Documents' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>

        <nav className="site-nav" aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header-actions">
          <a className="icon-link" href={links.github} rel="me noopener" target="_blank">
            <Icon name="github" />
            <span>GitHub</span>
          </a>
          <a className="icon-link" href={links.linkedin} rel="me noopener" target="_blank">
            <Icon name="linkedin" />
            <span>LinkedIn</span>
          </a>
          <a className="button button-accent button-small" href={cv.file} download>
            <Icon name="download" size={16} />
            <span>
              <span className="wide-only">Download </span>CV
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
