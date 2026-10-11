import { statSync } from 'node:fs';
import path from 'node:path';
import { documents, profile } from '@/content/site';
import { Icon } from './Icon';

// Read at build time, so the size shown always matches the file being served.
function fileSize(file: string) {
  const bytes = statSync(path.join(process.cwd(), 'public', file)).size;
  return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

export function Documents() {
  return (
    <section className="section" id="documents" aria-labelledby="documents-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="documents-heading">Documents</h2>
          <p>The CV comes in a few versions, each weighted for a different kind of role. The work is the same in all of them.</p>
        </header>

        <ul className="docs">
          {documents.map((doc) => (
            <li className={doc.primary ? 'doc is-primary' : 'doc'} key={doc.id}>
              <div className="doc-body">
                <h3>{doc.title}</h3>
                <p>{doc.note}</p>
              </div>
              {doc.published ? (
                <>
                  <p className="doc-meta">
                    PDF, {doc.pages} pages, {fileSize(doc.file)}
                  </p>
                  <div className="doc-actions">
                    <a className="button button-solid button-small" href={doc.file} download>
                      <Icon name="download" size={16} />
                      Download<span className="visually-hidden"> {doc.title}</span>
                    </a>
                    <a className="doc-open" href={doc.file} target="_blank" rel="noopener">
                      Open in browser<span className="visually-hidden">: {doc.title}</span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p className="doc-meta">PDF, {doc.pages} pages, sent on request</p>
                  <div className="doc-actions">
                    <a
                      className="button button-solid button-small"
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(`Request: ${doc.title}`)}`}
                    >
                      <Icon name="mail" size={16} />
                      Request by email<span className="visually-hidden">: {doc.title}</span>
                    </a>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
