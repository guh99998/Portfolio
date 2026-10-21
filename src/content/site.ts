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
  // remetente dos e-mails de lead; o dominio precisa estar verificado no Resend
  leadFrom: "contato@desenvolvedorgustavolopes.com.br",
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
    "Me chamo Gustavo e crio sites e landing pages sob medida para profissionais e pequenos negócios que querem ser encontrados e receber contato sem depender só de rede social ou de indicação.",
    "Antes de programar, passei anos do outro lado do balcão: desde 2020 trabalho no administrativo de uma imobiliária, cuidando de fechamentos, boletos e do sistema da empresa. Por isso penso o site como ferramenta de negócio — cada página existe para levar o visitante até uma conversa com você, não só para ficar bonita.",
    "Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e curso Engenharia de Software na UNINTER. Já coloquei no ar sites para um videomaker, um corretor de imóveis, um psicólogo e um mentor de vendas no Mercado Livre. Cuido de tudo, do layout à publicação no seu domínio, e você fala direto comigo do começo ao fim.",
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
