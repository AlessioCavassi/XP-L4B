import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'XP-L4B - Trasformiamo ogni attività in un\'esperienza coinvolgente';
export const contentType = 'image/png';
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: 'linear-gradient(to right, #160F30, #1A237E)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 50,
          color: 'white',
        }}
      >
        <div style={{ fontSize: 70, fontWeight: 'bold', marginBottom: 20, color: '#00F0FF' }}>XP-L4B</div>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>Formazione Gamificata & Tecnologie VR/AR</div>
        <div style={{ fontSize: 24, opacity: 0.8, maxWidth: 800, textAlign: 'center' }}>
          Trasformiamo ogni attività in un'esperienza coinvolgente
        </div>
        <div style={{ fontSize: 18, marginTop: 30, color: '#00F0FF' }}>enhance & engage</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
