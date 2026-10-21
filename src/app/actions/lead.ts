"use server";

import { site } from "@/content/site";
import { validate, type ContactErrors, type ContactForm } from "@/lib/contact";

export type LeadResult =
  | { ok: true }
  | { ok: false; errors?: ContactErrors };

/**
 * Manda o lead por e-mail via Resend (https://resend.com/docs/api-reference/emails/send-email).
 * Sai de contato@<dominio> e chega no LEAD_TO_EMAIL; o reply-to e o lead,
 * entao "Responder" no Gmail ja fala direto com ele.
 */
export async function sendLead(form: ContactForm): Promise<LeadResult> {
  // bot preencheu o campo escondido: finge que deu certo e nao manda nada
  if (form.website) return { ok: true };

  const errors = validate(form);
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("lead: RESEND_API_KEY ou LEAD_TO_EMAIL nao configurado");
    return { ok: false };
  }

  const name = form.name.trim();
  const lines = [
    `Nome: ${name}`,
    `E-mail: ${form.email.trim()}`,
    `WhatsApp: ${form.phone.trim() || "—"}`,
    `Tipo de projeto: ${form.projectType}`,
    `Orçamento aproximado: ${form.budget.trim() || "—"}`,
    "",
    "Mensagem:",
    form.message.trim(),
    "",
    `— enviado pelo formulário de ${site.url}`,
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Site ${site.shortName} <${site.leadFrom}>`,
      to: [to],
      reply_to: form.email.trim(),
      subject: `Novo lead: ${name} — ${form.projectType}`,
      // so texto: nada do que o visitante digitou vira HTML
      text: lines.join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("lead: Resend respondeu", response.status, await response.text());
    return { ok: false };
  }

  return { ok: true };
}
