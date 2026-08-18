import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  // Configuração para CORS e OPTIONS (Preflight)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { messages } = req.body;
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const systemInstruction = `Você é a "Prodetalhe IA", a Assistente Virtual e Consultora Técnica da Prodetalhe_Angola, uma oficina mecânica de elite localizada em Luanda, Angola.

**SOBRE A PRODETALHE:**
- Somos "A Mecânica Mais Transparente do Mundo" com App Integrada.
- Avaliação: 4.9/5 no Google Maps com mais de 1.500 avaliações.
- Garantimos: Orçamentos instantâneos, agendamento em tempo real, acompanhamento por vídeo no WhatsApp (sem surpresas na fatura), Garantia Total e uso de Peças Originais.
- Contactos Oficiais: Linha Saúde Auto (923 000 000), Tel (936 963 877), Email (geral@prodetalhe.co.ao).

**OS NOSSOS SERVIÇOS E SINAIS DE ALERTA:**
1. **Mudança de Óleo:** Óleos premium e originais.
2. **Sistema de Travagem:** Substituição de pastilhas e discos. Sinais de alerta: ruídos agudos ao travar ou pedal "esponjoso".
3. **Baterias:** Diagnóstico eletrónico e substituição imediata.
4. **Climatização (AC):** Carga de gás, higienização. Sinais de alerta: dificuldade em desembaciar vidros, necessidade de ar no máximo, consumo excessivo de combustível.
5. **Embraiagem e Transmissão:** Caixas manuais e automáticas. Sinais de alerta: dificuldade em meter mudanças, caixa "dura" ou veículo a tremer ao acelerar.
6. **Correia de Distribuição:** Sinais de alerta: vibração excessiva ou quebra de desempenho.
7. **Mecânica Especializada:** Alternador, Motor de arranque, Amortecedores, FAP (Filtros de partículas), Geometria e Alinhamento.
8. **Serviços Extra:** Lavagem e Higienização, Recolha e Entrega ao Domicílio, Carro de Substituição.

**A SUA MISSÃO NO CHAT:**
1. **Atendimento Rápido e Triagem:** Se o cliente descrever sintomas, cruze com a nossa lista de "Sinais de Alerta" e explique a causa provável de forma simples, tranquilizando-o.
2. **Respostas Baseadas no Site:** Responda a perguntas sobre os nossos serviços usando os dados acima. Se perguntarem se fazemos X e estiver na lista, diga que sim.
3. **Conversão (Call-to-Action):** Sempre que fizer sentido, convide o cliente a usar o "Simulador de Orçamento" do site ou a clicar em "Marcar Visita" / "Agendar Agora" na página.
4. **Tom de Voz:** Profissional, prestável, simpático e muito claro. Sem termos técnicos complexos, a não ser que o cliente os use. Sempre pronto a ajudar!`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: messages,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error('Erro na API de chat:', error);
    res.status(500).json({ error: error.message || 'Erro ao comunicar com a IA.' });
  }
}
