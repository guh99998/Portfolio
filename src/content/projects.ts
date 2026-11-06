export type Project = {
  slug: string;
  title: string;
  /** Uma frase: o PROBLEMA que ele resolve, nao a lista de features. */
  problem: string;
  /** Resultado concreto, se houver numero. Aparece em destaque no card. */
  outcome?: string;
  tags: string[];
  live?: string;
  repo?: string;
  /** Links extras alem do "Ver ao vivo" (ex.: um linktree feito junto). */
  links?: { label: string; href: string }[];
  /** Caminho em public/. Sem imagem, o card usa um fundo tipografico. */
  image?: string;
  /**
   * "pronto"    -> entregue, no ar ou finalizado.
   * "andamento" -> em construcao agora. Ganha selo no card e vai pro fim
   *                da grade, sem precisar de secao separada.
   */
  status?: "pronto" | "andamento";
  /** true -> aparece na home. Os demais ficam so em /projetos. */
  featured?: boolean;
};

/**
 * A ORDEM E A VITRINE: os cards aparecem nesta ordem, na home (so os
 * `featured`) e em /projetos (todos).
 */
export const projects: Project[] = [
  {
    slug: "moneypilot",
    title: "moneyPilot",
    problem:
      "Controle financeiro pessoal gratuito e de código aberto: contas, orçamento mensal, contas a pagar e a receber, fatura de cartão e previsão de fluxo de caixa.",
    outcome: "API REST com JWT, testes com Postgres real e deploy em VPS com CI",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Testcontainers", "Docker"],
    live: "https://moneypilot.desenvolvedorgustavolopes.com.br/",
    repo: "https://github.com/guh99998/moneyPilot",
    image: "/projects/moneypilot.jpg",
    status: "pronto",
  },
  {
    slug: "crm-corretor",
    title: "CRM Corretor",
    problem:
      "Os corretores de uma imobiliária controlavam clientes e vendas em planilhas e conversas soltas. Hoje têm um painel único, com cada um vendo só o que é seu.",
    outcome: "Em produção, com perfis de admin, corretor e somente leitura (RLS no banco)",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Vercel"],
    image: "/projects/crm-corretor.jpg",
    status: "pronto",
  },
  {
    slug: "pref-scraper",
    title: "Pref Scraper",
    problem:
      "Consultar e baixar documentos de IPTU de centenas de imóveis no portal da prefeitura, um a um, levava horas. Hoje a planilha entra e os PDFs saem em minutos.",
    outcome: "Automação por terminal: consulta, download de PDFs e processamento em lote",
    tags: ["Python", "Selenium", "pandas", "Typer"],
    repo: "https://github.com/guh99998/pref-scraper",
    image: "/projects/pref-scraper.jpg",
    status: "pronto",
  },
  {
    slug: "jonathas-films",
    title: "Jonathas Films",
    problem:
      "Um profissional de audiovisual precisava de um portfólio próprio para mostrar o trabalho e captar lead, sem depender de plataforma de terceiro.",
    outcome: "Lead cai direto no Trello, com Pixel da Meta pra rodar tráfego",
    tags: ["React", "Vite", "TypeScript", "Web3Forms", "Trello API", "Meta Pixel"],
    live: "https://jonathasfilms.com.br/",
    image: "/projects/jonathas-films.jpg",
    status: "pronto",
    featured: true,
  },
  {
    slug: "site-psicologo",
    title: "José Carlos Magalhães Antônio",
    problem:
      "Um profissional de saúde precisava de um espaço próprio e sóbrio para ser encontrado, sem depender de rede social.",
    tags: ["React", "Vite", "TypeScript"],
    live: "https://psicologojosemagalhaes.com.br/",
    image: "/projects/site-psicologo.jpg",
    status: "pronto",
    featured: true,
  },
  {
    slug: "lucas-messias",
    title: "Lucas Messias",
    problem:
      "Um mentor de vendedores do Mercado Livre precisava de um site que mostrasse resultados e alunos e levasse o público das redes até a mentoria.",
    outcome: "Site da mentoria + linktree próprio no domínio dele",
    tags: ["React", "Vite", "TypeScript"],
    live: "https://lucasmessiasmentor.com.br/",
    links: [{ label: "Linktree", href: "https://links.lucasmessiasmentor.com.br/" }],
    image: "/projects/lucas-messias.jpg",
    status: "pronto",
    featured: true,
  },
  {
    slug: "wallace-pinheiro",
    title: "Wallace Pinheiro · Grupo Alyon",
    problem:
      "Um consultor de marketplaces precisava de um site que provasse resultado e levasse o visitante direto para a conversa no WhatsApp, além de uma página de links para as redes.",
    outcome: "Site institucional + página de links própria no domínio da agência",
    tags: ["React", "Vite", "TypeScript", "SSG", "Cloudflare"],
    live: "https://grupoalyon.com.br/",
    links: [{ label: "Página de links", href: "https://links.grupoalyon.com.br/" }],
    image: "/projects/wallace-pinheiro.jpg",
    status: "pronto",
  },
  {
    slug: "imobiliaria-modelo",
    title: "Site modelo para imobiliária",
    problem:
      "Uma imobiliária precisava de um site com busca de imóveis e um painel próprio para cadastrar o estoque e acompanhar os clientes, sem depender de portal.",
    outcome: "Painel com cadastro de imóveis, CRM de clientes e contratos prontos",
    tags: ["Django", "Python", "HTMX", "Tailwind", "PostgreSQL"],
    live: "https://imobiliaria.desenvolvedorgustavolopes.com.br/",
    repo: "https://github.com/guh99998/imob-site",
    image: "/projects/imobiliaria-modelo.jpg",
    status: "pronto",
  },
  {
    slug: "sapien",
    title: "Sapien",
    problem:
      "Assistente que roda 100% no computador, sem API paga e sem enviar dado para fora, e responde perguntas de trabalho citando o arquivo de origem. Os números vêm de SQL executado, não do texto do modelo.",
    tags: ["Python", "Ollama", "RAG", "Chroma", "DuckDB", "Streamlit"],
    repo: "https://github.com/guh99998/sapien",
    status: "andamento",
  },
];

/** Prontos primeiro, em andamento depois. Usado em /projetos e no terminal. */
export const sortedProjects = [
  ...projects.filter((p) => p.status !== "andamento"),
  ...projects.filter((p) => p.status === "andamento"),
];

/** Os destaques da home. */
export const featuredProjects = sortedProjects.filter((p) => p.featured);

/** O link "ver mais projetos" so aparece se existir mais coisa. */
export const hasMoreProjects = sortedProjects.length > featuredProjects.length;
