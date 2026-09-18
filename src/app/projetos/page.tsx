import type { Metadata } from "next";
import { sortedProjects } from "@/content/projects";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup from "@/components/ui/StaggerGroup";
import { ArrowIcon } from "@/components/ui/icons";

const description =
  "Automações, integrações e sites que eu construí — com o problema que cada um resolveu e o resultado que deu.";

export const metadata: Metadata = {
  title: "Projetos",
  description,
  alternates: { canonical: "/projetos" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${site.url}/projetos`,
    title: `Projetos — ${site.name}`,
    description,
  },
};

export default function ProjetosPage() {
  return (
    <div className="wrap py-16 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm text-muted">
          <a href="/" className="transition-colors hover:text-accent">
            ~/
          </a>
          <span className="text-accent">projetos</span>
        </p>

        <h1 className="mt-6 font-mono text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
          <span className="text-accent">#</span>projetos
        </h1>

        <p className="mt-6 leading-relaxed text-muted">
          Tudo que eu construí, do processo manual que virou script ao site que
          está no ar. Descrevi cada um pelo problema que ele resolveu, não pela
          lista de tecnologias — porque é o problema que se parece com o seu.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <Reveal key={project.slug} asChild className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-16 border border-line bg-surface p-6 sm:p-8">
        <p className="font-mono text-lg tracking-tight text-balance">
          Tem um processo parecido com algum desses?
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          Se você reconheceu o seu problema em algum projeto aqui, provavelmente
          eu já sei por onde começar. Me conta como funciona hoje.
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
