import { sortedProjects } from "@/content/projects";
import { services } from "@/content/services";
import { byCategory, counts, mastered } from "@/content/roadmap";
import { site } from "@/content/site";

export type Line = { kind: "in" | "out" | "err" | "accent"; text: string };

export type AppName = "cobrinha" | "matrix" | "trem";

export type CommandResult = {
  lines: Line[];
  clear?: boolean;
  goTo?: string;
  app?: AppName;
};

const out = (text: string): Line => ({ kind: "out", text });
const accent = (text: string): Line => ({ kind: "accent", text });

/** nome do comando -> [descricao, aliases] */
const catalog: Record<string, { desc: string; alias?: string[] }> = {
  ajuda: { desc: "lista os comandos disponíveis", alias: ["help", "?"] },
  sobre: { desc: "quem eu sou", alias: ["whoami"] },
  projetos: { desc: "o que eu já construí", alias: ["ls"] },
  servicos: { desc: "o que eu faço por você", alias: ["servi\u00e7os"] },
  stack: { desc: "as tecnologias que eu uso" },
  contato: { desc: "como falar comigo", alias: ["email"] },
  cobrinha: { desc: "sim, dá pra jogar aqui dentro", alias: ["snake"] },
  matrix: { desc: "chuva de caracteres, estilo Matrix", alias: ["cmatrix"] },
  trem: { desc: "um trem passa pelo terminal", alias: ["sl", "train"] },
  limpar: { desc: "limpa a tela", alias: ["clear", "cls"] },
};

function resolve(input: string): string | null {
  if (catalog[input]) return input;

  for (const [name, meta] of Object.entries(catalog)) {
    if (meta.alias?.includes(input)) return name;
  }

  return null;
}

export const commandNames = Object.keys(catalog);

export function runCommand(raw: string): CommandResult {
  const input = raw.trim().toLowerCase();

  if (input === "") return { lines: [] };

  if (input === "sudo" || input.startsWith("sudo ")) {
    return {
      lines: [
        out("[sudo] senha para visitante:"),
        { kind: "err", text: "visitante não está no arquivo sudoers." },
        { kind: "err", text: "Este incidente será reportado." },
        out(""),
        out("(brincadeira. mas o formulário ali embaixo funciona de verdade)"),
      ],
    };
  }

  const name = resolve(input);

  if (!name) {
    return {
      lines: [
        { kind: "err", text: `comando não encontrado: ${raw.trim()}` },
        out("digite `ajuda` para ver o que dá pra fazer aqui."),
      ],
    };
  }

  switch (name) {
    case "ajuda":
      return {
        lines: [
          out("comandos disponíveis:"),
          ...Object.entries(catalog).map(([cmd, meta]) =>
            out(`  ${cmd.padEnd(10)} ${meta.desc}`),
          ),
          out(""),
          out("dica: as setas ↑ ↓ repetem o que você já digitou."),
        ],
      };

    case "sobre":
      return {
        lines: [
          accent(site.name),
          out(`${site.role} · ${site.location}`),
          out(""),
          out("Transformo processos manuais e repetitivos em código que roda"),
          out("sozinho. Automação, integrações, APIs e sites sob medida."),
          out(""),
          out(
            site.available
              ? `status: ${site.availableLabel.toLowerCase()}`
              : "status: agenda fechada no momento",
          ),
        ],
      };

    case "projetos":
      return {
        lines: [
          out(`${sortedProjects.length} projeto(s):`),
          out(""),
          ...sortedProjects.flatMap((project) => [
            accent(`  ${project.title}${project.status === "andamento" ? " (em construção)" : ""}`),
            out(`    ${project.problem}`),
            out(`    [${project.tags.join(", ")}]`),
            out(""),
          ]),
          out("veja todos com link e imagem em /projetos."),
        ],
      };

    case "servicos":
      return {
        lines: [
          out("o que eu faço:"),
          out(""),
          ...services.map((service, index) =>
            out(`  ${String(index + 1).padStart(2, "0")}  ${service.title}`),
          ),
          out(""),
          out("detalhes em #servicos."),
        ],
      };

    case "stack":
      return {
        lines: [
          out(`domino ${counts.domino} de ${counts.total} tecnologias:`),
          out(""),
          ...byCategory(mastered).flatMap((group) => [
            accent(`  ${group.category}`),
            out(`    ${group.items.map((tech) => tech.name).join("  ")}`),
          ]),
          out(""),
          out("o quadro completo (estudando / preciso estudar) está"),
          out("em /aprendizado."),
        ],
      };

    case "contato":
      return {
        goTo: "#contato",
        lines: [
          out(`e-mail     ${site.email}`),
          out(`github     ${site.github}`),
          out(`linkedin   ${site.linkedin}`),
          out(""),
          accent("levando você até o formulário..."),
        ],
      };

    case "cobrinha":
      return { lines: [], app: "cobrinha" };

    case "matrix":
      return { lines: [], app: "matrix" };

    case "trem":
      return { lines: [], app: "trem" };

    case "limpar":
      return { lines: [], clear: true };

    default:
      return { lines: [] };
  }
}
