import { Lightbulb, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Inovação",
    description: "Procuramos novas formas de resolver problemas, combinando as mais recentes tecnologias e metodologias para criar soluções com diferenciação real.",
    icon: Lightbulb,
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    number: "02",
    title: "Qualidade",
    description: "Valorizamos cada detalhe das nossas soluções. Do código limpo à arquitetura e ao acabamento de interface, a excelência não é negociável.",
    icon: ShieldCheck,
    accent: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  },
  {
    number: "03",
    title: "Simplicidade",
    description: "Criamos experiências intuitivas e fáceis de utilizar. Reduzimos a fricção para que produtos complexos se tornem ferramentas claras e ágeis.",
    icon: Sparkles,
    accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Desenvolvemos soluções preparadas para crescer. Construímos bases modulares e escaláveis para acompanhar o crescimento contínuo do seu negócio.",
    icon: TrendingUp,
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="w-5 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
              Os Nossos Pilares
            </span>
            <span className="w-5 h-[1px] bg-white/20" />
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Pensamos no futuro. <br className="hidden sm:inline" />
            <span className="text-gradient">Desenvolvemos para o presente.</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-inter">
            Acreditamos que a tecnologia deve servir pessoas e empresas com elegância, segurança e resultados mensuráveis.
          </p>
        </div>

        {/* 4 Pillars Grid: Compact 2x2 Matrix on Mobile & 4-Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl bg-[#111827] border border-blue-900/40 p-4 sm:p-7 hover:border-blue-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-8">
                    <span className="font-mono text-base sm:text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-blue-900/50 bg-white/[0.04] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F8FAFC]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sora text-sm sm:text-xl font-bold text-[#F8FAFC] mb-2 sm:mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-inter line-clamp-3 sm:line-clamp-none">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-4 sm:mt-8 pt-3 border-t border-blue-900/30 flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#94A3B8]">Pilar Fundamental</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

