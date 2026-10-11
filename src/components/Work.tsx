import { caseStudies, groups, links, moreWork, repos, type CaseStudy, type WorkLink } from '@/content/site';
import { Icon } from './Icon';
import { PathLegend, SignalPath } from './SignalPath';

function WorkLinks({ items }: { items: WorkLink[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="work-links">
      {items.map((link) => (
        <li key={link.href}>
          <a className="icon-link" href={link.href} target="_blank" rel="noopener">
            <Icon name={link.kind === 'github' ? 'github' : link.kind === 'live' ? 'external' : 'document'} size={16} />
            {link.label}
            {link.kind === 'portfolio' && <span className="quiet"> (PDF)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="chips" aria-label="Built with">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Case({ study, open }: { study: CaseStudy; open: boolean }) {
  return (
    <article className="case" id={study.id} aria-labelledby={`${study.id}-title`}>
      <div className="case-head">
        <p className="case-meta">
          <span className="case-org">{study.org}</span>
          <span>{study.role}</span>
        </p>
        <div>
          <h4 className="case-title" id={`${study.id}-title`}>
            {study.title}
          </h4>
          <p className="case-summary">{study.summary}</p>
        </div>
      </div>

      <SignalPath stages={study.path} label={`Request path through ${study.title}`} />

      <details className="case-detail" open={open}>
        <summary>
          Problem, approach and outcome<span className="visually-hidden"> for {study.title}</span>
        </summary>
        <dl className="pao">
          <div>
            <dt>Problem</dt>
            <dd>{study.problem}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{study.approach}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{study.outcome}</dd>
          </div>
        </dl>
        <ul className="case-points">
          {study.detail.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>

      <div className="case-foot">
        <Chips items={study.stack} />
        <WorkLinks items={study.links} />
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="work-heading">Selected work</h2>
          <p>
            Most of this is enterprise software, so the code is private. The architecture is not. Each case study
            shows the path a request takes and who makes the call at every step.
          </p>
          <PathLegend />
          <nav aria-label="Work, by kind">
            <ul className="jump">
              {groups.map((group) => (
                <li key={group.id}>
                  <a href={`#${group.id}`}>{group.title}</a>
                </li>
              ))}
              <li>
                <a href="#github">Code on GitHub</a>
              </li>
            </ul>
          </nav>
        </header>

        {groups.map((group, g) => {
          const studies = caseStudies.filter((study) => study.group === group.id);
          const briefs = moreWork.filter((item) => item.group === group.id);
          return (
            <section className="group" id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
              <header className="group-head">
                <h3 id={`${group.id}-heading`}>{group.title}</h3>
                <p>{group.text}</p>
              </header>

              {studies.map((study, i) => (
                <Case study={study} key={study.id} open={g === 0 && i === 0} />
              ))}

              {briefs.length > 0 && (
                <ul className="brief-list">
                  {briefs.map((item) => (
                    <li className="brief" key={item.title}>
                      <p className="brief-org">{item.org}</p>
                      <div className="brief-body">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                        <Chips items={item.stack} />
                      </div>
                      <WorkLinks items={item.links} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <section className="group" id="github" aria-labelledby="github-heading">
          <header className="group-head">
            <h3 id="github-heading">Code on GitHub</h3>
            <p>The public repositories. Private ones are available to walk through on request.</p>
          </header>
          <ul className="brief-list">
            {repos.map((repo) => (
              <li className="brief" key={repo.name}>
                <p className="brief-org">{repo.language}</p>
                <div className="brief-body">
                  <h4>{repo.name}</h4>
                  <p>{repo.text}</p>
                </div>
                <ul className="work-links">
                  <li>
                    <a className="icon-link" href={repo.href} target="_blank" rel="noopener">
                      <Icon name="github" size={16} />
                      View repository
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <p className="group-more">
            <a className="icon-link" href={`${links.github}?tab=repositories`} target="_blank" rel="noopener">
              <Icon name="github" size={16} />
              All repositories at github.com/vrandesh
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
