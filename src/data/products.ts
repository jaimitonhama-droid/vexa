export interface Product {
  id: string;
  name: string;
  category: string;
  type: "saas" | "turnkey-site" | "system";
  badge: string;
  status: "Em Desenvolvimento" | "Disponível para Aquisição" | "Acesso Antecipado";
  tagline: string;
  description: string;
  priceLabel?: string;
  priceValue?: string;
  accentColor: string;
  features: string[];
  benefits: string[];
  techStack: string[];
  inclusions: string[];
  demoUrl?: string;
  isFlagship?: boolean;
}

export const productsData: Product[] = [
  {
    id: "myro",
    name: "MYRO • Entretenimento & Streaming",
    category: "Plataforma de Streaming Multimídia",
    type: "turnkey-site",
    badge: "Plataforma Pronta no Ar",
    status: "Disponível para Aquisição",
    tagline: "Plataforma impecável de streaming completo com filmes, músicas e desenhos animados.",
    description:
      "A solução mais completa e sofisticada de entretenimento multimídia. Permite disponibilizar filmes, reprodutor de músicas, séries e desenhos animados com interface fluida estilo Netflix, player ultrarrápido e alta retenção de público.",
    priceLabel: "Plataforma Streaming Turnkey",
    priceValue: "Sob Consulta",
    accentColor: "from-red-600 via-rose-700 to-black",
    demoUrl: "https://myro-entretenimento.vercel.app/",
    features: [
      "Catálogo completo de filmes com reprodutor em alta definição",
      "Módulo de músicas com player integrado e playlists",
      "Secção dedicada a desenhos animados e conteúdo infantil",
      "Interface cinematográfica dark otimizada para telemóveis e Smart TVs",
      "Carregamento imediato sem travamentos",
    ],
    benefits: [
      "Plataforma completa e testada pronta para ser ativada sob a sua marca",
      "Alta capacidade de engajamento e retenção de utilizadores",
      "Arquitetura escalável para milhares de acessos simultâneos",
    ],
    techStack: ["Next.js", "Media Streaming", "Tailwind CSS", "Vercel"],
    inclusions: [
      "Instalação no seu domínio próprio",
      "Personalização do logótipo e identidade visual",
      "Configuração de servidores e CDN de alta performance",
      "Garantia e suporte contínuo VEXA",
    ],
  },
  {
    id: "wandra",
    name: "Wandra • Sabedoria Digital",
    category: "Plataforma de Cursos & E-books",
    type: "turnkey-site",
    badge: "Plataforma Pronta no Ar",
    status: "Disponível para Aquisição",
    tagline: "Plataforma completa de venda de livros, e-books e vídeo-aulas com pagamentos integrados via e-M-Pesa.",
    description:
      "Solução completa de portal educacional e e-commerce de infoprodutos já em funcionamento. Permite cadastrar cursos em vídeo, livros físicos e digitais com pagamentos instantâneos via e-M-Pesa e painel de controlo completo.",
    priceLabel: "Plataforma Completa Turnkey",
    priceValue: "Sob Consulta",
    accentColor: "from-amber-400 via-[#7657F6] to-[#26B8F2]",
    demoUrl: "https://wandra-cursos.vercel.app/",
    features: [
      "Venda e entrega automatizada de livros digitais e e-books",
      "Player de vídeo-aulas e cursos integrado para alunos",
      "Integração com pagamentos instantâneos locais (e-M-Pesa)",
      "Painel administrativo dedicado para gestão de produtos e vendas",
      "Autenticação de utilizadores, carrinho e biblioteca pessoal",
    ],
    benefits: [
      "Comece a faturar vendendo conhecimento e infoprodutos imediatamente",
      "Recebimento direto e instantâneo no e-M-Pesa sem intermediários caros",
      "Plataforma veloz e 100% responsiva para telemóveis",
    ],
    techStack: ["Next.js", "React", "e-Pesa API", "Tailwind CSS", "Vercel"],
    inclusions: [
      "Instalação completa sob o seu domínio próprio",
      "Configuração da sua conta e-M-Pesa para recebimentos diretos",
      "Personalização do logótipo, cores e catálogo inicial",
      "Suporte técnico dedicado VEXA",
    ],
  },
  {
    id: "lara-fashion",
    name: "LARA FASHION • Loja Virtual",
    category: "E-commerce de Moda & Vestuário",
    type: "turnkey-site",
    badge: "Loja Pronta no Ar",
    status: "Disponível para Aquisição",
    tagline: "Loja virtual elegante para moda feminina com catálogo de produtos e vendas automáticas pelo WhatsApp.",
    description:
      "Modelo completo de loja virtual já em funcionamento para marcas de roupas, calçados e acessórios. Permite expor peças com fotos atraentes, tabela de preços em Meticais (MT) e envio de pedidos direto para o WhatsApp do lojista.",
    priceLabel: "Loja Completa Turnkey",
    priceValue: "Sob Consulta",
    accentColor: "from-pink-500 via-[#7657F6] to-amber-400",
    demoUrl: "https://lara-fashion.vercel.app/",
    features: [
      "Catálogo elegante organizado por categorias (roupas, sapatilhas, etc.)",
      "Página de produto com galeria de fotos e tamanhos disponíveis",
      "Botão flutuante e checkout direto conectado ao WhatsApp",
      "Configuração de moeda local (Meticais - MT)",
      "Carregamento instantâneo no telemóvel dos clientes",
    ],
    benefits: [
      "Ideal para lojistas de vestuário que querem vender online sem complicação",
      "Sem comissões por venda: o pagamento cai direto na sua conta",
      "Design refinado que valoriza as peças e transmite profissionalismo",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "WhatsApp Orders", "Vercel"],
    inclusions: [
      "Instalação no seu domínio próprio",
      "Personalização com o seu logótipo, cores e peças de roupa",
      "Configuração do WhatsApp de vendas da sua loja",
      "Apoio técnico e garantia VEXA",
    ],
  },
  {
    id: "xflix",
    name: "XFLIX MZ • Streaming Adulto +18",
    category: "Plataforma de Streaming & Vídeo",
    type: "turnkey-site",
    badge: "Plataforma Pronta no Ar",
    status: "Disponível para Aquisição",
    tagline: "Plataforma de entretenimento e streaming de vídeo de alta performance com player veloz estilo cinema dark.",
    description:
      "Solução completa de plataforma de streaming de vídeo com foco em alta retenção, catálogo multimídia, interface escura moderna e compatibilidade total com dispositivos móveis.",
    priceLabel: "Plataforma Streaming Turnkey",
    priceValue: "Sob Consulta",
    accentColor: "from-rose-600 via-red-700 to-black",
    demoUrl: "https://xflix-mz.vercel.app/",
    features: [
      "Streaming de vídeo com reprodução rápida e sem atrasos",
      "Design escuro estilo Netflix com destaque visual",
      "Classificação por categorias, tags e recomendações",
      "Totalmente otimizado para navegação mobile e ecrãs táteis",
      "Estrutura pronta para monetização e assinaturas",
    ],
    benefits: [
      "Engenharia de streaming para suportar tráfego intenso",
      "Experiência de cinema no bolso do utilizador",
      "Código limpo, seguro e com carregamento instantâneo",
    ],
    techStack: ["Next.js", "Video Streaming", "Tailwind CSS", "Vercel"],
    inclusions: [
      "Instalação completa sob domínio próprio",
      "Customização de categorias e layout",
      "Otimização de servidores e CDN de vídeo",
      "Garantia e suporte VEXA",
    ],
  },
  {
    id: "vyron",
    name: "VYRON",
    category: "Gestão Pessoal & Produtividade",
    type: "saas",
    badge: "Produto Proprietário",
    status: "Em Desenvolvimento",
    tagline: "A plataforma inteligente de gestão pessoal desenvolvida pela VEXA.",
    description:
      "Uma plataforma de gestão pessoal desenvolvida para ajudar os utilizadores a organizar tarefas, objetivos e atividades num único lugar, com foco na clareza mental e na execução consistente.",
    priceLabel: "Subscrição SaaS",
    priceValue: "Acesso Antecipado",
    accentColor: "from-[#7657F6] to-[#26B8F2]",
    isFlagship: true,
    features: [
      "Planeamento diário inteligente com timeline visual",
      "Gestão de hábitos, rotinas e metas a curto e longo prazo",
      "Métricas e estatísticas visuais de foco e produtividade",
      "Centralização de notas, pastas e anexos criptografados",
      "Sincronização em nuvem e suporte multiplataforma",
    ],
    benefits: [
      "Redução da sobrecarga mental e aumento do foco diário",
      "Interface minimalista desenhada para eliminar distrações",
      "Segurança e privacidade de dados em primeiro lugar",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VEXA Cloud"],
    inclusions: [
      "Acesso completo à plataforma em nuvem",
      "Atualizações contínuas de funcionalidades",
      "Suporte técnico dedicado",
    ],
  },
];
