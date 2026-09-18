import Image from "next/image";
import type { Project } from "@/content/projects";
import TagList from "./TagList";
import { ExternalIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors duration-200 hover:border-accent">
      <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-accent-soft">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          // Sem imagem: cai num card tipografico em vez de um buraco cinza.
          <div className="flex h-full w-full items-center justify-center px-4">
            <span className="font-mono text-sm text-accent">
              {project.slug}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <TagList items={project.tags} />

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-mono text-lg font-medium tracking-tight">
            {project.title}
          </h3>
          {project.status === "andamento" ? (
            <span className="border border-accent px-2 py-0.5 font-mono text-xs text-accent">
              em construção
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.problem}</p>

        {project.outcome ? (
          <p className="font-mono text-sm text-accent">→ {project.outcome}</p>
        ) : null}

        {project.live || project.repo ? (
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-fg transition-colors hover:text-accent"
              >
                Ver ao vivo
                <ExternalIcon className="h-3.5 w-3.5" />
                <span className="sr-only">— {project.title}</span>
              </a>
            ) : null}

            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                Código
                <ExternalIcon className="h-3.5 w-3.5" />
                <span className="sr-only">— {project.title}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
