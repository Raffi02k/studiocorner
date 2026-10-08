import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../content/siteContent';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Brand Logo with Smooth Scroll-to-Top and Hover Effect */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="header__brand"
            aria-label="Studio Corner Startsida - Scrolla till toppen"
          >
            <img
              src="/images/logo.png"
              alt="Studio Corner Emblem"
              className="header__brand-logo"
              width="44"
              height="44"
            />
            <div className="header__brand-text">
              <span className="header__brand-title">Studio Corner</span>
              <span className="header__brand-sub">En salong för kvinnor</span>
            </div>
          </a>

          {/* Desktop Navigation with Scroll-to-Top on every page link */}
          <nav className="header__nav" aria-label="Huvudmeny">
            <Link
              to="/"
              onClick={handleNavClick('/')}
              className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Hem
            </Link>
            <Link
              to="/services"
              onClick={handleNavClick('/services')}
              className={`header__nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Behandlingar & Priser
            </Link>
            <Link
              to="/galleri"
              onClick={handleNavClick('/galleri')}
              className={`header__nav-link ${location.pathname === '/galleri' ? 'active' : ''}`}
            >
              Galleri
            </Link>
            <Link
              to="/hijab-trygghet"
              onClick={handleNavClick('/hijab-trygghet')}
              className={`header__nav-link ${location.pathname === '/hijab-trygghet' ? 'active' : ''}`}
            >
              Hijab & Trygghet
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick('/about')}
              className={`header__nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              Om Salongen
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick('/contact')}
              className={`header__nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="header__actions">
            {/* Quick Call Button on Mobile */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="header__call-btn"
              aria-label={`Ring ${siteConfig.projectName}: ${siteConfig.phoneDisplay}`}
              title={`Ring oss på ${siteConfig.phoneDisplay}`}
            >
              <Phone size={15} />
              <span>Ring</span>
            </a>

            {/* Desktop CTA Button */}
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm header__cta-desktop"
            >
              <span>Boka på Bokadirekt</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              className="header__menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav__header">
          <a href="/" onClick={handleLogoClick} className="header__brand">
            <img
              src="/images/logo.png"
              alt="Studio Corner"
              className="header__brand-logo"
              width="38"
              height="38"
            />
            <div className="header__brand-text">
              <span className="header__brand-title" style={{ fontSize: '18px' }}>Studio Corner</span>
              <span className="header__brand-sub">En salong för kvinnor</span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Stäng meny"
            style={{ color: 'var(--color-text-primary)' }}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav__links">
          <Link to="/" onClick={handleNavClick('/')} className="mobile-nav__link">
            <span>Hem</span>
            <Sparkles size={16} color="var(--color-accent)" />
          </Link>
          <Link to="/services" onClick={handleNavClick('/services')} className="mobile-nav__link">
            <span>Behandlingar & Priser</span>
          </Link>
          <Link to="/galleri" onClick={handleNavClick('/galleri')} className="mobile-nav__link">
            <span>Galleri & Inspiration</span>
          </Link>
          <Link to="/hijab-trygghet" onClick={handleNavClick('/hijab-trygghet')} className="mobile-nav__link">
            <span>Hijab & Trygg Miljö</span>
          </Link>
          <Link to="/about" onClick={handleNavClick('/about')} className="mobile-nav__link">
            <span>Om Salongen & Teamet</span>
          </Link>
          <Link to="/contact" onClick={handleNavClick('/contact')} className="mobile-nav__link">
            <span>Kontakt & Hitta hit</span>
          </Link>
        </nav>

        {/* Quick Phone Call Card in Drawer */}
        <div className="mobile-nav__quick-contact">
          <a
            href={`tel:${siteConfig.phone}`}
            className="mobile-nav__call-card"
          >
            <div className="mobile-nav__call-icon">
              <Phone size={18} />
            </div>
            <div>
              <div className="mobile-nav__call-title">Ring oss direkt</div>
              <div className="mobile-nav__call-sub">{siteConfig.phoneDisplay}</div>
            </div>
          </a>
        </div>

        <div className="mobile-nav__footer">
          <a
            href={siteConfig.bokadirektUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ width: '100%' }}
          >
            <span>Boka tid på Bokadirekt</span>
            <ArrowUpRight size={16} />
          </a>
          <p style={{ fontSize: '12px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            Göteborgsvägen 2D, Trollhättan
          </p>
        </div>
      </div>
    </>
  );
};
