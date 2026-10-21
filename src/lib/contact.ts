/**
 * Formulario de orcamento: tipo e validacao. Roda no navegador (feedback na
 * hora) e de novo no servidor, porque o navegador nao e confiavel.
 */

export const projectTypes = [
  "Landing page",
  "Site com várias páginas",
  "Outro",
];

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  /** Honeypot: escondido do visitante. Se vier preenchido, foi um bot. */
  website: string;
};

export type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Me diz como te chamar.";
  }

  if (!EMAIL.test(form.email.trim())) {
    errors.email = "Confere o e-mail — é por ele que eu te respondo.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Escreve um pouco mais pra eu entender o contexto.";
  }

  // limites so pra ninguem mandar um livro (ou um ataque) pelo formulario
  const tooLong = (Object.keys(form) as (keyof ContactForm)[]).find(
    (key) => form[key].length > (key === "message" ? 5000 : 200),
  );
  if (tooLong) errors[tooLong] = "Texto longo demais.";

  return errors;
}
