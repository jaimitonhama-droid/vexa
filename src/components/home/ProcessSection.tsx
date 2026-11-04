import { Search, Compass, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Descoberta",
    subtitle: "Compreensão & Diagnóstico",
    description: "Compreendemos a fundo o problema, o mercado e os objetivos estratégicos para delinear o caminho mais eficiente.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planeamento",
    subtitle: "Estratégia & Arquitetura",
    description: "Definimos a arquitetura técnica, os fluxos do utilizador, as tecnologias adequadas e os marcos do projeto.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Desenvolvimento",
    subtitle: "Construção & Engenharia",
    description: "Transformamos o planeamento num produto funcional, seguro e elegante, seguindo as melhores práticas do setor.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Evolução",
    subtitle: "Otimização & Acompanhamento",
    description: "Acompanhamos, medimos resultados, melhoramos continuamente e asseguramos que a solução cresça de forma sustentável.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#26B8F2]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#26B8F2] tracking-wider uppercase">
            <span>Metodologia</span>
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F5FA] tracking-tight">
            Da ideia à <span className="text-gradient">solução.</span>
          </h2>
          <p className="text-[#9298AA] text-sm sm:text-base leading-relaxed font-inter">
            Um processo estruturado e transparente em 4 etapas para garantir rigor técnico, previsibilidade e entregas de excelência.
          </p>
        </div>

        {/* 4 Steps Timeline Composition: Mobile Swipe Carousel & Desktop Grid */}
        <div className="relative">
          
          {/* Horizontal connecting line (Visible on lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-[#7657F6]/20 via-[#26B8F2]/40 to-[#7657F6]/20 -translate-y-8 pointer-events-none -z-0" />

          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-4 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="w-[82vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-center group relative rounded-2xl bg-[#171B2B] border border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between hover:border-[#7657F6]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#000000]/80"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex items-center justify-center text-[#26B8F2] group-hover:text-white group-hover:bg-[#7657F6] transition-colors shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#7657F6] bg-[#7657F6]/10 px-2.5 py-1 rounded-full border border-[#7657F6]/20">
                        Passo {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sora text-lg sm:text-xl font-bold text-[#F4F5FA] group-hover:text-white transition-colors mb-1">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-medium text-[#26B8F2] mb-2 sm:mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#9298AA] leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-4 sm:mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#9298AA]">
                    <span className="font-mono text-[10px] sm:text-[11px]">Etapa 0{index + 1} de 04</span>
                    {index < 3 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#26B8F2] hidden lg:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-[#9298AA] mt-2">
            <span>Deslize para ver as 4 etapas</span>
            <span className="text-[#26B8F2]">→</span>
          </div>

        </div>

      </div>
    </section>
  );
}

