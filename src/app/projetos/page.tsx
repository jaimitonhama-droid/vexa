import type { Metadata } from "next";
import Link from "next/link";
import { FolderGit2, Sparkles, Layers } from "lucide-react";
import ProjectsGallery from "./ProjectsGallery";

export const metadata: Metadata = {
  title: "Galeria de Projetos & Portfólio | VEXA Technology Group",
  description:
    "Explore a galeria de websites desenvolvidos, aplicações, plataformas digitais e sistemas corporativos criados pela VEXA.",
};

export default function ProjetosPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#26B8F2] tracking-wider uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Projetos & Portfólio</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Projetos que transformam ideias em <br className="hidden sm:inline" />
              <span className="text-gradient">experiências digitais.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9298AA] leading-relaxed font-inter">
              Conheça as soluções, websites, aplicações e plataformas demonstrativas que exemplificam o padrão visual, arquitetural e tecnológico do VEXA Technology Group.
            </p>

            <div className="inline-block p-3 rounded-2xl bg-[#171B2B]/60 border border-white/[0.08] text-xs text-[#9298AA]">
              Todos os projetos apresentados foram desenhados com princípios de código limpo, design contemporâneo e escalabilidade comprovada.
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGallery />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA]">
            Gostou de algum dos nossos conceitos ou quer algo sob medida?
          </h2>
          <p className="text-[#9298AA] text-base max-w-xl mx-auto">
            Podemos personalizar qualquer uma dessas soluções para a sua marca ou desenvolver um projeto exclusivo do zero.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-xl shadow-[#7657F6]/30 hover:opacity-95 transition-all"
            >
              <span>Solicitar Orçamento</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

