import type { Metadata } from "next";
import { siteProjects } from "@/content/projects";
import { site } from "@/content/site";
import {
  faq,
  included,
  plans,
  sitesPage,
  steps,
} from "@/content/sites";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StaggerGroup from "@/components/ui/StaggerGroup";
import WhatsAppForm from "@/components/ui/WhatsAppForm";
import { WhatsAppIcon } from "@/components/ui/icons";

const description =
  "Criação de landing pages e sites sob medida, com SEO técnico, formulário direto no WhatsApp e domínio configurado. Orçamento sob medida para cada projeto.";

export const metadata: Metadata = {
  title: "Criação de sites e landing pages",
  description,
  keywords: [
    "criação de sites",
    "landing page",
    "site sob medida",
    "SEO técnico",
    "site para profissionais autônomos",
  ],
  alternates: { canonical: "/sites" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${site.url}/sites`,
    title: `Criação de sites e landing pages — ${site.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Criação de sites e landing pages — ${site.name}`,
    description,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criação de landing pages e sites",
    serviceType: "Desenvolvimento web",
    areaServed: "BR",
    provider: { "@type": "Person", name: site.name, url: site.url },
    description,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  sitesPage.whatsappMessage,
)}`;

export default function SitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD gerado por nos, nao vem de input do usuario
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section id="inicio" padding="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm text-muted">
            <a href="/" className="transition-colors hover:text-accent">
              ~/
            </a>
            <span className="text-accent">sites</span>
          </p>
          <p className="mt-6 font-mono text-sm text-accent">
            {sitesPage.eyebrow}
          </p>
          <h1 className="mt-3 font-mono text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {sitesPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {sitesPage.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={whatsappHref} external>
              <WhatsAppIcon className="h-4 w-4" />
              {sitesPage.ctaLabel}
            </Button>
            <Button href="#opcoes" variant="ghost">
              Ver opções
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section id="incluso" padding="py-12 sm:py-16">
        <SectionTitle>o que está incluso</SectionTitle>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {included.map((item) => (
            <Reveal key={item.title} asChild className="border border-line bg-surface p-6">
              <h3 className="font-mono text-base font-medium">
                <span className="text-accent">›</span> {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section id="cases" padding="py-12 sm:py-16">
        <SectionTitle>sites no ar</SectionTitle>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteProjects.map((project) => (
            <Reveal key={project.slug} asChild className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section id="opcoes" padding="py-12 sm:py-16">
        <SectionTitle>opções</SectionTitle>
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Reveal
              key={plan.name}
              asChild
              className="flex flex-col border border-line bg-surface p-6 sm:p-8"
            >
              <h3 className="font-mono text-lg font-medium">{plan.name}</h3>
              <p className="mt-4 font-mono text-3xl tracking-tight text-accent">
                Sob orçamento
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {plan.description}
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 font-mono text-sm text-muted"
                  >
                    <span aria-hidden="true" className="text-accent">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section id="como-funciona" padding="py-12 sm:py-16">
        <SectionTitle>como funciona</SectionTitle>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} asChild className="border-t border-accent pt-4">
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-mono text-base font-medium">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section id="duvidas" padding="py-12 sm:py-16">
        <SectionTitle>dúvidas</SectionTitle>
        <div className="flex max-w-3xl flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group border border-line bg-surface open:border-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                <h3 className="font-mono text-base font-medium">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-lg text-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-line px-5 py-5 leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="contato" tone="dark">
        <SectionTitle>pedir orçamento</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="max-w-md font-mono text-xl leading-snug text-balance">
              Me conta sobre o seu negócio e o que o site precisa fazer.
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Eu respondo com uma primeira leitura e um valor fechado — sem
              compromisso.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <WhatsAppForm defaultType="Site ou landing page" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
