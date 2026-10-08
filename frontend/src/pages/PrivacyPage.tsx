import React from 'react';
import {
  Building2,
  Scale,
  Clock,
  Mail,
  User,
  FileText,
  Phone,
  Download,
  Edit3,
  Trash2,
  ShieldCheck,
  Cookie,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { siteConfig } from '../content/siteContent';
import { openCookieModal } from '../components/CookieModal';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="editorial-page">
      <PageMeta
        title="Integritet & GDPR"
        description={`Så hanterar ${siteConfig.projectName} dina personuppgifter. Full transparens kring lagring, ändamål och dina rättigheter enligt GDPR.`}
        canonicalPath="/integritet"
      />

      <div className="editorial-container">
        {/* Top Metadata Bar */}
        <div className="editorial-top-meta">
          <span>Integritet</span>
          <span>GDPR</span>
          <span>Senast uppdaterad 2026</span>
        </div>

        {/* Hero Header */}
        <span className="editorial-eyebrow">Integritet & GDPR</span>
        <h1 className="editorial-title">
          Era uppgifter, <span className="highlight-slate">i trygga händer</span>
        </h1>
        <p className="editorial-lead">
          Vi tror på transparens — även när det gäller data. Här förklarar vi vad vi samlar in,
          varför, och vilka rättigheter du har enligt gällande dataskyddsförordning (GDPR).
        </p>

        {/* 4 Summary Cards Row */}
        <div className="editorial-summary-grid">
          <div className="editorial-summary-card">
            <Building2 size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Ansvarig</span>
            <div className="editorial-summary-card__value">
              {siteConfig.projectName} AB
            </div>
          </div>

          <div className="editorial-summary-card">
            <Scale size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Laglig grund</span>
            <div className="editorial-summary-card__value">
              Berättigat intresse & avtal
            </div>
          </div>

          <div className="editorial-summary-card">
            <Clock size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Lagringstid</span>
            <div className="editorial-summary-card__value">
              Upp till 24 månader
            </div>
          </div>

          <div className="editorial-summary-card">
            <Mail size={20} className="editorial-summary-card__icon" />
            <span className="editorial-summary-card__label">Kontakt</span>
            <div className="editorial-summary-card__value">
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Section: Uppgifter vi samlar in */}
        <section className="editorial-section">
          <h2 className="editorial-section__title">
            Aldrig mer data än vad som behövs för att svara dig
          </h2>
          <p className="editorial-section__text">
            När du kontaktar oss eller ber om en offert via formulär på sajten samlar vi endast
            in nödvändiga uppgifter för att kunna fullfölja vårt uppdrag gentemot dig.
          </p>

          <div className="editorial-cards-grid">
            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <User size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Namn & företagsnamn</h3>
                <p className="editorial-feature-card__desc">
                  För att veta vem vi pratar med och kunna återkoppla personligt och korrekt.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">E-postadress</h3>
                <p className="editorial-feature-card__desc">
                  För att besvara din förfrågan, återkoppla med svar och skicka offert.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <FileText size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Ditt meddelande</h3>
                <p className="editorial-feature-card__desc">
                  För att förstå ditt projekt, dina önskemål och förbereda en exakt kalkyl.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Telefonnummer</h3>
                <p className="editorial-feature-card__desc">
                  Endast när du ber oss ringa upp dig för en kort avstämning eller platsbesök.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Dina rättigheter */}
        <section className="editorial-section">
          <span className="editorial-eyebrow">Dina rättigheter</span>
          <h2 className="editorial-section__title">Du bestämmer över dina uppgifter</h2>
          <p className="editorial-section__text">
            Hör av dig till{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ fontWeight: 600, textDecoration: 'underline' }}
            >
              {siteConfig.email}
            </a>{' '}
            så hjälper vi dig. Du har också laglig rätt att lämna klagomål till
            Integritetsskyddsmyndigheten (IMY) om du anser att dina uppgifter hanterats felaktigt.
          </p>

          <div className="editorial-cards-grid">
            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Download size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Få ett utdrag</h3>
                <p className="editorial-feature-card__desc">
                  Begär en kopia av de personuppgifter vi har sparade om dig eller ditt företag.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Edit3 size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Rätta uppgifter</h3>
                <p className="editorial-feature-card__desc">
                  Få felaktiga, ofullständiga eller inaktuella uppgifter korrigerade omgående.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Radera uppgifter</h3>
                <p className="editorial-feature-card__desc">
                  Be oss ta bort dina uppgifter helt när dialogen eller kundrelationen avslutats.
                </p>
              </div>
            </div>

            <div className="editorial-feature-card">
              <div className="editorial-feature-card__icon">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h3 className="editorial-feature-card__title">Invända mot behandling</h3>
                <p className="editorial-feature-card__desc">
                  Invänd mot viss typ av personuppgiftsbehandling eller marknadsföringsutskick.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Cookies */}
        <section className="editorial-section">
          <span className="editorial-eyebrow">Cookies & Spårning</span>
          <h2 className="editorial-section__title">Hur vi använder kakor</h2>
          <p className="editorial-section__text">
            Vi använder strikt nödvändiga kakor för grundläggande säkerhet och drift. Du kan när
            som helst granska eller ändra dina preferenser för analys och marknadsföring via våra
            cookie-inställningar.
          </p>

          <button
            type="button"
            className="btn btn--outline"
            onClick={openCookieModal}
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
            <Cookie size={16} />
            <span>Hantera cookie-inställningar</span>
          </button>
        </section>
      </div>
    </div>
  );
};
