import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutDashboard,
  Layers,
  Code2,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções e Serviços | VEXA Technology Group",
  description:
    "Desenvolvimento web, aplicações personalizadas, lojas virtuais, sistemas de gestão, plataformas digitais e consultoria tecnológica de alto padrão.",
};

const services = [
  {
    id: "desenvolvimento-web",
    category: "VEXA Web",
    title: "Desenvolvimento Web",
    icon: Globe,
    description:
      "Criação de websites institucionais, landing pages de alta conversão e portais corporativos modernos, com carregamento ultrarrápido, design responsivo e excelente posicionamento em motores de busca.",
    benefits: [
      "Design exclusivo alinhado à identidade visual da sua marca",
      "Otimização avançada de performance e SEO técnico",
      "Experiência de navegação fluida em telemóveis e computadores",
      "Código limpo, seguro e estruturado para escalabilidade",
    ],
    process: "Briefing estratégico → Design UI/UX moderno → Desenvolvimento ágil → Testes de performance e publicação.",
    accent: "text-[#26B8F2] border-[#26B8F2]/20 bg-[#26B8F2]/10",
  },
  {
    id: "desenvolvimento-aplicacoes",
    category: "VEXA Digital",
    title: "Desenvolvimento de Aplicações",
    icon: Smartphone,
    description:
      "Desenvolvimento de aplicações web complexas, plataformas SaaS e soluções interativas pensadas para fluxos de utilizadores eficientes e arquiteturas de alta disponibilidade.",
    benefits: [
      "Interfaces ricas com feedback instantâneo ao utilizador",
      "Arquitetura escalável preparada para milhares de acessos simultâneos",
      "Integração contínua com bases de dados e APIs externas",
      "Gestão de estados eficiente e alta estabilidade de execução",
    ],
    process: "Levantamento de requisitos → Arquitetura de software → Desenvolvimento em sprints → Testes e homologação.",
    accent: "text-[#7657F6] border-[#7657F6]/20 bg-[#7657F6]/10",
  },
  {
    id: "lojas-virtuais",
    category: "VEXA Web",
    title: "Lojas Virtuais & E-commerce",
    icon: ShoppingCart,
    description:
      "Construção de plataformas de comércio eletrónico desenhadas para converter visitantes em clientes, com catálogos organizados, gestão de stock e navegação intuitiva.",
    benefits: [
      "Jornada de compra sem atritos com checkout simplificado",
      "Painel de controlo claro para gestão de produtos e pedidos",
      "Velocidade de carregamento otimizada para diminuir taxas de abandono",
      "Compatibilidade total com dispositivos móveis",
    ],
    process: "Definição do modelo de negócio → Estruturação do catálogo → Implementação do checkout → Lançamento.",
    accent: "text-amber-400 border-amber-400/20 bg-amber-400/10",
  },
  {
    id: "sistemas-gestao",
    category: "VEXA Digital",
    title: "Sistemas de Gestão & Dashboards",
    icon: LayoutDashboard,
    description:
      "Desenvolvimento de ferramentas de gestão sob medida para empresas: painéis administrativos, relatórios em tempo real, automação de rotinas e centralização de informações corporativas.",
    benefits: [
      "Automação de processos manuais e redução de retrabalho",
      "Visualização clara de métricas através de gráficos e indicadores",
      "Níveis de permissão e controlo de acessos por função de equipa",
      "Adaptação 100% fiel à realidade operacional do seu negócio",
    ],
    process: "Mapeamento operacional → Desenho de fluxos de dados → Construção do painel → Treino e implementação.",
    accent: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  },
  {
    id: "plataformas-digitais",
    category: "VEXA Digital",
    title: "Plataformas Digitais & Portais",
    icon: Layers,
    description:
      "Criação de ecossistemas digitais multiutilizador, áreas de membros, portais de clientes, redes de parceiros e sistemas colaborativos em nuvem.",
    benefits: [
      "Experiência personalizada para cada tipo de utilizador",
      "Módulos configuráveis para expansão progressiva de funcionalidades",
      "Comunicação integrada e notificações inteligentes",
      "Alta segurança e isolamento de dados de utilizadores",
    ],
    process: "Conceção do ecossistema → Prototipagem → Desenvolvimento dos módulos → Auditoria de segurança.",
    accent: "text-purple-400 border-purple-400/20 bg-purple-400/10",
  },
  {
    id: "consultoria-tecnologica",
    category: "VEXA Cloud",
    title: "Consultoria Tecnológica",
    icon: Code2,
    description:
      "Apoio consultivo especializado para empresas que pretendem modernizar as suas infraestruturas digitais, definir stacks tecnológicas eficientes ou avaliar a segurança e viabilidade técnica dos seus projetos.",
    benefits: [
      "Direcionamento técnico estratégico evitando gastos desnecessários",
      "Auditoria de código e identificação de gargalos de performance",
      "Planeamento de migração e arquitetura de software sustentável",
      "Alinhamento entre visão de negócio e viabilidade tecnológica",
    ],
    process: "Diagnóstico técnico → Relatório de melhorias → Plano de ação estratégico → Acompanhamento.",
    accent: "text-blue-400 border-blue-400/20 bg-blue-400/10",
  },
  {
    id: "manutencao-suporte",
    category: "VEXA Cloud",
    title: "Manutenção & Suporte Técnico",
    icon: Headphones,
    description:
      "Serviços contínuos de acompanhamento para assegurar que plataformas, websites e aplicações permaneçam estáveis, atualizadas e seguras contra vulnerabilidades.",
    benefits: [
      "Monitorização periódica de uptime e integridade dos servidores",
      "Aplicação de atualizações de segurança e correções proativas",
      "Otimização contínua de velocidade e bancos de dados",
      "Canal direto de suporte técnico para emergências operacionais",
    ],
    process: "Configuração do ambiente de monitorização → Rotinas preventivas → Atendimento contínuo.",
    accent: "text-[#26B8F2] border-[#26B8F2]/20 bg-[#26B8F2]/10",
  },
];

export default function SolucoesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0D12]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#7657F6]/20 via-[#26B8F2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B2B] border border-white/[0.08] text-xs font-semibold text-[#26B8F2] tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Capacidades de Engenharia</span>
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F5FA] tracking-tight leading-tight">
              Soluções tecnológicas para <br className="hidden sm:inline" />
              <span className="text-gradient">potencializar o seu negócio.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9298AA] leading-relaxed font-inter">
              Desenvolvemos produtos digitais e plataformas sob medida que combinam estética premium, rigor técnico e foco em resultados.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-[#9298AA]">
                Websites
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-[#9298AA]">
                Aplicações Web
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-[#9298AA]">
                E-commerce
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-[#9298AA]">
                Sistemas Sob Medida
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#171B2B] border border-white/[0.08] text-[#9298AA]">
                Cloud & Suporte
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 sm:py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-3xl bg-[#171B2B]/60 border border-white/[0.08] p-5 sm:p-12 transition-all hover:border-white/[0.18] shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Service Core Info */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${service.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-medium text-[#26B8F2] uppercase tracking-wider">
                          {service.category}
                        </span>
                        <h2 className="font-sora text-2xl sm:text-3xl font-bold text-[#F4F5FA]">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#9298AA] text-base leading-relaxed font-inter">
                      {service.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-sora font-semibold uppercase tracking-wider text-[#F4F5FA]">
                        Principais Vantagens & Benefícios:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0B0D12]/60 border border-white/[0.04] text-xs text-[#9298AA]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#26B8F2] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Development Process */}
                    <div className="p-4 rounded-xl bg-[#0B0D12]/40 border border-white/[0.04]">
                      <span className="text-xs font-sora font-semibold text-[#7657F6] uppercase tracking-wider block mb-1">
                        Processo de Desenvolvimento:
                      </span>
                      <p className="text-xs text-[#9298AA] leading-relaxed">
                        {service.process}
                      </p>
                    </div>

                    {/* Request budget CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/orcamento?servico=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-md shadow-[#7657F6]/20 hover:opacity-95 transition-all"
                      >
                        <span>Solicitar Orçamento para {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Visual Side Card */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="rounded-2xl bg-[#0B0D12] border border-white/[0.08] p-6 sm:p-8 space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="text-xs font-mono text-[#9298AA]">
                          vexa.{service.id}.config
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                          Disponível
                        </span>
                      </div>

                      <div className="space-y-3 text-xs font-mono text-[#9298AA]">
                        <div className="p-3 rounded-lg bg-[#171B2B]/40 border border-white/[0.04]">
                          <span className="text-[#7657F6]">divisão:</span> &quot;{service.category}&quot;
                        </div>
                        <div className="p-3 rounded-lg bg-[#171B2B]/40 border border-white/[0.04]">
                          <span className="text-[#26B8F2]">padrão_entrega:</span> &quot;Engenharia de precisão&quot;
                        </div>
                        <div className="p-3 rounded-lg bg-[#171B2B]/40 border border-white/[0.04]">
                          <span className="text-emerald-400">suporte:</span> &quot;Acompanhamento VEXA&quot;
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/[0.06] text-xs text-[#9298AA] flex items-center justify-between">
                        <span>Padrão Internacional</span>
                        <Sparkles className="w-4 h-4 text-[#7657F6]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Global Bottom CTA */}
      <section className="py-20 relative bg-[#0B0D12] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-[#F4F5FA]">
            Precisa de uma solução sob medida para a sua empresa?
          </h2>
          <p className="text-[#9298AA] text-base max-w-xl mx-auto">
            Apresente-nos as necessidades do seu projeto e desenharemos a melhor estratégia tecnológica para o seu caso.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7657F6] to-[#26B8F2] shadow-xl shadow-[#7657F6]/30 hover:opacity-95 transition-all"
            >
              <span>Solicitar Orçamento Sem Compromisso</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

