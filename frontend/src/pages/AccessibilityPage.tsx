import React from 'react';
import {
  Eye,
  Keyboard,
  Contrast,
  MessageSquare,
  Smartphone,
  CheckCircle,
  Mail,
  Phone,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { siteConfig } from '../content/siteContent';

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="editorial-page">
      <PageMeta
        title="Tillgänglighetsredogörelse"
        description={`Så arbetar ${siteConfig.projectName} för att säkerställa hög digital tillgänglighet enligt WCAG 2.1 AA för alla användare.`}
        canonicalPath="/tillganglighet"
      />

      <div className="editorial-container">
        {/* Top Metadata Bar */}
        <div className="editorial-top-meta">
          <span>Tillgänglighet</span>
          <span>WCAG 2.1 AA</span>
          <span>Senast granskad 2026</span>
        </div>

        {/* Hero Header */}
        <span className="editorial-eyebrow">Tillgänglighetsredogörelse</span>
        <h1 className="editorial-title">
          En webbplats <span className="highlight-slate">tillgänglig för alla</span>
        </h1>
        <p className="editorial-lead">
          Vi vill att alla människor ska kunna ta del av vårt innehåll och våra tjänster, oavsett
          funktionsvariationer, enhet eller hjälpmedel. Denna webbplats är utvecklad med fokus på
          standarder enligt Web Content Accessibility Guidelines (WCAG) 2.1 nivå AA.
        </p>

        {/* 4 Summary Status Cards */}
        <div className="editorial-summary-grid">
          <div className="editorial-summary-card">
            <CheckCircle size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Riktlinjer</span>
            <div className="editorial-summary-card__value">WCAG 2.1 nivå AA</div>
          </div>

          <div className="editorial-summary-card">
            <Keyboard size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Navigering</span>
            <div className="editorial-summary-card__value">Fullt tangentbordsstöd</div>
          </div>

          <div className="editorial-summary-card">
            <Contrast size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Kontrast</span>
            <div className="editorial-summary-card__value">Minst 4.5:1 för text</div>
          </div>

          <div className="editorial-summary-card">
            <MessageSquare size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Feedback</span>
            <div className="editorial-summary-card__value">Svar inom 48h</div>
          </div>
        </div>

        {/* Section: Vad vi gör */}
        <section className="editorial-section">
          <span className="editorial-eyebrow">Våra åtgärder</span>
          <h2 className="editorial-section__title">Hur vi säkerställer god tillgänglighet</h2>
          <p className="editorial-section__text">
            Vi designar och bygger med tillgänglighet i första rummet, inte som en efterhandstanke.
            Här är de viktigaste principerna vi följer på hela webbplatsen:
          </p>

          <div className="editorial-cards-grid">
            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Keyboard size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Tangentbordsnavigering</h3>
                <p className="editorial-feature-card__desc">
                  Alla knappar, länkar och formulärfält kan nås och användas med Tab och Enter, med tydliga fokusmarkeringar.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Eye size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Skärmläsarstöd</h3>
                <p className="editorial-feature-card__desc">
                  Semantisk HTML5-struktur, meningsfulla rubriknivåer (H1–H4) och beskrivande ARIA-attribut för skärmläsare.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Contrast size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Tydlig kontrast & typografi</h3>
                <p className="editorial-feature-card__desc">
                  Noggrant utvalda typsnitt med hög läsbarhet och kontrastförhållanden som överstiger WCAG:s krav.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Smartphone size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Responsivitet & zoom</h3>
                <p className="editorial-feature-card__desc">
                  Webbplatsen anpassar sig efter alla skärmstorlekar och fungerar utan problem vid upp till 200% zoom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Feedback & Kontakt */}
        <section className="editorial-section">
          <span className="editorial-eyebrow">Hjälp oss bli bättre</span>
          <h2 className="editorial-section__title">Upplever du tillgänglighetsbrister?</h2>
          <p className="editorial-section__text">
            Om du stöter på problem eller behöver information i ett alternativt format, tveka inte
            att kontakta oss så åtgärdar vi det så snart som möjligt.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
            <a
              href={`mailto:${siteConfig.email}?subject=Tillg%C3%A4nglighet`}
              className="btn btn--outline"
              style={{
                borderColor: '#111',
                color: '#111',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '999px',
                fontWeight: 600,
              }}
            >
              <Mail size={16} />
              <span>Mejla tillgänglighetsansvarig</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn btn--primary"
              style={{
                backgroundColor: '#111',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '999px',
                fontWeight: 600,
              }}
            >
              <Phone size={16} />
              <span>Ring oss: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
