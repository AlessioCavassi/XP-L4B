'use client';

import dynamic from 'next/dynamic';

// Import the ComingSoon component with SSR disabled to avoid window is not defined errors
const ComingSoon = dynamic(() => import('../components/ComingSoon'), {
  ssr: false,
});

export default function Home() {
  return <ComingSoon />;
}
