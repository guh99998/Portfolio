import {
  byCategory,
  counts,
  roadmap,
  statusMeta,
  type Status,
} from "@/content/roadmap";
import Reveal from "@/components/ui/Reveal";
import StaggerGroup from "@/components/ui/StaggerGroup";

const order: Status[] = ["domino", "estudando", "preciso"];

function StatusBadge({ status }: { status: Status }) {
  const meta = statusMeta[status];

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 border border-line px-2 py-0.5 font-mono text-xs text-muted">
      <span aria-hidden="true" className={`h-1.5 w-1.5 ${meta.dot}`} />
      {meta.label}
    </span>
  );
}

export default function RoadmapBoard() {
  const groups = byCategory(roadmap);

  return (
    <div className="flex flex-col gap-14">
      {/* contadores */}
      <StaggerGroup className="grid gap-px border border-line bg-line sm:grid-cols-3">
        {order.map((status) => (
          <Reveal key={status} asChild>
            <div className="bg-surface px-5 py-5">
              <p className="font-mono text-2xl tracking-tight">
                <span className="text-accent">{counts[status]}</span>
                <span className="text-muted">/{counts.total}</span>
              </p>
              <p className="mt-1 font-mono text-sm">
                {statusMeta[status].label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {statusMeta[status].hint}
              </p>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      {/* categorias */}
      <StaggerGroup className="flex flex-col gap-10">
        {groups.map((group) => (
          <Reveal key={group.category} asChild>
            <section>
              <div className="mb-5 flex items-center gap-4">
                <h2 className="font-mono text-lg font-medium tracking-tight">
                  {group.category}
                </h2>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
                <span className="font-mono text-xs text-muted">
                  {group.items.length}
                </span>
              </div>

              <ul className="flex flex-col gap-px border border-line bg-line">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-2 bg-surface px-4 py-3"
                  >
                    <span className="font-mono text-sm">{tech.name}</span>
                    {tech.note ? (
                      <span className="text-sm text-muted">{tech.note}</span>
                    ) : null}
                    <span className="ml-auto">
                      <StatusBadge status={tech.status} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </StaggerGroup>
    </div>
  );
}
