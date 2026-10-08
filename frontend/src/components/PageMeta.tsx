import React, { useEffect } from 'react';
import { siteConfig } from '../content/siteContent';

interface PageMetaProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  canonicalPath = '',
  noindex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.projectName}`
    : `${siteConfig.projectName} | ${siteConfig.tagline}`;

  const metaDesc = description || siteConfig.description;
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://studiocorner-alpha.vercel.app';
  const canonicalUrl = `${origin}${canonicalPath}`;
  const ogImageUrl = `${origin}/images/linkpic.png`;

  useEffect(() => {
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMeta = (attribute: 'name' | 'property', attrValue: string, contentValue: string) => {
      let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', contentValue);
    };

    // Update meta description & robots
    setMeta('name', 'description', metaDesc);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Update Open Graph tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImageUrl);
    setMeta('property', 'og:image:secure_url', ogImageUrl);

    // Update Twitter Card tags
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDesc);
    setMeta('name', 'twitter:image', ogImageUrl);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [fullTitle, metaDesc, canonicalUrl, ogImageUrl, noindex]);

  return null;
};
