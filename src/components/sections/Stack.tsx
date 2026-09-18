import { byCategory, counts, mastered } from "@/content/roadmap";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StaggerGroup from "@/components/ui/StaggerGroup";
import DotGrid from "@/components/ui/DotGrid";
import { ArrowIcon } from "@/components/ui/icons";

/** So o que ele domina. O resto do quadro vive em /aprendizado. */
export default function Stack() {
  const groups = byCategory(mastered);

  return (
    <Section id="stack" className="relative">
      <DotGrid
        cols={5}
        rows={5}
        className="pointer-events-none absolute top-24 right-6 hidden text-line lg:block"
      />

      <SectionTitle>stack</SectionTitle>

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Reveal key={group.category} asChild className="h-full">
            <div className="h-full border border-line bg-surface">
              <p className="border-b border-line px-4 py-2.5 font-mono text-sm font-medium">
                {group.category}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 px-4 py-4">
                {group.items.map((tech) => (
                  <li key={tech.name} className="font-mono text-sm text-muted">
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-8">
        <a
          href="/aprendizado"
          className="group inline-flex items-center gap-2 font-mono text-sm text-fg transition-colors hover:text-accent"
        >
          Roadmap completo — mais {counts.estudando + counts.preciso} tecnologias
          que estou estudando
          <ArrowIcon className="h-4 w-4" />
        </a>
      </Reveal>
    </Section>
  );
}
