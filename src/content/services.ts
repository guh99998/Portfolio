export type Service = {
  id: string;
  title: string;
  summary: string;
  /** Pra quem serve — ajuda o visitante a se reconhecer no problema. */
  forWho: string;
  deliverables: string[];
};

/**
 * Regra desta secao: so entra servico com trabalho feito por tras.
 *
 * Sairam "Integracoes e APIs" e "Bots e scripts" — nao existe entrega
 * correspondente, e servico sem lastro vira uma conversa constrangedora
 * na hora que o cliente pergunta "voce ja fez isso pra alguem?".
 */
export const services: Service[] = [
  {
    id: "sites",
    title: "Sites e landing pages",
    summary:
      "Site rápido, responsivo e encontrável no Google, construído sob medida em vez de montado num template genérico — do design ao domínio configurado.",
    forWho: "Pra quem precisa existir online com credibilidade.",
    deliverables: [
      "Design e desenvolvimento",
      "Formulário que cai direto no seu WhatsApp",
      "SEO técnico, publicação e domínio",
    ],
  },
  {
    id: "automacao",
    title: "Automação de processos",
    summary:
      "Tarefas repetitivas que hoje alguém faz na mão viram um processo que roda sozinho, no horário certo, sem esquecer e sem errar de digitação.",
    forWho: "Pra quem tem gente presa em planilha e copiar-e-colar.",
    deliverables: [
      "Mapeamento do processo atual",
      "Rotina automatizada e agendada",
      "Alertas quando algo falhar",
    ],
  },
  {
    id: "dados",
    title: "Análise de dados e relatórios",
    summary:
      "Sua base de dados vira número que sustenta decisão: consolidação, projeção e relatórios que se atualizam sozinhos em vez de serem remontados todo mês.",
    forWho: "Pra quem tem os dados mas não consegue enxergar nada neles.",
    deliverables: [
      "Consolidação de bases espalhadas",
      "Projeções e indicadores",
      "Relatório que se refaz sozinho",
    ],
  },
];
