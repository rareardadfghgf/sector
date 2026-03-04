import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function MobileStickyCTA() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] md:hidden flex gap-3 pb-safe"
    >
      <a 
        href="tel:+5541999999999" // TODO: Replace with actual number
        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 py-3.5 rounded-full font-medium text-sm active:bg-gray-200 transition-colors"
      >
        <Phone size={18} />
        Ligar
      </a>
      <a 
        href="https://wa.me/5541999999999" // TODO: Replace with actual number
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-full font-medium text-sm active:bg-[#128C7E] transition-colors shadow-sm"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </motion.div>
  );
}
