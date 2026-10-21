"use client";

import { useState, type FormEvent } from "react";
import { sendLead } from "@/app/actions/lead";
import {
  projectTypes,
  validate,
  type ContactErrors,
  type ContactForm as Form,
} from "@/lib/contact";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MailIcon, WhatsAppIcon } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border border-line bg-transparent px-3 py-2.5 font-mono text-sm text-fg placeholder:text-muted/70 focus:border-accent";
const labelClass = "mb-2 block font-mono text-xs text-muted";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-2 font-mono text-xs text-accent">
      {message}
    </p>
  ) : null;
}

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const result = await sendLead(form);
      if (result.ok) {
        setStatus("sent");
      } else {
        setErrors(result.errors ?? {});
        setStatus(result.errors ? "idle" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-accent p-6">
        <p className="font-mono text-lg text-accent">Recebi sua mensagem!</p>
        <p className="mt-3 leading-relaxed text-muted">
          Vou te responder em breve por e-mail ou pelo WhatsApp.
        </p>
      </div>
    );
  }

  const describedBy = (key: keyof Form) =>
    errors[key] ? `${key}-error` : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* honeypot: invisivel pra gente, irresistivel pra bot */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={fieldClass}
            placeholder="Como te chamo?"
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={fieldClass}
            placeholder="voce@exemplo.com"
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            placeholder="opcional"
          />
        </div>

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
          aria-describedby={describedBy("message")}
          className={`${fieldClass} resize-y`}
          placeholder="Conta sobre o seu negócio e o que o site precisa fazer."
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 font-mono text-sm text-[#18181b] transition-colors duration-200 hover:bg-fg disabled:cursor-wait disabled:opacity-60"
        >
          <MailIcon className="h-4 w-4" />
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>

        <p className="font-mono text-xs text-muted">
          respondo por e-mail ou WhatsApp, sem compromisso
        </p>
      </div>

      {status === "error" ? (
        <div role="alert" className="border border-accent p-4">
          <p className="font-mono text-sm text-accent">
            Não consegui enviar agora.
          </p>
          <a
            href={buildWhatsAppLink(form)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-fg transition-colors hover:text-accent"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Mandar a mesma mensagem pelo WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
