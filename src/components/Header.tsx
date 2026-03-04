import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* Placeholder for the uploaded logo - In a real scenario, this would be the actual image file */}
            <div className="h-12 w-auto flex items-center justify-center">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" 
                alt="Sector Imóveis" 
                className="h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('fallback-logo');
                }}
               />
               {/* Fallback text/logo simulation if image is missing */}
               <div className="flex flex-col items-start leading-none fallback-logo-container" style={{ display: 'none' }}>
                 <span className="text-2xl font-bold text-[#2E5C46] tracking-tighter">SECTOR</span>
                 <span className="text-[10px] text-gray-500 uppercase tracking-widest">Consultoria Imobiliária</span>
               </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" icon={<Phone size={18} />}>
              Falar com Consultor
            </Button>
          </div>
          
          {/* Mobile Icon */}
          <div className="md:hidden">
            <button className="p-2 text-[#2E5C46]">
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
