/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Masterplan } from './components/Masterplan';
import { Differentiators } from './components/Differentiators';
import { VisualGallery } from './components/VisualGallery';
import { Location } from './components/Location';
import { CTASection } from './components/CTASection';
import { ConstructionGallery } from './components/ConstructionGallery';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2E5C46] selection:text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* 
              IMAGEM DA PORTARIA NO HERO
              Prioridade: portaria.jpg (local) -> Unsplash (fallback)
            */}
            <img 
              src="/task_01kjwj9myrev38b98fqhx7xc2k_1772632774_img_0.webp" 
              alt="Manhattan Hero - Portal" 
              className="w-full h-full object-cover absolute inset-0 z-10"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-20" />
          </div>
          
          <div className="relative z-40 text-center text-white px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium mb-4 md:mb-6 tracking-tight drop-shadow-lg leading-tight">
                Manhattan
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg sm:text-xl md:text-3xl font-light tracking-wide opacity-95 drop-shadow-md max-w-2xl mx-auto">
                Um novo conceito de viver bem em São José dos Pinhais. <br className="hidden md:block" />
                <span className="text-base md:text-xl mt-2 block opacity-90">Exclusividade, segurança e natureza em um só lugar.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 md:mt-12"
            >
              <div className="w-16 md:w-24 h-1 bg-white/80 mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        <Masterplan />
        <Differentiators />
        <VisualGallery />
        <Location />
        <CTASection />
        <ConstructionGallery />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
