"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink, type ContactForm } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

const projectTypes = [
  "Site ou landing page",
  "Automação de processos",
  "Análise de dados / relatórios",
  "Vaga / contratação",
  "Outro",
];

const empty: ContactForm = {
  name: "",
  projectType: projectTypes[0],
  budget: "",
  message: "",
};

type Errors = Partial<Record<keyof ContactForm, string>>;

function validate(form: ContactForm): Errors {
  const errors: Errors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Me diz como te chamar.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Escreve um pouco mais pra eu entender o contexto.";
  }

  return errors;
}

const fieldClass =
  "w-full border border-line bg-transparent px-3 py-2.5 font-mono text-sm text-fg placeholder:text-muted/70 focus:border-accent";
const labelClass = "mb-2 block font-mono text-xs text-muted";

export default function WhatsAppForm() {
  const [form, setForm] = useState<ContactForm>(empty);
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    window.open(buildWhatsAppLink(form), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Nome *
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
          placeholder="Como te chamo?"
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 font-mono text-xs text-accent">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Tipo de projeto
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            className={fieldClass}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-bg text-fg">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Orçamento aproximado
          </label>
          <input
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={fieldClass}
            placeholder="opcional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          O que você precisa? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Descreve o processo ou o projeto em duas ou três linhas."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 font-mono text-xs text-accent">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 font-mono text-sm text-[#18181b] transition-colors duration-200 hover:bg-fg"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Enviar no WhatsApp
        </button>

        <p className="font-mono text-xs text-muted">
          abre o WhatsApp com a mensagem pronta
        </p>
      </div>
    </form>
  );
}
