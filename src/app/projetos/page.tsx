import type { Metadata } from "next";
import { sortedProjects } from "@/content/projects";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup from "@/components/ui/StaggerGroup";
import { ArrowIcon } from "@/components/ui/icons";

const description =
  "Sites e landing pages que eu coloquei no ar — com o problema de cada cliente e o que o site resolveu.";

export const metadata: Metadata = {
  title: "Projetos",
  description,
  alternates: { canonical: "/projetos" },
  openGraph: {
    type: "website",
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
          Todos os sites que eu já coloquei no ar. Descrevi cada um pelo
          problema que o cliente tinha, não pela lista de tecnologias — porque
          é o problema que se parece com o seu.
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
          Quer um site assim pro seu negócio?
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          Me conta o que você faz e o que o site precisa resolver. Eu respondo
          com uma primeira leitura e um valor fechado — sem compromisso.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/#contato">
            Pedir orçamento
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
