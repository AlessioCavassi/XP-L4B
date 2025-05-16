"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// Componente per un dado D20 interattivo (versione 2D)
const D20Tile = ({ position, onClick, isActive, isCompleted }: {
  position: string,
  onClick: () => void,
  isActive: boolean,
  isCompleted: boolean
}) => {
  // Colore base del dado
  const baseColor = isCompleted ? "#65BFB0" : "#594694";
  
  // Varianti per le animazioni
  const variants = {
    idle: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
    active: { scale: [1, 1.2, 1], rotate: [0, 10, 0], transition: { duration: 0.5, repeat: Infinity } },
    completed: { scale: 1.05, rotate: 0, boxShadow: "0 0 15px #65BFB0" }
  };
  
  // Determina quale variante usare
  const currentVariant = isCompleted ? "completed" : (isActive ? "active" : "idle");
  
  return (
    <motion.div
      className={`absolute ${position} w-20 h-20 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
      initial="idle"
      whileHover={!isCompleted && !isActive ? "hover" : undefined}
      animate={currentVariant}
      variants={variants}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 95,30 95,70 50,95 5,70 5,30" 
            fill={baseColor} 
            stroke={isActive || isCompleted ? "#ffffff" : "rgba(255,255,255,0.5)"} 
            strokeWidth="2"
          />
        </svg>
        <span className="absolute text-white font-heading text-xl">
          {isCompleted ? "" : ""}
        </span>
      </div>
    </motion.div>
  );
};

// Componente principale
const GameEntrance: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  // Stati del gioco
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentDice, setCurrentDice] = useState(-1);
  const [completedDice, setCompletedDice] = useState<number[]>([]);
  const [shakeError, setShakeError] = useState(false);
  
  // La sequenza corretta (può essere randomizzata o fissa)
  const correctSequence = [2, 0, 3, 1]; // sopra, sinistra, sotto, destra
  
  // Posizioni per i dadi 2D
  const dicePositions = [
    "top-1/2 left-10 -translate-y-1/2",  // sinistra
    "top-1/2 right-10 -translate-y-1/2", // destra
    "top-10 left-1/2 -translate-x-1/2",  // sopra
    "bottom-10 left-1/2 -translate-x-1/2" // sotto
  ];
  
  // Testi per i vari stati del gioco
  const instructionTexts = [
    "Click on the D20 dice in the correct order to unlock the full experience.",
    "Great job! Keep going...",
    "You're doing well!",
    "Almost there!",
    "Puzzle completed! Loading the site..."
  ];
  
  // Funzione per saltare il gioco e andare direttamente al sito
  const handleSkip = useCallback(() => {
    onComplete();
  }, [onComplete]);
  
  // Funzione per gestire il click su un dado
  const handleDiceClick = useCallback((index: number) => {
    // Ignora se il gioco è completato
    if (gameCompleted) return;
    
    // Imposta il dado corrente come attivo
    setCurrentDice(index);
    
    // Controlla se la selezione è corretta
    const expectedIndex = correctSequence[completedDice.length];
    
    if (index === expectedIndex) {
      // Aggiungi ai dadi completati
      const newCompleted = [...completedDice, index];
      setCompletedDice(newCompleted);
      
      // Controlla se la sequenza è completata
      if (newCompleted.length === correctSequence.length) {
        setGameCompleted(true);
        
        // Attiva la transizione dopo un breve ritardo
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    } else {
      // Reset se la selezione è sbagliata
      setCompletedDice([]);
      
      // Feedback visivo (effetto shake)
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
    }
  }, [gameCompleted, completedDice, correctSequence, onComplete]);
  
  return (
    <div className="fixed inset-0 z-50 bg-[var(--purple-deep)]">
      {!isGameStarted ? (
        // Schermata iniziale
        <motion.div 
          className="h-full flex flex-col items-center justify-center text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading mb-6 text-white drop-shadow-lg">
            BENVENUTO IN XP-L4B
          </h1>
          
          <p className="text-sm text-gray-400 mt-4">Can&apos;t solve it? <button onClick={handleSkip} className="text-blue-400 hover:text-blue-300 underline">Skip to corporate mode</button></p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          We&apos;re glad you&apos;re here! Let&apos;s make this fun. Click on the D20 dice in the correct order to unlock the full experience. Or, if you prefer, you can skip to the corporate mode.
        </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={() => setIsGameStarted(true)}
              className="bg-[var(--aqua-green)] hover:bg-[var(--blue)] text-[var(--purple-deep)] font-heading py-3 px-8 rounded-full transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              INIZIA L'ESPERIENZA
            </motion.button>
            
            <motion.button 
              onClick={onComplete}
              className="bg-transparent hover:bg-[var(--purple-light)] text-white border-2 border-[var(--purple-light)] font-heading py-3 px-8 rounded-full transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MODALITÀ CORPORATE
            </motion.button>
          </div>
        </motion.div>
      ) : (
        // Game UI con animazioni 2D invece di 3D
        <div className="h-full relative bg-[var(--purple-deep)] overflow-hidden">
          {/* Sfondo con particelle animate */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[var(--aqua-green)]"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* D20 gigante rotante sullo sfondo */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 opacity-10 pointer-events-none"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 95,30 95,70 50,95 5,70 5,30" 
                fill="#ffffff" 
                stroke="#65BFB0" 
                strokeWidth="1"
              />
            </svg>
          </motion.div>
          
          {/* Contenitore per i dadi interattivi */}
          <div className="absolute inset-0">
            {/* Dadi 2D interattivi */}
            {dicePositions.map((position, index) => (
              <D20Tile
                key={index}
                position={position}
                onClick={() => handleDiceClick(index)}
                isActive={currentDice === index}
                isCompleted={completedDice.includes(index)}
              />
            ))}
            
            {/* Testo con istruzioni */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: shakeError ? [-10, 10, -10, 10, 0] : 0 
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                x: { duration: 0.5 }
              }}
            >
              <div className="bg-[var(--purple-deep)] bg-opacity-70 backdrop-blur-sm p-4 rounded-xl">
                <h2 className="text-white font-heading text-xl mb-2">
                  {instructionTexts[completedDice.length]}
                </h2>
                <div className="flex justify-center space-x-2 mt-3">
                  {correctSequence.map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 rounded-full ${i < completedDice.length ? 'bg-[var(--aqua-green)]' : 'bg-white bg-opacity-30'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Pulsante per tornare alla modalità corporate */}
          <div className="absolute top-5 right-5">
            <motion.button 
              onClick={onComplete}
              className="bg-transparent hover:bg-[var(--purple-light)] text-white border border-[var(--purple-light)] font-heading py-2 px-4 rounded-full transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SALTA
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEntrance;
