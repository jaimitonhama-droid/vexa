import Link from "next/link";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden pt-8 sm:pt-16 pb-14 sm:pb-24 bg-[#0A0D14]">
      {/* Sapphire ambient glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle top ambient horizon line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

      {/* Sapphire-tinted dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 sm:space-y-8 relative z-10">
        
        {/* Editorial Section Label (Estilo Humano / Barbearia) */}
        <div className="inline-flex items-center justify-center gap-3">
          <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#94A3B8] font-inter">
            VEXA Technology Group
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
        </div>

        {/* Main Headline */}
        <h1 className="font-sora text-3xl sm:text-5xl lg:text-[4.2rem] font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] sm:leading-[1.08] max-w-4xl mx-auto">
          Construímos tecnologia para{" "}
          <span className="text-gradient">transformar ideias</span> em realidade.
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg text-[#94A3B8] max-w-2xl mx-auto font-inter font-normal leading-relaxed">
          Desenvolvemos produtos digitais, plataformas e soluções tecnológicas sob medida que ajudam pessoas e empresas a evoluir.
        </p>

        {/* CTAs (Humanized Luxury Pill Buttons) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          <Link
            href="/solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explorar Soluções</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-[#111827] border border-white/[0.12] hover:border-white/[0.25] hover:bg-[#1E2638] transition-all hover:-translate-y-0.5"
          >
            <span>Conhecer os Nossos Produtos</span>
          </Link>
        </div>

        {/* Micro Stats / Highlights */}
        <div className="pt-6 sm:pt-10 grid grid-cols-3 gap-3 sm:gap-12 border-t border-blue-900/40 max-w-lg mx-auto">
          <div>
            <p className="font-sora text-xl sm:text-3xl font-extrabold text-white">100%</p>
            <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 font-medium">Arquitetura Moderna</p>
          </div>
          <div>
            <p className="font-sora text-xl sm:text-3xl font-extrabold text-white">Escalável</p>
            <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 font-medium">Sistemas Robustos</p>
          </div>
          <div>
            <p className="font-sora text-xl sm:text-3xl font-extrabold text-white">Global</p>
            <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 font-medium">Visão Internacional</p>
          </div>
        </div>

      </div>
    </section>
  );
}
