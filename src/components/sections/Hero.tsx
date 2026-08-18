import { Button } from '../ui/button';
import { Star, ShieldCheck, Wrench, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-32 md:pb-40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] md:bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2600&auto=format&fit=crop")' }}
      >
        {/* Gradients for blending and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121214]/95 via-[#121214]/80 to-[#121214]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121214] via-transparent to-transparent opacity-90 md:opacity-80" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FACC15]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1.5 md:px-4 text-[10px] sm:text-xs md:text-sm text-zinc-200 mb-6 md:mb-8 backdrop-blur-md shadow-xl text-left max-w-full">
          <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FACC15] mr-2 fill-[#FACC15] shrink-0" />
          <span className="font-medium tracking-wide truncate">4.9/5 no Google Maps (Mais de 1.500 avaliações)</span>
        </div>

        <h1 className="max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-[1.2] md:leading-[1.15] drop-shadow-2xl px-2">
          A Mecânica Mais Transparente do Mundo. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-amber-400 to-amber-600 drop-shadow-none inline-block mt-1 md:mt-0">
            Agora no Seu Telemóvel.
          </span>
        </h1>

        <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-zinc-300 mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-lg px-4 md:px-2">
          Orçamentos instantâneos, agendamento em tempo real e acompanhamento da reparação por vídeo no WhatsApp. <strong className="text-white">Sem surpresas na fatura.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto sm:max-w-none sm:justify-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-sm md:text-base font-bold h-12 md:h-14 px-8 shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)] hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Wrench className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Simular Orçamento
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-sm md:text-base font-bold h-12 md:h-14 px-8 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Smartphone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Agendar Agora
          </Button>
        </div>

        <div className="mt-12 md:mt-20 flex justify-center items-center gap-2 sm:gap-6 md:gap-16 text-zinc-300 w-full max-w-3xl mx-auto px-2">
          <div className="flex flex-col items-center gap-2 md:gap-3 flex-1">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 md:h-7 md:w-7 text-[#FACC15]" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-center">Garantia<br className="md:hidden"/> Total</span>
          </div>
          <div className="w-px h-10 md:h-16 bg-white/20" />
          <div className="flex flex-col items-center gap-2 md:gap-3 flex-1">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <Smartphone className="h-5 w-5 md:h-7 md:w-7 text-[#FACC15]" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-center">App<br className="md:hidden"/> Integrada</span>
          </div>
          <div className="w-px h-10 md:h-16 bg-white/20" />
          <div className="flex flex-col items-center gap-2 md:gap-3 flex-1">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
              <Wrench className="h-5 w-5 md:h-7 md:w-7 text-[#FACC15]" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-center">Peças<br className="md:hidden"/> Originais</span>
          </div>
        </div>
      </div>
    </section>
  );
}
