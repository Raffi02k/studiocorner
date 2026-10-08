import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Instagram, Calendar, ArrowUpRight, ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../content/siteContent';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Upper CTA Banner */}
        <div className="footer__cta-bar">
          <div>
            <span className="eyebrow eyebrow--no-lines" style={{ color: 'var(--color-accent)', marginBottom: '8px' }}>
              EN SALONG FÖR KVINNOR
            </span>
            <h2 className="footer__cta-title">Upplev lugnet på Studio Corner</h2>
            <p className="footer__cta-desc">
              Boka din tid enkelt online via Bokadirekt. Välj bland våra professionella hårbehandlingar eller certifierade frans- och brynvård.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <Calendar size={16} />
              <span>Boka på Bokadirekt</span>
              <ArrowUpRight size={15} />
            </a>
            <Link to="/services" onClick={handleNavClick('/services')} className="btn btn--outline-light">
              <span>Se prislista</span>
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="footer__grid">
          {/* 1. Brand Column with Scroll to Top */}
          <div className="footer__brand">
            <a
              href="/"
              onClick={handleLogoClick}
              className="footer__brand-link"
              aria-label="Studio Corner - Scrolla till toppen"
            >
              <img
                src="/images/logo-vit.png"
                alt="Studio Corner"
                className="footer__brand-logo"
                style={{ width: '42px', height: '42px', filter: 'brightness(1.8)' }}
              />
              <div>
                <span className="footer__brand-title">Studio Corner</span>
                <span className="footer__brand-sub" style={{ display: 'block' }}>Trollhättan</span>
              </div>
            </a>
            <p className="footer__tagline">
              En exklusiv och trygg salong för kvinnor där hår och fransar möts. Varmt välkommen till din lugna oas på Göteborgsvägen 2D.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '20px', width: 'fit-content' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '14px' }}>★ 5.0 av 5</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>7 betyg på Bokadirekt</span>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h3 className="footer__heading">Meny</h3>
            <ul className="footer__links">
              <li>
                <Link to="/" onClick={handleNavClick('/')} className="footer__link">Startsida</Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick('/services')} className="footer__link">Behandlingar & Priser</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavClick('/about')} className="footer__link">Om oss & Filosofi</Link>
              </li>
              <li>
                <Link to="/hijab-trygghet" onClick={handleNavClick('/hijab-trygghet')} className="footer__link">Hijab & Trygg miljö</Link>
              </li>
              <li>
                <Link to="/galleri" onClick={handleNavClick('/galleri')} className="footer__link">Galleri & Inspiration</Link>
              </li>
              <li>
                <Link to="/faq" onClick={handleNavClick('/faq')} className="footer__link">Vanliga frågor & svar</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavClick('/contact')} className="footer__link">Kontakt & Karta</Link>
              </li>
            </ul>
          </div>

          {/* 3. Opening Hours & Practical Info */}
          <div>
            <h3 className="footer__heading">Öppettider</h3>
            <ul className="footer__links">
              <li style={{ display: 'flex', flexDirection: 'column', gap: '2px', color: 'var(--color-dark-muted)', fontSize: '13.5px' }}>
                <span style={{ color: '#fff', fontWeight: 500 }}>Måndag – Fredag</span>
                <span>10:00 – 18:00</span>
              </li>
              <li style={{ display: 'flex', flexDirection: 'column', gap: '2px', color: 'var(--color-dark-muted)', fontSize: '13.5px', marginTop: '6px' }}>
                <span style={{ color: '#fff', fontWeight: 500 }}>Lördag & Söndag</span>
                <span>Stängt</span>
              </li>
              <li style={{ marginTop: '12px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-accent)' }}>
                  <Sparkles size={14} />
                  <span>Endast bokade tider för kvinnor</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 4. Contact & Socials */}
          <div>
            <h3 className="footer__heading">Hitta hit & Socialt</h3>
            <ul className="footer__links">
              <li>
                <a
                  href={siteConfig.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <MapPin size={16} color="var(--color-accent)" />
                  <span>Göteborgsvägen 2D, 461 53 Trollhättan</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.instagramFrisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <Instagram size={16} color="var(--color-accent)" />
                  <span>@colorbyazra (Frisör)</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks.instagramFransar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <Instagram size={16} color="var(--color-accent)" />
                  <span>@lashandbrowstudio.em (Fransar)</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.bokadirektUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <Calendar size={16} color="var(--color-accent)" />
                  <span>Bokadirekt Profil</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Scroll-to-Top button */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Studio Corner. Alla rättigheter förbehållna.</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scrolla upp till toppen"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(191, 163, 124, 0.3)',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
          >
            <span>Till toppen</span>
            <ArrowUp size={14} />
          </button>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/integritet" style={{ color: 'var(--color-dark-muted)', fontSize: '12.5px' }}>
              Integritetspolicy
            </Link>
            <Link to="/tillganglighet" style={{ color: 'var(--color-dark-muted)', fontSize: '12.5px' }}>
              Tillgänglighet
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
