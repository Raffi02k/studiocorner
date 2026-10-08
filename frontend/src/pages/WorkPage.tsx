import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Instagram } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';

interface GalleryItem {
  id: string;
  category: 'har' | 'fransar' | 'salong';
  title: string;
  stylist: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    category: 'har',
    title: 'Balayage & Styling',
    stylist: '@colorbyazra',
    image: '/images/hair-treatment.jpg',
    description: 'Mjuka solblekta övergångar med skonsam uppljusning och glansfull nyansering.',
  },
  {
    id: '2',
    category: 'fransar',
    title: 'Koreansk Lash Lift & Brow Lift',
    stylist: '@lashandbrowstudio.em',
    image: '/images/lashes-brows.jpg',
    description: 'Perfekt böjda fransar från roten och fylligt laminerade bryn.',
  },
  {
    id: '3',
    category: 'salong',
    title: 'Vår Salongsmiljö',
    stylist: 'Studio Corner',
    image: '/images/salon-interior.jpg',
    description: 'En lugn, varm och harmonisk oas på Göteborgsvägen 2D.',
  },
  {
    id: '4',
    category: 'har',
    title: 'Avkopplande Hårtvätt & Spa',
    stylist: 'Studio Corner',
    image: '/images/hair-spa.jpg',
    description: 'Skön hårbottenmassage och djupverkande hårkur.',
  },
  {
    id: '5',
    category: 'salong',
    title: 'Möt Stylisten Ema',
    stylist: '@lashandbrowstudio.em',
    image: '/images/om-picutre-owner.jpeg',
    description: 'Vår certifierade frans- och brynspecialist i salongen.',
  },
];

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      <PageMeta
        title="Galleri & Inspiration | Studio Corner Trollhättan"
        description="Se resultat från våra hårbehandlingar, balayage, lashlift, browlift och upptäck vår vackra salongsmiljö på Studio Corner i Trollhättan."
        canonicalPath="/work"
      />

      <PageHero
        kicker="GALLERI & INSPIRATION"
        title="Våra resultat och vår miljö"
        description="Bilder från verkliga behandlingar utförda av våra stylister. Se färgresultat, franslyft och upptäck den varma harmonin i salongen."
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

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Filters */}
          <div className="services-filter">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Alla bilder
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'har' ? 'active' : ''}`}
              onClick={() => setFilter('har')}
            >
              Hår & Färg (@colorbyazra)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'fransar' ? 'active' : ''}`}
              onClick={() => setFilter('fransar')}
            >
              Fransar & Bryn (@lashandbrowstudio.em)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'salong' ? 'active' : ''}`}
              onClick={() => setFilter('salong')}
            >
              Salongsmiljön
            </button>
          </div>

          {/* Grid */}
          <div className="arch-highlights__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {filteredItems.map((item) => (
              <div key={item.id} className="arch-card">
                <div className="arch-card__image-wrap">
                  <img src={item.image} alt={item.title} className="arch-card__img" loading="lazy" />
                </div>
                <div className="arch-card__content">
                  <span className="arch-card__tag">{item.stylist}</span>
                  <h3 className="arch-card__title">{item.title}</h3>
                  <p className="arch-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
              Följ våra stylister på Instagram för dagliga uppdateringar och före/efter-videos:
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={siteConfig.socialLinks.instagramFrisor}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Instagram size={15} color="var(--color-accent)" />
                <span>@colorbyazra</span>
              </a>
              <a
                href={siteConfig.socialLinks.instagramFransar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Instagram size={15} color="var(--color-accent)" />
                <span>@lashandbrowstudio.em</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
