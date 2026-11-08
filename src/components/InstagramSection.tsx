import React from 'react';
import { OFFICIAL_LINKS, INSTAGRAM_HIGHLIGHTS } from '../data/pantaData';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="relative py-24 sm:py-32 bg-[#0c0c0c] border-t border-[#D4AF37]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <Instagram className="w-4 h-4" />
              <span>{OFFICIAL_LINKS.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#F5F2EB] leading-tight">
              ACOMPANHE A <span className="text-gold-gradient">PANTA JOIAS.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2EB]/75 font-light">
              Conheça nossas novidades, acompanhe as coleções e descubra novas formas de expressar seu estilo.
            </p>
          </div>

          {/* Direct Instagram Profile Button */}
          <div className="self-start md:self-end">
            <a
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#141414] text-[#F3D58A] hover:bg-gold-btn hover:text-[#080808] border border-[#D4AF37]/40 hover:border-transparent font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md group"
            >
              <Instagram className="w-4 h-4" />
              <span>SEGUIR NO INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Authentic Instagram Visual Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <a
              key={item.id}
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#161616] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 block"
              aria-label={`Ver publicação: ${item.label} no Instagram`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark/Gold Overlay */}
              <div className="absolute inset-0 bg-[#080808]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center space-y-1.5 backdrop-blur-[2px]">
                <Instagram className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-wider text-[#F5F2EB] font-medium line-clamp-2">
                  {item.label}
                </span>
                <span className="text-[9px] text-[#D4AF37] font-semibold">@pantajoias</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-[#F5F2EB]/50 mt-8 tracking-wider">
          Feed oficial no Instagram com lançamentos semanais e composições exclusivas.
        </p>

      </div>
    </section>
  );
};
