import { site } from "@/content/site";

export type ContactForm = {
  name: string;
  projectType: string;
  budget: string;
  message: string;
};

/**
 * Monta a mensagem e devolve o link wa.me.
 * Sem backend: o lead so existe quando a pessoa conclui o envio no WhatsApp.
 */
export function buildWhatsAppLink(form: ContactForm): string {
  const lines = [
    `Olá, Gustavo! Vim pelo seu site.`,
    ``,
    `*Nome:* ${form.name.trim()}`,
    `*Tipo de projeto:* ${form.projectType}`,
  ];

  if (form.budget.trim()) {
    lines.push(`*Orçamento aproximado:* ${form.budget.trim()}`);
  }

  lines.push(``, `*Mensagem:*`, form.message.trim());

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
