import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PRODUCTS, Product, getWhatsAppLink } from '../data/pantaData';
import { ProductModal } from './ProductModal';
import { ChevronLeft, ChevronRight, MessageCircle, Eye, Sparkles } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Number of items to display per view based on container width
  const totalItems = PRODUCTS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Touch Swipe Handling for Mobile
  const minSwipeDistance = 50;

  const onTouchStartHandler = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation when focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      id="colecao"
      className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Golden Aura Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vitrine Exclusiva</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-[#F5F2EB] leading-tight">
              ENCONTRE <span className="text-gold-gradient">SEU ESTILO.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2EB]/75 font-light">
              Conheça alguns detalhes da coleção PANTA JOIAS. Peças criadas para homens que prezam por presença e sofisticação.
            </p>
          </div>

          {/* Navigation Arrows for Desktop & Tablet */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Produto anterior"
              className="p-3 rounded-full bg-[#111111] border border-[#D4AF37]/30 text-[#F5F2EB] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#181818] active:scale-95 transition-all focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo produto"
              className="p-3 rounded-full bg-[#111111] border border-[#D4AF37]/30 text-[#F5F2EB] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#181818] active:scale-95 transition-all focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          ref={carouselRef}
          onTouchStart={onTouchStartHandler}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={onTouchEndHandler}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        >
          {/* Track with responsive grid & slide offset */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* We map items as slides for clean mobile single focus while allowing multi-card desktop layout */}
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="w-full shrink-0 px-2 sm:px-3 md:w-1/2 lg:w-1/3"
                style={{
                  transform: `translateX(${currentIndex * 100}%)`, // Reset baseline so we control via translate
                  display: 'none', // Handled by standard carousel below
                }}
              />
            ))}
          </div>

          {/* Clean Responsive Multi-Card Carousel Window */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)`,
              }}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                >
                  <div className="group h-full flex flex-col justify-between bg-[#111111] rounded-2xl border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] overflow-hidden">
                    
                    {/* Product Image Area */}
                    <div className="relative bg-[#0d0d0d] aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Golden overlay tag */}
                      <div className="absolute top-3 left-3 bg-[#080808]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#D4AF37]/35 text-[10px] font-semibold tracking-wider uppercase text-[#F3D58A]">
                        {product.banho}
                      </div>

                      {/* Quick view button on hover */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="absolute bottom-3 right-3 p-2.5 rounded-lg bg-[#080808]/85 text-[#F5F2EB] hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 backdrop-blur-sm transition-all opacity-90 sm:opacity-0 group-hover:opacity-100"
                        title="Ver em detalhes"
                        aria-label={`Ver detalhes de ${product.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Product Content Details */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#D4AF37]">
                          <span>{product.category}</span>
                          <span className="text-[#F5F2EB]/40">{product.code}</span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F2EB] tracking-wide group-hover:text-[#F3D58A] transition-colors leading-snug">
                          {product.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed font-light line-clamp-3">
                          {product.description}
                        </p>
                      </div>

                      {/* Action Button: Consult WhatsApp */}
                      <div className="pt-2">
                        <a
                          href={getWhatsAppLink(product.consultMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#161616] text-[#F3D58A] hover:bg-gold-btn hover:text-[#080808] border border-[#D4AF37]/35 hover:border-transparent font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Consultar no WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Position Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {PRODUCTS.map((prod, index) => (
            <button
              key={prod.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentIndex === index
                  ? 'w-8 h-2 bg-[#D4AF37]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para produto ${index + 1}: ${prod.title}`}
            />
          ))}
        </div>

        {/* Instructions helper for mobile swipe */}
        <p className="text-center text-[11px] uppercase tracking-widest text-[#F5F2EB]/40 mt-4 sm:hidden">
          ← Deslize para navegar entre os modelos →
        </p>

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
