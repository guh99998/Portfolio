export type Term = {
  slug: string;
  term: string;
  /** Vira a pergunta no FAQPage do Google. Escreva como a pessoa buscaria. */
  question: string;
  /** Sem jargao. Se precisar de outro termo tecnico pra explicar, reescreva. */
  definition: string;
  /** O porque isso importa pro negocio de quem esta lendo. */
  inPractice: string;
  /** Aparece no bloco curto da home. Escolha 3. */
  featured?: boolean;
};

/**
 * TODO: revise com as suas palavras — a voz aqui precisa ser a sua.
 * Regra de ouro: se um termo so se explica usando outro termo tecnico,
 * a explicacao ainda nao esta pronta.
 */
export const glossary: Term[] = [
  {
    slug: "seo",
    term: "SEO",
    question: "O que é SEO?",
    definition:
      "É o conjunto de ajustes que faz o seu site aparecer no Google quando alguém procura pelo que você vende. Não é anúncio: você não paga por clique. É o site ser construído de um jeito que o Google entenda do que ele trata e confie o suficiente pra mostrar.",
    inPractice:
      "Sem isso, seu site existe mas ninguém chega nele — é como ter uma loja numa rua sem placa e sem endereço.",
    featured: true,
  },
  {
    slug: "api",
    term: "API",
    question: "O que é uma API?",
    definition:
      "É a porta de entrada que um sistema abre pra outro sistema conversar com ele. Em vez de uma pessoa abrir o site e digitar, um programa pede a informação direto e recebe pronta, em segundos.",
    inPractice:
      "É o que permite seu site puxar o estoque do seu ERP sozinho, ou seu sistema emitir uma nota fiscal sem ninguém abrir outro programa.",
    featured: true,
  },
  {
    slug: "automacao",
    term: "Automação",
    question: "O que é automação de processos?",
    definition:
      "É escrever um programa que faz sozinho uma tarefa que hoje alguém faz na mão, do mesmo jeito, toda vez. O computador não esquece, não erra de digitação e não tira férias.",
    inPractice:
      "Aquele relatório que alguém monta toda segunda copiando dados de três lugares: automatizado, ele aparece pronto às 8h sem ninguém tocar.",
    featured: true,
  },
  {
    slug: "inteligencia-artificial",
    term: "Inteligência Artificial",
    question: "O que é inteligência artificial e como ela funciona?",
    definition:
      "São programas que aprenderam a reconhecer padrões vendo uma quantidade enorme de exemplos, em vez de seguir regras que alguém escreveu. Por isso conseguem lidar com coisas que variam — um texto escrito de mil formas diferentes, uma foto, um áudio. E por isso também erram: eles respondem o que é mais provável, não o que é certo.",
    inPractice:
      "Serve pra ler notas fiscais em formatos diferentes, classificar mensagens de clientes ou resumir documentos. Não serve pra decisões que precisam estar 100% corretas sem alguém conferir.",
  },
  {
    slug: "backend-frontend",
    term: "Backend e Frontend",
    question: "Qual a diferença entre backend e frontend?",
    definition:
      "Frontend é a parte que você vê e clica: cores, botões, textos. Backend é a parte que você não vê: onde os dados ficam guardados, as regras do negócio e as contas. O frontend é o salão do restaurante; o backend é a cozinha.",
    inPractice:
      "Um site bonito com backend mal feito é um salão bonito onde o pedido chega errado. Eu trabalho principalmente na cozinha.",
  },
  {
    slug: "banco-de-dados",
    term: "Banco de dados",
    question: "O que é um banco de dados?",
    definition:
      "É onde as informações do sistema ficam guardadas de forma organizada e permanente — clientes, pedidos, produtos. Parece uma planilha gigante, mas feita pra várias pessoas usarem ao mesmo tempo sem uma sobrescrever a outra.",
    inPractice:
      "Se hoje sua informação vive em planilhas soltas no computador de alguém, é isso que está faltando.",
  },
  {
    slug: "integracao",
    term: "Integração",
    question: "O que é integração de sistemas?",
    definition:
      "É fazer dois programas que não foram feitos pra conversar trocarem informação entre si, automaticamente.",
    inPractice:
      "Se alguém na sua empresa digita o mesmo cadastro em dois lugares diferentes, é integração que está faltando — e é um dos consertos mais baratos que existem.",
  },
  {
    slug: "hospedagem-dominio",
    term: "Hospedagem e domínio",
    question: "O que é hospedagem e domínio de um site?",
    definition:
      "Domínio é o endereço que a pessoa digita (suaempresa.com.br) — você aluga por ano. Hospedagem é o computador ligado 24h que guarda o site e entrega ele pra quem acessa. São duas contas diferentes e podem ser de empresas diferentes.",
    inPractice:
      "São os únicos custos que continuam depois que o site fica pronto. Costumam dar menos de R$ 100 por ano no total pra um site institucional.",
  },
  {
    slug: "webhook",
    term: "Webhook",
    question: "O que é um webhook?",
    definition:
      "É um aviso automático que um sistema dispara na hora em que algo acontece. Numa API comum, seu sistema pergunta 'já chegou pedido novo?' de tempos em tempos. Com webhook, é o outro sistema que avisa no instante em que o pedido entra.",
    inPractice:
      "É o que faz o pagamento cair e o pedido ser liberado na mesma hora, em vez de alguém conferir de meia em meia hora.",
  },
  {
    slug: "landing-page",
    term: "Landing page",
    question: "O que é uma landing page?",
    definition:
      "É uma página única, feita pra uma coisa só: fazer o visitante tomar uma ação — pedir orçamento, se inscrever, comprar. Diferente de um site institucional, ela não tem menu com várias seções pra explorar, porque toda saída é uma distração.",
    inPractice:
      "É o destino certo de um anúncio pago. Mandar tráfego de anúncio pra home de um site é o jeito mais comum de queimar dinheiro.",
  },
];

export const featuredTerms = glossary.filter((term) => term.featured);
