import React from 'react';
import { Sparkles, Shield, Heart, Instagram, Calendar, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Om Salongen & Möt Teamet | Studio Corner Trollhättan"
        description="Lär känna Ema och Azra på Studio Corner i Trollhättan. En exklusiv salong för kvinnor med fokus på hår, fransar, bryn och en trygg, harmonisk miljö."
        canonicalPath="/about"
      />

      <PageHero
        kicker="VÅR HISTORIA & FILOSOFI"
        title="En lugn oas där skönhet möter trygghet"
        description="Studio Corner grundades med en tydlig vision: att skapa en varm och exklusiv salong enbart för kvinnor, där du kan koppla av och känna dig omhändertagen från första stund."
        bgImage="/images/salon-interior.jpg"
      >
        <a
          href={siteConfig.bokadirektUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          <Calendar size={16} />
          <span>Boka tid hos oss</span>
          <ArrowUpRight size={15} />
        </a>
      </PageHero>

      {/* 1. Möt Ema & Grundarberättelsen */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-media">
              <div className="about-arch">
                <img
                  src="/images/om-picutre-owner.jpeg"
                  alt="Ema, grundare och certifierad fransstylist på Studio Corner"
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

            <div className="about-content">
              <span className="eyebrow eyebrow--no-lines">MÖT GRUNDAREN</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                ”Det här är början på något jag länge drömt om”
              </h2>

              <p style={{ fontSize: '16.5px', lineHeight: '1.8', marginBottom: '16px' }}>
                Att starta Studio Corner var ett naturligt steg i en passion för form, estetik och att hjälpa kvinnor att känna sig trygga och strålande.
              </p>

              <div className="about-quote">
                <p>
                  ”Hej fina ni! Jag heter Ema, och det är jag som står bakom denna Lash & Brow-dröm!
                  Till vardags studerar jag till förskollärare, men har alltid haft ett stort intresse för skönhet, fransar och bryn. Jag valde därför att våga ta steget och starta eget vid sidan av mina studier ✨
                  <br /><br />
                  Jag är en person som älskar detaljer och att få människor att känna sig fina och självsäkra. För mig är det viktigt att du som kund känner dig trygg, omhändertagen och nöjd med ditt resultat 🤍
                  <br /><br />
                  Det här är början på något jag länge drömt om, och jag är så glad att ni vill följa med på resan! 🫶✨”
                </p>
                <footer>— Ema, Grundare & Fransstylist</footer>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={siteConfig.socialLinks.instagramFransar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <Instagram size={15} color="var(--color-accent)" />
                  <span>Följ @lashandbrowstudio.em</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Möt Azra - Vår licensierade frisör */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="about-media" style={{ direction: 'ltr' }}>
              <div className="about-arch">
                <img
                  src="/images/azra-bild.jpeg"
                  alt="Hårstyling och färg med frisör Azra på Studio Corner"
                  loading="lazy"
                />
              </div>
              <div className="about-story-card">
                <div className="about-story-card__name">Azra</div>
                <div className="about-story-card__role">Professionell Frisör</div>
                <p style={{ fontSize: '11.5px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  @colorbyazra
                </p>
              </div>
            </div>

            <div className="about-content" style={{ direction: 'ltr' }}>
              <span className="eyebrow eyebrow--no-lines">VÅR FRISÖR</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Azra – Magi med färg, form och personlig stil
              </h2>

              <p style={{ fontSize: '16.5px', lineHeight: '1.8', marginBottom: '18px' }}>
                Azra är vår licensierade frisör som med sin skicklighet, kreativitet och starka yrkesstolthet skapar skräddarsydda färg- och klippresultat för varje unik kund.
              </p>

              <p style={{ fontSize: '15.5px', lineHeight: '1.75', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                Vare sig du önskar en subtil nyansering, en komplett balayage-förvandling eller en noggrant formad klippning, ser Azra till att hårets hälsa och kvalitet alltid sätts i första rummet. Hennes varma bemötande och lyhördhet gör varje besök till en ren njutning.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={siteConfig.socialLinks.instagramFrisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <Instagram size={15} color="var(--color-accent)" />
                  <span>Se portfolio @colorbyazra</span>
                </a>

                <a
                  href={siteConfig.bokadirektUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Boka tid hos Azra</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hijab & Trygg Miljö Sektion */}
      <section className="section section--dark" id="trygghet">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow eyebrow--no-lines" style={{ color: 'var(--color-accent)' }}>
              VÅRT LÖFTE TILL DIG
            </span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              En trygg salong för alla kvinnor
            </h2>
            <p style={{ color: 'var(--color-dark-muted)', fontSize: '17px', lineHeight: '1.8' }}>
              Vi vill att varje kvinna som kliver in på Studio Corner ska känna sig sedd, respekterad och fullkomligt trygg.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '32px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Shield size={28} color="var(--color-accent)" style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Hijab-anpassat</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                Salongen är en skyddad och insynsskyddad zon med enbart kvinnlig personal. Här kan du som bär sjal tryggt ta av den och njuta av din hårbehandling i full integritet.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '32px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Heart size={28} color="var(--color-accent)" style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Vårdkompetens & NPF</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                Med arbetslivserfarenhet inom vården anpassar vi behandlingen efter dina förutsättningar – t.ex. vid NPF, GAD, OCD eller sensorisk känslighet. Lugn miljö utan stress.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-dark-surface)', padding: '32px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Sparkles size={28} color="var(--color-accent)" style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Kvalitet & Noggrannhet</h3>
              <p style={{ color: 'var(--color-dark-muted)', fontSize: '14px', lineHeight: '1.7' }}>
                Vi använder skonsamma kvalitetsprodukter och tar oss den tid som krävs för att du ska få det allra bästa resultatet.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <span>Boka din behandling på Bokadirekt</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
