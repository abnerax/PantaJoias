import React from 'react';
import { Futuristic3DIcon } from './Futuristic3DIcon';
import { Sparkles } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      type: 'masculine' as const,
      floatClass: 'animate-float-1',
      number: '01',
      title: 'IDENTIDADE MASCULINA',
      description: 'Peças e composições pensadas para valorizar o estilo masculino.',
      detail: 'Design com atitude e presença',
    },
    {
      type: 'gold18k' as const,
      floatClass: 'animate-float-2',
      number: '02',
      title: 'BANHO DE OURO 18K',
      description: 'Semijoias com banho de ouro 18K, conforme a proposta comercial da marca.',
      detail: 'Acabamento e brilho duradouros',
    },
    {
      type: 'since2021' as const,
      floatClass: 'animate-float-3',
      number: '03',
      title: 'DESDE 2021',
      description: 'Uma marca com presença no segmento desde 2021.',
      detail: 'Solidez e confiança no segmento',
    },
    {
      type: 'shipping' as const,
      floatClass: 'animate-float-4',
      number: '04',
      title: 'ENVIO PARA TODO O BRASIL',
      description: 'A PANTA JOIAS leva sua coleção até você, com envios para todo o território nacional.',
      detail: 'Entrega segura com código de rastreio',
    },
  ];

  return (
    <section
      id="diferenciais"
      className="relative py-24 sm:py-32 bg-[#0c0c0c] border-y border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#8F6A1C]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excelência & Confiança</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#F5F2EB]">
            POR QUE ESCOLHER <span className="text-gold-gradient">PANTA JOIAS?</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid with 3D Floating Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {differentials.map((item) => (
            <div
              key={item.number}
              className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141414] via-[#111111] to-[#0d0d0d] border border-[#D4AF37]/20 hover:border-[#D4AF37]/65 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(212,175,55,0.18)] flex flex-col justify-between"
            >
              {/* Top Row: Number & Status Indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-xs text-[#D4AF37]/70 font-bold tracking-widest bg-[#080808]/80 px-2.5 py-1 rounded-md border border-[#D4AF37]/25">
                  {item.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                  Padrão 18K
                </span>
              </div>

              {/* Central 3D Floating Futuristic Icon Stage */}
              <div className="py-5 flex items-center justify-center">
                <Futuristic3DIcon
                  type={item.type}
                  floatClass={item.floatClass}
                  className="scale-105 sm:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2.5 text-center mt-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5F2EB] tracking-wide group-hover:text-[#F3D58A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5F2EB]/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Micro-Detail */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D4AF37]/85">
                <span>{item.detail}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:shadow-[0_0_8px_#D4AF37] transition-all" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
