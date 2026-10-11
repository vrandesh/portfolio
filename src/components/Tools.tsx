import { logos, type Logo } from '@/content/logos';
import { projectsUsing, toolGroups, tools } from '@/content/site';
import { Reveal } from './Reveal';

const SHOWN = 4; // projects listed on a tile before "and N more"

function Mark({ logo }: { logo: Logo }) {
  if (logo.path) {
    return (
      <svg viewBox={logo.viewBox} aria-hidden="true" focusable="false">
        <path d={logo.path} fill={logo.fill} />
      </svg>
    );
  }
  // Multi-colour marks come as ready-made SVG markup from the checked-in logos file.
  return (
    <svg viewBox={logo.viewBox} aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{ __html: logo.body ?? '' }} />
  );
}

export function Tools() {
  return (
    <div className="tool-groups">
      {toolGroups.map((group) => (
        <section key={group.id} aria-labelledby={`tools-${group.id}`}>
          <h3 className="tool-group-title" id={`tools-${group.id}`}>
            {group.title}
          </h3>
          <Reveal>
            <ul className="tools">
              {tools
                .filter((tool) => tool.group === group.id)
                .map((tool, i) => {
                  const logo: Logo = logos[tool.logo];
                  const projects = projectsUsing(tool);
                  const more = projects.length - SHOWN;
                  return (
                    <li
                      className="tool"
                      key={tool.name}
                      tabIndex={0}
                      style={{ '--i': i, ...(logo.brand ? { '--brand': logo.brand } : {}) } as React.CSSProperties}
                    >
                      <span className="tool-logo">
                        <Mark logo={logo} />
                      </span>
                      <div className="tool-body">
                        <h4 className="tool-name">{tool.name}</h4>
                        <div className="tool-swap">
                          <div className="tool-front">
                            <p>{tool.line}</p>
                            <p className="tool-count">
                              {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                            </p>
                          </div>
                          <div className="tool-back">
                            <p className="tool-used">Used in</p>
                            <ul>
                              {projects.slice(0, SHOWN).map((title, n) => (
                                <li key={title} style={{ '--n': n } as React.CSSProperties}>
                                  {title}
                                </li>
                              ))}
                              {more > 0 && (
                                <li className="tool-more" style={{ '--n': SHOWN } as React.CSSProperties}>
                                  and {more} more
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </Reveal>
        </section>
      ))}
      <p className="tool-note">
        Hover, focus or tap a tool to see where it was used. Logos are trademarks of their owners.
      </p>
    </div>
  );
}
