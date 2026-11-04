import Link from "next/link";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-8 sm:pt-16 pb-14 sm:pb-24">
      {/* Background Tech Glow & Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-[#7657F6]/25 via-[#26B8F2]/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#26B8F2]/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7657F6]/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#171B2B]/90 border border-white/[0.08] shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26B8F2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26B8F2]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#26B8F2] font-inter">
            VEXA TECHNOLOGY GROUP
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sora text-3xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight text-[#F4F5FA] leading-[1.12] sm:leading-[1.08] max-w-4xl mx-auto">
          Construímos tecnologia para{" "}
          <span className="text-gradient">transformar ideias</span> em realidade.
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-xl text-[#9298AA] max-w-2xl mx-auto font-inter font-normal leading-relaxed">
          Desenvolvemos produtos digitais, plataformas e soluções tecnológicas que ajudam pessoas e empresas a evoluir.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          <Link
            href="/solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#5b3adb] hover:from-[#8468f7] hover:to-[#7657F6] shadow-lg shadow-[#7657F6]/30 hover:shadow-[#7657F6]/45 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explorar Soluções</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold text-[#F4F5FA] bg-[#171B2B] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#1f2438] transition-all hover:-translate-y-0.5"
          >
            <span>Conhecer os Nossos Produtos</span>
          </Link>
        </div>

        {/* Micro Stats / Highlights */}
        <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-3 sm:gap-12 border-t border-white/[0.06] max-w-lg mx-auto">
          <div>
            <p className="font-sora text-lg sm:text-2xl font-bold text-[#F4F5FA]">100%</p>
            <p className="text-[10px] sm:text-xs text-[#9298AA] mt-0.5 sm:mt-1">Arquitetura Moderna</p>
          </div>
          <div>
            <p className="font-sora text-lg sm:text-2xl font-bold text-[#7657F6]">Escalável</p>
            <p className="text-[10px] sm:text-xs text-[#9298AA] mt-0.5 sm:mt-1">Sistemas Robustos</p>
          </div>
          <div>
            <p className="font-sora text-lg sm:text-2xl font-bold text-[#26B8F2]">Global</p>
            <p className="text-[10px] sm:text-xs text-[#9298AA] mt-0.5 sm:mt-1">Visão Internacional</p>
          </div>
        </div>

      </div>
    </section>
  );
}
