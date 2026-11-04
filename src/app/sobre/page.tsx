import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target, Shield, Sparkles, Cpu, Layers, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a VEXA | VEXA Technology Group",
  description:
    "Conheça a história, a visão de futuro, a missão e os valores que orientam o VEXA Technology Group no desenvolvimento de tecnologia e produtos digitais.",
};

const values = [
  {
    title: "Inovação",
    description: "Buscamos constantemente novas formas de resolver desafios complexos, adotando ferramentas e arquiteturas de ponta.",
  },
  {
    title: "Responsabilidade",
    description: "Compromisso inabalável com a estabilidade, confidencialidade e segurança de cada produto e linha de código.",
  },
  {
    title: "Qualidade",
    description: "Atenção meticulosa aos detalhes visuais, à performance e à engenharia sustentável de cada solução.",
  },
  {
    title: "Criatividade",
    description: "Transformamos ideias abstratas em experiências digitais funcionais, atraentes e memoráveis.",
  },
  {
    title: "Transparência",
    description: "Relações honestas, comunicação clara e processos de desenvolvimento transparentes com parceiros e clientes.",
  },
  {
    title: "Evolução Contínua",
    description: "Aprendizagem permanente e melhoria constante para construir produtos preparados para o futuro.",
  },
];

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section of About Page */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#7657F6] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identidade & Propósito</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Construir tecnologia com <br className="hidden sm:inline" />
              <span className="text-gradient">visão e impacto real.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9298AA] leading-relaxed font-inter">
              A VEXA nasceu com o compromisso de desenvolver produtos digitais próprios e soluções tecnológicas sob medida que transformam ideias e necessidades em ferramentas de alto desempenho.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & History Section */}
      <section className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-medium text-[#26B8F2] uppercase tracking-wider">
                Quem Somos
              </span>

              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA] tracking-tight">
                Uma empresa tecnológica pensada para o futuro.
              </h2>

              <p className="text-[#9298AA] text-base leading-relaxed font-inter">
                O <strong className="text-[#F4F5FA] font-medium">VEXA Technology Group</strong> é uma empresa focada em engenharia de software, design de interfaces e arquitetura digital. Operamos em duas grandes frentes complementares: o desenvolvimento e comercialização de produtos digitais próprios e a criação de websites, plataformas e aplicações sob medida para empresas e empreendedores.
              </p>

              <p className="text-[#9298AA] text-base leading-relaxed font-inter">
                Rejeitamos o modelo tradicional de soluções genéricas ou temporárias. Cada linha de código que escrevemos e cada produto que criamos é desenhado para durar, escalar e proporcionar uma experiência de utilização impecável.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div className="border-l-2 border-[#7657F6] pl-4">
                  <p className="font-sora text-base font-bold text-[#F4F5FA]">Produtos Próprios</p>
                  <p className="text-xs text-[#9298AA]">Plataformas como o VYRON</p>
                </div>
                <div className="border-l-2 border-[#26B8F2] pl-4">
                  <p className="font-sora text-base font-bold text-[#F4F5FA]">Soluções Digitais</p>
                  <p className="text-xs text-[#9298AA]">Desenvolvimento sob medida</p>
                </div>
              </div>
            </div>

            {/* Visual tech badge box */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#171B2B] border border-white/[0.08] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#7657F6]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex items-center justify-center text-[#7657F6]">
                    <Layers className="w-6 h-6" />
                  </div>

                  <h3 className="font-sora text-xl font-bold text-[#F4F5FA]">
                    Filosofia de Trabalho
                  </h3>

                  <p className="text-[#9298AA] text-sm leading-relaxed font-inter">
                    Acreditamos que o código de excelência nasce da interseção entre rigor técnico e design intuitivo. Não desenvolvemos por desenvolver; resolvemos dores reais de forma eficiente, eliminando excessos e priorizando o que verdadeiramente agrega valor aos utilizadores.
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#F4F5FA]">
                      <CheckCircle2 className="w-4 h-4 text-[#26B8F2]" />
                      <span>Foco absoluto na experiência do utilizador</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#F4F5FA]">
                      <CheckCircle2 className="w-4 h-4 text-[#7657F6]" />
                      <span>Arquitetura de sistemas moderna e escalável</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#F4F5FA]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Segurança e integridade de dados por predefinição</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="visao" className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#171B2B] to-[#121622] border border-[#7657F6]/30 p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-[#7657F6]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#7657F6]/15 text-[#7657F6] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium text-[#7657F6] uppercase tracking-wider">
                Direção Estratégica
              </span>
              <h3 className="font-sora text-2xl font-bold text-[#F4F5FA] mt-2 mb-4">
                A Nossa Visão
              </h3>
              <blockquote className="text-[#F4F5FA] text-lg font-medium leading-relaxed italic border-l-2 border-[#7657F6] pl-4 mb-4">
                &ldquo;Construir uma empresa tecnológica capaz de desenvolver produtos e soluções que criem valor e impacto positivo.&rdquo;
              </blockquote>
              <p className="text-sm text-[#9298AA] leading-relaxed font-inter">
                Almejamos crescer como um grupo tecnológico de referência, reconhecido pela qualidade dos nossos produtos proprietários e pela capacidade de transformar negócios através de software sob medida.
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#171B2B] to-[#121622] border border-[#26B8F2]/30 p-8 sm:p-10 shadow-xl relative overflow-hidden group hover:border-[#26B8F2]/60 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#26B8F2]/15 text-[#26B8F2] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium text-[#26B8F2] uppercase tracking-wider">
                Propósito Diário
              </span>
              <h3 className="font-sora text-2xl font-bold text-[#F4F5FA] mt-2 mb-4">
                A Nossa Missão
              </h3>
              <blockquote className="text-[#F4F5FA] text-lg font-medium leading-relaxed italic border-l-2 border-[#26B8F2] pl-4 mb-4">
                &ldquo;Transformar necessidades reais em soluções tecnológicas úteis, acessíveis e inovadoras.&rdquo;
              </blockquote>
              <p className="text-sm text-[#9298AA] leading-relaxed font-inter">
                Eliminamos complexidades desnecessárias e capacitamos pessoas e empresas com ferramentas digitais inteligentes que desbloqueiam novas oportunidades de crescimento e produtividade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-medium text-[#7657F6] uppercase tracking-wider">
              Cultura e Princípios
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#F4F5FA] tracking-tight">
              Os Valores que Guiam a VEXA
            </h2>
            <p className="text-[#9298AA] text-base leading-relaxed font-inter">
              Estes são os seis pilares éticos e operacionais que orientam todas as nossas decisões técnicas e comerciais.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="rounded-2xl bg-[#171B2B]/70 border border-white/[0.08] p-4 sm:p-7 hover:border-white/[0.2] transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs font-mono text-[#26B8F2]">0{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-[#7657F6]" />
                </div>
                <h3 className="font-sora text-sm sm:text-lg font-bold text-[#F4F5FA] mb-1.5 sm:mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9298AA] leading-relaxed font-inter line-clamp-3 sm:line-clamp-none">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA]">
            Quer construir o seu próximo projeto connosco?
          </h2>
          <p className="text-[#9298AA] text-base max-w-xl mx-auto">
            Estamos prontos para aplicar a nossa visão tecnológica no seu negócio ou ideia digital.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/orcamento"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-lg shadow-[#7657F6]/25 hover:opacity-95 transition-all"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/solucoes"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-[#F4F5FA] bg-[#171B2B] border border-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              Ver Soluções
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

