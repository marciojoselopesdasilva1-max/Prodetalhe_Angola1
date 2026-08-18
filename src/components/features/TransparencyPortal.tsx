import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { PlayCircle, FileText, CheckCircle2, Clock } from 'lucide-react';

export function TransparencyPortal() {
  return (
    <section id="transparencia" className="py-24 bg-[#121214]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              O Portal de Transparência <br className="hidden lg:block"/>
              <span className="text-[#FACC15]">"Histórico Clínico"</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Acompanhe a reparação do seu carro como se estivesse na oficina. O nosso dashboard de cliente mostra o estado em tempo real e os vídeos de diagnóstico.
            </p>
            
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#FACC15] shrink-0" />
                <span className="text-zinc-300">Aprovação de orçamentos adicionais apenas com vídeo de prova.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#FACC15] shrink-0" />
                <span className="text-zinc-300">Todas as peças antigas substituídas entregues numa caixa.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#FACC15] shrink-0" />
                <span className="text-zinc-300">Faturas detalhadas guardadas digitalmente na sua conta.</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full">
            <Card className="border-white/10 bg-zinc-900/80 shadow-2xl overflow-hidden relative">
              {/* Fake Browser Top */}
              <div className="h-8 bg-zinc-950 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              
              <CardHeader className="bg-black/20 pb-4 border-b border-white/5">
                <CardTitle className="text-lg flex justify-between items-center">
                  <span>Reparação Atual: Toyota Corolla</span>
                  <span className="text-xs bg-[#FACC15] text-black px-2 py-1 rounded font-bold uppercase">Em Diagnóstico</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Timeline */}
                <div className="relative pl-6 space-y-6 border-l border-white/10 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[31px] bg-green-500 rounded-full w-4 h-4 border-4 border-zinc-900" />
                    <p className="text-sm text-zinc-400"><span className="text-white font-medium">09:00</span> - Veículo Recebido na Oficina</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] bg-[#FACC15] rounded-full w-4 h-4 border-4 border-zinc-900 animate-pulse" />
                    <p className="text-sm font-medium text-white">10:15 - Em Diagnóstico pela Equipa</p>
                    
                    <div className="mt-3 bg-black/40 border border-white/5 rounded-lg p-3 flex items-center justify-between group cursor-pointer hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[#FACC15]/20 flex items-center justify-center">
                          <PlayCircle className="h-5 w-5 text-[#FACC15]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Vídeo do Diagnóstico do Técnico</p>
                          <p className="text-xs text-zinc-500">Duração: 01:24</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">Ver</Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] bg-zinc-700 rounded-full w-4 h-4 border-4 border-zinc-900" />
                    <p className="text-sm text-zinc-500 flex items-center gap-2">
                      <Clock className="h-3 w-3" /> Aguardando Aprovação
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="w-full text-xs" variant="outline"><FileText className="h-4 w-4 mr-2"/> Histórico de Faturas</Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
