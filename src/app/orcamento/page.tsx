import { Suspense } from "react";
import type { Metadata } from "next";
import { Calculator, Sparkles, ShieldCheck, Zap, Clock } from "lucide-react";
import BudgetForm from "./BudgetForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | VEXA Technology Group",
  description:
    "Solicite um orçamento sob medida para o desenvolvimento do seu website, aplicação digital, sistema de gestão ou aquisição de templates prontos da VEXA.",
};

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-10 sm:py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-[10px] sm:text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
              <Calculator className="w-3.5 h-3.5" />
              <span>Proposta Personalizada</span>
            </div>

            <h1 className="font-sora text-2xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Transforme a sua visão em <br className="hidden sm:inline" />
              <span className="text-gradient">um projeto de alta precisão.</span>
            </h1>

            <p className="text-xs sm:text-lg text-[#9298AA] leading-relaxed font-inter max-w-2xl mx-auto">
              Preencha o formulário para receber uma análise técnica sem compromisso, estimativa de investimento e cronograma.
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-[#9298AA]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#26B8F2]" />
                Resposta em &lt; 24h
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#7657F6]" />
                Proposta detalhada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-8 sm:py-16 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="p-12 text-center text-sm text-[#9298AA] bg-[#171B2B] rounded-3xl border border-white/[0.08]">
              A carregar formulário de orçamento...
            </div>
          }>
            <BudgetForm />
          </Suspense>
        </div>
      </section>

    </div>
  );
}

