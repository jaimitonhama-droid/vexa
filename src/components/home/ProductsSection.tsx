import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Calendar, Target, BarChart3, Lock, ShieldCheck } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow separator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7657F6]/15 via-[#26B8F2]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema Proprietário</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F5FA] tracking-tight">
            Produtos criados para <br className="hidden sm:inline" />
            <span className="text-gradient">fazer a diferença.</span>
          </h2>
          <p className="text-[#9298AA] text-base sm:text-lg leading-relaxed font-inter">
            Conheça os produtos digitais desenvolvidos pela VEXA para resolver problemas reais e melhorar experiências.
          </p>
        </div>

        {/* Featured Flagship Product: VYRON */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#171B2B] to-[#121622] border border-white/[0.1] shadow-2xl p-8 sm:p-12 lg:p-14 overflow-hidden max-w-5xl mx-auto">
          
          {/* Subtle decorative grid background inside card */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 space-y-8">
            
            {/* Top Badges & Status */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-[#7657F6]/15 text-[#7657F6] border border-[#7657F6]/30">
                  Gestão Pessoal & Produtividade
                </span>
                <span className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Em Desenvolvimento
                </span>
              </div>

              <span className="text-xs font-mono text-[#9298AA]">
                Produto Proprietário VEXA
              </span>
            </div>

            {/* Product Title and Brand */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7657F6] to-[#26B8F2] flex items-center justify-center p-[2px] shadow-lg shadow-[#7657F6]/30 shrink-0">
                <div className="w-full h-full bg-[#0B0D12] rounded-[14px] flex items-center justify-center font-sora font-extrabold text-2xl text-white">
                  VY
                </div>
              </div>
              <div>
                <h3 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#F4F5FA] tracking-tight">
                  VYRON
                </h3>
                <p className="text-sm text-[#26B8F2] font-inter font-medium mt-0.5">
                  Plataforma Inteligente de Gestão Pessoal
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#9298AA] text-base sm:text-lg leading-relaxed font-inter max-w-3xl">
              Uma plataforma de gestão pessoal desenvolvida para ajudar os utilizadores a organizar tarefas, objetivos e atividades num único lugar, com foco na clareza mental, organização de prioridades e execução consistente.
            </p>

            {/* Confirmed Features Grid */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h4 className="text-xs font-sora font-semibold tracking-wider uppercase text-[#F4F5FA]">
                Principais Funcionalidades Confirmadas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#9298AA]">
                <div className="p-4 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04] space-y-2">
                  <Calendar className="w-5 h-5 text-[#7657F6]" />
                  <p className="font-sora font-semibold text-[#F4F5FA] text-sm">Planeamento Diário</p>
                  <p className="leading-relaxed">Organização inteligente com timeline e prioridades claras.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04] space-y-2">
                  <Target className="w-5 h-5 text-[#26B8F2]" />
                  <p className="font-sora font-semibold text-[#F4F5FA] text-sm">Metas & Hábitos</p>
                  <p className="leading-relaxed">Acompanhamento contínuo de objetivos e rotinas diárias.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04] space-y-2">
                  <BarChart3 className="w-5 h-5 text-[#7657F6]" />
                  <p className="font-sora font-semibold text-[#F4F5FA] text-sm">Métricas Visuais</p>
                  <p className="leading-relaxed">Estatísticas de produtividade e foco sem distrações.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04] space-y-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <p className="font-sora font-semibold text-[#F4F5FA] text-sm">Privacidade Total</p>
                  <p className="leading-relaxed">Criptografia e sincronização segura em nuvem.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/produtos/vyron"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] hover:opacity-95 shadow-lg shadow-[#7657F6]/25 transition-all"
              >
                <span>Conhecer Produto VYRON</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/produtos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.2] transition-all"
              >
                <span>Ver Todos os Produtos & Sites à Venda</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
