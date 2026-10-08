import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HijabTrygghetPage } from './pages/HijabTrygghetPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { LocationPage } from './pages/LocationPage';
import { LocationsIndexPage } from './pages/LocationsIndexPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hijab-trygghet" element={<HijabTrygghetPage />} />
        <Route path="/hijab" element={<HijabTrygghetPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/galleri" element={<GalleryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/work" element={<GalleryPage />} />
        <Route path="/orter" element={<LocationsIndexPage />} />
        <Route path="/orter/:slug" element={<LocationPage />} />
        <Route path="/marknadsforing" element={<LocationsIndexPage />} />
        <Route path="/marknadsforing/:slug" element={<LocationPage />} />
        <Route path="/integritet" element={<PrivacyPage />} />
        <Route path="/tillganglighet" element={<AccessibilityPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
