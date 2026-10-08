export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  stylist: string;
  quote: string;
  source: string;
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Thea E.",
    initials: "TE",
    rating: 5,
    date: "Verifierat omdöme",
    stylist: "Azra (Frisör)",
    quote: "Supernöjd! Azra lyckas alltid få min färg precis som jag vill ha den, 10/10 kan starkt rekommendera! ❤️",
    source: "Bokadirekt",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Sabina S.",
    initials: "SS",
    rating: 5,
    date: "Verifierat omdöme",
    stylist: "Azra (Frisör)",
    quote: "Azra är en helt fantastisk frisör! ❤️ Hon har en otrolig känsla för detaljer, är lyhörd för kundens önskemål och vet precis hur hon ska förverkliga dem. Med sin skicklighet, kreativitet och känsla för sitt yrke kan hon verkligen skapa magi med håret! Rekommenderar henne varmt! 🥰✨",
    source: "Bokadirekt",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Moa R.",
    initials: "MR",
    rating: 5,
    date: "Verifierat omdöme",
    stylist: "Azra (Frisör)",
    quote: "Azra är proffsig och lyhörd. Hon individanpassar verkligen kundens önskemål efter kundens egna förutsättningar. Såå nöjd!!",
    source: "Bokadirekt",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Emma L.",
    initials: "EL",
    rating: 5,
    date: "Verifierat omdöme",
    stylist: "Ema (Lash & Brow Stylist)",
    quote: "Så otroligt duktig och noggrann! Mina bryn och lashlift blev helt perfekta, ser så naturligt och piggt ut. Älskar den lugna stämningen i salongen.",
    source: "Bokadirekt",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Fatima A.",
    initials: "FA",
    rating: 5,
    date: "Verifierat omdöme",
    stylist: "Studio Corner Team",
    quote: "En fantastisk oas för oss kvinnor i Trollhättan. Att kunna boka hijab-anpassad klippning och känna sig 100% trygg och respekterad betyder så mycket. 5 av 5 stjärnor!",
    source: "Bokadirekt",
    verified: true,
  },
];
