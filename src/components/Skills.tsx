import { credentials, practices } from '@/content/site';
import { Tools } from './Tools';

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="skills-heading">Skills</h2>
          <p>What I reach for in production, and the projects each one has earned its place in.</p>
        </header>

        <Tools />

        <div className="subsection" id="practices">
          <h3 className="subsection-title">Practices</h3>
          <dl className="ledger">
            {practices.map((group) => (
              <div key={group.area}>
                <dt>{group.area}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="subsection" id="education">
          <h3 className="subsection-title">Education and credentials</h3>
          <dl className="ledger ledger-dated">
            {credentials.map((item) => (
              <div key={item.what}>
                <dt>
                  {item.what}
                  {item.when && <span className="ledger-when">{item.when}</span>}
                </dt>
                <dd>{item.where}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
