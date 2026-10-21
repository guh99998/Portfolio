import { site } from "@/content/site";
import type { ContactForm } from "@/lib/contact";

/**
 * Monta a mensagem e devolve o link wa.me. Plano B do formulario: se o
 * e-mail falhar, o lead ainda consegue mandar tudo pelo WhatsApp.
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
