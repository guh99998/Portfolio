import Reveal from "./Reveal";

/** `#titulo` em mono + regua de 1px ocupando o resto da linha. */
export default function SectionTitle({
  children,
  action,
}: {
  children: string;
  action?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-10 flex items-center gap-4 sm:mb-14">
      <h2 className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">
        <span className="text-accent">#</span>
        {children}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      {action}
    </Reveal>
  );
}
