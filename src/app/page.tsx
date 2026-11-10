import HeroSection from "@/components/home/HeroSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0D14]">
      {/* 1. Hero: Posicionamento claro e impacto imediato */}
      <HeroSection />

      {/* 2. Serviços / O Que Fazemos (Web, Sistemas, Cloud) */}
      <DivisionsSection />

      {/* 3. Portfólio / Projetos Reais e Trabalhos Selecionados */}
      <PortfolioSection />

      {/* 4. Confiança & Reputação (Depoimentos e Avaliações Reais) */}
      <TestimonialsSection />

      {/* 5. Chamada para Ação Final (Orçamento & WhatsApp) */}
      <CtaSection />
    </div>
  );
}
