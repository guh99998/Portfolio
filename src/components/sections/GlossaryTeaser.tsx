import { featuredTerms } from "@/content/glossary";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StaggerGroup from "@/components/ui/StaggerGroup";
import TermAccordion from "@/components/ui/TermAccordion";
import { ArrowIcon } from "@/components/ui/icons";

export default function GlossaryTeaser() {
  return (
    <Section id="glossario">
      <SectionTitle>entenda os termos</SectionTitle>

      <Reveal className="mb-10 max-w-2xl">
        <p className="leading-relaxed text-muted">
          Você não precisa saber nada de tecnologia pra trabalhar comigo — essa
          parte é minha. Mas se quiser entender o que está contratando, aqui
          está, em português.
        </p>
      </Reveal>

      <StaggerGroup className="flex flex-col gap-4">
        {featuredTerms.map((term) => (
          <Reveal key={term.slug} asChild>
            <TermAccordion term={term} />
          </Reveal>
        ))}
      </StaggerGroup>

      <Reveal className="mt-8">
        <Button href="/glossario" variant="ghost">
          Ver o glossário completo
          <ArrowIcon className="h-4 w-4" />
        </Button>
      </Reveal>
    </Section>
  );
}
