import React, { useState, useEffect } from 'react';
import { OFFICIAL_LINKS, getWhatsAppLink } from '../data/pantaData';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Marca', href: '#apresentacao' },
    { label: 'Coleção', href: '#colecao' },
    { label: 'Estilo', href: '#estilo' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Official Crown Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="PANTA JOIAS - Início"
          >
            <img
              src={OFFICIAL_LINKS.logo}
              alt="Logo Oficial PANTA JOIAS"
              className="h-12 sm:h-14 lg:h-16 w-auto max-w-[130px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.2em] text-[#F5F2EB] group-hover:text-[#F3D58A] transition-colors leading-none">
                PANTA JOIAS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium hidden sm:block mt-1">
                Ouro 18K · Desde 2021
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EB]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-[#D4AF37] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111111] text-[#F3D58A] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080808] transition-all duration-300 shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#080808]" />
              <span>Atendimento WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111111] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#080808] transition-colors"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F2EB] hover:text-[#D4AF37] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c]/98 border-b border-[#D4AF37]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-[#F5F2EB]/90 hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gold-btn text-[#080808] font-bold text-xs uppercase tracking-widest shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
