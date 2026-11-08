import React, { useState } from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, Instagram, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#080808] pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle radial ambient golden glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#8F6A1C]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative luxury hairline frame */}
      <div className="absolute inset-x-6 top-24 bottom-12 border border-[#D4AF37]/10 pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Header, Logo, Title, Pitch & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7 order-1 lg:order-1">
            
            {/* Top Official Logo — Large & Highly Visible on Mobile and Desktop */}
            <div className="inline-flex flex-col items-center lg:items-start space-y-3 w-full">
              <div className="relative group">
                <img
                  src={OFFICIAL_LINKS.logoCropped}
                  alt="PANTA JOIAS - Logo Oficial"
                  className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto max-w-[85vw] object-contain filter drop-shadow-[0_8px_30px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = OFFICIAL_LINKS.logo;
                  }}
                />
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium pt-1">
                <span>Semijoias Masculinas</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Banho de Ouro 18K</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Desde 2021</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F2EB] tracking-[0.06em] leading-[1.12] [text-wrap:balance]">
              SEU ESTILO <br className="hidden sm:inline" />
              <span className="text-gold-gradient">MERECE OURO.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#F5F2EB]/80 font-normal leading-relaxed max-w-xl [text-wrap:balance]">
              Semijoias masculinas que expressam personalidade, presença e elegância em cada detalhe.
            </p>

            {/* Brand Philosophy Strip */}
            <div className="inline-flex items-center gap-3 py-2 px-3 sm:px-4 rounded-lg bg-[#111111]/80 border border-[#D4AF37]/20 text-xs sm:text-sm text-[#F3D58A] tracking-wide">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="italic font-light">"Elegância que representa você."</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="text-white/60 text-xs hidden sm:inline">Envio para todo o Brasil</span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              {/* Primary: WhatsApp */}
              <a
                href={getWhatsAppLink('Olá! Conheci a PANTA JOIAS pelo site e gostaria de explorar a coleção disponível.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gold-btn text-[#080808] font-bold text-sm uppercase tracking-[0.16em] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.99] group shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>EXPLORAR COLEÇÃO</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Instagram */}
              <a
                href={OFFICIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#111111] text-[#F5F2EB] font-semibold text-sm uppercase tracking-[0.14em] border border-[#D4AF37]/35 hover:border-[#D4AF37] hover:bg-[#181818] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>CONHEÇA A PANTA JOIAS</span>
              </a>
            </div>

            {/* Trust Micro-Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#F5F2EB]/60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Banho Premium Ouro 18K</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#D4AF37] font-serif font-bold">BR</span>
                <span>Envios com rastreio nacional</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#D4AF37] font-semibold">2021</span>
                <span>Presença consolidada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography (Image 05) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-[420px] lg:max-w-none group">
              
              {/* Golden Ambient Aura Behind Photo */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3D58A]/10 to-[#8F6A1C]/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-[#111111] shadow-2xl">
                {!imageLoaded && !imageError && (
                  <div className="w-full aspect-[4/5] bg-[#141414] animate-pulse flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37]/60">
                      Carregando Editorial...
                    </span>
                  </div>
                )}

                {imageError ? (
                  <div className="w-full aspect-[4/5] bg-[#111111] p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <img
                      src={OFFICIAL_LINKS.logo}
                      alt="Logo PANTA JOIAS"
                      className="h-14 w-auto object-contain opacity-80"
                    />
                    <h3 className="font-serif text-lg text-[#F3D58A]">PANTA JOIAS</h3>
                    <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
                      "Mais que acessórios, representamos estilo, identidade e personalidade em cada detalhe."
                    </p>
                  </div>
                ) : (
                  <img
                    src={OFFICIAL_LINKS.heroImage}
                    alt="Retrato Luxuoso com Corrente Dourada — PANTA JOIAS"
                    className={`w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] object-cover object-center transition-all duration-700 group-hover:scale-[1.02] ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Subtle Bottom Vignette Gradient (keeps face clean, smooths into dark layout) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating Authenticity Tag on Corner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-[#080808]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/30 text-[11px] tracking-wider uppercase text-[#F3D58A] font-medium flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Coleção Oficial 18K</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/70 bg-[#080808]/70 px-2 py-1 rounded backdrop-blur-sm">
                    Editorial
                  </span>
                </div>

              </div>

              {/* Decorative Corner Ornaments */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
