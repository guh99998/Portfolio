import { contact, site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import WhatsAppForm from "@/components/ui/WhatsAppForm";
import {
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

/**
 * So o nome do canal. A URL completa do LinkedIn tomava a linha inteira e
 * quebrava no celular — e ninguem le, nem copia: clica.
 */
const channels = [
  { label: "E-mail", href: `mailto:${site.email}`, Icon: MailIcon, external: false },
  { label: "GitHub", href: site.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon, external: true },
];

export default function Contact() {
  return (
    <Section id="contato" tone="dark">
      <SectionTitle>{contact.title}</SectionTitle>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <p className="max-w-md font-mono text-xl leading-snug text-balance">
              {contact.lead}
            </p>

            <p className="mt-5 max-w-md leading-relaxed text-muted">
              {contact.body}
            </p>

            <ul className="mt-10 flex flex-wrap gap-3">
              {channels.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 border border-line bg-surface px-4 py-2.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    {label}
                    {external ? (
                      <ExternalIcon className="h-3 w-3 shrink-0 opacity-60" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <WhatsAppForm />
        </Reveal>
      </div>
    </Section>
  );
}
