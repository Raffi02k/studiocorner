/**
 * STUDIO CORNER - CONTENT CONFIGURATION
 * En salong för kvinnor i Trollhättan där hår och fransar möts.
 */

export interface SiteConfig {
  projectName: string;
  businessType: string;
  tagline: string;
  eyebrow: string;
  description: string;
  city: string;
  region: string;
  postalCode: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  openingHours: string;
  hoursDetail: {
    weekdays: string;
    weekend: string;
  };
  ownerName: string;
  
  // CTA
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };

  // Branding & Assets
  logoUrl: string;
  wordmarkUrl: string;
  heroVideoUrl: string;
  heroPosterUrl: string;
  
  // Navigation links
  navLinks: Array<{
    label: string;
    path: string;
  }>;

  // Local SEO & Maps
  mapEmbedUrl: string;
  mapDirectUrl: string;

  // Social & External Links
  bokadirektUrl: string;
  socialLinks: {
    instagramFrisor: string;
    instagramFransar: string;
    bokadirekt: string;
    googleMaps: string;
  };

  // Reviews
  reviewsScore: number;
  reviewsCount: number;
}

export const siteConfig: SiteConfig = {
  projectName: "Studio Corner",
  businessType: "Skönhetssalong för kvinnor",
  eyebrow: "EN SALONG FÖR KVINNOR",
  tagline: "Där hår & fransar möts i Trollhättan",
  description: "En exklusiv skönhetssalong enbart för kvinnor på Göteborgsvägen 2D i Trollhättan. Hos oss möter du vår licensierade frisör och certifierade fransstylist i en lugn, varm och harmonisk miljö.",
  city: "Trollhättan",
  region: "Västra Götaland",
  postalCode: "461 53",
  address: "Göteborgsvägen 2D, 461 53 Trollhättan",
  phone: "+46700000000",
  phoneDisplay: "070-000 00 00",
  email: "kontakt@studiocorner.se",
  openingHours: "Måndag – Fredag: 10:00 – 18:00 (Lör & Sön: Stängt)",
  hoursDetail: {
    weekdays: "10:00 – 18:00",
    weekend: "Stängt",
  },
  ownerName: "Ema & Azra",

  bokadirektUrl: "https://www.bokadirekt.se/places/studio-corner-137505",

  primaryCta: {
    label: "Boka tid på Bokadirekt",
    href: "https://www.bokadirekt.se/places/studio-corner-137505",
  },
  secondaryCta: {
    label: "Våra behandlingar",
    href: "/#behandlingar",
  },

  logoUrl: "/images/logo.png",
  wordmarkUrl: "/images/logo-image.jpeg",
  heroVideoUrl: "/media/hero/hero-video.mp4",
  heroPosterUrl: "/images/salon-interior.jpg",

  navLinks: [
    { label: "Hem", path: "/" },
    { label: "Behandlingar & Priser", path: "/services" },
    { label: "Galleri", path: "/galleri" },
    { label: "Hijab & Trygghet", path: "/hijab-trygghet" },
    { label: "Om Salongen", path: "/about" },
    { label: "Kontakt & Hitta hit", path: "/contact" },
  ],

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2105.748053738096!2d12.285817876801977!3d58.28389777413693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46452290f64c67eb%3A0xe7a5dcf4a6a58bc2!2zR8O2dGVib3Jnc3bDpGdlbiAyRCwgNDYxIDUzIFRyb2xsaMOkdHRhbg!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse",
  mapDirectUrl: "https://www.google.com/maps/search/?api=1&query=G%C3%B6teborgsv%C3%A4gen+2D,+461+53,+Trollh%C3%A4ttan",

  socialLinks: {
    instagramFrisor: "https://www.instagram.com/colorbyazra/",
    instagramFransar: "https://www.instagram.com/lashandbrowstudio.em/",
    bokadirekt: "https://www.bokadirekt.se/places/studio-corner-137505",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=G%C3%B6teborgsv%C3%A4gen+2D,+461+53,+Trollh%C3%A4ttan",
  },

  reviewsScore: 5.0,
  reviewsCount: 7,
};
