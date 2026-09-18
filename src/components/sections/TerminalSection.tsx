import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Terminal from "@/components/ui/Terminal";

export default function TerminalSection() {
  return (
    <Section id="terminal" tone="dark">
      <SectionTitle>terminal</SectionTitle>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="leading-relaxed text-muted">
            Preferia explorar o site digitando? Este terminal é de verdade — ele
            lê o mesmo conteúdo das seções acima.
          </p>
          <p className="mt-4 font-mono text-sm text-muted">
            tente: <span className="text-accent">ajuda</span> ·{" "}
            <span className="text-accent">projetos</span> ·{" "}
            <span className="text-accent">stack</span> ·{" "}
            <span className="text-accent">contato</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Terminal />
        </Reveal>
      </div>
    </Section>
  );
}
