import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Check, ArrowUpRight, ArrowLeft, Calendar } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { servicesData } from '../content/services';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageMeta
        title={`${service.title} | Studio Corner Trollhättan`}
        description={`${service.description} Pris: ${service.price}, Tid: ${service.duration}. Boka tid på Studio Corner i Trollhättan.`}
        canonicalPath={`/services/${service.id}`}
      />

      <PageHero
        kicker={service.categoryLabel.toUpperCase()}
        title={service.title}
        description={service.description}
        bgImage={service.image || '/images/salon-interior.jpg'}
      >
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={service.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <Calendar size={16} />
            <span>Boka denna tid ({service.price})</span>
            <ArrowUpRight size={15} />
          </a>
          <Link to="/services" className="btn btn--secondary">
            <ArrowLeft size={16} />
            <span>Alla behandlingar</span>
          </Link>
        </div>
      </PageHero>

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="service-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="service-card__category">{service.categoryLabel}</span>
              <span className="service-card__price" style={{ fontSize: '24px' }}>{service.price}</span>
            </div>

            <h2 className="service-card__title" style={{ fontSize: '28px', marginBottom: '16px' }}>
              {service.title}
            </h2>

            <div className="service-card__meta" style={{ marginBottom: '24px' }}>
              <span className="service-card__duration" style={{ fontSize: '15px' }}>
                <Clock size={18} color="var(--color-accent)" />
                Behandlingstid: {service.duration}
              </span>
            </div>

            <p className="service-card__desc" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
              {service.description}
            </p>

            {service.features && (
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-accent)', marginBottom: '12px' }}>
                  Detta ingår:
                </h4>
                <ul className="service-card__features">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="service-card__feature" style={{ fontSize: '15px' }}>
                      <Check size={16} className="service-card__feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(45,31,24,0.08)' }}>
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ flex: 1 }}
              >
                <Calendar size={16} />
                <span>Boka på Bokadirekt</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
