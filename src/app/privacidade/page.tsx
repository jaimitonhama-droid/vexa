import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacidade e Termos de Uso | VEXA Technology Group",
  description:
    "Consulte as nossas diretrizes de privacidade, proteção de dados e termos de contratação de websites e produtos digitais da VEXA.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0C0D0E]">
      
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Transparência & Conformidade
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Política de Privacidade & <br />
              <span className="text-gradient-silver">Termos de Utilização</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-inter max-w-2xl mx-auto">
              Conheça as nossas diretrizes de segurança, tratamento de informações e termos de contratação dos produtos e serviços do VEXA Technology Group.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal & Privacy Content */}
      <section className="py-14 sm:py-20 relative border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section 1: Compromisso de Privacidade */}
          <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0C0D0E] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-white">
                1. Compromisso com a Privacidade
              </h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              O <strong className="text-white">VEXA Technology Group</strong> valoriza e respeita a privacidade de todos os seus utilizadores, clientes e parceiros. Esta política explica de forma clara como recolhemos, utilizamos e protegemos as informações fornecidas através dos nossos formulários de contacto, pedidos de orçamento e plataformas digitais.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Não partilhamos, vendemos ou divulgamos dados pessoais ou corporativos a terceiros.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Os dados inseridos nos formulários são utilizados exclusivamente para responder ao seu pedido e prestar os serviços solicitados.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Propriedade e Código dos Sites */}
          <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0C0D0E] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-white">
                2. Propriedade Intelectual & Entrega de Projetos
              </h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ao adquirir um dos nossos websites prontos (turnkey) ou contratar um projeto sob medida:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 pt-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong className="text-white">Propriedade do Cliente:</strong> O domínio, conteúdos, logótipo e a instância instalada passam a ser de gestão e benefício direto da sua empresa ou negócio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong className="text-white">Configuração e Domínio:</strong> Realizamos a configuração completa da hospedagem, domínio próprio e meios de contacto/pagamento conforme o pacote contratado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                <span><strong className="text-white">Suporte e Manutenção:</strong> A VEXA disponibiliza acompanhamento e garantia técnica para assegurar a continuidade operacional e a segurança do código entregue.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Segurança de Pagamentos e Transações */}
          <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0C0D0E] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-white">
                3. Segurança nas Transações
              </h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Para soluções integradas com pagamentos móveis (como <strong className="text-white">e-M-Pesa</strong>) ou pedidos via <strong className="text-white">WhatsApp</strong>, as transações financeiras são processadas diretamente entre o comprador e a respetiva operadora ou conta do comerciante. A VEXA não tem acesso aos fundos ou às chaves privadas dos utilizadores.
            </p>
          </div>

          {/* Section 4: Contacto Oficial */}
          <div className="p-7 sm:p-10 rounded-3xl bg-[#141518] border border-white/[0.08] space-y-4 shadow-xl">
            <h3 className="font-sora text-lg font-bold text-white">
              Dúvidas sobre a nossa política?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Para qualquer questão sobre os nossos termos, privacidade ou para exercer qualquer direito sobre os seus dados, entre em contacto através dos nossos canais oficiais:
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
              <a
                href="mailto:contacto@vexa.tech"
                className="text-blue-400 hover:underline"
              >
                contacto@vexa.tech
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href="https://wa.me/258872024095"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                WhatsApp Oficial: +258 87 202 4095
              </a>
            </div>
          </div>

          {/* Back Home CTA */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-[#141518] border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors"
            >
              <span>Voltar à Página Inicial</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
