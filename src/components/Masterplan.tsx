import { Download, Map } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export function Masterplan() {
  return (
    <section className="py-16 md:py-24 bg-stone-50" id="masterplan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6"
          >
            Escolha o seu espaço no Manhattan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Terrenos amplos de 194m² a 632m². Localização estratégica para garantir sua privacidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Map Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] group"
          >
            {/* 
              IMAGEM DO MASTERPLAN
              Para usar a imagem anexada:
              1. Renomeie o arquivo para "masterplan.png" (ou .jpg)
              2. Coloque na pasta "public"
            */}
            <img 
              src="/masterplan.png?v=2" 
              alt="Mapa de Implantação - Manhattan" 
              className="w-full h-full object-contain bg-white transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('png?v=2')) {
                  target.src = "/masterplan.jpg?v=2";
                } else {
                  // Fallback se não encontrar nem png nem jpg
                  target.src = "https://picsum.photos/seed/masterplan/800/600";
                  target.style.objectFit = "cover";
                }
              }}
            />
            
            {/* MENSAGEM DE AJUDA REMOVIDA */}


            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono text-gray-600 shadow-sm z-20">
              49 Lotes Exclusivos
            </div>
          </motion.div>

          {/* Info & Download */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Destaques do Loteamento</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#2E5C46]/10 p-2 rounded-full mr-4 mt-1">
                    <Map size={18} className="text-[#2E5C46]" />
                  </div>
                  <div>
                    <span className="block font-medium text-gray-900">49 Lotes Exclusivos</span>
                    <span className="text-gray-500 text-sm">Baixa densidade para maior privacidade.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2E5C46]/10 p-2 rounded-full mr-4 mt-1">
                    <Map size={18} className="text-[#2E5C46]" />
                  </div>
                  <div>
                    <span className="block font-medium text-gray-900">Metragens Variadas</span>
                    <span className="text-gray-500 text-sm">Opções que se adaptam ao seu projeto de vida.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2E5C46]/10 p-2 rounded-full mr-4 mt-1">
                    <Map size={18} className="text-[#2E5C46]" />
                  </div>
                  <div>
                    <span className="block font-medium text-gray-900">Topografia Privilegiada</span>
                    <span className="text-gray-500 text-sm">Lotes planos e com vista definida.</span>
                  </div>
                </li>
              </ul>
              
              <div className="pt-4 border-t border-gray-100">
                <a href="/tabela-de-lotes.pdf" download="Tabela de Lotes - Manhattan.pdf" className="inline-block w-full md:w-auto">
                  <Button className="w-full" icon={<Download size={20} />}>
                    BAIXAR TABELA DE LOTES (PDF)
                  </Button>
                </a>
                <p className="mt-3 text-xs text-center md:text-left text-gray-400">
                  PDF atualizado com disponibilidade e valores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
