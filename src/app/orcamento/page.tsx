import { Suspense } from "react";
import type { Metadata } from "next";
import { Calculator, ShieldCheck, Zap, Clock } from "lucide-react";
import BudgetForm from "./BudgetForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | VEXA Technology Group",
  description:
    "Solicite um orçamento sob medida para o desenvolvimento do seu website, aplicação digital, sistema de gestão ou aquisição de plataformas prontas da VEXA.",
};

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0D14]">
      
      {/* Hero Header */}
      <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-blue-400">
                <Calculator className="w-3.5 h-3.5" />
                Proposta Personalizada
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Transforme a sua visão em <br className="hidden sm:inline" />
              <span className="text-gradient-silver">um projeto de alta precisão.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-inter max-w-2xl mx-auto">
              Preencha o formulário para receber uma análise técnica sem compromisso, estimativa de investimento e cronograma claro de entrega.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-400" />
                Resposta em até 24h
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-400" />
                Proposta detalhada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-8 sm:py-16 relative">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="p-12 text-center text-sm text-slate-400 bg-[#111827] rounded-3xl border border-blue-900/40">
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
