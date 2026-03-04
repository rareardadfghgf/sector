import { MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export function CTASection() {
  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
          O próximo passo para sua nova vida começa aqui.
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg">
          Venha conhecer pessoalmente o local onde seus sonhos vão criar raízes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            icon={<MessageCircle size={20} />}
            onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
          >
            AGENDAR VISITA VIA WHATSAPP
          </Button>
        </div>
      </div>
    </section>
  );
}
