"use client";

import { Organization, WebSite, WithContext } from 'schema-dts';

export function OrganizationJsonLd() {
  const organizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XP-L4B',
    url: 'https://www.xpl4b.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.xpl4b.com/logo_XP_L4B_rgb_trasp_vert_col_payoff.png',
      width: '500',
      height: '350',
      caption: 'XP-L4B - enhance & engage'
    },
    slogan: 'enhance & engage',
    description: 'XP-L4B è leader in sviluppo competenze tramite gamification, serious games e tecnologie VR/AR. Trasformiamo ogni attività in un\'esperienza coinvolgente con soluzioni innovative che aumentano il coinvolgimento e la produttività del 50-60%.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
      addressLocality: 'Italia'
    },
    email: 'Info@riccardomangano.org',
    sameAs: [
      'https://www.youtube.com/@XP-L4B',
      'https://www.linkedin.com/company/xp-l4b/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'Info@riccardomangano.org',
      availableLanguage: ['Italian', 'English']
    },
    knowsAbout: [
      'Sviluppo Competenze',
      'Gamification',
      'Serious Games',
      'Game-Based Learning',
      'Realtà Virtuale',
      'Realtà Aumentata',
      'AI Prompting',
      'Team Building',
      'Employee Engagement'
    ],
    keywords: 'sviluppo competenze, gamification, serious games, game-based learning, VR, AR, realtà virtuale, realtà aumentata, engagement, teambuilding, AI prompting'
  };

  // Serializzazione stabile per evitare problemi di idratazione
  const jsonString = JSON.stringify(organizationData);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export function WebSiteJsonLd() {
  const websiteData: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'XP-L4B',
    url: 'https://www.xpl4b.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.xpl4b.com/search?q={search_term_string}'
    },
    description: 'XP-L4B è leader in sviluppo competenze tramite gamification, serious games e tecnologie VR/AR che aumentano il coinvolgimento e la produttività del 50-60%',
    inLanguage: 'it-IT'
  };

  // Serializzazione stabile per evitare problemi di idratazione
  const jsonString = JSON.stringify(websiteData);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
