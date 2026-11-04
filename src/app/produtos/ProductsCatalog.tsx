"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShoppingBag, Layers, ExternalLink, Zap } from "lucide-react";
import { productsData, Product } from "@/data/products";

export default function ProductsCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === "all") return true;
    if (activeTab === "saas") return product.type === "saas";
    if (activeTab === "turnkey") return product.type === "turnkey-site";
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === "all"
              ? "bg-white text-black shadow-lg"
              : "bg-[#171B2B] text-[#9298AA] hover:text-white border border-white/[0.08]"
          }`}
        >
          Todos os Produtos ({productsData.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saas")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "saas"
              ? "bg-[#7657F6] text-white shadow-lg shadow-[#7657F6]/30"
              : "bg-[#171B2B] text-[#9298AA] hover:text-white border border-white/[0.08]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Produtos Proprietários (SaaS)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("turnkey")}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
            activeTab === "turnkey"
              ? "bg-[#26B8F2] text-black font-bold shadow-lg shadow-[#26B8F2]/30"
              : "bg-[#171B2B] text-[#9298AA] hover:text-white border border-white/[0.08]"
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Sites & Modelos Prontos para Venda ({productsData.filter(p => p.type === "turnkey-site").length})</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredProducts.map((product) => {
          const isTurnkey = product.type === "turnkey-site";

          return (
            <div
              key={product.id}
              className={`rounded-3xl bg-[#171B2B]/70 border border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.2] hover:shadow-2xl hover:shadow-black/70 group ${
                product.isFlagship ? "ring-1 ring-[#7657F6]/40 bg-[#171B2B]/90" : ""
              }`}
            >
              <div>
                {/* Visual Header & Badges */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                      isTurnkey
                        ? "bg-[#26B8F2]/10 text-[#26B8F2] border-[#26B8F2]/20"
                        : "bg-[#7657F6]/15 text-[#7657F6] border-[#7657F6]/30"
                    }`}
                  >
                    {product.badge}
                  </span>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      product.status === "Disponível para Aquisição"
                        ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                        : "bg-amber-400/10 text-amber-400 border-amber-400/20"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Product Name & Category */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-[#9298AA] uppercase tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="font-sora text-2xl font-bold text-[#F4F5FA] group-hover:text-white transition-colors mt-1">
                    {product.name}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-xs font-medium text-[#26B8F2] mb-3">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#9298AA] leading-relaxed font-inter mb-6 line-clamp-3">
                  {product.description}
                </p>

                {/* Key Features Preview */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  <span className="text-[11px] font-sora font-semibold text-[#F4F5FA] uppercase tracking-wider block mb-2">
                    Destaques da Solução:
                  </span>
                  {product.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#9298AA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#26B8F2] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Pricing indication and CTAs */}
              <div className="pt-6 border-t border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#9298AA] block">
                      {product.priceLabel || "Modalidade"}
                    </span>
                    <span className="font-sora font-bold text-sm text-[#F4F5FA]">
                      {product.priceValue || "Sob Consulta"}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Entrega Rápida
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/produtos/${product.id}`}
                    className="flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                  >
                    Ver Detalhes
                  </Link>

                  <Link
                    href={`/orcamento?produto=${encodeURIComponent(product.name)}`}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white shadow-md transition-all ${
                      isTurnkey
                        ? "bg-gradient-to-r from-[#26B8F2] to-[#7657F6] text-white hover:opacity-95"
                        : "bg-gradient-to-r from-[#7657F6] to-[#5b3adb] hover:opacity-95"
                    }`}
                  >
                    <span>{isTurnkey ? "Adquirir Site" : "Aderir"}</span>
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

