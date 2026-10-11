import { approach } from '@/content/site';

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="approach-heading">How I work</h2>
          <p>
            Forward deployed engineering as I practise it. I work best where the problem is still unclear and the
            engineer is expected to help define the answer, not just implement a specification.
          </p>
        </header>

        <ol className="steps">
          {approach.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
