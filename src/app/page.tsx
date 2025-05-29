'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import components with SSR disabled to avoid window is not defined errors
const ComingSoon = dynamic(() => import('../components/ComingSoon'), {
  ssr: false,
});

const HomePage = dynamic(() => import('../components/HomePage'), {
  ssr: false,
});

export default function Home() {
  const searchParams = useSearchParams();
  const showFullParam = searchParams.get('full');
  const [isLocalDevelopment, setIsLocalDevelopment] = useState(false);
  
  useEffect(() => {
    // Controlla se siamo in ambiente di sviluppo locale
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1' || host.includes('ngrok');
    setIsLocalDevelopment(isLocal);
  }, []);
  
  // In ambiente di sviluppo locale o con il parametro 'full', mostra la HomePage completa
  // In produzione, mostra la pagina Coming Soon a meno che non sia specificato 'full'
  return (isLocalDevelopment || showFullParam) ? <HomePage /> : <ComingSoon />;
}
