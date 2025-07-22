'use client';

import { useEffect, useRef } from 'react';

interface FooterGlowProps {
  className?: string;
}

export default function FooterGlow({ className = '' }: FooterGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Imposta le dimensioni del canvas
    const resizeCanvas = () => {
      if (canvas) {
        const footer = document.querySelector('footer');
        const footerHeight = footer?.clientHeight || 0;
        const gradientHeight = Math.floor((footerHeight * 2) / 7); // 2/7 dell'altezza del footer
        
        canvas.width = window.innerWidth;
        canvas.height = gradientHeight || 200; // Altezza di fallback se non trova il footer
      }
    };

    // Disegna l'effetto di illuminazione
    const draw = () => {
      if (!ctx) return;
      
      // Pulisci il canvas
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      // Aggiorna il tempo per l'animazione
      time.current += 0.01;
      
      // Crea un gradiente radiale per l'effetto di illuminazione
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, // x centro
        0,                // y centro (fuori dallo schermo in alto)
        0,                // raggio interno
        canvas.width / 2, // x centro
        0,                // y centro
        canvas.width * 0.8 // raggio esterno
      );
      
      // Aggiungi i colori al gradiente con opacità variabile
      gradient.addColorStop(0, 'rgba(109, 40, 217, 0.15)'); // Viola
      gradient.addColorStop(0.5, 'rgba(0, 178, 169, 0.1)'); // Acqua
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');   // Trasparente
      
      // Applica il gradiente al canvas
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Continua l'animazione
      if (animationFrameId.current === null) {
        animationFrameId.current = requestAnimationFrame(draw);
      }
    };

    // Gestisci il ridimensionamento della finestra
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    
    // Inizializza il canvas e avvia l'animazione
    resizeCanvas();
    animationFrameId.current = requestAnimationFrame(draw);

    // Pulizia al momento dello smontaggio del componente
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, []);

  return (
    <div className={`${className} w-full`}>
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        style={{
          background: 'transparent',
          height: 'calc(2/7 * 100%)',
        }}
      />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
