import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Wrench, Calendar as CalIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { cn } from '@/src/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function ChatSuporte() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! Sou o Consultor Técnico IA da Prodetalhe_Angola. Como posso ajudar com o seu carro hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg = { role: 'user' as const, content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Create chat history for API format
      const history = messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }));
      history.push({ role: 'user', parts: [{ text }] });

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });
      
      const data = await res.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'model', content: data.text }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', content: 'Desculpe, ocorreu um erro de conexão. Por favor, tente novamente ou ligue para nossa linha de apoio.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="bg-[#FACC15] hover:bg-[#FACC15]/90 text-black p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-transform hover:scale-105"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="hidden sm:inline">Consultor IA</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-32px)] md:w-[350px] shadow-2xl"
          >
            <Card className="border-white/10 bg-[#121214] flex flex-col h-[65vh] max-h-[600px] md:h-[500px] overflow-hidden">
              <div className="bg-[#FACC15] p-4 flex items-center justify-between text-black">
                <div className="flex items-center gap-2">
                  <Bot className="h-6 w-6" />
                  <div>
                    <h3 className="font-bold text-sm">Consultor Técnico IA</h3>
                    <p className="text-xs font-medium opacity-80">Online e pronto a ajudar</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={cn("flex gap-2", msg.role === 'user' ? "justify-end" : "justify-start")}>
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 rounded-full bg-[#FACC15]/20 flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-[#FACC15]" />
                      </div>
                    )}
                    <div className={cn(
                      "p-3 rounded-2xl max-w-[80%] text-sm whitespace-pre-wrap",
                      msg.role === 'user' 
                        ? "bg-[#FACC15] text-black rounded-tr-sm" 
                        : "bg-zinc-800 text-zinc-200 border border-white/5 rounded-tl-sm"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-8 h-8 rounded-full bg-[#FACC15]/20 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-[#FACC15]" />
                    </div>
                    <div className="bg-zinc-800 border border-white/5 p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center h-10">
                      <div className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce delay-75" />
                      <div className="w-2 h-2 rounded-full bg-zinc-500 animate-bounce delay-150" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-zinc-900 border-t border-white/5 space-y-3">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  <button onClick={() => handleSend("Quero agendar uma revisão")} className="shrink-0 bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-zinc-300 py-1.5 px-3 rounded-full flex items-center gap-1 transition-colors">
                    <CalIcon className="h-3 w-3" /> Agendar
                  </button>
                  <button onClick={() => handleSend("Fazer simulação de preço")} className="shrink-0 bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-zinc-300 py-1.5 px-3 rounded-full flex items-center gap-1 transition-colors">
                    <Wrench className="h-3 w-3" /> Simular Preço
                  </button>
                  <button onClick={() => handleSend("Falar com humano")} className="shrink-0 bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-zinc-300 py-1.5 px-3 rounded-full flex items-center gap-1 transition-colors">
                    <User className="h-3 w-3" /> Humano
                  </button>
                </div>
                
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                  className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-[#FACC15]/50 transition-colors"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Descreva o problema..."
                    className="flex-1 bg-transparent border-none text-sm text-white focus:outline-none placeholder:text-zinc-600"
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim() || isLoading}
                    className="bg-[#FACC15] text-black w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FACC15]/90 transition-colors"
                  >
                    <Send className="h-4 w-4 ml-0.5" />
                  </button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
