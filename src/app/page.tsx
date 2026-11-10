import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import DivisionsSection from "@/components/home/DivisionsSection";
import ProductsSection from "@/components/home/ProductsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0D14]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Apresentação da Empresa */}
      <AboutSection />

      {/* 3. Áreas de Atuação (VEXA Web, VEXA Digital, VEXA Cloud) */}
      <DivisionsSection />

      {/* 4. Ecossistema Proprietário (VYRON) */}
      <ProductsSection />

      {/* 5. Projetos Reais e Portfólio */}
      <PortfolioSection />

      {/* 6. Porquê Escolher a VEXA? (4 Pilares) */}
      <WhyChooseSection />

      {/* 7. Processo de Trabalho (4 Etapas) */}
      <ProcessSection />

      {/* 8. Depoimentos & Confiança */}
      <TestimonialsSection />

      {/* 9. Perguntas Frequentes (FAQ) */}
      <FaqSection />

      {/* 10. Chamada para Ação (CTA Final) */}
      <CtaSection />
    </div>
  );
}
