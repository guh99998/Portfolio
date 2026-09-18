/**
 * Dados globais do site. Tudo que e texto vive em src/content/*.
 * Pra adicionar ingles depois, cada objeto vira { pt: {...}, en: {...} }
 * sem precisar tocar em nenhum componente.
 */

export type HeadlineSegment = { text: string; accent?: boolean };

export const site = {
  name: "Gustavo Rodrigues Lopes",
  shortName: "gustavo",
  role: "Desenvolvedor backend",
  email: "guhrlopes999@gmail.com",
  whatsapp: "5535998088138",
  github: "https://github.com/guh99998",
  linkedin:
    "https://www.linkedin.com/in/gustavo-rodrigues-lopes-b41046213/",
  url: "https://desenvolvedorgustavolopes.com.br",
  // TODO: troque por sua cidade — busca de freela de site é muito local.
  location: "Minas Gerais · Brasil",
  available: true,
  availableLabel: "Disponível para novos projetos",
  resume: "/curriculo-gustavo-rodrigues-lopes.pdf" as string | null,
  photo: {
    // Convertida de IMG_1709.HEIC — navegador nao le HEIC.
    src: "/gustavo.jpg" as string | null,
    alt: "Foto de Gustavo Rodrigues Lopes",
  },
};

export const hero = {
  headline: [
    { text: "Eu construo " },
    { text: "automações", accent: true },
    { text: " e " },
    { text: "sistemas", accent: true },
    { text: " que tiram o trabalho manual das suas mãos." },
  ] as HeadlineSegment[],
  intro:
    "Sou desenvolvedor backend. Transformo processos repetitivos em código que roda sozinho — automações, análise de dados e sites sob medida — pra que o seu time gaste tempo com o que só gente consegue fazer.",
  // TODO: revisar com as suas palavras. O numero e real, do pref-scraper.
  detail:
    "Não aprendi isso num curso: aprendi vendo gente perder semanas em tarefa repetitiva, todo mês, no meu próprio trabalho. A consulta de IPTU de centenas de imóveis levava cerca de uma semana e virou uma execução de três minutos. É esse tipo de conta que eu venho fazer na sua empresa.",
  primaryCta: { label: "Falar comigo", href: "#contato" },
  secondaryCta: { label: "Ver projetos", href: "#projetos" },
};

export const about = {
  title: "sobre",
  paragraphs: [
    // TODO: revisar com as suas palavras — os fatos vieram do seu currículo
    "Me chamo Gustavo. Trabalho há alguns anos no administrativo de uma imobiliária, cuidando de planilhas, fechamentos e do ERP da empresa — e foi justamente ali que eu virei programador: cansei de ver gente perdendo semanas em processo manual e comecei a resolver isso com código.",
    "O exemplo que melhor me descreve é o pref-scraper: a baixa de guias de IPTU levava cerca de uma semana de trabalho manual, e virou uma questão de minutos. Não foi um exercício de faculdade, foi um problema real que incomodava todo mundo e ninguém tinha resolvido.",
    "Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e curso Engenharia de Software na UNINTER. Hoje atendo freelances de automação e sites, e busco uma posição como desenvolvedor backend.",
  ],
};

export const contact = {
  title: "contato",
  lead: "Tem um processo manual que consome o tempo do seu time, ou um projeto pra tirar do papel?",
  body: "Me conta rapidamente o que você precisa. Eu respondo com uma primeira leitura do problema e um caminho possível — sem compromisso e sem enrolação.",
};

export const nav = [
  { label: "início", href: "#inicio" },
  { label: "projetos", href: "#projetos" },
  { label: "serviços", href: "#servicos" },
  { label: "terminal", href: "#terminal" },
  { label: "sobre", href: "#sobre" },
  { label: "contato", href: "#contato" },
] as const;
