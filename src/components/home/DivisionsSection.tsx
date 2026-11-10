import Link from "next/link";
import { Globe, Smartphone, Cloud, ArrowRight, Check } from "lucide-react";

const divisions = [
  {
    id: "vexa-web",
    title: "VEXA WEB",
    subtitle: "Presença Digital & Alta Conversão",
    description: "Criamos experiências digitais através de websites profissionais, lojas virtuais e plataformas personalizadas.",
    icon: Globe,
    badge: "Desenvolvimento Web",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    glowColor: "group-hover:border-blue-500/40",
    accentColor: "from-blue-600 to-sky-400",
    services: [
      "Websites institucionais",
      "Lojas virtuais & E-commerce",
      "Landing pages de alta conversão",
      "Sistemas web interativos",
      "Plataformas personalizadas",
    ],
    actionText: "Explorar VEXA Web",
    actionLink: "/solucoes#vexa-web",
  },
  {
    id: "vexa-digital",
    title: "VEXA DIGITAL",
    subtitle: "Aplicações & Produtos Digitais",
    description: "Desenvolvemos produtos digitais, aplicações e soluções que transformam ideias em ferramentas úteis.",
    icon: Smartphone,
    badge: "Software & SaaS",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    glowColor: "group-hover:border-sky-500/40",
    accentColor: "from-sky-500 to-blue-600",
    services: [
      "Aplicações web modernas",
      "Aplicações móveis",
      "Produtos SaaS & Plataformas",
      "Sistemas de gestão interna",
      "Soluções digitais personalizadas",
    ],
    actionText: "Explorar VEXA Digital",
    actionLink: "/solucoes#vexa-digital",
    featured: true,
  },
  {
    id: "vexa-cloud",
    title: "VEXA CLOUD",
    subtitle: "Infraestrutura & Escalabilidade",
    description: "Exploramos soluções tecnológicas modernas para disponibilizar serviços digitais escaláveis e eficientes.",
    icon: Cloud,
    badge: "Cloud & Ops",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    glowColor: "group-hover:border-emerald-400/40",
    accentColor: "from-emerald-400 to-sky-400",
    services: [
      "Soluções de alojamento dedicado",
      "Infraestrutura digital escalável",
      "Serviços e arquitetura em nuvem",
      "Integrações de APIs e ecossistemas",
      "Gestão e monitorização contínua",
    ],
    actionText: "Explorar VEXA Cloud",
    actionLink: "/solucoes#vexa-cloud",
  },
];

export default function DivisionsSection() {
  return (
    <section id="solucoes" className="py-14 sm:py-24 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="w-5 h-[1px] bg-white/20" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
              Áreas de Atuação
            </span>
            <span className="w-5 h-[1px] bg-white/20" />
          </div>
          <h2 className="font-sora text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            O que fazemos
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-inter">
            Estruturamos as nossas capacidades em três divisões complementares para responder com excelência aos desafios do ecossistema digital.
          </p>
        </div>

        {/* 3 Main Division Cards: Mobile Swipe Carousel & Desktop 3-Columns */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-8 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.id}
                className={`w-[84vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-center group relative rounded-2xl bg-[#111827] border border-blue-900/40 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-blue-800/60 hover:shadow-2xl hover:shadow-black ${
                  div.featured ? "ring-1 ring-white/20 bg-[#161820]" : ""
                }`}
              >
                {/* Featured division top tag */}
                {div.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-black text-[9px] font-extrabold tracking-[0.2em] uppercase shadow-md">
                    Destaque
                  </div>
                )}

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0A0D14] border border-blue-900/50 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FAFC] group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border border-blue-900/50 bg-white/[0.04] text-[#94A3B8]">
                      {div.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-sora text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-white transition-colors">
                    {div.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mb-2 sm:mb-3">
                    {div.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-inter">
                    {div.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 pt-3 sm:pt-4 border-t border-blue-900/30 mb-6 sm:mb-8">
                    {div.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#94A3B8] group-hover:text-white transition-colors">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div>
                  <Link
                    href={div.actionLink}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-full text-xs font-semibold text-[#F8FAFC] bg-[#0A0D14] border border-blue-900/50 hover:border-white hover:bg-white hover:text-black transition-all"
                  >
                    <span>{div.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-2">
          <span>Deslize para ver as 3 divisões</span>
          <span className="text-blue-400">→</span>
        </div>

      </div>
    </section>
  );
}

