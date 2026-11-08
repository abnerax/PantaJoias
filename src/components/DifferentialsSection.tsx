import React from 'react';
import { UserCheck, Award, Clock, Truck } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: UserCheck,
      number: '01',
      title: 'IDENTIDADE MASCULINA',
      description: 'Peças e composições pensadas para valorizar o estilo masculino.',
      detail: 'Design com atitude e presença',
    },
    {
      icon: Award,
      number: '02',
      title: 'BANHO DE OURO 18K',
      description: 'Semijoias com banho de ouro 18K, conforme a proposta comercial da marca.',
      detail: 'Acabamento e brilho duradouros',
    },
    {
      icon: Clock,
      number: '03',
      title: 'DESDE 2021',
      description: 'Uma marca com presença no segmento desde 2021.',
      detail: 'Solidez e confiança no segmento',
    },
    {
      icon: Truck,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
            Excelência & Confiança
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#F5F2EB]">
            POR QUE ESCOLHER <span className="text-gold-gradient">PANTA JOIAS?</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-7 rounded-2xl bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(212,175,55,0.12)] flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#080808] border border-[#D4AF37]/30 text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#080808] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="font-serif text-xs text-[#D4AF37]/60 font-semibold tracking-widest">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5F2EB] tracking-wide group-hover:text-[#F3D58A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F2EB]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle detail */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D4AF37]/80">
                  <span>{item.detail}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
