/**
 * FONTE UNICA de tecnologias do site.
 *
 * Voce marca o status de cada item UMA vez, aqui. A partir disso saem
 * sozinhos: a faixa do topo, a secao #stack da home, a pagina /aprendizado
 * e o comando `stack` do terminal. Nao existe segunda lista pra manter em
 * sincronia — era isso que te deixava perdido.
 *
 * Como decidir o status (na duvida, desca um nivel):
 *   domino    -> ja entreguei algo real com isso e aguento uma pergunta
 *                de entrevista sobre o assunto.
 *   estudando -> consigo usar e ja usei, mas ainda abro a documentacao.
 *                (era aqui que voce se descrevia: "sei usar, nao domino")
 *   preciso   -> ainda nao usei pra valer. Entra no plano.
 */

export type Status = "domino" | "estudando" | "preciso";

export type Tech = {
  name: string;
  category: string;
  status: Status;
  /** Opcional, so pra /aprendizado: o que isso te permite FAZER. */
  note?: string;
};

export const statusMeta: Record<
  Status,
  { label: string; hint: string; dot: string }
> = {
  domino: {
    label: "Domino",
    hint: "uso em projeto real, sem consultar o básico",
    dot: "bg-accent",
  },
  estudando: {
    label: "Estudando",
    hint: "consigo usar, mas ainda consulto documentação",
    dot: "bg-accent/40",
  },
  preciso: {
    label: "Preciso estudar",
    hint: "no plano, ainda não usei pra valer",
    dot: "bg-line",
  },
};

/** A ordem aqui e a ordem que aparece na pagina. */
export const categories = [
  "Linguagens",
  "Automação",
  "Backend & APIs",
  "Dados",
  "Front-end",
  "Infra & Ferramentas",
] as const;

/**
 * Montado a partir do seu curriculo e das suas respostas:
 *   Python    -> scripts que resolvem uma tarefa (entregues, com resultado)
 *   SQL       -> consulta, nao modela
 *   Backend   -> constroi do zero em Spring Boot (REST + JPA + Security),
 *                mas ainda nao levou nada pra producao
 *
 * TODO: revise item por item. Voce so precisa decidir a palavra do `status`.
 */
export const roadmap: Tech[] = [
  // Linguagens
  { name: "Python", category: "Linguagens", status: "domino", note: "Minha principal: automação, scraping e processamento de dados." },
  { name: "JavaScript", category: "Linguagens", status: "domino", note: "Usado nas landing pages que entreguei." },
  { name: "TypeScript", category: "Linguagens", status: "estudando", note: "Já entreguei dois projetos com ele; ainda consulto tipagem mais avançada." },
  { name: "SQL", category: "Linguagens", status: "estudando", note: "Consulto dados com SELECT e JOIN; ainda não crio estrutura." },
  { name: "Java", category: "Linguagens", status: "domino", note: "Construo aplicações do zero com Spring Boot." },

  // Automação
  { name: "Selenium", category: "Automação", status: "domino", note: "Base do pref-scraper: navegação e extração em site sem API." },
  { name: "Requests / consumo de API", category: "Automação", status: "domino" },
  { name: "Web scraping", category: "Automação", status: "domino", note: "Extrair dado de site que não foi feito pra ser lido por programa." },
  { name: "Agendamento (cron / agendador)", category: "Automação", status: "estudando" },
  { name: "Playwright", category: "Automação", status: "preciso", note: "Alternativa mais moderna ao Selenium." },

  // Backend & APIs
  { name: "REST", category: "Backend & APIs", status: "domino", note: "Construo os endpoints e também consumo API de terceiro." },
  { name: "FastAPI / Flask", category: "Backend & APIs", status: "estudando", note: "Já montei rotas em projeto de estudo, nunca em produção." },
  { name: "Spring Boot", category: "Backend & APIs", status: "estudando", note: "Projeto do zero: eu defino a estrutura, as entidades e os endpoints. Ainda não levei um pra produção." },
  { name: "JPA / Hibernate", category: "Backend & APIs", status: "estudando", note: "Entidades mapeadas e banco gerado a partir do código." },
  { name: "Spring Security", category: "Backend & APIs", status: "estudando", note: "Login e rotas protegidas." },
  { name: "Testes automatizados", category: "Backend & APIs", status: "preciso", note: "Garantir que o novo não quebre o que já funcionava." },
  { name: "Filas e processamento assíncrono", category: "Backend & APIs", status: "preciso" },

  // Dados
  { name: "Planilhas (Excel / Sheets)", category: "Dados", status: "domino", note: "Desenvolvo e mantenho planilhas de DRE e fechamento mensal." },
  { name: "Modelagem de banco", category: "Dados", status: "preciso", note: "Desenhar tabelas, chaves e relacionamentos de uma aplicação." },
  { name: "PostgreSQL", category: "Dados", status: "preciso" },
  { name: "Pandas", category: "Dados", status: "estudando", note: "Uso em análise e projeção; ainda aprimorando." },
  { name: "NumPy", category: "Dados", status: "estudando" },
  { name: "Análise de dados", category: "Dados", status: "estudando", note: "Transformar base bruta em número que sustenta decisão." },

  // Front-end
  { name: "HTML e CSS", category: "Front-end", status: "domino", note: "Duas landing pages responsivas no ar." },
  { name: "React", category: "Front-end", status: "domino", note: "Do design ao deploy, em projeto pago." },
  { name: "Vite", category: "Front-end", status: "domino" },
  { name: "Next.js", category: "Front-end", status: "estudando", note: "Sei construir; ainda não domino o lado de renderização." },
  { name: "Tailwind", category: "Front-end", status: "estudando" },

  // Infra & Ferramentas
  { name: "Git e GitHub", category: "Infra & Ferramentas", status: "domino" },
  { name: "Deploy em produção", category: "Infra & Ferramentas", status: "domino", note: "Publiquei e mantenho sites de cliente no ar." },
  { name: "Linux", category: "Infra & Ferramentas", status: "estudando", note: "Me viro no terminal; não faço administração de servidor." },
  { name: "Docker", category: "Infra & Ferramentas", status: "preciso" },
  { name: "CI/CD", category: "Infra & Ferramentas", status: "preciso" },
  { name: "Cloud (AWS)", category: "Infra & Ferramentas", status: "preciso", note: "Rodar automação na nuvem sem servidor fixo pra manter." },
];

/** TODO: atualize quando revisar a lista. */
export const lastUpdated = "17 de setembro de 2026";

// ---------------------------------------------------------------------------
// Derivados. Nada aqui precisa ser editado a mao.
// ---------------------------------------------------------------------------

export const mastered = roadmap.filter((tech) => tech.status === "domino");

export const counts = {
  total: roadmap.length,
  domino: mastered.length,
  estudando: roadmap.filter((t) => t.status === "estudando").length,
  preciso: roadmap.filter((t) => t.status === "preciso").length,
};

export function byCategory(items: Tech[]) {
  return categories
    .map((category) => ({
      category,
      items: items.filter((tech) => tech.category === category),
    }))
    .filter((group) => group.items.length > 0);
}

/** A faixa do topo e a #stack mostram so o que voce domina. */
export const marquee = mastered.map((tech) => tech.name);
