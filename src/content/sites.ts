/**
 * Conteudo da pagina /sites (venda de landing pages e sites).
 */

export const sitesPage = {
  eyebrow: "criação de sites e landing pages",
  title: "Um site seu, no ar e encontrável no Google.",
  intro:
    "Construo landing pages e sites sob medida — sem template genérico, do design à publicação no seu domínio. O formulário cai direto no seu WhatsApp, então quem chega vira conversa.",
  ctaLabel: "Pedir orçamento no WhatsApp",
  whatsappMessage: "Olá, Gustavo! Vim pela página de sites e quero um orçamento.",
};

export const included = [
  {
    title: "Design e desenvolvimento sob medida",
    text: "Layout pensado para o seu negócio, responsivo no celular e no computador, escrito do zero.",
  },
  {
    title: "SEO técnico",
    text: "Título, descrição, tags de compartilhamento, dados estruturados, sitemap e velocidade — a base para o Google te encontrar.",
  },
  {
    title: "Formulário direto no WhatsApp",
    text: "O contato chega pronto na sua conversa, sem depender de e-mail ou de plataforma de terceiro.",
  },
  {
    title: "Publicação e domínio",
    text: "Site no ar, com seu domínio configurado e HTTPS. Você não precisa mexer em nada técnico.",
  },
];

export const steps = [
  { title: "Conversa", text: "Você me conta o negócio, o público e o que o site precisa fazer." },
  { title: "Proposta", text: "Escopo, prazo e valor fechados antes de começar." },
  { title: "Desenvolvimento", text: "Você acompanha e aprova o resultado antes de ir ao ar." },
  { title: "Publicação", text: "Site no ar, domínio configurado e tudo testado." },
];

export type Plan = {
  name: string;
  description: string;
  items: string[];
};

export const plans: Plan[] = [
  {
    name: "Landing page completa",
    description:
      "Uma página focada em uma oferta, pronta para receber tráfego e gerar contato.",
    items: [
      "Design e desenvolvimento sob medida",
      "SEO técnico e tags de compartilhamento",
      "Formulário direto no WhatsApp",
      "Publicação e domínio configurado",
    ],
  },
  {
    name: "Site com várias páginas",
    description:
      "Para quem precisa de mais de uma página (serviços, sobre, blog, integrações). O valor depende do escopo.",
    items: [
      "Tudo da landing page",
      "Múltiplas páginas e navegação",
      "Integrações (ex.: Trello, Pixel da Meta)",
    ],
  },
];

export const faq = [
  {
    q: "Quanto tempo leva?",
    a: "Depende do conteúdo e do tamanho do projeto. O prazo vem fechado na proposta, antes de começar.",
  },
  {
    q: "O que eu preciso enviar?",
    a: "Textos, logo e fotos, se você já tiver. Se não tiver, a gente conversa sobre como montar isso.",
  },
  {
    q: "E o domínio e a hospedagem?",
    a: "A configuração do domínio e a publicação fazem parte do serviço. O registro do domínio é feito no seu nome; explico as opções e os custos na proposta.",
  },
  {
    q: "O site aparece no Google?",
    a: "Entrego o SEO técnico bem feito, que é a base. Posição no Google depende também de conteúdo e tempo, e não prometo ranking.",
  },
  {
    q: "Consigo ver um site que você já fez?",
    a: "Sim, os cases estão logo acima, todos no ar.",
  },
];
