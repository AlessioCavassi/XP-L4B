"use client";

import React from "react";
import { motion } from 'framer-motion';

const Card = ({
  className,
  image,
  children,
  onClick,
}: {
  className?: string;
  image?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`w-full max-w-[350px] cursor-pointer h-[400px] overflow-hidden bg-white/5 rounded-2xl shadow-[0_0_15px_RGBA(101,191,176,0.1)] border border-[var(--aqua-green)]/20 backdrop-blur-sm ${className}`}
    >
      {image && (
        <div className="relative h-60 rounded-t-xl overflow-hidden w-full">
          <img
            src={image}
            alt="card"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      {children && (
        <div className="p-6 flex flex-col gap-y-3">
          {children}
        </div>
      )}
    </motion.div>
  );
};

const TopicCardsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch">
        {/* Card per HR */}
        <div className="flex-1 max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--aqua-green)] mb-6 text-center">PER HR</h3>
          <Card 
            image="/images/hr-image.jpg"
            onClick={() => window.location.href = '/hr'}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Formazione e Sviluppo</h2>
            <p className="text-gray-300">
              Soluzioni innovative per l'onboarding, la formazione continua e lo sviluppo delle competenze del team.
            </p>
          </Card>
        </div>

        {/* Card per MARKETING */}
        <div className="flex-1 max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--aqua-green)] mb-6 text-center">PER MARKETING</h3>
          <Card 
            image="/images/marketing-image.jpg"
            onClick={() => window.location.href = '/marketing'}
          >
            <h2 className="text-xl font-semibold text-white mb-2">Engagement e Campagne</h2>
            <p className="text-gray-300">
              Crea esperienze memorabili che catturano l'attenzione del pubblico e generano lead di qualità.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopicCardsSection;