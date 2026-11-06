import type { Metadata } from "next";
import Link from "next/link";
import { FolderGit2 } from "lucide-react";
import ProjectsGallery from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Galeria de Projetos & Portfólio | VEXA Technology Group",
  description:
    "Explore a galeria de websites desenvolvidos, aplicações, plataformas digitais e sistemas corporativos criados pela VEXA.",
};

export default function ProjetosPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0C0D0E]">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-blue-400">
                <FolderGit2 className="w-3.5 h-3.5" />
                Projetos & Portfólio
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Projetos que transformam ideias em <br className="hidden sm:inline" />
              <span className="text-gradient-silver">experiências digitais.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-inter">
              Conheça as soluções, websites, aplicações e plataformas demonstrativas que exemplificam o padrão visual, arquitetural e tecnológico do VEXA Technology Group.
            </p>

            <div className="inline-block p-3 rounded-2xl bg-[#141518] border border-white/[0.08] text-xs text-slate-400">
              Todos os projetos apresentados foram desenhados com princípios de engenharia limpa, design contemporâneo e velocidade de execução.
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 sm:py-20 relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGallery />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-sora text-2xl sm:text-4xl font-bold text-white">
            Gostou de algum dos nossos conceitos ou quer algo sob medida?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Podemos personalizar qualquer uma dessas soluções para a sua marca ou desenvolver um projeto exclusivo do zero.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 shadow-xl transition-all"
            >
              <span>Solicitar Orçamento</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
