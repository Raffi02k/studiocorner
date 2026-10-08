import React from 'react';
import { MapPin, Clock, Instagram, Calendar, ArrowUpRight, Phone } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Kontakt & Hitta Hit | Studio Corner Trollhättan"
        description="Hitta till Studio Corner på Göteborgsvägen 2D i Trollhättan. Se öppettider, boka tid via Bokadirekt eller kontakta oss via Instagram."
        canonicalPath="/contact"
      />

      <PageHero
        kicker="KONTAKT & HITTA HIT"
        title="Välkommen till vår salong i Trollhättan"
        description="Vi finns på Göteborgsvägen 2D i Trollhättan. En lugn, varm och trivsam oas för kvinnor. Boka din behandling smidigt online dygnet runt."
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

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Practical info card */}
            <div className="contact-card">
              <span className="eyebrow eyebrow--no-lines">STUDIO CORNER</span>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '32px', marginBottom: '24px' }}>
                All information du behöver
              </h2>

              <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
                Studio Corner är en salong för kvinnor där hår och fransar möts. Alla tidsbokningar sker smidigt via Bokadirekt där du ser samtliga lediga tider i realtid.
              </p>

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
                    <div className="contact-info-label">Ordinarie Öppettider</div>
                    <div className="contact-info-value">
                      Måndag – Fredag: 10:00 – 18:00<br />
                      Lördag & Söndag: Stängt
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Bokning & Betalning</div>
                    <div className="contact-info-value">
                      Bokas online via Bokadirekt. Möjlighet till Klarna / Betala senare.
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Telefon</div>
                    <div className="contact-info-value">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        style={{ color: 'var(--color-accent)', fontWeight: 600 }}
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">Sociala Medier & DM</div>
                    <div className="contact-info-value" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href={siteConfig.socialLinks.instagramFrisor}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent)', fontWeight: 600 }}
                      >
                        @colorbyazra (Frisör)
                      </a>
                      <a
                        href={siteConfig.socialLinks.instagramFransar}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-accent)', fontWeight: 600 }}
                      >
                        @lashandbrowstudio.em (Fransar & Bryn)
                      </a>
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
                  <span>Vägbeskrivning i Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
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
