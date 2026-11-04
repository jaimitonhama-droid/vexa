import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Terminal, Layers, Box, Cpu } from "lucide-react";
import { productsData } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Produto Não Encontrado | VEXA Technology Group",
    };
  }

  return {
    title: `${product.name} | VEXA Technology Group`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const isTurnkey = product.type === "turnkey-site";

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Top Breadcrumb & Navigation */}
      <section className="py-8 bg-[#0B0D12] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9298AA] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Catálogo de Produtos</span>
          </Link>
        </div>
      </section>

      {/* Main Product Hero & Specifications */}
      <section className="py-16 lg:py-24 relative bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7657F6]/15 via-[#26B8F2]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Product Details */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#7657F6]/15 text-[#7657F6] border border-[#7657F6]/30">
                  {product.category}
                </span>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  {product.status}
                </span>
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#171B2B] text-[#9298AA] border border-white/[0.08]">
                  {product.badge}
                </span>
              </div>

              <div>
                <h1 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#F4F5FA] tracking-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-lg text-[#26B8F2] font-medium font-inter">
                  {product.tagline}
                </p>
              </div>

              <p className="text-[#9298AA] text-base sm:text-lg leading-relaxed font-inter">
                {product.description}
              </p>

              {/* Confirmed Features */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <h3 className="font-sora text-sm font-semibold tracking-wider uppercase text-[#F4F5FA]">
                  Funcionalidades Incluídas na Solução:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#171B2B]/60 border border-white/[0.06] text-xs text-[#9298AA]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#26B8F2] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <h3 className="font-sora text-sm font-semibold tracking-wider uppercase text-[#F4F5FA]">
                  Benefícios para o Negócio:
                </h3>
                <div className="space-y-2.5">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#F4F5FA]">
                      <div className="w-2 h-2 rounded-full bg-[#7657F6]" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-[#9298AA] block mb-2 uppercase">
                  Stack Tecnológica:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#0B0D12] border border-white/[0.08] text-xs font-mono text-[#F4F5FA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Acquisition / Request Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-[#171B2B] border border-white/[0.1] p-8 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono text-[#9298AA] uppercase block">
                      {product.priceLabel}
                    </span>
                    <span className="font-sora font-extrabold text-2xl text-[#F4F5FA]">
                      {product.priceValue}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    Garantia VEXA
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-sora font-semibold text-[#F4F5FA] uppercase tracking-wider">
                    O que está incluído no pacote:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#9298AA]">
                    {product.inclusions.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <Link
                    href={`/orcamento?produto=${encodeURIComponent(product.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-xl shadow-[#7657F6]/30 hover:opacity-95 transition-all"
                  >
                    <span>{isTurnkey ? "Solicitar Aquisição do Site" : "Solicitar Acesso Antecipado"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contactos"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#0B0D12] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
                  >
                    <span>Tirar Dúvidas com a Equipa</span>
                  </Link>
                </div>

                <div className="pt-2 text-[11px] text-[#9298AA] text-center leading-relaxed">
                  Todos os produtos incluem apoio de configuração, garantia de funcionamento e código de padrão profissional.
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

