import { Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function Schedule() {
  return (
    <section id="agendamento" className="py-16 md:py-24 bg-[#121214]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        {/* Map Section */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.32189498261!2d13.151745266858273!3d-8.853380482437637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a9!2sLuanda%2C%20Angola!5e0!3m2!1sen!2spt!4v1700000000000!5m2!1sen!2spt" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert opacity-80 contrast-125"
          />
          {/* Overlay to block direct map interaction easily, keeping it decorative as in the screenshot */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(18,18,20,0.8)]" />
        </div>

        {/* Form Container */}
        <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-8 text-center uppercase tracking-wider">
            Contacte-nos e marque a <span className="text-[#FACC15]">sua revisão</span>
          </h2>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* DADOS DO VEÍCULO */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Dados do Veículo</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Matrícula*</label>
                  <Input 
                    placeholder="INSIRA AQUI A MATRÍCULA" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50 uppercase" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Marca*</label>
                  <Input 
                    placeholder="Insira Aqui A Marca" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Modelo</label>
                  <Input 
                    placeholder="Insira Aqui O Modelo" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Quilometragem*</label>
                  <Input 
                    placeholder="Quantos km tem?" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>
              </div>
            </div>

            {/* INDICAÇÃO DAS FALHAS */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Indicação das Falhas</h3>
              <Textarea 
                placeholder="Descreva aqui as falhas ou avarias do seu veículo..." 
                className="bg-[#09090b] border-white/10 min-h-[120px] text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50 resize-none p-4" 
              />
            </div>

            {/* DADOS PESSOAIS */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Dados Pessoais</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Nome*</label>
                  <Input 
                    placeholder="O seu nome" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">E-Mail</label>
                  <Input 
                    type="email" 
                    placeholder="O seu e-mail" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Telefone*</label>
                  <Input 
                    type="tel" 
                    placeholder="O seu telefone" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Contribuinte</label>
                  <Input 
                    placeholder="O seu número de contribuinte" 
                    className="bg-[#09090b] border-white/10 h-12 text-white placeholder:text-zinc-600 focus-visible:ring-[#FACC15]/50" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-4">
              <p className="text-xs text-zinc-500 text-right w-full">*Campos obrigatórios</p>
              
              <Button size="lg" type="submit" className="w-full h-14 font-bold text-base bg-[#FACC15] text-black hover:bg-[#FACC15]/90 uppercase tracking-wide">
                Enviar
              </Button>

              <div className="flex flex-col gap-3 mt-2">
                <a href="tel:+244936963877" className="flex items-center justify-center gap-2 h-14 rounded-lg bg-[#09090b] border border-white/10 text-white font-bold hover:border-[#FACC15]/50 transition-colors">
                  <Phone className="h-4 w-4 text-[#FACC15]" />
                  +244 936 963 877
                </a>
                <a href="mailto:geral@prodetalhe.co.ao" className="flex items-center justify-center gap-2 h-14 rounded-lg bg-[#09090b] border border-white/10 text-white font-bold hover:border-[#FACC15]/50 transition-colors">
                  <Mail className="h-4 w-4 text-[#FACC15]" />
                  geral@prodetalhe.co.ao
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
