import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

const links = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: `mailto:${site.email}`, label: "E-mail", Icon: MailIcon, external: false },
];

/** Trilho fixo a esquerda (>= lg). No mobile os links ficam no rodape. */
export default function SocialRail() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-6 z-40 hidden lg:block xl:left-10">
      <ul className="pointer-events-auto flex flex-col items-center gap-5 pb-40">
        {links.map(({ href, label, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
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
      <span aria-hidden="true" className="mx-auto block h-28 w-px bg-line" />
    </div>
  );
}
