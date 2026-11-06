import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, Target, BarChart3, Lock } from "lucide-react";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 sm:py-24 relative overflow-hidden bg-[#0C0D0E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="flex items-center gap-1.5 text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              Ecossistema Proprietário
            </span>
            <span className="w-8 h-[1px] bg-white/20" />
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Produtos criados para <br className="hidden sm:inline" />
            <span className="text-gradient-silver">fazer a diferença.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
            Conheça os produtos digitais desenvolvidos pela VEXA para resolver problemas reais e potencializar resultados operacionais.
          </p>
        </div>

        {/* Featured Flagship Product: VYRON */}
        <div className="relative rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 lg:p-12 overflow-hidden max-w-5xl mx-auto shadow-2xl">
          
          <div className="relative z-10 space-y-8">
            
            {/* Top Badges & Status */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Gestão Pessoal & Produtividade
                </span>
                <span className="text-xs font-medium px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Em Desenvolvimento
                </span>
              </div>

              <span className="text-xs text-slate-400">
                Produto Proprietário VEXA
              </span>
            </div>

            {/* Product Title and Brand */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1A1B20] border border-white/10 flex items-center justify-center font-sora font-extrabold text-xl text-white shrink-0 shadow-inner">
                VY
              </div>
              <div>
                <h3 className="font-sora text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  VYRON
                </h3>
                <p className="text-sm text-blue-400 font-inter font-medium mt-0.5">
                  Plataforma Inteligente de Gestão Pessoal
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter max-w-3xl">
              Uma plataforma de gestão pessoal desenvolvida para ajudar os utilizadores a organizar tarefas, objetivos e rotinas num único lugar, com foco na clareza mental, organização de prioridades e execução consistente.
            </p>

            {/* Confirmed Features Grid */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h4 className="text-xs font-sora font-semibold tracking-wider uppercase text-slate-400">
                Principais Funcionalidades Confirmadas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-400">
                <div className="p-4 rounded-2xl bg-[#0C0D0E] border border-white/[0.06] space-y-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <p className="font-sora font-semibold text-white text-sm">Planeamento Diário</p>
                  <p className="leading-relaxed">Organização com timeline e prioridades claras.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0C0D0E] border border-white/[0.06] space-y-2">
                  <Target className="w-5 h-5 text-sky-400" />
                  <p className="font-sora font-semibold text-white text-sm">Metas & Hábitos</p>
                  <p className="leading-relaxed">Acompanhamento contínuo de objetivos e rotinas.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0C0D0E] border border-white/[0.06] space-y-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <p className="font-sora font-semibold text-white text-sm">Métricas Visuais</p>
                  <p className="leading-relaxed">Estatísticas de produtividade e foco sem ruído.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0C0D0E] border border-white/[0.06] space-y-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <p className="font-sora font-semibold text-white text-sm">Privacidade Total</p>
                  <p className="leading-relaxed">Criptografia e sincronização segura em nuvem.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/produtos/vyron"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all"
              >
                <span>Conhecer Produto VYRON</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/produtos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 bg-[#1A1B20] border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-all"
              >
                <span>Ver Todos os Produtos & Soluções</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
