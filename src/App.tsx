import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { TrustSection } from './components/sections/TrustSection';
import { OrcamentoSimulador } from './components/features/OrcamentoSimulador';
import { Schedule } from './components/features/Schedule';
import { TransparencyPortal } from './components/features/TransparencyPortal';
import { ChatSuporte } from './components/features/ChatSuporte';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121214] text-white selection:bg-[#FACC15] selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <OrcamentoSimulador />
        <Schedule />
        <TransparencyPortal />
        <TrustSection />
      </main>
      <Footer />
      <ChatSuporte />
    </div>
  );
}

