import React, { useState } from 'react';
import { Clock, Check, ArrowUpRight, Calendar } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { servicesData, servicesCategories, ServiceItem } from '../content/services';
import { siteConfig } from '../content/siteContent';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('alla');

  const filteredServices = activeCategory === 'alla'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageMeta
        title="Behandlingar & Prislista | Studio Corner Trollhättan"
        description="Se priser och boka hårbehandlingar, klippning, balayage, fransförlängning, lashlift och browlift hos Studio Corner på Göteborgsvägen 2D i Trollhättan."
        canonicalPath="/services"
      />

      <PageHero
        kicker="BEHANDLINGSMENY & PRISER"
        title="Noggrant utvalda behandlingar för hår & bryn"
        description="Hos oss på Studio Corner arbetar en licensierad frisör och en certifierad fransstylist. Alla våra behandlingar utförs med högsta precision och omtanke."
        bgImage="/images/salon-interior.jpg"
      >
        <a
          href={siteConfig.bokadirektUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <Calendar size={16} />
          <span>Boka tid på Bokadirekt</span>
          <ArrowUpRight size={15} />
        </a>
      </PageHero>

      {/* Category Filter */}
      <section className="section services-section">
        <div className="container">
          <div className="services-filter">
            {servicesCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service: ServiceItem) => (
              <div key={service.id} className="service-card">
                {service.badge && (
                  <span className="service-card__badge">{service.badge}</span>
                )}
                <span className="service-card__category">{service.categoryLabel}</span>
                <h3 className="service-card__title">{service.title}</h3>

                <div className="service-card__meta">
                  <span className="service-card__duration">
                    <Clock size={15} color="var(--color-accent)" />
                    {service.duration}
                  </span>
                  <span className="service-card__price">{service.price}</span>
                </div>

                <p className="service-card__desc">{service.description}</p>

                {service.features && (
                  <ul className="service-card__features">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="service-card__feature">
                        <Check size={14} className="service-card__feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-card__actions">
                  <a
                    href={service.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                    style={{ width: '100%' }}
                  >
                    <span>Boka tid</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner about Hijab & Special care */}
      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <span className="eyebrow eyebrow--no-lines" style={{ color: 'var(--color-accent)' }}>
            TRYGG OCH PERSONLIG SERVICE
          </span>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: '20px' }}>
            En lugn och avskild miljö
          </h2>
          <p style={{ color: 'var(--color-dark-muted)', fontSize: '16.5px', lineHeight: '1.8', marginBottom: '32px' }}>
            Vi erbjuder insynsskyddade behandlingar för slöjbärande kvinnor, samt anpassade sessioner med vårdkompetens för dig som har sensorisk känslighet, NPF, GAD eller OCD. Hos oss är alla kvinnor varmt välkomna precis som de är.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <span>Boka konsultation eller tid</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
