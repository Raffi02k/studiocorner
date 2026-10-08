import React, { useState } from 'react';
import { ChevronDown, Calendar, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../content/siteContent';

interface FaqItem {
  id: string;
  category: 'fransar' | 'har' | 'trygghet' | 'bokning';
  categoryLabel: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: '1',
    category: 'fransar',
    categoryLabel: 'Fransar & Bryn',
    question: 'Hur länge håller en Lash Lift?',
    answer: 'Ett lash lift håller i cirka 6–8 veckor beroende på din naturliga franscykel och hur du sköter dina fransar efteråt. Under de första 24 timmarna rekommenderar vi att undvika vatten, ånga och mascara så att keratinet och formen sätter sig optimalt.',
  },
  {
    id: '2',
    category: 'fransar',
    categoryLabel: 'Fransar & Bryn',
    question: 'Vad är skillnaden mellan Klassisk och Koreansk Lashlift?',
    answer: 'En klassisk lashlift ger en mjuk och vacker böj från roten. Koreansk lashlift är en modern, skonsam teknik som fokuserar på ett mer rakt och uppåtgående lyft. Den passar extra bra för dig som har raka, nedåtriktade eller svårformade fransar och vill ha ett tydligt, öppet resultat.',
  },
  {
    id: '3',
    category: 'fransar',
    categoryLabel: 'Fransar & Bryn',
    question: 'Vad är Brow Lift och vem passar det för?',
    answer: 'Brow Lift (brynlaminering) är en behandling där brynstråna formas och fixeras i önskad riktning. Det ger en fylligare, mer definierad och välvårdad look och håller i cirka 4–8 veckor. Perfekt om du har strån som växer i olika riktningar eller vill ha fylligare bryn.',
  },
  {
    id: '4',
    category: 'har',
    categoryLabel: 'Hår & Styling',
    question: 'Hur lång tid tar en balayage eller slingbehandling?',
    answer: 'En sling- eller balayagebehandling tar vanligtvis mellan 3,5 och 4 timmar (210–230 minuter) beroende på hårets längd och tjocklek. Det inkluderar noggrann folieplacering, skonsam uppljusning, personlig nyansering, tvätt och styling.',
  },
  {
    id: '5',
    category: 'har',
    categoryLabel: 'Hår & Styling',
    question: 'Erbjuder ni konsultation innan färgförändring?',
    answer: 'Ja, du kan boka en kostnadsfri konsultation på 15 minuter via Bokadirekt. Vi sätter oss ner tillsammans och går igenom dina önskemål, hårets kvalitet och vilken färgton eller metod som passar bäst.',
  },
  {
    id: '6',
    category: 'trygghet',
    categoryLabel: 'Trygghet & Hijab',
    question: 'Är salongen anpassad för slöjbärande kvinnor (Hijab)?',
    answer: 'Ja! Studio Corner är en salong exklusivt för kvinnor och drivs enbart av kvinnlig personal. Vår lokal är insynsskyddad så att du kan känna dig fullkomligt trygg och avslappnad att ta av dig slöjan under din behandling.',
  },
  {
    id: '7',
    category: 'trygghet',
    categoryLabel: 'Trygghet & Hijab',
    question: 'Vad innebär er anpassade tjänst för NPF / GAD / OCD?',
    answer: 'Vi har mångårig arbetslivserfarenhet inom vården och vet hur viktigt det är att en salongsmiljö känns trygg. Du kan boka vår anpassade tjänst och få en session på dina villkor – med dämpad belysning, låg ljudvolym och en tyst behandling utan småprat om du föredrar det.',
  },
  {
    id: '8',
    category: 'bokning',
    categoryLabel: 'Bokning & Betalning',
    question: 'Hur bokar jag en tid och hur fungerar betalning?',
    answer: 'Alla bokningar sker enkelt och säkert online via vår sida på Bokadirekt. Där ser du alla lediga tider och kan välja att betala direkt, på plats eller via Klarna (delbetalning eller betala senare).',
  },
  {
    id: '9',
    category: 'bokning',
    categoryLabel: 'Bokning & Betalning',
    question: 'Hur avbokar jag min tid?',
    answer: 'Du kan enkelt avboka eller omboka din tid via länken i din bokningsbekräftelse från Bokadirekt med den unika avbokningskoden, enligt Bokadirekts gällande avbokningsvillkor.',
  },
];

export const FaqPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <PageMeta
        title="Vanliga Frågor & Svar | Studio Corner Trollhättan"
        description="Få svar på vanliga frågor om lashlift, balayage, hijab-anpassade hårbehandlingar och tidsbokning hos Studio Corner på Göteborgsvägen 2D i Trollhättan."
        canonicalPath="/faq"
      />

      <PageHero
        kicker="FRÅGOR & SVAR"
        title="Vanliga frågor om våra behandlingar"
        description="Här har vi samlat svar på de vanligaste frågorna gällande fransar, bryn, hårbehandlingar och vår trygga salongsmiljö."
        bgImage="/images/salon-interior.jpg"
      />

      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    borderRadius: '12px',
                    border: '1px solid rgba(45, 31, 24, 0.08)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      color: 'var(--color-text-primary)',
                      fontWeight: 600,
                    }}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      color="var(--color-accent)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '12px',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.75' }}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)', fontSize: '15px' }}>
              Har du fler frågor? Tveka inte att skriva till oss på Instagram eller boka en kostnadsfri konsultation.
            </p>
            <a
              href={siteConfig.bokadirektUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <Calendar size={16} />
              <span>Boka konsultation på Bokadirekt</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
