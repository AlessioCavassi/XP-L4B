import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contattaci | XP-L4B',
  description: 'Contatta il team di XP-L4B per scoprire come possiamo trasformare le tue attività in esperienze coinvolgenti attraverso gamification, VR e AR.',
  keywords: 'contatti, XP-L4B, gamification, realtà virtuale, realtà aumentata, apprendimento, engagement',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
