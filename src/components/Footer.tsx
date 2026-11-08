import React from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, Instagram, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] text-[#F5F2EB] border-t border-[#D4AF37]/20 pt-16 pb-12 overflow-hidden">
      
      {/* Golden Hairline Ornament */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info & Official Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_LINKS.logoCropped}
                alt="Logo Oficial PANTA JOIAS"
                className="w-20 sm:w-24 h-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = OFFICIAL_LINKS.logo;
                }}
              />
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#F5F2EB]">
                  PANTA JOIAS
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]">
                  Desde 2021 · Semijoias Masculinas
                </p>
              </div>
            </div>

            <p className="font-serif text-sm text-[#F3D58A] italic tracking-wide">
              "Elegância que representa você."
            </p>

            <p className="text-xs text-[#F5F2EB]/70 leading-relaxed font-light max-w-sm">
              Mais do que acessórios, a PANTA JOIAS representa estilo, identidade e personalidade em cada detalhe. Semijoias masculinas com banho nobre de Ouro 18K.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37]/80 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Envios garantidos para todo o Brasil</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F2EB]/75 uppercase tracking-wider">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
              </li>
              <li>
                <a href="#apresentacao" className="hover:text-[#D4AF37] transition-colors">A Marca</a>
              </li>
              <li>
                <a href="#colecao" className="hover:text-[#D4AF37] transition-colors">Coleção Ouro 18K</a>
              </li>
              <li>
                <a href="#estilo" className="hover:text-[#D4AF37] transition-colors">Estilo & Atitude</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">Diferenciais</a>
              </li>
            </ul>
          </div>

          {/* Channels & Official Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
              Canais Oficiais
            </h4>
            <p className="text-xs text-[#F5F2EB]/70">
              Converse diretamente com nossa equipe ou acompanhe nossos lançamentos exclusivos no Instagram:
            </p>
            
            <div className="space-y-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#111111] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#161616] text-xs text-[#F5F2EB] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium tracking-wide">WhatsApp Oficial</span>
                </div>
                <span className="text-[11px] text-[#D4AF37] group-hover:underline">Iniciar conversa</span>
              </a>

              <a
                href={OFFICIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#111111] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#161616] text-xs text-[#F5F2EB] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-medium tracking-wide">Instagram Oficial</span>
                </div>
                <span className="text-[11px] text-[#D4AF37] group-hover:underline">@pantajoias</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Signature & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-serif text-xs sm:text-sm text-[#F3D58A] tracking-[0.1em]">
            PANTA JOIAS — Sua essência, seu estilo.
          </p>

          <p className="text-[11px] text-[#F5F2EB]/50 flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} PANTA JOIAS. Semijoias masculinas | Ouro 18K.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
