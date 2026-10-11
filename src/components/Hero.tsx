import { career, cv, links, portfolio, profile } from '@/content/site';
import { DotField, Mesh } from './DotField';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section className="hero field" id="top">
      <Mesh />
      <DotField />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-name">
              {profile.name}
              <span className="hero-role">
                {profile.role}. {profile.focus}.
              </span>
            </h1>

            <p className="hero-statement">{profile.statement}</p>

            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-accent" href={cv.file} download>
                <Icon name="download" />
                Download CV
              </a>
              {portfolio.published ? (
                <a className="button button-ghost" href={portfolio.file} download>
                  <Icon name="document" />
                  Download work portfolio
                </a>
              ) : (
                <a className="button button-ghost" href="#work">
                  See the AI work
                </a>
              )}
            </div>
            <ul className="hero-links">
              <li>
                <a className="icon-link" href={links.github} rel="me noopener" target="_blank">
                  <Icon name="github" />
                  github.com/vrandesh
                </a>
              </li>
              <li>
                <a className="icon-link" href={links.linkedin} rel="me noopener" target="_blank">
                  <Icon name="linkedin" />
                  linkedin.com/in/vrandesh
                </a>
              </li>
            </ul>
          </div>

          <figure className="hero-portrait">
            <picture>
              <source srcSet={profile.photo} type="image/webp" />
              <img
                src={profile.photoFallback}
                alt="Vrandesh Bandikatti, smiling, in a navy jacket in front of an ivy-covered brick wall"
                width={720}
                height={720}
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <dl className="facts">
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Currently</dt>
                  <dd>{profile.current}</dd>
                </div>
                {profile.availability && (
                  <div>
                    <dt>Available</dt>
                    <dd className="facts-available">{profile.availability}</dd>
                  </div>
                )}
              </dl>
            </figcaption>
          </figure>
        </div>

        <ol className="career" aria-label="Career so far">
          {career.map((step, i) => (
            <li
              key={step.year}
              className={[step.ongoing && 'is-ongoing', step.latest && 'is-latest'].filter(Boolean).join(' ') || undefined}
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="career-year">
                {step.year}
                {step.ongoing && <span className="career-now"> to now</span>}
              </span>
              <span className="career-what">{step.what}</span>
              <span className="career-where">{step.where}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
