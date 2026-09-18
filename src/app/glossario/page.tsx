import type { Metadata } from "next";
import { glossary } from "@/content/glossary";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup from "@/components/ui/StaggerGroup";
import TermAccordion from "@/components/ui/TermAccordion";
import { ArrowIcon } from "@/components/ui/icons";

const description =
  "O que significam SEO, API, automação, inteligência artificial e outros termos de tecnologia — explicados em português, sem jargão, para quem vai contratar e não é da área.";

export const metadata: Metadata = {
  title: "Glossário de tecnologia",
  description,
  alternates: { canonical: "/glossario" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${site.url}/glossario`,
    title: `Glossário de tecnologia — ${site.name}`,
    description,
  },
};

/**
 * FAQPage: permite o Google mostrar essas respostas direto no resultado de
 * busca. O texto tem que bater com o que esta visivel na pagina — inventar
 * pergunta que nao existe na tela e motivo de penalizacao.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: glossary.map((term) => ({
    "@type": "Question",
    name: term.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${term.definition} Na prática: ${term.inPractice}`,
    },
  })),
};

export default function GlossarioPage() {
  return (
    <div className="wrap py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm text-muted">
          <a href="/" className="transition-colors hover:text-accent">
            ~/
          </a>
          <span className="text-accent">glossario</span>
        </p>

        <h1 className="mt-6 font-mono text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
          <span className="text-accent">#</span>entenda os termos
        </h1>

        <p className="mt-6 leading-relaxed text-muted">
          Tecnologia é cheia de palavra que parece complicada de propósito. Não
          é. Aqui estão os termos que mais aparecem quando alguém vai contratar
          um site ou uma automação, explicados como eu explicaria pra um amigo
          que não é da área.
        </p>

        <p className="mt-4 leading-relaxed text-muted">
          Não saber nada disso não é problema seu — é a parte do trabalho que eu
          faço. Mas cliente que entende o que está comprando faz pergunta melhor
          e recebe um resultado melhor.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 flex flex-col gap-4">
        {glossary.map((term) => (
          <Reveal key={term.slug} asChild>
            <TermAccordion term={term} />
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-16 border border-line bg-surface p-6 sm:p-8">
        <p className="font-mono text-lg tracking-tight text-balance">
          Ficou com dúvida em algum termo?
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          Me pergunta. Explicar o que eu faço faz parte do serviço — e se eu não
          conseguir explicar de um jeito que você entenda, o problema é meu.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/#contato">
            Falar comigo
            <ArrowIcon className="h-4 w-4" />
          </Button>
          <Button href="/" variant="ghost">
            Voltar pro início
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
