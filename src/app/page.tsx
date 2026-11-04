import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Apresentação da Empresa */}
      <AboutSection />

      {/* 3. Áreas de Atuação (VEXA Web, VEXA Digital, VEXA Cloud) */}
      <DivisionsSection />

      {/* 4. Projetos Reais e Portfólio */}
      <PortfolioSection />

      {/* 5. Porquê Escolher a VEXA? (4 Pilares) */}
      <WhyChooseSection />

      {/* 6. Processo de Trabalho (4 Etapas) */}
      <ProcessSection />

      {/* 7. Chamada para Ação (CTA Final) */}
      <CtaSection />
    </div>
  );
}
