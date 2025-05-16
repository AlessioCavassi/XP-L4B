import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlayMode, setIsPlayMode] = useState(false);
  const [trail, setTrail] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      // Initially hide the default cursor
      document.body.style.cursor = 'none';
      
      // Check if play mode is active
      const checkPlayMode = () => {
        setIsPlayMode(document.body.classList.contains('play-mode'));
      };
      
      // Initial check
      checkPlayMode();
      
      // Create a MutationObserver to detect when play-mode class is added/removed
      const bodyObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            checkPlayMode();
          }
        });
      });
      
      bodyObserver.observe(document.body, { attributes: true });

      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        
        // Track when hovering over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', onInteractiveEnter);
          el.addEventListener('mouseleave', onInteractiveLeave);
        });
      };

      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        
        // Cleanup interactive element listeners
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .interactive');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', onInteractiveEnter);
          el.removeEventListener('mouseleave', onInteractiveLeave);
        });
      };

      const onMouseMove = (e: MouseEvent) => {
        const newPosition = { x: e.clientX, y: e.clientY };
        setPosition(newPosition);
        
        // Gestisci l'effetto trail in Play Mode
        if (isPlayMode) {
          setTrail(prevTrail => {
            // Mantieni solo gli ultimi 5 punti per l'effetto trail
            const updatedTrail = [...prevTrail, newPosition].slice(-5);
            return updatedTrail;
          });
        } else {
          // In Corporate Mode, nessun trail
          setTrail([]);
        }
      };

      const onMouseEnter = () => {
        setVisible(true);
      };

      const onMouseLeave = () => {
        setVisible(false);
      };

      const onMouseDown = () => {
        setIsClicking(true);
      };

      const onMouseUp = () => {
        setIsClicking(false);
      };

      const onInteractiveEnter = () => {
        setIsHovering(true);
      };

      const onInteractiveLeave = () => {
        setIsHovering(false);
      };

      // Add event listeners on mount
      addEventListeners();

      // Observer for dynamic content changes
      const observer = new MutationObserver(() => {
        removeEventListeners();
        addEventListeners();
      });

      observer.observe(document.body, { childList: true, subtree: true });

      // Cleanup on unmount
      return () => {
        document.body.style.cursor = '';
        removeEventListeners();
        observer.disconnect();
      };
    }
  }, [isPlayMode]);

  // Only render if we're showing the custom cursor
  if (!visible) return null;

  return (
    <>
      {/* Trail effect - only in Play Mode */}
      {isPlayMode && trail.map((point, index) => (
        <div
          key={index}
          className="custom-cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 0.2 + (index * 0.15), // aumenta l'opacità per i punti più recenti
            transform: `translate(-50%, -50%) scale(${0.4 + (index * 0.12)})`,
            backgroundColor: 'var(--aqua-green)',
            position: 'fixed',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            pointerEvents: 'none',
            mixBlendMode: 'difference',
            zIndex: 9990 + index
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isClicking ? 'scale-75' : ''} ${isHovering ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          backgroundColor: isPlayMode ? 'var(--aqua-green)' : 'var(--blue)',
          // Play Mode ha un cursore più grande e appariscente
          width: isPlayMode ? '30px' : '20px',
          height: isPlayMode ? '30px' : '20px',
          // Effetto shine solo in Play Mode
          boxShadow: isPlayMode ? '0 0 15px var(--aqua-green), 0 0 5px var(--aqua-green)' : 'none',
          // Forma che cambia in base alla modalità
          borderRadius: isPlayMode ? (isHovering ? '12px' : '50%') : '50%',
          mixBlendMode: 'difference',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: `transform ${isPlayMode ? '0.15s' : '0.3s'} ${isPlayMode ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-out'}, 
                         background-color 0.2s ease-out, 
                         width 0.2s ease-out, 
                         height 0.2s ease-out,
                         border-radius 0.3s ease`
        }}
      />
    </>
  );
};

export default CustomCursor;
