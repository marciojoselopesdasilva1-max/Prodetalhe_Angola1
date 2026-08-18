import { ShieldAlert, PackageOpen, Camera, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const reviews = [
  { name: "João Pereira", car: "BMW Série 3", text: "Primeira vez que não me sinto enganado numa oficina. Vi o vídeo do mecânico a mostrar os travões gastos antes de aprovar. 5 estrelas." },
  { name: "Ana Costa", car: "Toyota Yaris", text: "Recolheram o carro no meu trabalho e entregaram à tarde lavado. A caixa com as peças velhas no banco do passageiro deu-me muita confiança." },
  { name: "Carlos Mendes", car: "Mercedes Classe A", text: "O agendamento online é top. Cheguei à oficina e fui logo atendido. O simulador bateu certo com o preço final." }
];

export function TrustSection() {
  return (
    <section className="py-24 bg-[#0a0a0b] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg mb-6"><svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg><span className="text-black font-bold text-sm tracking-wide">4.9/5 Avaliações no Google</span></div><h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mecânica Sem Segredos</h2>
          <p className="text-lg text-zinc-400">
            Chega de orçamentos misteriosos e peças que nunca viu. Na Prodetalhe_Angola, introduzimos a transparência radical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center">
              <Camera className="h-10 w-10 text-[#FACC15]" />
            </div>
            <h3 className="text-xl font-bold text-white">Vídeo do Diagnóstico</h3>
            <p className="text-zinc-400 text-sm">
              Enviamos um vídeo em tempo real pelo WhatsApp com o técnico a apontar exatamente a avaria antes de qualquer intervenção.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 relative">
            <div className="hidden md:block absolute top-10 -left-1/2 w-full h-px border-t border-dashed border-white/10" />
            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10">
              <ShieldAlert className="h-10 w-10 text-[#FACC15]" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero Surpresas na Fatura</h3>
            <p className="text-zinc-400 text-sm">
              O valor do simulador é o valor base. Qualquer extra só avança com a sua aprovação explícita após ver as provas visuais.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 relative">
            <div className="hidden md:block absolute top-10 -left-1/2 w-full h-px border-t border-dashed border-white/10" />
            <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10">
              <PackageOpen className="h-10 w-10 text-[#FACC15]" />
            </div>
            <h3 className="text-xl font-bold text-white">As Suas Peças Antigas</h3>
            <p className="text-zinc-400 text-sm">
              Devolvemos sempre as peças que substituímos numa caixa selada no porta-bagagens. Transparência que se pode tocar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Card key={i} className="bg-zinc-900/50 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent opacity-50" />
              <CardContent className="p-8">
                <div className="flex text-[#FACC15] mb-4">
                  {[...Array(5)].map((_, j) => <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-zinc-300 mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{r.name}</h4>
                    <p className="text-[#FACC15] text-xs font-medium">{r.car}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
