import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Subtle Callout Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-[#111111]/95 text-[#F5F2EB] text-xs font-medium rounded-full border border-[#D4AF37]/40 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[#F3D58A] font-semibold">Atendimento</span>
          <span className="text-white/60">· Dúvidas & Pedidos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 p-0.5 text-white/50 hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#080808] to-[#1a1a1a] text-[#25D366] border-2 border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        aria-label="Conversar no WhatsApp Oficial da PANTA JOIAS"
      >
        <span className="sr-only">WhatsApp PANTA JOIAS</span>
        {/* Subtle Ping Animation */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#25D366] fill-[#25D366]/20 group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
