import React, { useState } from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { Crown, Sparkles, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="apresentacao"
      className="relative py-24 sm:py-32 bg-[#0c0c0c] border-y border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Editorial Image Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow & Border */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-[#8F6A1C]/20 rounded-2xl blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#141414] shadow-2xl">
                {!imgLoaded && !imgError && (
                  <div className="w-full aspect-[4/5] bg-[#161616] animate-pulse flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37]/60">PANTA JOIAS</span>
                  </div>
                )}

                {imgError ? (
                  <div className="w-full aspect-[4/5] bg-[#141414] p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <Crown className="w-12 h-12 text-[#D4AF37] stroke-1" />
                    <h4 className="font-serif text-lg text-[#F3D58A]">Identidade & Elegância</h4>
                    <p className="text-xs text-[#F5F2EB]/70">Semijoias banhadas a Ouro 18K com presença marcante.</p>
                  </div>
                ) : (
                  <img
                    src={OFFICIAL_LINKS.brandSupportImage}
                    alt="Corrente Dourada — PANTA JOIAS Identidade Masculina"
                    className={`w-full aspect-[4/5] object-cover object-center transition-all duration-700 hover:scale-[1.03] ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                  />
                )}

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Subtitle tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#080808]/85 backdrop-blur-md rounded-lg border border-[#D4AF37]/25 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Presença Masculina</p>
                    <p className="text-xs font-serif text-[#F5F2EB]">Ouro 18K nos Mínimos Detalhes</p>
                  </div>
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              {/* Decorative Accent Plate */}
              <div className="absolute -bottom-4 -right-4 bg-[#111111] border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl shadow-xl hidden sm:flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#F3D58A]">
                  Desde 2021
                </span>
              </div>
            </div>
          </div>

          {/* Text Editorial Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
            
            {/* Editorial Lead In */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>Apresentação da Marca</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#F5F2EB] leading-[1.2] [text-wrap:balance]">
              MAIS QUE ACESSÓRIOS. <br />
              <span className="text-gold-gradient">UMA IDENTIDADE.</span>
            </h2>

            {/* Editorial Paragraphs (Faithful to prompt) */}
            <div className="space-y-4 text-base sm:text-lg text-[#F5F2EB]/85 font-light leading-relaxed">
              <p>
                A <strong className="font-semibold text-[#F3D58A]">PANTA JOIAS</strong> nasceu para homens que entendem que os detalhes fazem a diferença. Desde 2021, buscamos representar estilo, personalidade e elegância por meio de semijoias masculinas que valorizam cada composição.
              </p>
              <p>
                Acreditamos que um acessório não é apenas um complemento. É uma expressão de identidade, presença e atitude.
              </p>
            </div>

            {/* Signature Quote */}
            <div className="py-4 border-y border-[#D4AF37]/20 flex items-center justify-between">
              <blockquote className="font-serif text-lg sm:text-xl text-[#F3D58A] tracking-wider italic">
                "PANTA JOIAS — Sua essência, seu estilo."
              </blockquote>
            </div>

            {/* Direct Commercial Route */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá! Li a história da PANTA JOIAS e gostaria de conhecer as peças exclusivas da marca.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#111111] text-[#F3D58A] font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] border border-[#D4AF37]/40 hover:bg-gold-btn hover:text-[#080808] hover:border-transparent transition-all duration-300 shadow-sm group"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080808]" />
                <span>Conversar com a Equipe no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
