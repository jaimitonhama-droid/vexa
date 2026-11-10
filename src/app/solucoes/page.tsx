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
    accent: "text-blue-400 border-blue-400/20 bg-blue-400/10",
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
    accent: "text-sky-400 border-sky-400/20 bg-sky-400/10",
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
    accent: "text-indigo-400 border-indigo-400/20 bg-indigo-400/10",
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
    accent: "text-sky-400 border-sky-400/20 bg-sky-400/10",
  },
];

export default function SolucoesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0D14]">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="flex items-center gap-1.5 text-blue-400">
                <Zap className="w-3.5 h-3.5" />
                Capacidades de Engenharia
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Soluções tecnológicas para <br className="hidden sm:inline" />
              <span className="text-gradient-silver">potencializar o seu negócio.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-inter">
              Desenvolvemos produtos digitais e plataformas sob medida que combinam estética sóbria, rigor técnico e foco em resultados operacionais.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              {["Websites", "Aplicações Web", "E-commerce", "Sistemas Sob Medida", "Cloud & Suporte"].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3.5 py-1 rounded-full bg-[#111827] border border-blue-900/40 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 sm:py-20 relative border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-3xl bg-[#111827] border border-blue-900/40 p-6 sm:p-10 transition-all hover:border-white/[0.18] shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Service Core Info */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "" : "lg:order-2"}`}>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${service.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                          {service.category}
                        </span>
                        <h2 className="font-sora text-2xl sm:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-inter">
                      {service.description}
                    </p>

                    {/* Benefits Grid */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-sora font-semibold uppercase tracking-wider text-white">
                        Principais Vantagens & Benefícios:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0A0D14] border border-blue-900/20 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Development Process */}
                    <div className="p-4 rounded-xl bg-[#0A0D14] border border-blue-900/30">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                        Processo de Desenvolvimento:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {service.process}
                      </p>
                    </div>

                    {/* Request budget CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/orcamento?servico=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-black bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg"
                      >
                        <span>Solicitar Orçamento para {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Visual Side Card */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="rounded-2xl bg-[#0A0D14] border border-blue-900/40 p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-blue-900/30">
                        <span className="text-xs font-mono text-slate-400">
                          vexa.{service.id}.config
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Disponível
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono text-slate-400">
                        <div className="p-2.5 rounded-lg bg-[#111827] border border-blue-900/20">
                          <span className="text-blue-400">divisão:</span> &quot;{service.category}&quot;
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#111827] border border-blue-900/20">
                          <span className="text-sky-400">padrão_entrega:</span> &quot;Engenharia de precisão&quot;
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#111827] border border-blue-900/20">
                          <span className="text-emerald-400">suporte:</span> &quot;Acompanhamento VEXA&quot;
                        </div>
                      </div>

                      <div className="pt-2 border-t border-blue-900/30 text-xs text-slate-400 flex items-center justify-between">
                        <span>Padrão Internacional</span>
                        <Sparkles className="w-4 h-4 text-blue-400" />
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
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-sora text-2xl sm:text-4xl font-bold text-white">
            Precisa de uma solução sob medida para a sua empresa?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Apresente-nos as necessidades da sua operação e desenharemos a melhor estratégia tecnológica para o seu caso.
          </p>
          <div className="pt-2">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-blue-600 hover:bg-blue-500 text-white shadow-xl transition-all"
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
