import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShoppingBag, ShieldCheck, Zap } from "lucide-react";
import ProductsCatalog from "./ProductsCatalog";

export const metadata: Metadata = {
  title: "Catálogo de Produtos & Soluções | VEXA Technology Group",
  description:
    "Explore os produtos digitais proprietários da VEXA (como a plataforma VYRON) e a nossa vitrine de websites e soluções completas prontas para operação.",
};

export default function ProdutosPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0C0D0E]">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-blue-400">
                <ShoppingBag className="w-3.5 h-3.5" />
                Produtos Digitais & Vitrine Turnkey
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Produtos digitais criados para <br className="hidden sm:inline" />
              <span className="text-gradient-silver">impulsionar resultados.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-inter">
              Conheça as nossas plataformas proprietárias e adquira modelos de websites e aplicações completas, prontas a operar sob o seu próprio domínio com suporte oficial VEXA.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Entrega com Domínio e Configuração
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400" />
                Código Moderno & Alta Velocidade
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Personalização com a Sua Marca
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Interactive Catalog */}
      <section className="py-14 sm:py-20 relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsCatalog />
        </div>
      </section>

      {/* Bottom Custom Development Banner */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-sora text-2xl sm:text-4xl font-bold text-white">
            Não encontrou o modelo exato para o seu segmento?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A VEXA também projeta soluções e websites 100% sob medida de acordo com os requisitos e processos únicos da sua empresa.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all shadow-lg"
            >
              <span>Solicitar Projeto Sob Medida</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
