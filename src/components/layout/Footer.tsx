import { ShieldCheck, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] text-zinc-400 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-[#FACC15]" />
            <span className="text-xl font-bold tracking-tight text-white">Prodetalhe<span className="text-[#FACC15]">_Angola</span></span>
          </div>
          <p className="text-sm">
            A mecânica mais transparente do mundo. Agora no seu telemóvel. Sem surpresas na fatura.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Serviços Principais</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Revisão Geral</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Troca de Baterias</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Mudança de Óleo</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Gestão de Pneus</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Apoio ao Cliente</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Agendamento Online</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Simulador de Orçamento</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Portal de Transparência</a></li>
            <li><a href="#" className="hover:text-[#FACC15] transition-colors">Perguntas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contactos</h4>
          <ul className="space-y-2 text-sm">
            <li>Luanda, Angola</li>
            <li>Apoio: +244 923 000 000</li>
            <li>Urgências: +244 923 111 111</li>
            <li>Email: geral@prodetalhe.co.ao</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>© {new Date().getFullYear()} Prodetalhe_Angola. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Termos de Serviço</a>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
