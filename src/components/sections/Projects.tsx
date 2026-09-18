import {
  hasMoreProjects,
  homeProjects,
  sortedProjects,
  HOME_LIMIT,
} from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StaggerGroup from "@/components/ui/StaggerGroup";
import Button from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionTitle>projetos</SectionTitle>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homeProjects.map((project) => (
          <Reveal key={project.slug} asChild className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </StaggerGroup>

      {hasMoreProjects ? (
        <Reveal className="mt-8">
          <Button href="/projetos" variant="ghost">
            Ver mais {sortedProjects.length - HOME_LIMIT} projetos
            <ArrowIcon className="h-4 w-4" />
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}
