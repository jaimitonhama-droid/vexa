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
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0C0D0E] border-t border-white/[0.06]">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="w-5 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
              Metodologia de Engenharia
            </span>
            <span className="w-5 h-[1px] bg-white/20" />
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Da ideia à <span className="text-gradient">solução real.</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-inter">
            Um processo estruturado e transparente em 4 etapas para garantir rigor técnico, previsibilidade e entregas de excelência.
          </p>
        </div>

        {/* 4 Steps Timeline Composition: Mobile Swipe Carousel & Desktop Grid */}
        <div className="relative">
          
          {/* Horizontal connecting line (Visible on lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-8 pointer-events-none -z-0" />

          <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-4 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="w-[82vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-center group relative rounded-2xl bg-[#141518] border border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0C0D0E] border border-white/[0.1] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FAFC]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-white bg-white/[0.08] px-2.5 py-1 rounded-full border border-white/[0.1]">
                        Passo {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sora text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors mb-1">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs font-medium text-blue-400 mb-2 sm:mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-4 sm:mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="font-mono text-[10px] sm:text-[11px]">Etapa 0{index + 1} de 04</span>
                    {index < 3 && (
                      <ArrowRight className="w-3.5 h-3.5 text-white/40 hidden lg:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-[#9298AA] mt-2">
            <span>Deslize para ver as 4 etapas</span>
            <span className="text-blue-400">→</span>
          </div>

        </div>

      </div>
    </section>
  );
}

