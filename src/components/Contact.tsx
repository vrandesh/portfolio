import { contact, cv, links, profile } from '@/content/site';
import { DotField, Mesh } from './DotField';
import { Icon } from './Icon';

export function Contact() {
  return (
    <footer className="contact field" id="contact" aria-labelledby="contact-heading">
      <Mesh />
      <DotField />
      <div className="wrap">
        <h2 id="contact-heading">{contact.heading}</h2>
        <p className="contact-text">{contact.text}</p>

        <div className="contact-actions">
          <a className="button button-accent" href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            {profile.email}
          </a>
          <a className="button button-ghost" href={links.linkedin} rel="me noopener" target="_blank">
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <a className="button button-ghost" href={links.github} rel="me noopener" target="_blank">
            <Icon name="github" />
            GitHub
          </a>
          <a className="button button-ghost" href={cv.file} download>
            <Icon name="download" />
            Download CV
          </a>
        </div>

        <p className="colophon">
          <span>
            {profile.name}, {profile.location}.
          </span>
          <span>
            Built with Next.js and TypeScript. <a href={links.source}>Source on GitHub</a>.
          </span>
        </p>
      </div>
    </footer>
  );
}
