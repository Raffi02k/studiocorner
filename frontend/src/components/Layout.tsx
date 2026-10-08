import React from 'react';
import { ScrollToTop } from './ScrollToTop';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransition } from './PageTransition';
import { CallFab } from './CallFab';
import { CookieModal } from './CookieModal';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <ScrollToTop />
      <Header />
      <div className="header-spacer" aria-hidden="true" />
      <main id="main-content" style={{ flexGrow: 1 }}>
        <PageTransition>{children}</PageTransition>
      </main>
      <CallFab />
      <CookieModal />
      <Footer />
    </div>
  );
};
