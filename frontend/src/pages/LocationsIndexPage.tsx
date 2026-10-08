import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { locationsData } from '../content/locationsData';

export const LocationsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = locationsData.filter((loc) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      loc.name.toLowerCase().includes(q) ||
      loc.region.toLowerCase().includes(q) ||
      loc.nearbyAreas.some((area) => area.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <PageMeta
        title="Orter & Områden | Studio Corner Trollhättan"
        description="Studio Corner välkomnar kvinnor från hela Trestad: Trollhättan, Vänersborg, Uddevalla med omnejd för professionell hår- och fransvård."
        canonicalPath="/orter"
      />

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow">TRESTAD & NÄROMRÅDE</span>
          <h1 className="section-title">
            Välkommen till vår salong i Trollhättan
          </h1>
          <p className="section-subtitle">
            Studio Corner är beläget på Göteborgsvägen 2D i Trollhättan och tar emot kunder från hela Trestadsområdet.
          </p>

          <div style={{ marginTop: '32px', marginBottom: '48px', position: 'relative', maxWidth: '440px', margin: '32px auto 48px auto' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)' }} />
            <input
              type="text"
              placeholder="Sök din ort (t.ex. Trollhättan, Vänersborg)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: '9999px',
                border: '1px solid rgba(45, 31, 24, 0.15)',
                backgroundColor: '#FFFFFF',
                fontSize: '14px',
                color: 'var(--color-text-primary)',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {filteredLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/orter/${loc.slug}`}
                className="service-card"
                style={{ textAlign: 'left', padding: '24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={18} color="var(--color-accent)" />
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {loc.region}
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{loc.name}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  {loc.shortAnswer}
                </p>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Läs mer</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
