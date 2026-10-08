import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Calendar, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';

export interface GalleryItem {
  id: string;
  category: 'har' | 'bryn-fransar' | 'salong';
  title: string;
  stylist: string;
  stylistHandle: string;
  stylistUrl: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'slingor-balayage',
    category: 'har',
    title: 'Slingor & Balayage',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/slingor.jpeg',
    description: 'Mjuka blonda övergångar med skonsam uppljusning och glansfull nyansering.',
  },
  {
    id: 'brow-lift-resultat',
    category: 'bryn-fransar',
    title: 'Brow Lift & Formning',
    stylist: 'Ema (Frans & Bryn)',
    stylistHandle: '@lashandbrowstudio.em',
    stylistUrl: siteConfig.socialLinks.instagramFransar,
    image: '/images/brown-result.jpeg',
    description: 'Fylliga, formade och definierade bryn med 6–8 veckors hållbarhet.',
  },
  {
    id: 'bronde-balayage',
    category: 'har',
    title: 'Mjuk "Bronde" Balayage',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/bronde.png',
    description: 'En fyllig, mjuk "bronde" (brun-blond) balayage med naturliga vågor.',
  },
  {
    id: 'lash-lift-lashes',
    category: 'bryn-fransar',
    title: 'Koreansk Lash Lift & Fransar',
    stylist: 'Ema (Frans & Bryn)',
    stylistHandle: '@lashandbrowstudio.em',
    stylistUrl: siteConfig.socialLinks.instagramFransar,
    image: '/images/lashes-brows.jpg',
    description: 'Naturligt lyft och böj av dina egna fransar direkt från roten för en pigg blick.',
  },
  {
    id: 'sandblond-slingor',
    category: 'har',
    title: 'Kall Sandblond & Slingor',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/sandblond.png',
    description: 'En ljus, naturlig och kall sandblond färg med fina slingor och etapper.',
  },
  {
    id: 'morkbrun-volym',
    category: 'har',
    title: 'Djup Mörkbrun & Volymlockar',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/morkbrun.png',
    description: 'En djup, glansig mörkbrun färg med massor av volym och stora lockar.',
  },
  {
    id: 'guldbrun-koppar',
    category: 'har',
    title: 'Varm Koppar- & Guldbrun',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/guldbrun.png',
    description: 'En varm, levande koppar-/guldbrun färg med en jättefin etappklippning.',
  },
  {
    id: 'klipp-styling',
    category: 'har',
    title: 'Klippning & Föning',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/hair-treatment.jpg',
    description: 'Personlig konsultation, vårdande tvätt och elegant föning för ett fräscht hår.',
  },
  {
    id: 'salon-interior-miljo',
    category: 'salong',
    title: 'Vår Insynsskyddade Salong',
    stylist: 'Studio Corner',
    stylistHandle: 'Trollhättan',
    stylistUrl: siteConfig.socialLinks.googleMaps,
    image: '/images/salon-interior.jpg',
    description: 'En lugn, varm och 100% insynsskyddad oas enbart för kvinnor på Göteborgsvägen 2D.',
  },
  {
    id: 'hartvatt-spa',
    category: 'har',
    title: 'Avkopplande Hårtvätt & Spa',
    stylist: 'Azra (Frisör)',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/hair-spa.jpg',
    description: 'Skön hårbottensmassage och djupverkande inpackning i avkopplande miljö.',
  },
  {
    id: 'azra-salongen',
    category: 'salong',
    title: 'Frisör Azra i Salongen',
    stylist: 'Azra',
    stylistHandle: '@colorbyazra',
    stylistUrl: siteConfig.socialLinks.instagramFrisor,
    image: '/images/azra-bild.jpeg',
    description: 'Licensierad frisör med expertis inom färg, slingor, balayage och klippning.',
  },
  {
    id: 'ema-salongen',
    category: 'salong',
    title: 'Stylist & Grundare Ema',
    stylist: 'Ema',
    stylistHandle: '@lashandbrowstudio.em',
    stylistUrl: siteConfig.socialLinks.instagramFransar,
    image: '/images/om-picutre-owner.jpeg',
    description: 'Certifierad frans- och brynstylist som brinner för skönhet och trygghet.',
  },
];

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'har' | 'bryn-fransar' | 'salong'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedIndex]);

  // Handle keyboard navigation (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0);
  };

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <>
      <PageMeta
        title="Galleri & Inspiration | Studio Corner Trollhättan"
        description="Se bilder från våra behandlingar inom hår, balayage, fransar, bryn och upptäck vår vackra insynsskyddade salong i Trollhättan."
        canonicalPath="/galleri"
      />

      <PageHero
        kicker="GALLERI & INSPIRATION"
        title="Våra resultat och vår miljö"
        description="Upptäck vårt arbete på Studio Corner. Verkliga resultat från våra behandlingar inom klippning, slingor, lashlift, browlift och bilder från vår varma salong."
        bgImage="/images/salon-interior.jpg"
      >
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        </div>
      </PageHero>

      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: '50px' }}>
        <div className="container">
          {/* Category Filters */}
          <div className="services-filter" style={{ marginBottom: '36px' }}>
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setFilter('all');
                setSelectedIndex(null);
              }}
            >
              Alla bilder ({galleryItems.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'har' ? 'active' : ''}`}
              onClick={() => {
                setFilter('har');
                setSelectedIndex(null);
              }}
            >
              Hår & Slingor (@colorbyazra)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'bryn-fransar' ? 'active' : ''}`}
              onClick={() => {
                setFilter('bryn-fransar');
                setSelectedIndex(null);
              }}
            >
              Fransar & Bryn (@lashandbrowstudio.em)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'salong' ? 'active' : ''}`}
              onClick={() => {
                setFilter('salong');
                setSelectedIndex(null);
              }}
            >
              Salongsmiljön
            </button>
          </div>

          {/* Gallery Grid (Pure clean images, no badges) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="arch-card"
                style={{
                  cursor: 'pointer',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="arch-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="arch-card__img"
                    loading="lazy"
                  />
                </div>

                <div className="arch-card__content">
                  <span className="arch-card__tag" style={{ color: 'var(--color-accent)' }}>
                    {item.stylistHandle}
                  </span>
                  <h3 className="arch-card__title" style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p className="arch-card__desc" style={{ fontSize: '13px', lineHeight: '1.55' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof & Instagram Banner */}
          <div
            style={{
              marginTop: '56px',
              padding: '40px 24px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(45, 31, 24, 0.08)',
              textAlign: 'center',
            }}
          >
            <span className="eyebrow" style={{ marginBottom: '8px' }}>FÖLJ VÅR RESA PÅ INSTAGRAM</span>
            <h2 className="section-title" style={{ fontSize: '26px', marginBottom: '12px' }}>
              Fler före & efter-bilder varje vecka
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 28px auto', fontSize: '14.5px' }}>
              Vi uppdaterar våra Instagram-konton löpande med kundresultat, reels och tips för hur du sköter ditt hår och dina fransar.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={siteConfig.socialLinks.instagramFrisor}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Instagram size={16} color="var(--color-accent)" />
                <span>@colorbyazra (Hår)</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={siteConfig.socialLinks.instagramFransar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Instagram size={16} color="var(--color-accent)" />
                <span>@lashandbrowstudio.em (Fransar)</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={siteConfig.bokadirektUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <Calendar size={16} />
                <span>Boka din tid direkt</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Next / Previous Carousel rendered via Portal directly to body */}
      {currentItem && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(20, 14, 10, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            boxSizing: 'border-box',
          }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Föregående bild"
            style={{
              position: 'fixed',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 100000,
              backgroundColor: 'rgba(45, 31, 24, 0.8)',
              color: '#FFFFFF',
              border: '1px solid rgba(191, 163, 124, 0.4)',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(45, 31, 24, 0.8)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Nästa bild"
            style={{
              position: 'fixed',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 100000,
              backgroundColor: 'rgba(45, 31, 24, 0.8)',
              color: '#FFFFFF',
              border: '1px solid rgba(191, 163, 124, 0.4)',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(45, 31, 24, 0.8)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '540px',
              width: '100%',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              margin: 'auto',
              zIndex: 99999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter and Close Button */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '14px',
                right: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              {/* Image Counter */}
              <span
                style={{
                  backgroundColor: 'rgba(45, 31, 24, 0.75)',
                  color: '#FFFFFF',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.8px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  pointerEvents: 'auto',
                }}
              >
                {selectedIndex! + 1} / {filteredItems.length}
              </span>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Stäng bild"
                style={{
                  backgroundColor: 'rgba(45, 31, 24, 0.75)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.15)',
                  transition: 'background-color 0.2s ease',
                  pointerEvents: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 31, 24, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 31, 24, 0.75)';
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Box */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#1E140E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: '52vh',
                overflow: 'hidden',
              }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '52vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Modal Text & Actions */}
            <div style={{ padding: '20px 24px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                  }}
                >
                  {currentItem.stylistHandle}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                  {currentItem.stylist}
                </span>
              </div>

              <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                {currentItem.title}
              </h3>

              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '18px' }}>
                {currentItem.description}
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={siteConfig.bokadirektUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                  style={{ flexGrow: 1 }}
                >
                  <Calendar size={15} />
                  <span>Boka tid på Bokadirekt</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={currentItem.stylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--sm"
                >
                  <Instagram size={15} color="var(--color-accent)" />
                  <span>Se på Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
