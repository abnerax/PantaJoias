import React, { useEffect } from 'react';
import { Product, getWhatsAppLink } from '../data/pantaData';
import { X, MessageCircle, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#111111] border border-[#D4AF37]/35 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#080808]/80 text-[#F5F2EB]/80 hover:text-[#D4AF37] border border-[#D4AF37]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Container */}
          <div className="relative bg-[#080808] flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[380px] sm:max-h-[460px] object-cover rounded-xl shadow-lg border border-white/5"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-[#080808]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#D4AF37]/30 text-[11px] text-[#F3D58A] uppercase tracking-wider font-semibold">
              {product.banho}
            </div>
          </div>

          {/* Details & Consult Action */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>{product.code}</span>
              </div>

              <h3
                id="modal-product-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EB] tracking-wide"
              >
                {product.title}
              </h3>

              <div className="h-[1px] w-16 bg-[#D4AF37]" />

              <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="pt-2 space-y-2 text-xs text-[#F5F2EB]/65">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Banho de Ouro 18K com acabamento premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Envios com rastreio para todo o Brasil</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-xs text-[#F3D58A] font-medium tracking-wide">
                Consulte valor e disponibilidade diretamente pelo WhatsApp oficial:
              </p>
              
              <a
                href={getWhatsAppLink(product.consultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gold-btn text-[#080808] font-bold text-xs uppercase tracking-[0.16em] hover:brightness-110 shadow-lg transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CONSULTAR DISPONIBILIDADE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
