'use client';

import { useSearchParams } from 'next/navigation';
import React, { ReactElement } from 'react';

interface ClientSearchParamsProps {
  isLocalDevelopment: boolean;
  renderHomePage: () => ReactElement;
  renderComingSoon: () => ReactElement;
}

/**
 * Componente client che utilizza useSearchParams in modo sicuro
 * Questo componente è caricato dinamicamente per evitare errori durante il build
 */
const ClientSearchParams: React.FC<ClientSearchParamsProps> = ({ 
  isLocalDevelopment, 
  renderHomePage, 
  renderComingSoon 
}) => {
  const searchParams = useSearchParams();
  const showFullParam = searchParams.get('full');
  
  // In ambiente di sviluppo locale o con il parametro 'full', mostra la HomePage completa
  // In produzione, mostra la pagina Coming Soon a meno che non sia specificato 'full'
  return (isLocalDevelopment || showFullParam) ? renderHomePage() : renderComingSoon();
};

export default ClientSearchParams;
