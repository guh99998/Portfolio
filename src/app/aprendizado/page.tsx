import type { Metadata } from "next";
import { site } from "@/content/site";
import { lastUpdated } from "@/content/roadmap";
import Button from "@/components/ui/Button";
import RoadmapBoard from "@/components/ui/RoadmapBoard";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

const description =
  "Roadmap técnico aberto: as tecnologias que eu domino, as que estou estudando e as que ainda preciso estudar, atualizado conforme eu avanço.";

export const metadata: Metadata = {
  title: "Roadmap técnico",
  description,
  alternates: { canonical: "/aprendizado" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${site.url}/aprendizado`,
    title: `Roadmap técnico — ${site.name}`,
    description,
  },
};

export default function AprendizadoPage() {
  return (
    <div className="wrap py-16 sm:py-24">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm text-muted">
          <a href="/" className="transition-colors hover:text-accent">
            ~/
          </a>
          <span className="text-accent">aprendizado</span>
        </p>

        <h1 className="mt-6 font-mono text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
          <span className="text-accent">#</span>roadmap técnico
        </h1>

        <p className="mt-6 leading-relaxed text-muted">
          Ninguém sabe tudo, e quem diz que sabe está vendendo alguma coisa.
          Aqui está o quadro inteiro: o que eu domino, o que estou estudando e
          o que ainda preciso estudar.
        </p>

        <p className="mt-4 leading-relaxed text-muted">
          Mantenho esta página aberta porque saber para onde alguém está indo
          diz mais do que uma lista de logos. Se você procura alguém para uma
          tecnologia específica, dá pra ver aqui exatamente onde eu estou nela
          — sem precisar descobrir isso na terceira reunião.
        </p>
      </Reveal>

      <div className="mt-14">
        <RoadmapBoard />
      </div>

      <Reveal className="mt-10">
        <p className="font-mono text-xs text-muted">
          última atualização: {lastUpdated}
        </p>
      </Reveal>

      <Reveal className="mt-16 border border-line bg-surface p-6 sm:p-8">
        <p className="font-mono text-lg tracking-tight text-balance">
          Precisa de algo que ainda está em &ldquo;estudando&rdquo;?
        </p>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          Me chama mesmo assim. Eu digo com honestidade se dou conta do prazo ou
          se você deveria procurar outra pessoa — prefiro perder um projeto a
          entregar mal.
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
