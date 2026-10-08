import React from 'react';

interface PageHeroProps {
  kicker?: string;
  title: string;
  description?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  description,
  bgImage,
  children,
}) => {
  return (
    <section className="page-hero" style={bgImage ? {
      backgroundImage: `linear-gradient(rgba(249, 246, 240, 0.9), rgba(249, 246, 240, 0.95)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    } : undefined}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {kicker && <span className="eyebrow">{kicker}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {children && <div style={{ marginTop: '24px' }}>{children}</div>}
      </div>
    </section>
  );
};
