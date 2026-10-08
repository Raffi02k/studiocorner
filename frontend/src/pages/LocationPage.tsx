import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import {
  getLocationBySlug,
  locationsData,
  locationGlobalConfig,
} from '../content/locationsData';
import { HandDrawnUnderline, HandDrawnCircle } from '../components/HandDrawnMarks';
import { siteConfig } from '../content/siteContent';

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const loc = slug ? getLocationBySlug(slug) : undefined;

  if (!loc) {
    return (
      <div className="loc-page" style={{ paddingTop: '140px', textAlign: 'center' }}>
        <div className="loc-container">
          <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Orten hittades inte</h1>
          <p style={{ color: '#666', marginBottom: '32px' }}>
            Vi kunde inte hitta den efterfrågade orten. Se våra tillgängliga orter nedan:
          </p>
          <div className="loc-others-tags" style={{ justifyContent: 'center' }}>
            {locationsData.map((item) => (
              <Link
                key={item.slug}
                to={`${locationGlobalConfig.baseRoute}/${item.slug}`}
                className="loc-tag-link"
              >
                <MapPin size={14} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentUrl = `${locationGlobalConfig.baseRoute}/${loc.slug}`;

  // Structured Data Schema for Google Local SEO
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: `${siteConfig.projectName} - ${loc.name}`,
        description: loc.shortAnswer,
        url: `https://mediamagnet.se${currentUrl}`,
        areaServed: {
          '@type': 'AdministrativeArea',
          name: loc.region,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: loc.name,
          addressRegion: loc.region,
          addressCountry: 'SE',
        },
        telephone: siteConfig.phone,
        priceRange: '$$',
      },
      {
        '@type': 'FAQPage',
        mainEntity: loc.faq?.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="loc-page">
      <PageMeta
        title={loc.metaTitle}
        description={loc.metaDescription}
        canonicalPath={currentUrl}
      />

      {/* JSON-LD Rich Snippet Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* ==========================================================================
          1. HERO SECTION
          ========================================================================== */}
      <section className="loc-hero">
        <div className="loc-container">
          <Link to={locationGlobalConfig.baseRoute} className="loc-breadcrumb">
            <ArrowLeft size={16} />
            <span>Alla orter & regioner</span>
          </Link>

          <div className="loc-hero__grid">
            {/* Left Content */}
            <div>
              <span className="loc-hero__eyebrow">
                {loc.category} · {loc.name}
              </span>

              <h1 className="loc-hero__title">
                {loc.category} i{' '}
                <span className="hand-drawn-wrapper">
                  {loc.name}
                  <HandDrawnUnderline />
                </span>
              </h1>

              <p className="loc-hero__lead">{loc.leadText}</p>

              {/* Kort Svar Callout Box */}
              <div className="loc-short-answer">
                <span className="loc-short-answer__label">Kort svar</span>
                <p className="loc-short-answer__text">{loc.shortAnswer}</p>
              </div>
            </div>

            {/* Right Summary Card */}
            <div>
              <div className="loc-side-card">
                <div className="loc-side-card__badges">
                  <span className="loc-badge-sand">{loc.name}</span>
                  <span className="loc-badge-dark">{loc.priceBadge}</span>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <span className="loc-side-card__kicker">Pris</span>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading, sans-serif)',
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#111',
                    }}
                  >
                    {loc.priceDisplay}
                  </div>
                </div>

                <span className="loc-side-card__kicker">Vi jobbar i</span>
                <p className="loc-side-card__areas">
                  {loc.name} · {loc.nearbyAreas.join(' · ')}
                </p>

                <p className="loc-side-card__subtext">
                  Digitalt med företag och verksamheter i hela {loc.region} – på distans
                  eller på plats efter era behov.
                </p>

                <a href="#kontakt-sektion" className="loc-side-card__btn">
                  <span>Kom igång</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          2. STATS & PROOF BANNER
          ========================================================================== */}
      <section className="loc-proof-banner">
        <div className="loc-container">
          <div className="loc-proof-banner__grid">
            {loc.stats?.map((stat, idx) => (
              <div key={idx} className="loc-stat-item">
                <div className="loc-stat-item__value">{stat.value}</div>
                <span className="loc-stat-item__label">{stat.label}</span>
                {stat.sub && <span className="loc-stat-item__sub">{stat.sub}</span>}
              </div>
            ))}

            {loc.quote && (
              <div className="loc-proof-quote">
                <div className="loc-proof-quote__avatar">
                  {loc.quote.author.charAt(0)}
                </div>
                <div>
                  <p className="loc-proof-quote__text">"{loc.quote.text}"</p>
                  <p className="loc-proof-quote__author">
                    {loc.quote.author} · {loc.quote.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. SERVICES SECTION ("Det vi gör i [Ort]")
          ========================================================================== */}
      <section className="loc-services-sec">
        <div className="loc-container">
          <span className="loc-sec-eyebrow">
            Det vi gör i {loc.name}
          </span>
          <h2 className="loc-sec-title">
            Allt ni behöver för att{' '}
            <span className="hand-drawn-wrapper">
              växa lokalt
              <HandDrawnCircle />
            </span>
            .
          </h2>

          <div className="loc-cards-grid">
            {loc.services?.map((svc) => (
              <a
                key={svc.number}
                href="#kontakt-sektion"
                className="loc-service-card"
                title={`${svc.title} - Läs mer`}
              >
                <div className="loc-service-card__top">
                  <span className="loc-service-card__num">{svc.number}</span>
                  <div className="loc-service-card__icon">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div>
                  <h3 className="loc-service-card__title">{svc.title}</h3>
                  {svc.desc && <p className="loc-service-card__desc">{svc.desc}</p>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4. INCLUDED SECTION ("Det här ingår")
          ========================================================================== */}
      <section className="loc-included-sec">
        <div className="loc-container">
          <div className="loc-included-grid">
            {/* Left Column */}
            <div>
              <span className="loc-sec-eyebrow">
                Tjänst · {loc.name}
              </span>
              <h2 className="loc-sec-title">
                Det här{' '}
                <span className="hand-drawn-wrapper">
                  ingår
                  <HandDrawnCircle />
                </span>
              </h2>

              <ul className="loc-checklist">
                {loc.includedChecklist?.map((item, idx) => (
                  <li key={idx} className="loc-checklist__item">
                    <CheckCircle2 size={18} className="loc-checklist__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#kontakt-sektion" className="loc-btn-outline">
                <span>Mer om hur vi jobbar</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Right Column (Rich SEO Text) */}
            <div className="loc-included-text">
              {loc.includedContent?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          5. WHY US SECTION ("Varför [Brand] i [Ort]")
          ========================================================================== */}
      <section className="loc-why-sec">
        <div className="loc-container">
          <span className="loc-sec-eyebrow">
            Varför oss i {loc.name}
          </span>
          <h2 className="loc-sec-title">
            En byrå som känns som ert{' '}
            <span className="hand-drawn-wrapper">
              eget team
              <HandDrawnCircle />
            </span>
          </h2>

          <div className="loc-why-grid">
            {loc.whyUs?.map((item) => (
              <div key={item.number} className="loc-why-card">
                <div className="loc-why-card__num">{item.number}</div>
                <h3 className="loc-why-card__title">{item.title}</h3>
                <p className="loc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          6. FAQ SECTION
          ========================================================================== */}
      {loc.faq && loc.faq.length > 0 && (
        <section className="loc-faq-sec">
          <div className="loc-container">
            <div style={{ textAlign: 'center' }}>
              <span className="loc-sec-eyebrow">Vanliga frågor</span>
              <h2 className="loc-sec-title">Frågor & svar om {loc.name}</h2>
            </div>

            <div className="loc-faq-list">
              {loc.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`loc-faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      className="loc-faq-q"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0,
                          marginLeft: '12px',
                        }}
                      />
                    </button>
                    {isOpen && <div className="loc-faq-a">{item.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================================
          7. LOCAL CONTACT CTA SECTION
          ========================================================================== */}
      <section
        id="kontakt-sektion"
        style={{
          padding: '80px 0',
          backgroundColor: '#12171e',
          color: '#fff',
          marginTop: '60px',
        }}
      >
        <div className="loc-container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Kostnadsfri rådgivning i {loc.name}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading, sans-serif)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Redo att ta nästa steg i {loc.name}?
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '36px',
            }}
          >
            Hör av er till oss idag för ett förutsättningslöst samtal om hur vi kan stärka er digitala närvaro och öka inflödet av lokala kunder.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Boka tid på Bokadirekt
            </a>
            <Link
              to="/services"
              className="btn btn--secondary"
            >
              Se alla behandlingar
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          8. OTHER LOCATIONS GRID (SEO Internal Linking Silo)
          ========================================================================== */}
      <section className="loc-others-sec">
        <div className="loc-container">
          <span className="loc-sec-eyebrow">Övriga orter & områden</span>
          <h3
            style={{
              fontFamily: 'var(--font-heading, sans-serif)',
              fontSize: '22px',
              fontWeight: 800,
              color: '#111',
              marginBottom: '16px',
            }}
          >
            Vi välkomnar även kunder från följande orter:
          </h3>

          <div className="loc-others-tags">
            {locationsData.map((other) => {
              const isCurrent = other.slug === loc.slug;
              return (
                <Link
                  key={other.slug}
                  to={`${locationGlobalConfig.baseRoute}/${other.slug}`}
                  className={`loc-tag-link ${isCurrent ? 'is-active' : ''}`}
                >
                  <MapPin size={14} />
                  <span>{loc.category} i {other.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
