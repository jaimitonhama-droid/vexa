import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacidade e Termos de Uso | VEXA Technology Group",
  description:
    "Consulte as nossas diretrizes de privacidade, proteção de dados e termos de utilização e contratação de websites e produtos digitais da VEXA.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparência & Conformidade</span>
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Política de Privacidade & <br />
              <span className="text-gradient">Termos de Utilização</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9298AA] leading-relaxed font-inter">
              Conheça as nossas diretrizes de segurança, tratamento de informações e termos de contratação dos produtos e serviços do VEXA Technology Group.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal & Privacy Content */}
      <section className="py-16 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 1: Compromisso de Privacidade */}
          <div className="rounded-2xl bg-[#171B2B]/70 border border-white/[0.08] p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex items-center justify-center text-[#26B8F2]">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-[#F4F5FA]">
                1. Compromisso com a Privacidade
              </h2>
            </div>
            <p className="text-sm text-[#9298AA] leading-relaxed">
              O <strong>VEXA Technology Group</strong> valoriza e respeita a privacidade de todos os seus utilizadores, clientes e parceiros. Esta política explica de forma clara como recolhemos, utilizamos e protegemos as informações fornecidas através dos nossos formulários de contacto, pedidos de orçamento e plataformas digitais.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-[#F4F5FA]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Não partilhamos, vendemos ou divulgamos dados pessoais ou corporativos a terceiros.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#F4F5FA]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Os dados inseridos nos formulários são utilizados exclusivamente para responder ao seu pedido e prestar os serviços solicitados.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Propriedade e Código dos Sites */}
          <div className="rounded-2xl bg-[#171B2B]/70 border border-white/[0.08] p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex items-center justify-center text-[#7657F6]">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-[#F4F5FA]">
                2. Propriedade Intelectual & Entrega de Projetos
              </h2>
            </div>
            <p className="text-sm text-[#9298AA] leading-relaxed">
              Ao adquirir um dos nossos websites prontos (turnkey) ou contratar um projeto sob medida:
            </p>
            <ul className="space-y-2.5 text-xs text-[#9298AA] pt-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7657F6] shrink-0 mt-1.5" />
                <span><strong>Propriedade do Cliente:</strong> O domínio, conteúdos, logótipo e a instância instalada passam a ser de gestão e benefício direto da sua empresa ou negócio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7657F6] shrink-0 mt-1.5" />
                <span><strong>Configuração e Domínio:</strong> Realizamos a configuração completa da hospedagem, domínio próprio e meios de pagamento (como o e-M-Pesa ou WhatsApp) conforme o pacote contratado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7657F6] shrink-0 mt-1.5" />
                <span><strong>Suporte e Manutenção:</strong> A VEXA disponibiliza acompanhamento e garantia técnica para assegurar a continuidade operacional e a segurança do código entregue.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Segurança de Pagamentos e Transações */}
          <div className="rounded-2xl bg-[#171B2B]/70 border border-white/[0.08] p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-sora text-xl sm:text-2xl font-bold text-[#F4F5FA]">
                3. Segurança nas Transações
              </h2>
            </div>
            <p className="text-sm text-[#9298AA] leading-relaxed">
              Para soluções integradas com pagamentos móveis (como <strong>e-M-Pesa</strong>) ou pedidos via <strong>WhatsApp</strong>, as transações financeiras são processadas diretamente entre o comprador e a respetiva operadora ou conta do comerciante. A VEXA não tem acesso aos fundos ou às chaves privadas dos utilizadores.
            </p>
          </div>

          {/* Section 4: Contacto Oficial */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#171B2B] to-[#121622] border border-white/[0.08] space-y-4">
            <h3 className="font-sora text-lg font-bold text-[#F4F5FA]">
              Dúvidas sobre a nossa política?
            </h3>
            <p className="text-xs text-[#9298AA] leading-relaxed">
              Para qualquer questão sobre os nossos termos, privacidade ou para exercer qualquer direito sobre os seus dados, entre em contacto através dos nossos canais oficiais:
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
              <a
                href="mailto:contacto@vexa.tech"
                className="text-[#26B8F2] hover:underline"
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
          <div className="pt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#F4F5FA] bg-[#171B2B] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
            >
              <span>Voltar à Página Inicial</span>
              <ArrowRight className="w-4 h-4 text-[#7657F6]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

