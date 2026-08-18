import { CheckCircle2, Battery, Settings, Disc, Droplet, Thermometer, ChevronRight, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const mainServices = [
  { 
    icon: Droplet, 
    title: "Mudança de Óleo", 
    desc: "Óleos Premium e originais para prolongar a vida útil do motor.",
    image: "https://i.postimg.cc/15cRvrJP/servico-oleo.jpg"
  },
  { 
    icon: ShieldCheck, 
    title: "Travões", 
    desc: "Substituição de pastilhas e discos com peças originais e garantia.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Battery, 
    title: "Baterias", 
    desc: "Diagnóstico eletrónico e substituição imediata de baterias.",
    image: "https://images.unsplash.com/photo-1621535497258-0d19de956b62?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Thermometer, 
    title: "Climatização (AC)", 
    desc: "Carregamento de gás, higienização e reparação de compressores.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Settings, 
    title: "Transmissão", 
    desc: "Reparação de caixas manuais e automáticas, substituição de embraiagem.",
    image: "https://images.unsplash.com/photo-1625047509168-a71c66940656?q=80&w=800&auto=format&fit=crop"
  }
];

const specialized = [
  "Alternador e Motor de Arranque", "Amortecedores e Suspensão", "Check-up Diagnóstico",
  "Correia de Distribuição", "Filtros de Partículas (FAP)", "Geometria e Alinhamento"
];

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#121214]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Serviços de Manutenção e Mecânica</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Equipamento de última geração, mecânicos certificados e garantia em todas as intervenções.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((srv, i) => (
            <Card key={i} className="bg-[#18181b] border-white/5 hover:border-[#FACC15]/30 transition-all overflow-hidden flex flex-col group p-0">
              <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/20 to-transparent opacity-90" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <srv.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardContent className="p-6 pt-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-zinc-400 text-sm flex-1">{srv.desc}</p>
                <button 
                  onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-6 w-full bg-[#09090b] hover:bg-black border border-white/5 text-zinc-300 py-3.5 px-4 rounded-xl flex justify-between items-center text-sm font-medium transition-colors group-hover:border-[#FACC15]/30 group-hover:text-[#FACC15]"
                >
                  Agendar Serviço
                  <ChevronRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sinais de Alerta e Manutenção Section */}
        <div className="mt-24 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Como saber que precisa de nós?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Não ignore os sinais. Conheça os sintomas que o seu veículo transmite quando precisa de intervenção mecânica especializada.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Climatização */}
            <div className="bg-gradient-to-br from-[#18181b] to-[#0a0a0b] p-8 rounded-2xl border border-white/5 hover:border-[#FACC15]/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#FACC15]/30 transition-colors">
                  <Thermometer className="h-6 w-6 text-[#FACC15]" />
                </div>
                <h3 className="text-xl font-bold text-white">Ar Condicionado Auto</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Se tem dificuldade em desembaciar os vidros, precisa de usar o <span className="text-white font-medium">ar condicionado</span> no máximo para refrescar o habitáculo ou nota um consumo excessivo de combustível ao ligá-lo, o mais certo é precisar de uma revisão.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Na Prodetalhe, realizamos um <span className="text-[#FACC15] font-medium">diagnóstico completo ao seu sistema de climatização</span>, incluindo a recarga de gás, substituição de filtros e higienização profunda.
              </p>
            </div>

            {/* Correia de Distribuição */}
            <div className="bg-gradient-to-br from-[#18181b] to-[#0a0a0b] p-8 rounded-2xl border border-white/5 hover:border-[#FACC15]/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#FACC15]/30 transition-colors">
                  <Settings className="h-6 w-6 text-[#FACC15]" />
                </div>
                <h3 className="text-xl font-bold text-white">Correia de Distribuição</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Muitos problemas no motor do seu veículo estão diretamente relacionados com a <span className="text-white font-medium">correia de distribuição</span>. Se sente uma vibração excessiva ao conduzir ou <span className="text-white font-medium">suspeita de um pior desempenho</span> do seu automóvel.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Não arrisque danos severos. Agende a verificação do estado da sua correia numa das nossas oficinas e conduza com total tranquilidade.
              </p>
            </div>

            {/* Embraiagem e Transmissão */}
            <div className="bg-gradient-to-br from-[#18181b] to-[#0a0a0b] p-8 rounded-2xl border border-white/5 hover:border-[#FACC15]/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#FACC15]/30 transition-colors">
                  <Disc className="h-6 w-6 text-[#FACC15]" />
                </div>
                <h3 className="text-xl font-bold text-white">Embraiagem e Caixa</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Sente dificuldades em colocar as mudanças, a caixa parece "dura", ou o <span className="text-white font-medium">veículo treme consideravelmente</span> quando a velocidade aumenta?
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Estes são os sintomas clássicos de desgaste acelerado. Os nossos especialistas recuperam a suavidade da sua <span className="text-[#FACC15] font-medium">embraiagem</span> para que não perca o prazer da condução desportiva e segura.
              </p>
            </div>

            {/* Travões */}
            <div className="bg-gradient-to-br from-[#18181b] to-[#0a0a0b] p-8 rounded-2xl border border-white/5 hover:border-[#FACC15]/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#FACC15]/30 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-[#FACC15]" />
                </div>
                <h3 className="text-xl font-bold text-white">Sistema de Travagem</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Ouvir ruídos agudos ou estridentes ao travar, ou sentir o <span className="text-white font-medium">pedal "esponjoso"</span> e longo, indica que o material de fricção está no limite ou há fugas no sistema hidráulico.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A sua segurança está primeiro. Efetuamos a substituição atempada de <span className="text-[#FACC15] font-medium">pastilhas e discos</span> para restaurar a capacidade máxima de paragem do seu carro.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0b] rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Mecânica Especializada</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialized.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#FACC15]" />
                  <span className="text-zinc-300">{s}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full bg-zinc-900/50 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#FACC15]" />
              Serviços Complementares & Mobilidade
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm text-zinc-300">
                <span>Lavagem Auto & Higienização</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">Disponível</span>
              </li>
              <li className="flex justify-between items-center text-sm text-zinc-300">
                <span>Recolha e Entrega ao Domicílio</span>
                <span className="text-xs bg-[#FACC15]/20 text-[#FACC15] px-2 py-1 rounded">Recomendado</span>
              </li>
              <li className="flex justify-between items-center text-sm text-zinc-300">
                <span>Carro de Substituição</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">Sob consulta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
