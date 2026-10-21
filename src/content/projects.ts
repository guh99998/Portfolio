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
    slug: "evandro-piassa",
    title: "Evandro Piassa Corretor",
    problem:
      "Um corretor não tinha canal próprio para captar clientes e dependia só de indicação e rede social.",
    outcome: "Formulário que cai direto no WhatsApp",
    tags: ["React", "Vite", "TypeScript"],
    live: "https://evandropiassacorretor.com.br/",
    image: "/projects/evandro-piassa.jpg",
    status: "pronto",
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
