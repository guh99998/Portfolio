/**
 * Dados globais do site. Tudo que e texto vive em src/content/*.
 * Pra adicionar ingles depois, cada objeto vira { pt: {...}, en: {...} }
 * sem precisar tocar em nenhum componente.
 */

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
  title: "Criação de sites e landing pages",
  description:
    "Criação de landing pages e sites sob medida, com SEO técnico, formulário direto no WhatsApp e domínio configurado. Orçamento sob medida para cada projeto.",
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

export const about = {
  title: "sobre",
  paragraphs: [
    // TODO: revisar com as suas palavras — os fatos vieram do seu currículo
    "Me chamo Gustavo. Trabalho há alguns anos no administrativo de uma imobiliária, cuidando de planilhas, fechamentos e do ERP da empresa — e foi justamente ali que eu virei programador: cansei de ver gente perdendo semanas em processo manual e comecei a resolver isso com código.",
    "O exemplo que melhor me descreve é o pref-scraper: a baixa de guias de IPTU levava cerca de uma semana de trabalho manual, e virou uma questão de minutos. Não foi um exercício de faculdade, foi um problema real que incomodava todo mundo e ninguém tinha resolvido.",
    "Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e curso Engenharia de Software na UNINTER. Hoje atendo freelances de automação e sites, e busco uma posição como desenvolvedor backend.",
  ],
};

export const nav = [
  { label: "início", href: "#inicio" },
  { label: "sites", href: "#cases" },
  { label: "opções", href: "#opcoes" },
  { label: "terminal", href: "#terminal" },
  { label: "sobre", href: "#sobre" },
  { label: "contato", href: "#contato" },
] as const;
