"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShoppingBag } from "lucide-react";
import { productsData } from "@/data/products";

export default function ProductsCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === "all") return true;
    if (activeTab === "saas") return product.type === "saas";
    if (activeTab === "turnkey") return product.type === "turnkey-site";
    return true;
  });

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === "all"
              ? "bg-white text-black shadow-lg"
              : "bg-[#141518] text-slate-400 hover:text-white border border-white/[0.08]"
          }`}
        >
          Todos os Produtos ({productsData.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saas")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "saas"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "bg-[#141518] text-slate-400 hover:text-white border border-white/[0.08]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Produtos Proprietários (SaaS)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("turnkey")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "turnkey"
              ? "bg-sky-500 text-black font-bold shadow-lg shadow-sky-500/30"
              : "bg-[#141518] text-slate-400 hover:text-white border border-white/[0.08]"
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Sites & Plataformas Prontas ({productsData.filter(p => p.type === "turnkey-site").length})</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const isTurnkey = product.type === "turnkey-site";

          return (
            <div
              key={product.id}
              className="rounded-3xl bg-[#141518] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.2] hover:shadow-2xl hover:shadow-black/60 group"
            >
              <div>
                {/* Visual Header & Badges */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border ${
                      isTurnkey
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-sky-500/10 text-sky-400 border-sky-500/20"
                    }`}
                  >
                    {product.badge}
                  </span>

                  <span
                    className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${
                      product.status === "Disponível para Aquisição"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Product Name & Category */}
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                    {product.category}
                  </span>
                  <h3 className="font-sora text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mt-1">
                    {product.name}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-xs font-medium text-slate-300 mb-3">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter mb-6 line-clamp-3">
                  {product.description}
                </p>

                {/* Key Features Preview */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Destaques da Solução:
                  </span>
                  {product.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Pricing indication and CTAs */}
              <div className="pt-5 border-t border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">
                      {product.priceLabel || "Modalidade"}
                    </span>
                    <span className="font-sora font-bold text-sm text-white">
                      {product.priceValue || "Sob Consulta"}
                    </span>
                  </div>

                  <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Entrega Rápida
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/produtos/${product.id}`}
                    className="flex items-center justify-center py-2.5 px-3 rounded-full text-xs font-semibold text-slate-300 bg-[#0C0D0E] border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors"
                  >
                    Ver Detalhes
                  </Link>

                  <Link
                    href={`/orcamento?produto=${encodeURIComponent(product.name)}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-slate-200 transition-all shadow-md"
                  >
                    <span>{isTurnkey ? "Adquirir" : "Aderir"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
