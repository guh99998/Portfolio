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
  /** Caminho em public/. Sem imagem, o card usa um fundo tipografico. */
  image?: string;
  /**
   * "pronto"    -> entregue, no ar ou finalizado.
   * "andamento" -> em construcao agora. Ganha selo no card e vai pro fim
   *                da grade, sem precisar de secao separada.
   */
  status?: "pronto" | "andamento";
};

/**
 * A ORDEM E A VITRINE. Sites primeiro, porque e o servico que voce vende
 * de fato pra fora — quem chega procurando landing page ve o trabalho dele
 * antes de qualquer outra coisa. Automacao e dados logo atras, academico
 * no fim.
 *
 * TODO: adicione aqui os projetos que voce esta construindo agora, com
 * status: "andamento".
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
  {
    slug: "site-psicologo",
    title: "José Carlos Magalhães Antônio",
    problem:
      "Um profissional de saúde precisava de um espaço próprio e sóbrio para ser encontrado, sem depender de rede social.",
    tags: ["React", "Vite", "TypeScript"],
    live: "https://psicologojosemagalhaes.com.br/",
    image: "/projects/site-psicologo.jpg",
    status: "pronto",
  },
  {
    slug: "pref-scraper",
    title: "pref-scraper",
    problem:
      "A baixa manual de guias de IPTU, imóvel por imóvel no site da prefeitura, consumia cerca de uma semana de trabalho a cada rodada.",
    outcome: "De ~1 semana para minutos",
    tags: ["Python", "Selenium", "Requests"],
    repo: "https://github.com/guh99998/pref-scraper",
    status: "pronto",
  },
  {
    slug: "projecao-recebimentos",
    title: "Projeção de Recebimentos",
    // TODO: me manda o vídeo que eu coloco no card no lugar do bloco de texto.
    problem:
      "Saber quanto a empresa vai receber nos próximos meses dependia de montar a conta na mão, toda vez, sem confiança no resultado.",
    outcome: "Projeção calculada sobre a base inteira",
    tags: ["Python", "Pandas", "NumPy"],
    // Projeto interno — sem link publico.
    status: "pronto",
  },
  {
    slug: "conciliacao-titulos",
    title: "Conciliação de títulos financeiros",
    problem:
      "Uma base de ~30 mil títulos precisava ser unificada por parceiro e conferida na mão para descobrir quais ainda não tinham reajuste aplicado.",
    outcome: "Reajustes e boletos gerados sem conferência manual",
    tags: ["Python", "Automação", "ERP"],
    // Projeto interno da empresa — sem link publico, e tudo bem.
    status: "pronto",
  },
  {
    slug: "moneypilot",
    title: "moneyPilot",
    problem:
      "Controlar gastos em planilha depende de lembrar de anotar todo dia — e quando a conta não fecha, o mês já passou.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "JWT"],
    live: "https://moneypilot.desenvolvedorgustavolopes.com.br/",
    repo: "https://github.com/guh99998/moneyPilot",
    status: "pronto",
  },
];

/** Prontos primeiro, em andamento depois. */
export const sortedProjects = [
  ...projects.filter((p) => p.status !== "andamento"),
  ...projects.filter((p) => p.status === "andamento"),
];

/**
 * Quantos aparecem na home. 3 = uma linha cheia no desktop, 6 = duas.
 * Quando a lista crescer, sobe pra 6 e so isso.
 *
 * Quem decide QUAIS aparecem e a ordem do array acima — de proposito.
 * Um segundo controle (tipo um campo `destaque`) criaria duas listas pra
 * manter em sincronia, que foi exatamente o que te deixou perdido na stack.
 */
export const HOME_LIMIT = 6;

export const homeProjects = sortedProjects.slice(0, HOME_LIMIT);

/** O link "ver mais" so aparece se existir mais coisa. Nunca mente. */
export const hasMoreProjects = sortedProjects.length > HOME_LIMIT;
