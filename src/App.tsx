/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductShowcase } from './components/ProductShowcase';
import { LifestyleSection } from './components/LifestyleSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ConversionCta } from './components/ConversionCta';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F2EB] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#080808]">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* SEÇÃO 01 — Hero / Capa Principal */}
        <Hero />

        {/* SEÇÃO 02 — Apresentação da Marca */}
        <AboutSection />

        {/* SEÇÃO 03 — Vitrine de Produtos (Carrossel Interativo) */}
        <ProductShowcase />

        {/* SEÇÃO 04 — Estilo e Personalidade */}
        <LifestyleSection />

        {/* SEÇÃO 05 — Diferenciais da Marca */}
        <DifferentialsSection />

        {/* SEÇÃO 06 — Chamada Comercial / Conversão Principal */}
        <ConversionCta />

        {/* SEÇÃO 07 — Instagram PANTA JOIAS */}
        <InstagramSection />
      </main>

      {/* SEÇÃO 08 — Rodapé Oficial */}
      <Footer />

      {/* Floating Fast-Conversion WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
