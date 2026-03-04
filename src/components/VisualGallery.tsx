import { motion } from 'motion/react';

const GalleryItem = ({ src, localSrc, title, subtitle, className = "" }: { src: string, localSrc?: string, title: string, subtitle?: string, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative group overflow-hidden rounded-2xl ${className}`}
  >
    <img 
      src={localSrc || src} 
      alt={title} 
      loading="lazy"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      onError={(e) => {
        if (localSrc) {
           e.currentTarget.src = src;
        }
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-xl font-serif font-medium">{title}</h3>
      {subtitle && <p className="text-sm text-white/80 mt-1">{subtitle}</p>}
    </div>
  </motion.div>
);

export function VisualGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. A Chegada */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <span className="text-[#2E5C46] font-medium tracking-widest uppercase text-xs md:text-sm">Primeiras Impressões</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">A Chegada</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[50vh] md:h-[60vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative bg-gray-200 group"
          >
            <img 
              src="/portaria.png" 
              alt="Portaria 24h - Manhattan" 
              className="w-full h-full object-cover absolute inset-0 z-10"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('png')) {
                  target.src = "/portaria.jpg";
                } else {
                  target.src = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop";
                }
              }}
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-xl z-40 shadow-lg">
              <p className="font-serif text-xl text-gray-900">Portaria 24h</p>
              <p className="text-sm text-gray-600">Segurança e sofisticação desde o primeiro momento.</p>
            </div>
          </motion.div>
        </div>

        {/* 2. Lazer Club & Social */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <span className="text-[#2E5C46] font-medium tracking-widest uppercase text-xs md:text-sm">Exclusividade</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Lazer Club & Social</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Salão de Festas */}
             <GalleryItem 
              localSrc="/fachada-externa.jfif"
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" 
              title="Salão de Festas" 
              subtitle="Fachada Externa"
              className="h-64 md:h-80"
            />
            <GalleryItem 
              localSrc="/salao-de-festa.jfif"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" 
              title="Salão de Festas" 
              subtitle="Interno (Decoração)"
              className="h-64 md:h-80"
            />
            <GalleryItem 
              localSrc="/interno.jfif"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" 
              title="Salão de Festas" 
              subtitle="Interno"
              className="h-64 md:h-80"
            />

            {/* Espaço Gourmet */}
            <GalleryItem 
              localSrc="/churrasqueira-02.jfif"
              src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop" 
              title="Churrasqueira 02" 
              subtitle="Espaço Gourmet"
              className="h-64 md:h-80"
            />

            {/* Academia (3 fotos) */}
            <GalleryItem 
              localSrc="/academia-01.jfif"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
              title="Academia" 
              subtitle="Equipamentos de Ponta"
              className="h-64 md:h-80"
            />

            <GalleryItem 
              localSrc="/academia-03.jfif"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
              title="Academia" 
              subtitle="Vista Interna"
              className="h-64 md:h-80"
            />

            {/* Kids & Library */}
            <GalleryItem 
              localSrc="/brinquedoteca.jfif"
              src="https://images.unsplash.com/photo-1596464716127-f9a8759fa069?q=80&w=800&auto=format&fit=crop" 
              title="Biblioteca" 
              subtitle="Espaço de Leitura e Estudos"
              className="h-64 md:h-80"
            />
            <GalleryItem 
              localSrc="/playground.jfif"
              src="https://images.unsplash.com/photo-1505693416388-b034680950ed?q=80&w=800&auto=format&fit=crop" 
              title="Playground" 
              subtitle="Diversão ao ar livre"
              className="h-64 md:h-80"
            />
          </div>
        </div>

        {/* 3. Conexão Natureza */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
             <span className="text-[#2E5C46] font-medium tracking-widest uppercase text-xs md:text-sm">Bem-estar</span>
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Conexão com a Natureza</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="h-[400px] rounded-2xl overflow-hidden relative group"
             >
               <img 
                 src="/bosque.jpeg" 
                 alt="Bosque de Araucárias" 
                 loading="lazy"
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop";
                 }}
               />
               <div className="absolute bottom-8 left-8 text-white z-10">
                 <h3 className="text-2xl font-serif">Bosque de Araucárias</h3>
                 <p className="opacity-90">Preservação nativa integrada ao seu quintal.</p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="h-[400px] rounded-2xl overflow-hidden relative group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=800&auto=format&fit=crop" 
                  alt="Infraestrutura Subterrânea" 
                  loading="lazy"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <h3 className="text-2xl font-serif">Infraestrutura Subterrânea</h3>
                  <p className="opacity-90">Visual limpo, sem fios nos postes.</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
