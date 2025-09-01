import React, { useEffect, useState } from 'react';
import MobileServiceCards from './MobileServiceCards';
import ExpandableContent from './ExpandableContent';
import FlipCard from './FlipCard';
import MobileParticlesBackground from './MobileParticlesBackground';
import { FaGamepad, FaUsers, FaRocket, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Servizi completi dal sito originale - allineati con la versione desktop ma ottimizzati per mobile
const serviceData = [
  {
    id: 1,
    title: 'Realtà Virtuale',
    description: 'Sviluppiamo esperienze immersive in Realtà Virtuale per trasformare la formazione, la comunicazione e il marketing aziendale. Progetti personalizzati di forte impatto.',
    icon: '🥽',
    color: 'var(--aqua-green)',
    url: '/servizi/realta-virtuale'
  },
  {
    id: 2,
    title: 'Realtà Aumentata',
    description: "Arricchiamo l'ambiente reale con contenuti digitali interattivi, ideali per comunicazione, formazione e coinvolgimento del pubblico. Esperienze personalizzate di alta qualità.",
    icon: '📱',
    color: 'var(--purple-light)',
    url: '/servizi/realta-aumentata'
  },
  {
    id: 3,
    title: 'Gamification',
    description: 'Soluzioni su misura per coinvolgere dipendenti, ottimizzare processi e fidelizzare clienti. Aumentiamo engagement, produttività e risultati con dinamiche game-based.',
    icon: '🎮',
    color: 'var(--blue)',
    url: '/servizi/gamification'
  },
  {
    id: 4,
    title: 'Percorsi di reskilling',
    description: 'Analizziamo il mercato del lavoro e delle competenze per creare percorsi di reskilling e upskilling efficaci e mirati alle esigenze aziendali.',
    icon: '👨‍🏫',
    color: 'var(--blue)',
    url: '/servizi/percorsi-interattivi'
  },
  {
    id: 5,
    title: 'Riunioni Ludiche',
    description: 'Gamification professionale per riunioni coinvolgenti e team building virtuali efficaci. Strumenti misurabili per migliorare collaborazione e performance del team.',
    icon: '👥',
    color: 'var(--aqua-green)',
    url: '/servizi/team-building'
  },
  {
    id: 6,
    title: 'Digital Engagement',
    description: 'Portal Gate integra elementi ludici nei processi aziendali quotidiani per apprendimento continuo e comunicazione interna. Per l&apos;85-95% della forza lavoro under 40.',
    icon: '📈',
    color: 'var(--blue)',
    url: '/servizi/digital-engagement'
  }
];

// Contenuto espandibile per la sezione Chi Siamo - contenuti originali e migliore contrasto
const aboutSections = [
  {
    title: 'La Nostra Missione',
    content: (
      <div className="space-y-3">
        <p className="text-sm font-bold text-white p-3" data-component-name="MobileOptimizedPage">
          &quot;Trasformare ogni attività in un&apos;esperienza coinvolgente&quot; - questa è la missione che guida XP-L4B.
        </p>
        <p className="text-sm font-bold text-white p-3" data-component-name="MobileOptimizedPage">
          L&apos;83% dei dipendenti che partecipano ad attività ludiche mostra maggiore motivazione. Le nostre sessioni gamificate aumentano produttività e coinvolgimento del 50-60%.
        </p>
      </div>
    ),
    icon: <FaRocket className="text-white" />,
    color: 'var(--aqua-green)'
  },
  {
    title: 'I Nostri Valori',
    content: (
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white p-2 flex-1" data-component-name="<div />">
            <strong className="emerald-text">Engagement</strong>: Le persone al centro di ogni esperienza. Promuoviamo partecipazione attiva, motivazione intrinseca e l&apos;empowerment dei team.
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white p-2 flex-1">
            <strong className="emerald-text">Collaborazione</strong>: La gamification funziona meglio con la co-creazione: soluzioni creative nascono dove le persone possono sperimentare liberamente.
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-[var(--aqua-green)] text-lg">•</span>
          <div className="text-white p-2 flex-1">
            <strong className="emerald-text">Obiettivi comuni</strong>: Uniamo energie e competenze per raggiungere ambizioni significative. Garantiamo che ogni membro conosca cosa costruiamo insieme.
          </div>
        </div>
      </div>
    ),
    icon: <FaUsers className="text-white" />,
    color: 'var(--purple-light)'
  },
  {
    title: 'Competenze Sviluppate',
    content: (
      <div>
        <p className="text-sm text-white/80 font-bold mb-3">
          Attraverso i nostri percorsi e le tecnologie dei partner, sviluppiamo queste competenze chiave:
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2 text-xs font-bold text-white text-center">
            AI prompting
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Comunicazione
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Team work
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Problem solving
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Creatività
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Leadership
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Time management
          </div>
          <div className="p-2 text-xs font-bold text-white text-center">
            Employer Branding
          </div>
        </div>
      </div>
    ),
    icon: <FaGamepad className="text-white" />,
    color: 'var(--blue)'
  },
  {
    title: 'Problematiche Risolte',
    content: (
      <div className="space-y-2">
        <div className="p-3 text-sm text-white font-medium">
          <strong className="emerald-text">70%</strong> degli investimenti formativi tradizionali risultano inefficaci
        </div>
        <div className="p-3 text-sm text-white font-medium">
          Solo il <strong className="emerald-text">5%</strong> delle persone si sente coinvolto sul lavoro in Italia
        </div>
        <div className="p-3 text-sm text-white font-medium">
          Il welfare aziendale è efficace solo nel <strong className="emerald-text">6%</strong> delle aziende italiane
        </div>
      </div>
    ),
    icon: <FaChartLine className="text-white" />,
    color: 'var(--purple-deep)'
  }
];

// Dati per le flip cards - contenuti originali con contrasti migliorati
const flipCardsData = [
  {
    front: (
      <>
        <div className="text-4xl mb-4">👨‍💼</div>
        <h3 className="text-xl font-bold text-white mb-2">Employer Branding</h3>
        <p className="text-sm font-medium text-white/90">Migliora l&apos;immagine e il coinvolgimento aziendale</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">Employer Branding</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Il 95% delle persone in Italia non si sente coinvolto. 
          Le nostre soluzioni aumentano il senso di appartenenza del 60%.
        </p>
      </>
    ),
    frontBg: 'black',
    backBg: 'black'
  },
  {
    front: (
      <>
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-xl font-bold text-white mb-2">Sviluppo Competenze</h3>
        <p className="text-sm font-medium text-white/90">Trasforma l&apos;apprendimento con la gamification</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">Sviluppo Competenze</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Il 70% dei metodi tradizionali è inefficace. 
          I nostri percorsi aumentano l&apos;apprendimento del 50-60%.
        </p>
      </>
    ),
    frontBg: 'black',
    backBg: 'black'
  },
  {
    front: (
      <>
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="text-xl font-bold text-white mb-2">AI Prompting</h3>
        <p className="text-sm font-medium text-white/90">Competenze per l&apos;era dell&apos;intelligenza artificiale</p>
      </>
    ),
    back: (
      <>
        <h3 className="text-xl font-bold mb-3 text-accent" data-component-name="FlipCard">AI Prompting</h3>
        <p className="text-sm font-medium text-white" data-component-name="FlipCard">
          Sviluppa abili conversazioni con l&apos;AI attraverso workshop interattivi e simulazioni pratiche per il business.
        </p>
      </>
    ),
    frontBg: 'black',
    backBg: 'black'
  }
];

const MobileOptimizedPage: React.FC = () => {
  // Funzione per reindirizzare alla pagina contatti
  const scrollToContact = () => {
    // Reindirizza alla pagina contatti come il link in MobileOptimizedPage
    window.location.href = '/contatti';
  };

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Rileva se il dispositivo è mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Se non è mobile, non renderizzare nulla
  if (!isMobile) return null;

  return (
    <div className="bg-black text-white md:hidden relative overflow-hidden">
      {/* Global styles moved to components.css for better performance */}
      {/* Forzare stili globali per il mobile */}
      <style jsx global>{`
        /* Forza colore bianco su tutti i paragrafi nei componenti mobile */
        .mobile-service-desc,
        [data-component-name="MobileServiceCards"],
        #mobileServiceSection p,
        .service-card p,
        [data-component-name="MobileOptimizedPage"] p:not(.text-\[var\(--purple-deep\)\]),
        .text-white\/70,
        [data-component-name="<p />"] {
          color: white !important;
          -webkit-text-fill-color: white !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        /* Paragrafo su sfondo nero - usa colore bianco con trasparenza */
        [data-component-name="MobileOptimizedPage"] p.text-\[var\(--purple-deep\)\] {
          color: white !important;
          -webkit-text-fill-color: white !important;
          opacity: 0.8;
        }
        
        /* Stile per il testo bianco nelle flip cards e nel MotionComponent */
        .flip-card p,
        [data-component-name="MotionComponent"] {
          color: white !important;
        }
        
        /* Override per il MotionComponent */
        [data-component-name="MotionComponent"] {
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>
      {/* Rimosso il container globale di particelle per gestire le particelle sezione per sezione */}
      {/* Hero Section ottimizzata con migliore contrasto - utilizzo variabili CSS coerenti */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center relative bg-black backdrop-blur-sm" style={{ padding: 0, zIndex: 2 }}>
        {/* Particelle locali per Hero Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <motion.h1 
          className="font-heading text-3xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-component-name="MotionComponent"
        >
          <span className="text-[var(--aqua-green)]">TRASFORMIAMO</span> OGNI ATTIVITÀ IN <span className="text-[var(--aqua-green)]">UN&apos;ESPERIENZA</span> <span className="text-[var(--aqua-green)]">COINVOLGENTE</span>
        </motion.h1>
        

        <motion.div
          className="w-full flex flex-col items-center gap-6 mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a 
            href="/documents/xp-lab-presentazione.pdf"
            download
            className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-white font-heading font-bold py-3 px-6 rounded-full transition-all duration-300 text-base md:text-lg text-center shadow-md"
            style={{ minWidth: '280px', width: '80%', maxWidth: '320px', display: 'block', color: 'white', WebkitTextFillColor: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
            data-component-name="MobileOptimizedPage"
          >
            SCARICA LA NOSTRA PRESENTAZIONE
          </a>
          <a 
            href="/contatti"
            className="bg-[var(--purple-deep)] hover:bg-[var(--purple-light)] text-white font-heading font-bold py-3 px-6 rounded-full transition-all duration-300 text-base md:text-lg text-center"
            style={{ minWidth: '280px', width: '80%', maxWidth: '320px', display: 'block' }}
          >
            CONTATTACI
          </a>
        </motion.div>
        
        <motion.div
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p 
            className="font-body text-sm mt-4 text-center max-w-xs font-medium block text-white"
            data-component-name="MobileOptimizedPage"
          >
            Siamo esperti nella creazione di <span className="text-[var(--aqua-green)] font-medium">esperienze ludiche</span> e videoludiche che fondono <span className="text-[var(--aqua-green)] font-medium">gamification</span>, <span className="text-[var(--aqua-green)] font-medium">realtà virtuale</span> e <span className="text-[var(--aqua-green)] font-medium">intelligenza artificiale</span> per rendere i team più <span className="text-[var(--aqua-green)]">produttivi</span> e <span className="text-[var(--aqua-green)]">coinvolgere</span> e <span className="text-[var(--aqua-green)]">ispirare</span> il tuo pubblico.
          </p>
        </motion.div>
        
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-[var(--aqua-green)] rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-[var(--aqua-green)] rounded-full"></div>
          </div>
        </motion.div>
      </section>
      
      {/* Servizi - Carousel Card */}
      <section className="py-10 px-4 bg-black backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Servizi */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-md">I NOSTRI SERVIZI</h2>
        <div className="w-full flex justify-center mb-6">
          <p 
            className="font-body text-sm font-medium text-center text-white bg-[var(--purple-deep)] py-2 px-4 rounded-lg shadow-sm border-2 border-[var(--aqua-green)] max-w-[90%] mx-auto"
            style={{
              backgroundColor: 'var(--purple-deep)',
              borderColor: 'var(--aqua-green)',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Swipe per esplorare i nostri servizi principali
          </p>
        </div>
        
        <MobileServiceCards services={serviceData} />
      </section>
      
      {/* Chi Siamo - Accordion */}
      <section className="py-10 px-4 bg-black backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Chi Siamo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-sm">Chi Siamo</h2>
        <div className="w-full flex justify-center mb-6">
          <p className="font-body text-sm text-center text-white font-medium bg-[var(--purple-deep)] py-2 px-4 rounded-lg shadow-sm border border-[var(--aqua-green)]/30 max-w-[90%] mx-auto" data-component-name="MobileOptimizedPage">
            Tocca per espandere le sezioni
          </p>
        </div>
        
        <ExpandableContent sections={aboutSections} />
      </section>
      
      {/* Stats with Flip Cards - colori coerenti */}
      <section className="py-12 px-4 bg-black backdrop-blur-sm relative" style={{ zIndex: 2 }}>
        {/* Particelle locali per Sezione Flip Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <MobileParticlesBackground />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-center text-[var(--aqua-green)] drop-shadow-sm">
          Perché Sceglierci
        </h2>
        <div className="w-16 h-1 bg-[var(--aqua-green)] mx-auto mb-4"></div>
        <div className="w-full flex justify-center mb-8">
          <p className="font-body text-sm font-medium text-center text-white bg-[var(--purple-deep)] py-2 px-4 rounded-lg shadow-md border border-[var(--aqua-green)] max-w-[90%] mx-auto" data-component-name="MobileOptimizedPage">
            Tocca le carte per scoprire dati e statistiche sul nostro impatto
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
          <FlipCard 
            frontContent={flipCardsData[0].front}
            backContent={flipCardsData[0].back}
            frontBgColor={flipCardsData[0].frontBg}
            backBgColor={flipCardsData[0].backBg}
            height="200px"
          />
          <FlipCard 
            frontContent={flipCardsData[1].front}
            backContent={flipCardsData[1].back}
            frontBgColor={flipCardsData[1].frontBg}
            backBgColor={flipCardsData[1].backBg}
            height="200px"
          />
          <FlipCard 
            frontContent={flipCardsData[2].front}
            backContent={flipCardsData[2].back}
            frontBgColor={flipCardsData[2].frontBg}
            backBgColor={flipCardsData[2].backBg}
            height="200px"
          />
        </div>
      </section>
      
      {/* CTA con colori coerenti dalla palette principale */}
      <section className="py-16 px-4 bg-black relative overflow-hidden" style={{ zIndex: 1 }} data-component-name="MobileOptimizedPage">
        {/* Elementi decorativi semplificati */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--aqua-green)]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--aqua-green)]/20 rounded-full blur-xl"></div>
        
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-[var(--aqua-green)] drop-shadow-lg">Pronti a Rivoluzionare l&apos;Engagement?</h2>
          <p className="text-white mb-8 text-base font-medium max-w-xs mx-auto" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            L&apos;83% dei dipendenti che partecipano ai nostri programmi gamificati mostrano una maggiore motivazione e produttività.
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="w-full max-w-xs bg-[var(--aqua-green)] text-[var(--purple-deep)] font-bold py-5 px-8 rounded-full shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            CONTATTACI ORA
          </motion.button>
          
          <p className="mt-4 text-white/70 text-xs">
            La tua prossima esperienza formativa coinvolgente è a un click di distanza
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobileOptimizedPage;
