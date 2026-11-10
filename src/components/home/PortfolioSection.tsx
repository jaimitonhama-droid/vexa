import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderGit2, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function PortfolioSection() {
  const showcaseProjects = projectsData.slice(0, 4);

  return (
    <section id="portfolio" className="py-14 sm:py-20 relative overflow-hidden bg-[#0A0D14] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-[1px] bg-white/20" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#94A3B8] font-inter">
                Portfólio & Casos Reais
              </span>
            </div>
            <h2 className="font-sora text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Projetos que transformam ideias em experiências digitais.
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-inter">
              Conheça as nossas plataformas reais e websites operacionais com tecnologia de ponta e foco no utilizador.
            </p>
          </div>

          <div className="hidden sm:block">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F8FAFC] bg-[#111827] border border-blue-900/50 hover:border-white/[0.25] hover:bg-[#1E2638] transition-all"
            >
              <span>Ver Galeria Completa</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Grid: Mobile Touch Carousel (Snap-Scroll) & Desktop 4-Column Grid */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-5 pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {showcaseProjects.map((project) => {
            const isRealProject = Boolean(project.liveUrl);

            return (
              <div
                key={project.id}
                className={`w-[80vw] max-w-[300px] sm:w-auto sm:max-w-none shrink-0 snap-center group relative rounded-2xl bg-[#111827] border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black flex flex-col justify-between ${
                  isRealProject
                    ? "border-emerald-500/30 hover:border-emerald-400/50"
                    : "border-blue-900/40 hover:border-blue-800/60"
                }`}
              >
                {/* Project Visual Preview Thumbnail - Compact balanced height */}
                <div className="relative h-36 sm:h-44 w-full bg-[#0A0D14] overflow-hidden flex items-center justify-center border-b border-blue-900/30">
                  
                  {project.imageUrl ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <>
                      <div className="relative z-10 w-full max-w-[200px] rounded-lg bg-[#111827] border border-blue-900/50 shadow-lg p-3">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        </div>
                        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                      </div>
                    </>
                  )}

                  {/* Badge */}
                  <span
                    className={`absolute top-2.5 right-2.5 z-20 text-[9px] font-mono font-medium px-2 py-0.5 rounded-full backdrop-blur-md shadow-md border ${
                      isRealProject
                        ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/40"
                        : "bg-[#0A0D14]/80 text-[#94A3B8] border-blue-900/40"
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Project Info - Compact typography */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-semibold text-blue-400 font-mono uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#94A3B8]">
                        {project.division}
                      </span>
                    </div>

                    <h3 className="font-sora text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-white transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-inter line-clamp-2 mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-3 border-t border-blue-900/30">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
                      >
                        <span>Visitar Site ao Vivo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={`/projetos#${project.id}`}
                        className="w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-full text-xs font-semibold text-[#F8FAFC] bg-[#0A0D14] border border-blue-900/40 hover:border-blue-800/60 transition-colors"
                      >
                        <span>Visualizar Detalhes</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Swipe Indicator & Full Gallery Link */}
        <div className="flex sm:hidden items-center justify-between pt-3 px-1">
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <span>Deslize para o lado</span>
            <span className="text-blue-400">→</span>
          </span>
          <Link
            href="/projetos"
            className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
