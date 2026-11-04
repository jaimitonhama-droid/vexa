import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShoppingBag, ShieldCheck, Zap } from "lucide-react";
import ProductsCatalog from "./ProductsCatalog";

export const metadata: Metadata = {
  title: "Catálogo de Produtos & Sites Prontos | VEXA Technology Group",
  description:
    "Explore os produtos digitais proprietários da VEXA (como a plataforma VYRON) e a nossa vitrine de websites e soluções completas prontas para venda.",
};

export default function ProdutosPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Produtos Digitais & Vitrine Turnkey</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Produtos digitais criados para <br className="hidden sm:inline" />
              <span className="text-gradient">impulsionar resultados.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9298AA] leading-relaxed font-inter">
              Conheça as nossas plataformas proprietárias e adquira modelos de websites e aplicações completas, prontas a operar sob o seu próprio domínio com suporte oficial VEXA.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#9298AA]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Entrega com Domínio e Configuração
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#26B8F2]" />
                Código Moderno & Performance Extrema
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7657F6]" />
                Personalização com a Sua Marca
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Interactive Catalog */}
      <section className="py-16 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsCatalog />
        </div>
      </section>

      {/* Bottom Custom Development Banner */}
      <section className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA]">
            Não encontrou o modelo exato para o seu segmento?
          </h2>
          <p className="text-[#9298AA] text-base max-w-xl mx-auto">
            A VEXA também projeta soluções e websites 100% sob medida de acordo com os requisitos e processos únicos da sua empresa.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-xl shadow-[#7657F6]/30 hover:opacity-95 transition-all"
            >
              <span>Solicitar Projeto Sob Medida</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

