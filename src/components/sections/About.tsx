import { about, site } from "@/content/site";
import Button from "@/components/ui/Button";
import Portrait from "@/components/ui/Portrait";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { DownloadIcon } from "@/components/ui/icons";

export default function About() {
  return (
    <Section id="sobre">
      <SectionTitle>{about.title}</SectionTitle>

      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-[280px] lg:max-w-none">
          <Portrait />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}

            <p className="font-mono text-sm text-muted">
              <span className="text-accent">›</span> {site.location}
            </p>

            {site.resume ? (
              <div className="mt-2">
                <Button href={site.resume} variant="ghost" external>
                  Baixar CV
                  <DownloadIcon className="h-4 w-4" />
                </Button>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
