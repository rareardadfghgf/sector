import { motion } from 'motion/react';

const constructionImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", title: "Vista Geral do Terreno", legend: "Fev/2026" },
  { id: 2, src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=800&auto=format&fit=crop", title: "Terraplanagem", legend: "Fev/2026" },
  { id: 3, src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", title: "Demarcação de Lotes", legend: "Fev/2026" },
  { id: 4, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop", title: "Infraestrutura Subterrânea", legend: "Fev/2026" },
  { id: 5, src: "https://images.unsplash.com/photo-1584463673574-89c72506b125?q=80&w=800&auto=format&fit=crop", title: "Pavimentação", legend: "Fev/2026" },
  { id: 6, src: "https://images.unsplash.com/photo-1599809275372-b40c7e931627?q=80&w=800&auto=format&fit=crop", title: "Muros de Divisa", legend: "Fev/2026" },
  { id: 7, src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", title: "Portaria em Construção", legend: "Fev/2026" },
  { id: 8, src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop", title: "Áreas de Lazer", legend: "Fev/2026" }
];

export function ConstructionGallery() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Acompanhe o Manhattan ganhando forma
          </h2>
          <p className="text-gray-600">Evolução da Obra - Fevereiro 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {constructionImages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback para placeholder se a imagem não existir
                  e.currentTarget.src = `https://picsum.photos/seed/construction${item.id}/800/600`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-md border border-white/30 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                  {item.legend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
