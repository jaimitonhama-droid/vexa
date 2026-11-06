export interface Project {
  id: string;
  title: string;
  category: "Websites" | "Aplicações" | "Plataformas" | "Sistemas";
  division: "VEXA Web" | "VEXA Digital" | "VEXA Cloud";
  description: string;
  tag: string;
  accent: string;
  deliverables: string[];
  metrics?: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "wandra",
    title: "Wandra • Sabedoria Digital",
    category: "Plataformas",
    division: "VEXA Digital",
    description:
      "Plataforma completa em pleno funcionamento para venda de livros, e-books e vídeo-aulas com catálogo multimídia, painel administrativo e pagamentos instantâneos via e-M-Pesa.",
    tag: "Projeto Real no Ar",
    accent: "from-blue-600 to-sky-400",
    deliverables: [
      "Venda de Livros & E-books Digitais",
      "Streaming de Vídeo-aulas Integrado",
      "Pagamentos Instantâneos via e-M-Pesa",
      "Painel de Administração Completo",
      "Área de Membros e Utilizadores",
    ],
    metrics: "100% Operacional no Ar",
    technologies: ["Next.js", "React", "e-Pesa API", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/projects/wandra.jpg",
    liveUrl: "https://wandra-cursos.vercel.app/",
  },
  {
    id: "lara-fashion",
    title: "LARA FASHION • Loja Virtual",
    category: "Websites",
    division: "VEXA Web",
    description:
      "Loja virtual moderna e sofisticada para marca de moda feminina e vestuário, com catálogo de produtos dinâmico, preços em Meticais (MT), carrinho de compras e integração direta com WhatsApp.",
    tag: "Projeto Real no Ar",
    accent: "from-rose-500 to-amber-500",
    deliverables: [
      "E-commerce Completo de Moda",
      "Catálogo Dinâmico (Roupas, Sapatilhas e Coleções)",
      "Preços e Moeda Local (Meticais - MT)",
      "Integração para Pedidos via WhatsApp",
      "Experiência Mobile First Fluida",
    ],
    metrics: "100% Funcional e Pronta a Operar",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp Orders", "Vercel"],
    imageUrl: "/images/projects/lara-fashion.jpg",
    liveUrl: "https://lara-fashion.vercel.app/",
  },
  {
    id: "xflix",
    title: "XFLIX MZ • Streaming Adulto +18",
    category: "Plataformas",
    division: "VEXA Digital",
    description:
      "Plataforma de entretenimento e streaming de vídeo adulto (+18) de alta performance, com interface estilo cinema dark, player veloz, navegação por categorias e reprodução contínua.",
    tag: "Projeto Real no Ar",
    accent: "from-rose-600 via-red-700 to-black",
    deliverables: [
      "Plataforma de Vídeo Streaming",
      "Player de Alta Performance Otimizado",
      "Interface Estilo Netflix Dark",
      "Navegação por Categorias e Tags",
      "Carregamento Instantâneo sem Travamentos",
    ],
    metrics: "Streaming Ultrarrápido",
    technologies: ["Next.js", "Video Streaming", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/projects/xflix.svg",
    liveUrl: "https://xflix-mz.vercel.app/",
  },
  {
    id: "myro",
    title: "MYRO • Entretenimento & Streaming",
    category: "Plataformas",
    division: "VEXA Digital",
    description:
      "Plataforma completa e impecável de entretenimento e streaming multimídia com filmes em alta definição, músicas, desenhos animados e séries para toda a família.",
    tag: "Projeto Real no Ar",
    accent: "from-red-600 via-rose-700 to-black",
    deliverables: [
      "Streaming de Filmes em Alta Resolução",
      "Reprodutor e Catálogo de Músicas",
      "Área de Desenhos Animados e Infantis",
      "Interface Cinematográfica Dark Fluida",
      "Compatibilidade Total com Telemóveis e Smart TVs",
    ],
    metrics: "100% Operacional no Ar",
    technologies: ["Next.js", "Media Streaming", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/projects/myro-banner.svg",
    liveUrl: "https://myro-entretenimento.vercel.app/",
  },
];
