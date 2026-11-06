/**
 * Dados globais do site. Tudo que e texto vive em src/content/*.
 * Pra adicionar ingles depois, cada objeto vira { pt: {...}, en: {...} }
 * sem precisar tocar em nenhum componente.
 */

export const site = {
  name: "Gustavo Rodrigues Lopes",
  shortName: "gustavo",
  role: "Desenvolvedor web",
  email: "guhrlopes999@gmail.com",
  // remetente dos e-mails de lead; o dominio precisa estar verificado no Resend
  leadFrom: "contato@desenvolvedorgustavolopes.com.br",
  whatsapp: "5535998088138",
  github: "https://github.com/guh99998",
  linkedin:
    "https://www.linkedin.com/in/gustavo-rodrigues-lopes-b41046213/",
  url: "https://desenvolvedorgustavolopes.com.br",
  title: "Desenvolvedor web",
  description:
    "Portfólio de Gustavo Rodrigues Lopes, desenvolvedor web: sistemas em Java e Python, sites em React e Next.js. Também crio landing pages e sites sob medida.",
  // TODO: troque por sua cidade — busca de freela de site é muito local.
  location: "Minas Gerais · Brasil",
  available: true,
  availableLabel: "Aberto a oportunidades e novos projetos",
  // null esconde o botao "Baixar CV"; o PDF continua em public/ pro LinkedIn
  resume: null as string | null,
  photo: {
    // Convertida de IMG_1709.HEIC — navegador nao le HEIC.
    src: "/gustavo.jpg" as string | null,
    alt: "Foto de Gustavo Rodrigues Lopes",
  },
};

export const about = {
  title: "sobre",
  paragraphs: [
    "Me chamo Gustavo e sou desenvolvedor web. Construo sistemas e sites de ponta a ponta e coloco no ar: de APIs em Java e Python a interfaces em React, com banco de dados, testes e deploy.",
    "Antes de programar, passei anos do outro lado do balcão: desde 2020 trabalho no administrativo de uma imobiliária, cuidando de fechamentos, boletos e do sistema da empresa. Por isso penso o software como ferramenta de negócio: ele existe para resolver um problema real de quem usa.",
    "Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e curso Engenharia de Software na UNINTER. Além dos meus projetos, já coloquei no ar sites para um videomaker, um corretor de imóveis, um psicólogo e um mentor de vendas no Mercado Livre, sempre falando direto com o cliente, do layout à publicação.",
  ],
};

/** Texto do topo da home: portfólio e recrutadores. A venda começa em "servicos". */
export const hero = {
  eyebrow: "desenvolvedor web",
  title: "Sistemas e sites que saem do papel e vão para produção.",
  intro:
    "Sou Gustavo Rodrigues Lopes. Construo de ponta a ponta, de APIs em Java e Python a interfaces em React, e já coloquei no ar projetos para clientes reais. Abaixo estão os que mais me orgulham.",
};

export const nav = [
  { label: "início", href: "#inicio" },
  { label: "projetos", href: "#cases" },
  { label: "sobre", href: "#sobre" },
  { label: "terminal", href: "#terminal" },
  { label: "serviços", href: "#servicos" },
  { label: "orçamento", href: "#contato" },
] as const;
