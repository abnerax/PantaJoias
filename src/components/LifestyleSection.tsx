import React, { useState } from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, Sparkles, Compass } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section
      id="estilo"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-[#080808] overflow-hidden"
    >
      {/* Background Photography Container */}
      <div className="absolute inset-0 z-0">
        {!error ? (
          <img
            src={OFFICIAL_LINKS.lifestyleImage}
            alt="Lifestyle Masculino ao Pôr do Sol — PANTA JOIAS"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${
              loaded ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            }`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#111111]" />
        )}

        {/* Sophisticated Dark and Gold Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          
          {/* Concept Kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
            <Compass className="w-4 h-4" />
            <span>Estilo & Personalidade</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F2EB] tracking-[0.06em] leading-[1.15] [text-wrap:balance]">
            SEU ESTILO. <br />
            <span className="text-gold-gradient">SUAS REGRAS.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-[#F5F2EB]/90 font-light leading-relaxed [text-wrap:balance]">
            Cada detalhe conta uma história. A <strong className="font-medium text-[#F3D58A]">PANTA JOIAS</strong> acredita que o verdadeiro estilo está na maneira como você se expressa.
          </p>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37] pt-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Presença · Atitude · Elegância</span>
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <a
              href={getWhatsAppLink('Olá! Me identifiquei com o estilo da PANTA JOIAS e gostaria de escolher uma peça.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gold-btn text-[#080808] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all group"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>MONTAR MEU VISUAL</span>
              <Sparkles className="w-4 h-4 opacity-75 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
