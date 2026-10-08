import React from 'react';
import {
  Shield,
  Heart,
  Sparkles,
  Lock,
  Calendar,
  Clock,
  ArrowUpRight,
  Check,
  Star,
  MapPin,
  EyeOff,
  UserCheck,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';
import { servicesData, ServiceItem } from '../content/services';

export const HijabTrygghetPage: React.FC = () => {
  // Filter hijab specific services and the special care service
  const hijabServices = servicesData.filter(
    (s) => s.category === 'hijab' || s.id === 'anpassad-tjanst-npf'
  );

  return (
    <>
      <PageMeta
        title="Hijab & Trygghet | En salong för kvinnor i Trollhättan"
        description="Studio Corner erbjuder en 100% insynsskyddad och trygg salong enbart för kvinnor på Göteborgsvägen 2D i Trollhättan. Hijab-anpassade hårbehandlingar och anpassad omsorg vid NPF."
        canonicalPath="/hijab-trygghet"
      />

      <PageHero
        kicker="EXKLUSIVT FÖR KVINNOR • TROLLHÄTTAN"
        title="En trygg oas för dig som bär hijab"
        description="På Studio Corner kan du ta av dig slöjan, luta dig tillbaka och njuta av din hårbehandling med full integritet. Vår lokal är helt insynsskyddad och drivs uteslutande av kvinnor."
        bgImage="/images/salon-interior.jpg"
      >
        <a
          href={siteConfig.bokadirektUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <Calendar size={16} />
          <span>Boka hijab-behandling</span>
          <ArrowUpRight size={15} />
        </a>
      </PageHero>

      {/* 1. Våra tre trygghetslöften */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">TRYGGHET & INTEGRITET</span>
            <h2 className="section-title">Varför du kan känna dig 100% trygg hos oss</h2>
            <p className="section-subtitle">
              Vi har anpassat vår miljö och våra rutiner så att varje kvinna kan uppleva ett professionellt och rofyllt salongsbesök.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            <div className="service-card">
              <div className="pillar-icon" style={{ marginBottom: '20px' }}>
                <EyeOff size={22} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                100% Insynsskyddat
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
                Salongen är noga utformad utan insyn från gatan eller förbipasserande. Du kan tryggt ta av dig din sjal så fort du kliver in genom dörren och känna dig som hemma.
              </p>
            </div>

            <div className="service-card">
              <div className="pillar-icon" style={{ marginBottom: '20px' }}>
                <UserCheck size={22} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                Enbart kvinnlig personal
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
                Vår licensierade frisör Azra och certifierade fransstylist Ema driver salongen tillsammans. Vi tar endast emot kvinnliga kunder och salongen har inga manliga medarbetare.
              </p>
            </div>

            <div className="service-card">
              <div className="pillar-icon" style={{ marginBottom: '20px' }}>
                <Heart size={22} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                Vårdkompetens & NPF-anpassning
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
                Med gedigen arbetslivserfarenhet inom vården har vi stor förståelse för personliga behov. Vi erbjuder anpassade besök – från tyst klippning till dämpat ljus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hijab-anpassade Behandlingar Meny */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">BEHANDLINGSMENY</span>
            <h2 className="section-title">Hijab-anpassade behandlingar</h2>
            <p className="section-subtitle">
              Alla dessa behandlingar utförs i vår privata och insynsskyddade miljö med full sekretess och omsorg.
            </p>
          </div>

          <div className="services-grid">
            {hijabServices.map((service: ServiceItem) => (
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
                    <span>Boka på Bokadirekt</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Anpassad tjänst - NPF / Sensorisk känslighet / Silent Appointments */}
      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow eyebrow--no-lines" style={{ color: 'var(--color-accent)' }}>
              INDIVIDANPASSAD OMSORG
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              En salongsupplevelse på dina villkor
            </h2>
            <p style={{ color: 'var(--color-dark-muted)', fontSize: '16.5px', lineHeight: '1.8' }}>
              Vi vet att vanliga salonger ibland kan upplevas stressiga med hög musik, starka ljus och förväntningar på småprat. Hos oss kan du välja hur du vill ha ditt besök.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '18px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '24px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Sparkles size={24} color="var(--color-accent)" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>Tyst klippning (Silent appointment)</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '13.5px', lineHeight: '1.65' }}>
                Önskar du lugn och ro utan småprat? Säg bara till i bokningen eller vid ankomst – vi går endast igenom håret och låter dig sedan njuta i tystnad.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '24px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Lock size={24} color="var(--color-accent)" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>Dämpat ljus & ljud</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '13.5px', lineHeight: '1.65' }}>
                Vi kan dämpa belysningen och stänga av musiken om du har migrän, sensorisk överkänslighet eller behöver en lugn miljö.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '24px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Shield size={24} color="var(--color-accent)" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>Erfarenhet från vården</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '13.5px', lineHeight: '1.65' }}>
                Gedigen erfarenhet från vård och omsorg gör att vi bemöter NPF (ADHD/autism), social fobi, ångest och OCD med stor trygghet och tålamod.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ maxWidth: '100%' }}
            >
              <Calendar size={16} />
              <span>Boka anpassad tid på Bokadirekt</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Kundcitat från Fatima A. */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
          <div className="review-card" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: 'var(--color-accent)', marginBottom: '18px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '17px', lineHeight: '1.75', color: 'var(--color-text-primary)', marginBottom: '22px' }}>
              ”En fantastisk oas för oss kvinnor i Trollhättan. Att kunna boka hijab-anpassad klippning och känna sig 100% trygg och respekterad betyder så mycket. 5 av 5 stjärnor!”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div className="review-card__avatar">FA</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Fatima A.</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Verifierat omdöme • Bokadirekt</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <Calendar size={16} />
              <span>Boka tid nu</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={siteConfig.mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <MapPin size={16} />
              <span>Göteborgsvägen 2D, Trollhättan</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
