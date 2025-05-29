'use client';

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import HomePage component with SSR disabled
const HomePage = dynamic(() => import('../../components/HomePage'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-[var(--purple-deep)] text-white">
      <div className="text-center">
        <div className="mb-4 text-4xl font-bold animate-pulse">XP-L4B</div>
        <div className="text-xl">Caricamento in corso...</div>
      </div>
    </div>
  ),
});

export default function FullSite() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure we're only rendering on the client
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--purple-deep)] text-white">
        <div className="text-center">
          <div className="mb-4 text-4xl font-bold">XP-L4B</div>
          <div className="text-xl">Inizializzazione...</div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-[var(--purple-deep)] text-white">
        <div className="text-center">
          <div className="mb-4 text-4xl font-bold animate-pulse">XP-L4B</div>
          <div className="text-xl">Caricamento contenuti...</div>
        </div>
      </div>
    }>
      <HomePage />
    </Suspense>
  );
}
