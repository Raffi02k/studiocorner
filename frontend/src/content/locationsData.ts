/**
 * STUDIO CORNER - LOCAL SEO REGIONS & LOCATIONS (TRESTAD)
 */

export interface LocationItem {
  slug: string;
  name: string;
  region: string;
  category?: string;
  serviceKeyword?: string;
  nearbyAreas: string[];
  metaTitle?: string;
  metaDescription?: string;
  headline?: string;
  leadText?: string;
  shortAnswer: string;
  priceBadge?: string;
  priceDisplay?: string;
  stats?: Array<{
    value: string;
    label: string;
    sub?: string;
  }>;
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  services?: Array<{
    number: string;
    title: string;
    desc?: string;
  }>;
  includedChecklist?: string[];
  includedContent?: string[];
  whyUs?: Array<{
    number: string;
    title: string;
    desc: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LocationGlobalConfig {
  baseRoute: string;
  defaultCategory: string;
  defaultServiceKeyword: string;
  defaultActionPhrase: string;
  defaultPriceType: string;
  defaultPriceDisplay: string;
  defaultStats: Array<{
    value: string;
    label: string;
    sub?: string;
  }>;
  defaultQuote: {
    text: string;
    author: string;
    title: string;
  };
  defaultServices: Array<{
    number: string;
    titleTemplate: string;
    desc: string;
  }>;
  defaultIncludedChecklist: string[];
  defaultWhyUs: Array<{
    number: string;
    title: string;
    desc: string;
  }>;
}

export const locationGlobalConfig: LocationGlobalConfig = {
  baseRoute: "/orter",
  defaultCategory: "Skönhetssalong för kvinnor",
  defaultServiceKeyword: "frisör och fransar",
  defaultActionPhrase: "professionell klippning, balayage, lashlift och browlift i en exklusiv oas för kvinnor.",
  defaultPriceType: "BOKADIREKT",
  defaultPriceDisplay: "från 150 kr",
  defaultStats: [
    { value: "5.0 ★", label: "BETYG", sub: "Bokadirekt" },
    { value: "100%", label: "KVINNOR", sub: "Trygg miljö" },
    { value: "6–8 v", label: "HÅLLBARHET", sub: "Lash Lift" },
  ],
  defaultQuote: {
    text: "En fantastisk salong i Trollhättan med otrolig omsorg och grymma färgresultat.",
    author: "Sabina S.",
    title: "Kund, Trollhättan",
  },
  defaultServices: [
    {
      number: "01",
      titleTemplate: "Frisör & Klippning för kunder från {city}",
      desc: "Skräddarsydd damklippning och styling med personlig konsultation.",
    },
    {
      number: "02",
      titleTemplate: "Slingor & Balayage nära {city}",
      desc: "Mjuka övergångar, ljusning och personlig nyansering med skonsamma produkter.",
    },
    {
      number: "03",
      titleTemplate: "Lash Lift & Fransar för {city}",
      desc: "Klassisk och koreansk lashlift som lyfter dina egna naturliga fransar.",
    },
    {
      number: "04",
      titleTemplate: "Brow Lift & Formning nära {city}",
      desc: "Brynlaminering och färgning som skapar fylliga och välvårdade bryn.",
    },
  ],
  defaultIncludedChecklist: [
    "Personlig konsultation inför varje behandling",
    "Insynsskyddad och trygg salong enbart för kvinnor",
    "Möjlighet till hijab-anpassat besök",
    "Enkel onlinebokning via Bokadirekt",
  ],
  defaultWhyUs: [
    {
      number: "01",
      title: "Exklusivt för kvinnor",
      desc: "En lugn oas där du kan koppla av helt och njuta av din egentid med full integritet.",
    },
    {
      number: "02",
      title: "Licensierad frisör & certifierad stylist",
      desc: "Både professionell frisör (@colorbyazra) och certifierad fransstylist (@lashandbrowstudio.em) under samma tak.",
    },
    {
      number: "03",
      title: "Gedigen vårdkompetens",
      desc: "Erfarenhet från vården som gör att vi kan erbjuda anpassade sessioner vid NPF, sensorisk känslighet eller oro.",
    },
  ],
};

export const locationsData: LocationItem[] = [
  {
    slug: "trollhattan",
    name: "Trollhättan",
    region: "Västra Götaland",
    category: "Frisör & Fransar i Trollhättan",
    nearbyAreas: ["Vänersborg", "Uddevalla", "Sjuntorp", "Lilla Edet"],
    shortAnswer: "Studio Corner är beläget på Göteborgsvägen 2D i Trollhättan och erbjuder en exklusiv salong för kvinnor med frisör och certifierad fransstylist.",
  },
  {
    slug: "vanersborg",
    name: "Vänersborg",
    region: "Västra Götaland",
    category: "Frisör & Fransar nära Vänersborg",
    nearbyAreas: ["Trollhättan", "Uddevalla", "Vargön", "Grästorp"],
    shortAnswer: "Bara 10–15 minuter från Vänersborg hittar du Studio Corner på Göteborgsvägen 2D i Trollhättan – en lugn och trygg oas enbart för kvinnor.",
  },
  {
    slug: "uddevalla",
    name: "Uddevalla",
    region: "Bohuslän / Västra Götaland",
    category: "Frisör & Skönhetssalong nära Uddevalla",
    nearbyAreas: ["Trollhättan", "Vänersborg", "Ljungskile", "Munkedal"],
    shortAnswer: "Många av våra kunder kommer från Uddevalla för vår specialistkompetens inom balayage, koreansk lashlift och hijab-anpassad miljö i Trollhättan.",
  },
];

export const getLocationBySlug = (slug: string): LocationItem | undefined => {
  return locationsData.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
};
