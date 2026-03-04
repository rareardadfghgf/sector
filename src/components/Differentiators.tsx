import { Zap, Trees, Package, Diamond } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#2E5C46]" />,
    title: "Fiação 100% Subterrânea",
    description: "Estética impecável e segurança. Sem fios aéreos, valorizando a arquitetura das casas e a vista do céu."
  },
  {
    icon: <Trees className="w-8 h-8 text-[#2E5C46]" />,
    title: "Pulmão Verde Privativo",
    description: "Preservação permanente de araucárias e mata nativa dentro do condomínio para maior conforto térmico e bem-estar."
  },
  {
    icon: <Package className="w-8 h-8 text-[#2E5C46]" />,
    title: "Conveniência Inteligente",
    description: "Portaria 24h com monitoramento e Smart Lockers para receber encomendas e delivery com total segurança."
  },
  {
    icon: <Diamond className="w-8 h-8 text-[#2E5C46]" />,
    title: "Exclusividade Garantida",
    description: "Baixa densidade com apenas 49 unidades e padrão construtivo mínimo de 140m², assegurando a valorização do patrimônio."
  }
];

export function Differentiators() {
  return (
    <section className="py-16 md:py-20 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#2E5C46] font-medium tracking-widest uppercase text-xs md:text-sm">O Padrão Manhattan</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Diferenciais Exclusivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-[#2E5C46]/5 rounded-full group-hover:bg-[#2E5C46]/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
