import { Lightbulb, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Inovação",
    description: "Procuramos novas formas de resolver problemas, combinando as mais recentes tecnologias e metodologias para criar soluções com diferenciação real.",
    icon: Lightbulb,
    accent: "text-[#7657F6] border-[#7657F6]/30 bg-[#7657F6]/10",
  },
  {
    number: "02",
    title: "Qualidade",
    description: "Valorizamos cada detalhe das nossas soluções. Do código limpo à arquitetura e ao acabamento de interface, a excelência não é negociável.",
    icon: ShieldCheck,
    accent: "text-[#26B8F2] border-[#26B8F2]/30 bg-[#26B8F2]/10",
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
    <section className="py-14 sm:py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#7657F6]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
            <span>Os Nossos Pilares</span>
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F5FA] tracking-tight">
            Pensamos no futuro. <br className="hidden sm:inline" />
            <span className="text-gradient">Desenvolvemos para o presente.</span>
          </h2>
          <p className="text-[#9298AA] text-sm sm:text-base leading-relaxed font-inter">
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
                className="group relative rounded-2xl bg-[#171B2B]/70 border border-white/[0.08] p-4 sm:p-7 hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-8">
                    <span className="font-mono text-base sm:text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                      {pillar.number}
                    </span>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center ${pillar.accent}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sora text-sm sm:text-xl font-bold text-[#F4F5FA] mb-2 sm:mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9298AA] text-xs sm:text-sm leading-relaxed font-inter line-clamp-3 sm:line-clamp-none">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-4 sm:mt-8 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7657F6]" />
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#9298AA]">Pilar Fundamental</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

