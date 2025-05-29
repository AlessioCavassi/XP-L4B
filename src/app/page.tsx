'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import HomePage with SSR disabled to avoid window is not defined errors
const HomePage = dynamic(() => import('../components/HomePage'), {
  ssr: false,
});

// Un componente client wrapper che ora mostra sempre la HomePage
function HomeContentWrapper() {
  // Non abbiamo più bisogno di controllare i parametri URL o l'ambiente
  // Mostriamo sempre la HomePage completa
  return <HomePage />;
}

// Componente principale che avvolge HomeContentWrapper in un Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen bg-[var(--purple-deep)]"><p className="text-white text-xl">Caricamento...</p></div>}>
      <HomeContentWrapper />
    </Suspense>
  );
}
