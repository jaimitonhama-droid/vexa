import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target, Sparkles, Layers, CheckCircle2 } from "lucide-react";

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
    <div className="flex flex-col w-full overflow-hidden bg-[#0C0D0E]">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-blue-400">
                <Sparkles className="w-3.5 h-3.5" />
                Identidade & Propósito
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Construir tecnologia com <br className="hidden sm:inline" />
              <span className="text-gradient-silver">visão e impacto real.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-inter">
              A VEXA nasceu com o compromisso de desenvolver produtos digitais próprios e soluções tecnológicas sob medida que transformam necessidades em ferramentas de alto desempenho.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & History Section */}
      <section className="py-16 sm:py-20 relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                <span className="w-6 h-[1px] bg-blue-400/50" />
                <span>Quem Somos</span>
              </div>

              <h2 className="font-sora text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Uma empresa tecnológica pensada para a longevidade.
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
                O <strong className="text-white font-medium">VEXA Technology Group</strong> é uma empresa focada em engenharia de software, design de interfaces e arquitetura digital. Operamos em duas frentes complementares: o desenvolvimento e comercialização de produtos digitais próprios e a criação de websites, plataformas e aplicações sob medida para empresas e empreendedores.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
                Rejeitamos o modelo tradicional de soluções genéricas ou cópias pré-fabricadas. Cada produto que criamos é desenhado para durar, escalar e proporcionar uma experiência de utilização de padrão global.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="font-sora text-sm font-bold text-white">Produtos Próprios</p>
                  <p className="text-xs text-slate-400">Plataformas como o VYRON</p>
                </div>
                <div className="border-l-2 border-sky-400 pl-4">
                  <p className="font-sora text-sm font-bold text-white">Soluções Digitais</p>
                  <p className="text-xs text-slate-400">Desenvolvimento sob medida</p>
                </div>
              </div>
            </div>

            {/* Visual tech badge box */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1B20] border border-white/10 flex items-center justify-center text-blue-400 shadow-inner">
                    <Layers className="w-6 h-6" />
                  </div>

                  <h3 className="font-sora text-xl font-bold text-white">
                    Filosofia de Trabalho
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed font-inter">
                    Acreditamos que o código de excelência nasce da interseção entre rigor técnico e design intuitivo. Não desenvolvemos por desenvolver; resolvemos dores reais de forma eficiente, eliminando excessos e priorizando o que verdadeiramente gera valor.
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Foco absoluto na experiência do utilizador e acabamento</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Arquitetura de sistemas moderna, rápida e escalável</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Segurança e integridade operacional por predefinição</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="visao" className="py-16 sm:py-20 relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Vision Card */}
            <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1B20] border border-white/10 text-blue-400 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Direção Estratégica
              </span>
              <h3 className="font-sora text-2xl font-bold text-white mt-1.5 mb-4">
                A Nossa Visão
              </h3>
              <blockquote className="text-white text-base sm:text-lg font-medium leading-relaxed italic border-l-2 border-blue-500 pl-4 mb-4">
                &ldquo;Construir uma empresa tecnológica capaz de desenvolver produtos e soluções que criem valor e impacto positivo duradouro.&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter">
                Almejamos crescer como um grupo tecnológico de referência, reconhecido pela qualidade dos nossos produtos proprietários e pela capacidade de transformar negócios através de software sob medida.
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-3xl bg-[#141518] border border-white/[0.08] p-7 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#1A1B20] border border-white/10 text-sky-400 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Propósito Diário
              </span>
              <h3 className="font-sora text-2xl font-bold text-white mt-1.5 mb-4">
                A Nossa Missão
              </h3>
              <blockquote className="text-white text-base sm:text-lg font-medium leading-relaxed italic border-l-2 border-sky-400 pl-4 mb-4">
                &ldquo;Transformar necessidades reais em soluções tecnológicas úteis, acessíveis e inovadoras.&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter">
                Eliminamos complexidades desnecessárias e capacitamos pessoas e empresas com ferramentas digitais inteligentes que desbloqueiam novas oportunidades de crescimento e produtividade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span>Cultura & Princípios</span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Os Valores que Guiam a VEXA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
              Estes são os seis pilares que orientam todas as nossas decisões técnicas, de engenharia e comerciais.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="rounded-2xl bg-[#141518] border border-white/[0.08] p-5 sm:p-7 hover:border-white/[0.2] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-medium text-blue-400">0{idx + 1}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <h3 className="font-sora text-sm sm:text-lg font-bold text-white mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-inter line-clamp-3 sm:line-clamp-none">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-sora text-2xl sm:text-4xl font-bold text-white">
            Quer construir o seu próximo projeto connosco?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Estamos prontos para aplicar a nossa visão técnica e design de excelência no seu negócio ou ideia digital.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/orcamento"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all shadow-lg"
            >
              Pedir Orçamento
            </Link>
            <Link
              href="/solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-[#141518] border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-all"
            >
              Ver Soluções
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
