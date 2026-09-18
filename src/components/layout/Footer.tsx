import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

const links = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: `mailto:${site.email}`, label: "E-mail", Icon: MailIcon, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm">
            <span className="text-accent">~/</span>
            {site.shortName}
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
          <nav aria-label="Páginas" className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            {[
              { href: "/projetos", label: "projetos" },
              { href: "/glossario", label: "glossário de tecnologia" },
              { href: "/aprendizado", label: "aprendizado" },
            ].map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">#</span>
                {page.label}
              </a>
            ))}
          </nav>
        </div>

        <ul className="flex items-center gap-5">
          {links.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap mt-8 border-t border-line pt-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
