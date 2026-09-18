import { hero, site } from "@/content/site";
import { projects } from "@/content/projects";
import { counts } from "@/content/roadmap";
import Button from "@/components/ui/Button";
import MatrixRain from "@/components/ui/MatrixRain";
import TypeLine from "@/components/ui/TypeLine";
import { ArrowIcon } from "@/components/ui/icons";

/** Derivados: se mudarem os dados, o hero nao vira mentira. */
const delivered = projects.filter((p) => p.status !== "andamento").length;

const stats = [
  { value: String(delivered), label: "projetos entregues" },
  { value: String(counts.domino), label: "tecnologias que domino" },
  { value: "2020", label: "resolvendo processo manual desde" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-22 overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/*
        Chuva atras do conteudo. A mascara apaga ela do lado esquerdo, onde
        o texto vive — assim ela ocupa o vazio da direita sem disputar
        legibilidade com o h1.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_left,black_0%,black_30%,transparent_80%)] sm:opacity-30"
      >
        <MatrixRain />
      </div>

      <div className="wrap relative">
        <TypeLine
          text={`${site.role} · automações · integrações`}
          className="mb-6 font-mono text-sm text-accent"
        />

        <div className="rise">
          <h1 className="max-w-4xl font-mono text-3xl leading-[1.25] font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            {hero.headline.map((segment, index) =>
              segment.accent ? (
                <span key={index} className="text-accent">
                  {segment.text}
                </span>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </h1>
        </div>

        <div className="rise" style={{ animationDelay: "0.1s" }}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.intro}
          </p>
        </div>

        <div className="rise" style={{ animationDelay: "0.15s" }}>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            {hero.detail}
          </p>
        </div>

        <div className="rise" style={{ animationDelay: "0.2s" }}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowIcon className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>

            {site.available ? (
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 bg-accent"
                />
                {site.availableLabel}
              </p>
            ) : null}
          </div>
        </div>

        <div className="rise" style={{ animationDelay: "0.3s" }}>
          <dl className="mt-14 grid max-w-3xl gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-mono text-3xl tracking-tight text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
