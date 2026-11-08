import React from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ConversionCta: React.FC = () => {
  return (
    <section
      id="contato"
      className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Golden Aura in Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury CTA Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] via-[#111111] to-[#0a0a0a] border border-[#D4AF37]/35 p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Subtle Crown / Logo Watermark at Top */}
          <div className="inline-flex flex-col items-center space-y-3">
            <img
              src={OFFICIAL_LINKS.logoCropped}
              alt="Logo PANTA JOIAS"
              className="w-28 sm:w-36 lg:w-44 h-auto object-contain filter drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = OFFICIAL_LINKS.logo;
              }}
            />
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atendimento Personalizado</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Strong Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F2EB] tracking-[0.05em] leading-[1.2] max-w-2xl mx-auto [text-wrap:balance]">
            ENCONTRE A PEÇA QUE <br className="hidden sm:inline" />
            <span className="text-gold-gradient">REPRESENTA VOCÊ.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F5F2EB]/80 max-w-xl mx-auto font-light leading-relaxed">
            Descubra os modelos disponíveis e escolha os acessórios que combinam com sua personalidade.
          </p>

          {/* Super Prominent Large Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink('Olá! Conheci a PANTA JOIAS pelo site e gostaria de conhecer os modelos disponíveis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl bg-gold-btn text-[#080808] font-extrabold text-sm sm:text-base uppercase tracking-[0.18em] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.99] shadow-2xl group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>QUERO CONHECER A COLEÇÃO</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Confidence Badges */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#F5F2EB]/60">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Garantia de banho em Ouro 18K</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37] font-serif font-bold">100%</span>
              <span>Atendimento humanizado e ágil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37] font-semibold">BR</span>
              <span>Entregamos em qualquer cidade do Brasil</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
