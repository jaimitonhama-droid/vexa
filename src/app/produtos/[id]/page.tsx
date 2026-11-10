import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0D14]">
      
      {/* Top Breadcrumb & Navigation */}
      <section className="py-6 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Catálogo de Produtos</span>
          </Link>
        </div>
      </section>

      {/* Main Product Hero & Specifications */}
      <section className="py-14 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Product Details */}
            <div className="lg:col-span-7 space-y-7">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {product.category}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {product.status}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#111827] text-slate-400 border border-blue-900/40">
                  {product.badge}
                </span>
              </div>

              <div>
                <h1 className="font-sora text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-blue-400 font-medium font-inter">
                  {product.tagline}
                </p>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
                {product.description}
              </p>

              {/* Confirmed Features */}
              <div className="space-y-3 pt-4 border-t border-blue-900/30">
                <h3 className="font-sora text-xs font-semibold tracking-wider uppercase text-white">
                  Funcionalidades Incluídas na Solução:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#111827] border border-blue-900/30 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-4 border-t border-blue-900/30">
                <h3 className="font-sora text-xs font-semibold tracking-wider uppercase text-white">
                  Benefícios para o Negócio:
                </h3>
                <div className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-blue-900/30">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-2">
                  Stack Tecnológica:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#111827] border border-blue-900/40 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Acquisition / Request Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-[#111827] border border-blue-900/40 p-7 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-blue-900/30">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">
                      {product.priceLabel}
                    </span>
                    <span className="font-sora font-bold text-2xl text-white">
                      {product.priceValue}
                    </span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Garantia VEXA
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    O que está incluído no pacote:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {product.inclusions.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-blue-900/30 space-y-3">
                  <Link
                    href={`/orcamento?produto=${encodeURIComponent(product.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-black bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg"
                  >
                    <span>{isTurnkey ? "Solicitar Aquisição do Site" : "Solicitar Acesso Antecipado"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contactos"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-semibold text-slate-300 bg-[#0A0D14] border border-blue-900/40 hover:border-blue-800/60 hover:text-white transition-colors"
                  >
                    <span>Falar com a Equipa</span>
                  </Link>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 text-center leading-relaxed">
                  Todos os produtos incluem apoio na parametrização, garantia de funcionamento e código de padrão profissional.
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
