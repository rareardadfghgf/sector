import { MapPin, Clock } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-serif mb-4">Localização Privilegiada</h2>
              <p className="text-stone-400 text-lg">
                Rua Rafael Puchetti, 702. O equilíbrio perfeito entre a tranquilidade de um refúgio e a conveniência da cidade.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#2E5C46] transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-2xl font-serif">5 min</span>
                  <span className="text-stone-400 text-sm uppercase tracking-wider">Do Shopping São José</span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#2E5C46] transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-2xl font-serif">8 min</span>
                  <span className="text-stone-400 text-sm uppercase tracking-wider">Do Aeroporto Internacional</span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#2E5C46] transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-2xl font-serif">15 min</span>
                  <span className="text-stone-400 text-sm uppercase tracking-wider">De Curitiba</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Widget */}
          <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.373468783478!2d-49.19658592393846!3d-25.50927897751187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf01234567890%3A0xabcdef1234567890!2sR.%20Rafael%20Puchetti%2C%20702%20-%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1709300000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Manhattan"
            ></iframe>
            
            <div className="absolute bottom-4 left-4 bg-[#2E5C46] text-white px-4 py-2 rounded-lg flex items-center shadow-lg">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm font-medium">Rua Rafael Puchetti, 702</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
