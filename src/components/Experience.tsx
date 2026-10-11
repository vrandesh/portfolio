import { earlier, experience, recommendation } from '@/content/site';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="experience-heading">Experience</h2>
          <p>Seventeen years across Melbourne and Bengaluru, from infrastructure operations to leading engineering teams.</p>
        </header>

        <ol className="roles">
          {experience.map((role) => (
            <li className="role" key={role.org}>
              <p className="role-when">
                <span>{role.from}</span> to <span>{role.to}</span>
                <span className="role-place">{role.place}</span>
              </p>
              <div className="role-body">
                <h3>{role.org}</h3>
                <p className="role-title">{role.title}</p>
                <ul className="role-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Worked with">
                  {role.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          {earlier.map((role) => (
            <li className="role role-brief" key={role.org}>
              <p className="role-when">{role.years}</p>
              <div className="role-body">
                <h3>{role.org}</h3>
                <p className="role-title">{role.title}</p>
                <p>{role.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="reference">
          <blockquote>
            <p>{recommendation.quote}</p>
          </blockquote>
          <figcaption>
            <span className="reference-name">{recommendation.name}</span>
            <span>{recommendation.title}</span>
            <span className="quiet">{recommendation.context}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
