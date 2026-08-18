import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/244900000000" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
        Fale connosco
        {/* Little arrow */}
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-zinc-900" />
      </span>
      
      {/* Pulse effect */}
      <span className="absolute -inset-2 rounded-full border border-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}
