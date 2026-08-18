import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 z-50">
            <Logo className="text-xl" />
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Serviços</a>
            <a href="#simulador" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Simulador</a>
            <a href="#transparencia" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Transparência</a>
            <a href="#agendamento" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Oficinas</a>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Phone className="h-4 w-4" />
              <span>Linha Saúde Auto: 923 000 000</span>
            </div>
            <Button 
              variant="default" 
              className="hidden sm:inline-flex font-bold"
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Marcar Visita
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              <a href="#servicos" onClick={closeMenu} className="text-2xl font-bold text-white hover:text-[#FACC15] transition-colors">Serviços</a>
              <a href="#simulador" onClick={closeMenu} className="text-2xl font-bold text-white hover:text-[#FACC15] transition-colors">Simulador</a>
              <a href="#transparencia" onClick={closeMenu} className="text-2xl font-bold text-white hover:text-[#FACC15] transition-colors">Transparência</a>
              <a href="#agendamento" onClick={closeMenu} className="text-2xl font-bold text-white hover:text-[#FACC15] transition-colors">Agendamento</a>
            </nav>
            <div className="mt-12 flex flex-col gap-4">
              <Button 
                size="lg" 
                className="w-full font-bold h-14 text-lg"
                onClick={() => {
                  closeMenu();
                  document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Marcar Visita Agora
              </Button>
              <div className="flex items-center justify-center gap-2 text-zinc-400 mt-4">
                <Phone className="h-5 w-5" />
                <span className="font-medium">Linha Apoio: 923 000 000</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
