import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { siteConfig } from '../content/siteContent';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="404 - Sidan hittades inte | Studio Corner"
        description="Sidan du letar efter finns inte eller har flyttats."
        canonicalPath="/404"
        noindex={true}
      />

      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '580px' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(64px, 10vw, 110px)',
              fontWeight: 600,
              lineHeight: 1,
              color: 'var(--color-accent)',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            404
          </span>
          <h1 className="section-title" style={{ marginBottom: '14px' }}>
            Sidan kunde inte hittas
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
            Sidan du söker finns inte eller har flyttats. Gå tillbaka till startsidan eller boka din tid direkt på Bokadirekt.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">
              <Home size={16} />
              <span>Till startsidan</span>
            </Link>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <Calendar size={16} />
              <span>Boka tid</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
