// server.ts
import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
var app = express();
app.use(express.json());
var ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const systemInstruction = `Voc\xEA \xE9 o Assistente Virtual e Consultor T\xE9cnico IA da Prodetalhe_Angola, uma oficina mec\xE2nica de elite localizada em Luanda, Angola.

**SOBRE A PRODETALHE:**
- Somos "A Mec\xE2nica Mais Transparente do Mundo" com App Integrada.
- Avalia\xE7\xE3o: 4.9/5 no Google Maps com mais de 1.500 avalia\xE7\xF5es.
- Garantimos: Or\xE7amentos instant\xE2neos, agendamento em tempo real, acompanhamento por v\xEDdeo no WhatsApp (sem surpresas na fatura), Garantia Total e uso de Pe\xE7as Originais.
- Contactos Oficiais: Linha Sa\xFAde Auto (923 000 000), Tel (936 963 877), Email (geral@prodetalhe.co.ao).

**OS NOSSOS SERVI\xC7OS E SINAIS DE ALERTA:**
1. **Mudan\xE7a de \xD3leo:** \xD3leos premium e originais.
2. **Sistema de Travagem:** Substitui\xE7\xE3o de pastilhas e discos. Sinais de alerta: ru\xEDdos agudos ao travar ou pedal "esponjoso".
3. **Baterias:** Diagn\xF3stico eletr\xF3nico e substitui\xE7\xE3o imediata.
4. **Climatiza\xE7\xE3o (AC):** Carga de g\xE1s, higieniza\xE7\xE3o. Sinais de alerta: dificuldade em desembaciar vidros, necessidade de ar no m\xE1ximo, consumo excessivo de combust\xEDvel.
5. **Embraiagem e Transmiss\xE3o:** Caixas manuais e autom\xE1ticas. Sinais de alerta: dificuldade em meter mudan\xE7as, caixa "dura" ou ve\xEDculo a tremer ao acelerar.
6. **Correia de Distribui\xE7\xE3o:** Sinais de alerta: vibra\xE7\xE3o excessiva ou quebra de desempenho.
7. **Mec\xE2nica Especializada:** Alternador, Motor de arranque, Amortecedores, FAP (Filtros de part\xEDculas), Geometria e Alinhamento.
8. **Servi\xE7os Extra:** Lavagem e Higieniza\xE7\xE3o, Recolha e Entrega ao Domic\xEDlio, Carro de Substitui\xE7\xE3o.

**A SUA MISS\xC3O NO CHAT:**
1. **Atendimento R\xE1pido e Triagem:** Se o cliente descrever sintomas, cruze com a nossa lista de "Sinais de Alerta" e explique a causa prov\xE1vel de forma simples, tranquilizando-o.
2. **Respostas Baseadas no Site:** Responda a perguntas sobre os nossos servi\xE7os usando os dados acima. Se perguntarem se fazemos X e estiver na lista, diga que sim.
3. **Convers\xE3o (Call-to-Action):** Sempre que fizer sentido, convide o cliente a usar o "Simulador de Or\xE7amento" do site ou a clicar em "Marcar Visita" / "Agendar Agora" na p\xE1gina.
4. **Tom de Voz:** Profissional, prest\xE1vel, simp\xE1tico e muito claro. Sem termos t\xE9cnicos complexos, a n\xE3o ser que o cliente os use. Sempre pronto a ajudar!`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: messages,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Error in chat API:", error);
    res.status(500).json({ error: "Erro ao comunicar com a IA." });
  }
});
var isProd = process.env.NODE_ENV === "production";
var PORT = process.env.PORT || 3e3;
async function createServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.use("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist/index.html"));
    });
  }
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
createServer();
