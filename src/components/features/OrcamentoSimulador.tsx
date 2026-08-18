import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { CarFront, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function OrcamentoSimulador() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    brand: '',
    service: '',
  });

  const brands = ['Toyota', 'Mercedes', 'BMW', 'Hyundai', 'Kia', 'Ford'];
  const services = [
    { id: 'revisao', name: 'Revisão Geral', price: '45.000 Kz' },
    { id: 'travoes', name: 'Travões', price: '30.000 Kz' },
    { id: 'diagnostico', name: 'Diagnóstico Eletrónico', price: '15.000 Kz' },
    { id: 'ac', name: 'Ar Condicionado', price: '25.000 Kz' },
  ];

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="simulador" className="py-24 bg-[#0a0a0b] scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simulador de Orçamentos Inteligente</h2>
          <p className="text-zinc-400 text-lg">Descubra o valor da sua reparação em segundos. Sem compromisso.</p>
        </div>

        <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-[#FACC15]" 
              initial={{ width: '33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <CardHeader className="pt-8 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl flex items-center gap-2">
                {step === 1 && <><CarFront className="text-[#FACC15]" /> 1. O seu veículo</>}
                {step === 2 && <><Wrench className="text-[#FACC15]" /> 2. O serviço necessário</>}
                {step === 3 && <><ShieldCheck className="text-[#FACC15]" /> 3. Estimativa de Valor</>}
              </CardTitle>
              <span className="text-sm text-zinc-500 font-medium">Passo {step} de 3</span>
            </div>
          </CardHeader>

          <CardContent className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <p className="text-zinc-400">Selecione a marca do seu automóvel:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {brands.map(b => (
                      <button
                        key={b}
                        onClick={() => setSelections({ ...selections, brand: b })}
                        className={cn(
                          "p-4 rounded-xl border text-left font-medium transition-all hover:border-[#FACC15]/50",
                          selections.brand === b 
                            ? "border-[#FACC15] bg-[#FACC15]/10 text-white" 
                            : "border-white/10 bg-black/20 text-zinc-300"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <p className="text-zinc-400">O que precisa de fazer no seu {selections.brand}?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelections({ ...selections, service: s.id })}
                        className={cn(
                          "p-4 rounded-xl border flex justify-between items-center transition-all hover:border-[#FACC15]/50",
                          selections.service === s.id 
                            ? "border-[#FACC15] bg-[#FACC15]/10 text-white" 
                            : "border-white/10 bg-black/20 text-zinc-300"
                        )}
                      >
                        <span className="font-medium">{s.name}</span>
                        {selections.service === s.id && <CheckCircle2 className="h-5 w-5 text-[#FACC15]" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  
                  <div>
                    <p className="text-zinc-400 mb-2">Estimativa para {selections.brand} - {services.find(s => s.id === selections.service)?.name}</p>
                    <div className="text-5xl font-bold text-white mb-2">
                      A partir de <span className="text-[#FACC15]">{services.find(s => s.id === selections.service)?.price}</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg max-w-md w-full flex items-start gap-3 text-left">
                    <ShieldCheck className="h-5 w-5 text-[#FACC15] shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-300">
                      <strong>Garantia Prodetalhe:</strong> O preço estimado não muda sem a sua autorização prévia por escrito. Sem surpresas na fatura.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>

          <CardFooter className="flex justify-between border-t border-white/10 pt-6 bg-black/20">
            {step > 1 ? (
              <Button variant="ghost" onClick={handleBack}>Voltar</Button>
            ) : <div />}
            
            {step < 3 ? (
              <Button 
                onClick={handleNext} 
                disabled={(step === 1 && !selections.brand) || (step === 2 && !selections.service)}
              >
                Continuar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                size="lg" 
                className="w-full sm:w-auto font-bold"
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Agora com este Orçamento
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
