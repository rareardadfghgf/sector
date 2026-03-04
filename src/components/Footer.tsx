import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Section */}
        <div className="text-center mb-16 md:mb-20">


          <div className="flex flex-col items-center justify-center space-y-4">
            <Button variant="whatsapp" className="text-lg px-8 py-4 h-auto" icon={<MessageCircle size={24} />}>
              AGENDAR VISITA VIA WHATSAPP
            </Button>
            <div className="flex items-center text-sm text-gray-400 mt-4">
              <span className="mr-2">Realização:</span>
              <span className="font-bold text-[#2E5C46]">SECTOR IMÓVEIS</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Sector Imóveis. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2E5C46]">Política de Privacidade</a>
            <a href="#" className="hover:text-[#2E5C46]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
