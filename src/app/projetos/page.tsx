import type { Metadata } from "next";
import { sortedProjects } from "@/content/projects";
import { site } from "@/content/site";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup from "@/components/ui/StaggerGroup";
import {
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const description =
  "Projetos de Gustavo Lopes, desenvolvedor: sistemas em Java e Python e sites para clientes, com o problema que cada um resolve.";

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
          Sou {site.name}, desenvolvedor. Formado em Análise e
          Desenvolvimento de Sistemas pela FIAP e cursando Engenharia de
          Software na UNINTER. Aqui estão os projetos que eu construí e
          coloquei no ar, de sistemas com Java e Python a sites para clientes
          reais em React.
        </p>

        <p className="mt-4 font-mono text-sm leading-relaxed text-muted">
          <span className="text-accent">stack:</span> Java · Spring Boot ·
          Python · Django · React · TypeScript · Next.js · PostgreSQL · Docker
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={site.github} variant="ghost" external>
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </Button>
          <Button href={site.linkedin} variant="ghost" external>
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </Button>
          <Button href={`mailto:${site.email}`} variant="ghost" external>
            <MailIcon className="h-4 w-4" />
            E-mail
          </Button>
        </div>
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
          Vamos conversar?
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          Estou aberto a oportunidades como desenvolvedor. Se o meu perfil faz
          sentido para a sua equipe, me chame por e-mail ou pelo LinkedIn.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={`mailto:${site.email}`} external>
            <MailIcon className="h-4 w-4" />
            Falar comigo
          </Button>
          <Button href={site.linkedin} variant="ghost" external>
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted">
          Também crio sites e landing pages para negócios.{" "}
          <a
            href="/"
            className="inline-flex items-center gap-1 text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Ver serviços
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Reveal>
    </div>
  );
}
