import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Sparkles,
  Shield,
  Star,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  UserCheck,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { siteConfig } from '../content/siteContent';
import { servicesData, topFeaturedServiceIds, ServiceItem } from '../content/services';
import { reviewsData } from '../content/reviews';

export const HomePage: React.FC = () => {
  const featuredServices = topFeaturedServiceIds
    .map((id) => servicesData.find((s) => s.id === id))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <>
      <PageMeta
        title="Studio Corner | En salong för kvinnor i Trollhättan – Hår & Fransar"
        description="Välkommen till Studio Corner på Göteborgsvägen 2D i Trollhättan. Professionell frisör (@colorbyazra) och certifierad fransstylist (@lashandbrowstudio.em) i en lugn, exklusiv och trygg miljö."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            {/* Left Content */}
            <div className="hero__content">
              <div className="hero__badge">
                <Sparkles size={14} />
                <span>En salong för kvinnor • Trollhättan</span>
              </div>

              <h1 className="hero__title">
                Där hår & fransar möts.
              </h1>

              <p className="hero__lead">
                Välkommen till Studio Corner på Göteborgsvägen 2D – din lugna oas i Trollhättan.
                Hos oss möter du vår licensierade frisör och certifierade fransstylist i en varm,
                harmonisk miljö med fokus på kvalitet och personlig omsorg.
              </p>

              <div className="hero__ctas">
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

                <a href="#behandlingar" className="btn btn--secondary">
                  <span>Se behandlingar</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Social proof / Rating */}
              <div className="hero__social-proof">
                <div className="hero__stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <div className="hero__rating-text">
                  5.0 av 5 <span>(7 verifierade omdömen på Bokadirekt)</span>
                </div>
              </div>
            </div>

            {/* Right Media (Arch Frame with Video) */}
            <div className="hero__media">
              <div className="hero__arch-frame">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/salon-interior.jpg"
                  src="/media/hero/hero-video.mp4"
                  className="hero__video"
                />

                {/* Floating Badge */}
                <div className="hero__floating-badge">
                  <img
                    src="/images/logo.png"
                    alt="SC"
                    className="hero__floating-badge-logo"
                  />
                  <span className="hero__floating-badge-text">
                    Göteborgsvägen 2D • Trollhättan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE TICKER (Continuous rolling loop) */}
      <div className="marquee-ticker" aria-hidden="true">
        <div className="marquee-ticker__track">
          <div className="marquee-ticker__item">
            <span>En exklusiv salong för kvinnor</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Göteborgsvägen 2D, Trollhättan</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Licensierad frisör @colorbyazra</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Certifierad fransstylist @lashandbrowstudio.em</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Balayage & Färgexpert</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Koreansk Lashlift & Brow Lift</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>100% Insynsskyddat & Tryggt</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>5.0 av 5 i betyg på Bokadirekt</span>
            <span className="marquee-ticker__separator">✦</span>
          </div>
          <div className="marquee-ticker__item">
            <span>En exklusiv salong för kvinnor</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Göteborgsvägen 2D, Trollhättan</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Licensierad frisör @colorbyazra</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Certifierad fransstylist @lashandbrowstudio.em</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Balayage & Färgexpert</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>Koreansk Lashlift & Brow Lift</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>100% Insynsskyddat & Tryggt</span>
            <span className="marquee-ticker__separator">✦</span>
            <span>5.0 av 5 i betyg på Bokadirekt</span>
            <span className="marquee-ticker__separator">✦</span>
          </div>
        </div>
      </div>

      {/* 2. ARCHED HIGHLIGHTS (Inspired by Lumière Design Reference) */}
      <section className="arch-highlights">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">VÅR EXPERTIS</span>
            <h2 className="section-title">Skräddarsydd skönhet för varje kvinna</h2>
            <p className="section-subtitle">
              Från precision i varje klippning till felfria fransar och bryn. Vi framhäver dina naturliga drag.
            </p>
          </div>

          <div className="arch-highlights__grid">
            {/* Card 1: Klipp & Styling */}
            <div className="arch-card">
              <div className="arch-card__image-wrap">
                <img
                  src="/images/hair-treatment.jpg"
                  alt="Klippning och styling hos Studio Corner"
                  className="arch-card__img"
                  loading="lazy"
                />
              </div>
              <div className="arch-card__content">
                <span className="arch-card__tag">Frisör</span>
                <h3 className="arch-card__title">Klipp & Styling</h3>
                <p className="arch-card__desc">
                  Damklippning med personlig konsultation, vårdande tvätt och elegant föning.
                </p>
                <a href="#behandlingar" className="arch-card__link">
                  <span>Se priser</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 2: Balayage & Slingor */}
            <div className="arch-card">
              <div className="arch-card__image-wrap">
                <img
                  src="/images/slingor.jpeg"
                  alt="Slingor och balayage i Trollhättan"
                  className="arch-card__img"
                  loading="lazy"
                />
              </div>
              <div className="arch-card__content">
                <span className="arch-card__tag">Färg & Kemi</span>
                <h3 className="arch-card__title">Slingor & Balayage</h3>
                <p className="arch-card__desc">
                  Mjuka övergångar och lysterrik färg med avancerade tekniker och nyansering.
                </p>
                <a href="#behandlingar" className="arch-card__link">
                  <span>Se priser</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 3: Fransar & Lashlift */}
            <div className="arch-card">
              <div className="arch-card__image-wrap">
                <img
                  src="/images/lashes-brows.jpg"
                  alt="Klassisk och koreansk lashlift hos Studio Corner"
                  className="arch-card__img"
                  loading="lazy"
                />
              </div>
              <div className="arch-card__content">
                <span className="arch-card__tag">Fransstylist</span>
                <h3 className="arch-card__title">Lash Lift & Fransar</h3>
                <p className="arch-card__desc">
                  Klassisk och koreansk teknik som böjer dina naturliga fransar med 6–8 veckors hållbarhet.
                </p>
                <a href="#behandlingar" className="arch-card__link">
                  <span>Se priser</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 4: Brow Lift & Form */}
            <div className="arch-card">
              <div className="arch-card__image-wrap">
                <img
                  src="/images/brown-result.jpeg"
                  alt="Browlift och formning hos Studio Corner"
                  className="arch-card__img"
                  loading="lazy"
                />
              </div>
              <div className="arch-card__content">
                <span className="arch-card__tag">Bryn</span>
                <h3 className="arch-card__title">Brow Lift & Form</h3>
                <p className="arch-card__desc">
                  Brynlaminering, färgning och varsam formning för fylliga och definierade bryn.
                </p>
                <a href="#behandlingar" className="arch-card__link">
                  <span>Se priser</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEHANDLINGAR & PRISLISTA (Topp 6 Populära Tjänster) */}
      <section className="section services-section" id="behandlingar">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">BEHANDLINGSMENY</span>
            <h2 className="section-title">Våra Mest Populära Behandlingar</h2>
            <p className="section-subtitle">
              Noggrant utvalda favoritbehandlingar utförda med högsta precision och kvalitetsprodukter. Klicka på en behandling för att boka din tid direkt på Bokadirekt.
            </p>
          </div>

          {/* Services Grid (6 Starkaste Behandlingarna) */}
          <div className="services-grid">
            {featuredServices.map((service: ServiceItem) => (
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

          {/* Se alla behandlingar CTA */}
          <div className="services-view-all-cta">
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn btn--primary services-view-all-btn"
            >
              <span>Se alla behandlingar & priser</span>
              <ArrowRight size={15} />
            </Link>
            <p className="services-view-all-desc">
              Utforska hela vår meny med klippning, färg, balayage, fransar, bryn och hijab-anpassade tider.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURE BANNER ("En trygg oas för ditt välbefinnande") */}
      <section className="section feature-banner" id="trygghet">
        <div className="container">
          <div className="feature-banner__grid">
            <div className="feature-banner__content">
              <span className="feature-banner__tag">EN SALONG FÖR KVINNOR</span>
              <h2 className="feature-banner__title">
                Din trygga oas i Trollhättan.
              </h2>
              <p className="feature-banner__text">
                Vi har skapat Studio Corner som en plats där kvinnor kan koppla av från vardagens stress i en varm, harmonisk och 100% insynsskyddad miljö.
              </p>

              <div className="feature-banner__highlights">
                <div className="feature-banner__item">
                  <div className="feature-banner__item-icon">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="feature-banner__item-title">100% Insynsskyddat för kvinnor</h3>
                    <p className="feature-banner__item-desc">
                      Salongen drivs enbart av kvinnor och erbjuder full avskildhet för dig som bär slöja eller vill ha total integritet.
                    </p>
                  </div>
                </div>

                <div className="feature-banner__item">
                  <div className="feature-banner__item-icon">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="feature-banner__item-title">Kvalitet & personlig omtanke</h3>
                    <p className="feature-banner__item-desc">
                      Noggrant utvalda kvalitetsprodukter och en lugn stund anpassad efter dina önskemål och behov.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={siteConfig.bokadirektUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Boka din behandling</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="feature-banner__media">
              <img
                src="/images/salon-interior.jpg"
                alt="Studio Corner salongsmiljö i Trollhättan"
                className="feature-banner__img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT / MEET THE OWNER & TEAM SECTION */}
      <section className="section about-section" id="om-oss">
        <div className="container">
          <div className="about-grid">
            {/* Owner Arch Image */}
            <div className="about-media">
              <div className="about-arch">
                <img
                  src="/images/om-picutre-owner.jpeg"
                  alt="Ema, certifierad fransstylist på Studio Corner"
                  loading="lazy"
                />
              </div>
              <div className="about-story-card">
                <div className="about-story-card__name">Ema</div>
                <div className="about-story-card__role">Frans & Brynstylist</div>
                <p style={{ fontSize: '11.5px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  @lashandbrowstudio.em
                </p>
              </div>
            </div>

            {/* Story Content */}
            <div className="about-content">
              <span className="eyebrow eyebrow--no-lines">MÖT GRUNDAREN & TEAMET</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                En dröm om skönhet, detaljer & trygghet
              </h2>

              <p style={{ fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>
                Studio Corner i Trollhättan skapades ur passionen för skönhet och en önskan om att ge varje kvinna en personlig, varm och professionell upplevelse.
              </p>

              {/* Ema's Personal Intro from Instagram Story */}
              <div className="about-quote">
                <p>
                  ”Hej fina ni! Jag heter Ema, och det är jag som står bakom denna Lash & Brow-dröm!
                  Till vardags studerar jag till förskollärare, men har alltid haft ett stort intresse för skönhet, fransar och bryn. Jag valde därför att våga ta steget och starta eget vid sidan av mina studier ✨
                  <br /><br />
                  Jag är en person som älskar detaljer och att få människor att känna sig fina och självsäkra. För mig är det viktigt att du som kund känner dig trygg, omhändertagen och nöjd med ditt resultat 🤍”
                </p>
                <footer>— Ema, Certifierad fransstylist</footer>
              </div>

              {/* Team Presentation */}
              <div className="team-cards-grid">
                <div className="team-card">
                  <div className="team-card__name">Azra</div>
                  <div className="team-card__role">Licensierad Frisör</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.55' }}>
                    Otrolig känsla för detaljer och expert på klippning, slingor, balayage och skonsamma färgbehandlingar.
                  </p>
                  <a
                    href={siteConfig.socialLinks.instagramFrisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-card__insta"
                  >
                    <Instagram size={14} color="var(--color-accent)" />
                    <span>@colorbyazra</span>
                  </a>
                </div>

                <div className="team-card">
                  <div className="team-card__name">Ema</div>
                  <div className="team-card__role">Certifierad Stylist</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.55' }}>
                    Specialiserad på klassisk & koreansk lashlift, browlift och formning som framhäver dina naturliga drag.
                  </p>
                  <a
                    href={siteConfig.socialLinks.instagramFransar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-card__insta"
                  >
                    <Instagram size={14} color="var(--color-accent)" />
                    <span>@lashandbrowstudio.em</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS & TESTIMONIALS */}
      <section className="section reviews-section" id="omdomen">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">VAD VÅRA KUNDER SÄGER</span>
            <h2 className="section-title">5.0 i betyg på Bokadirekt</h2>
            <p className="section-subtitle">
              Läs vad våra fantastiska kunder tycker om sina behandlingar hos oss på Studio Corner.
            </p>
          </div>

          <div className="reviews-grid">
            {reviewsData.map((rev) => (
              <div key={rev.id} className="review-card">
                <div className="review-card__header">
                  <div className="review-card__stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="review-card__source">{rev.source}</span>
                </div>

                <p className="review-card__quote">”{rev.quote}”</p>

                <div className="review-card__author">
                  <div className="review-card__avatar">{rev.initials}</div>
                  <div>
                    <div className="review-card__author-name">{rev.name}</div>
                    <div className="review-card__author-target">{rev.stylist}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <span>Läs alla recensioner på Bokadirekt</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. HITTA HIT & KONTAKT */}
      <section className="section contact-section" id="kontakt">
        <div className="container">
          <div className="contact-grid">
            {/* Practical Info Card */}
            <div className="contact-card">
              <span className="eyebrow eyebrow--no-lines">PRAKTISK INFORMATION</span>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '32px', marginBottom: '28px' }}>
                Välkommen till Göteborgsvägen 2D
              </h2>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Adress</div>
                    <div className="contact-info-value">
                      Göteborgsvägen 2D<br />
                      461 53 Trollhättan
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Öppettider</div>
                    <div className="contact-info-value">
                      Måndag – Fredag: 10:00 – 18:00<br />
                      Lördag & Söndag: Stängt
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Koncept</div>
                    <div className="contact-info-value">
                      En salong enbart för kvinnor – tidsbokning online via Bokadirekt
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={siteConfig.bokadirektUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ width: '100%' }}
                >
                  <Calendar size={16} />
                  <span>Boka tid på Bokadirekt</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={siteConfig.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  style={{ width: '100%' }}
                >
                  <MapPin size={16} />
                  <span>Öppna i Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-wrapper">
              <iframe
                title="Karta till Studio Corner i Trollhättan"
                src={siteConfig.mapEmbedUrl}
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
