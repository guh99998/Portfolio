"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const [active, setActive] = useState<string>("inicio");
  const [open, setOpen] = useState(false);

  // Fora da home, "#projetos" apontaria pra uma ancora que nao existe naquela
  // pagina. Prefixar com "/" manda pra home e depois rola ate a secao.
  const isHome = usePathname() === "/";
  const to = (hash: string) => (isHome ? hash : `/${hash}`);

  // scroll-spy: marca no menu a secao que esta na tela
  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // menu mobile: fecha no Esc, trava o scroll do fundo e fecha ao passar
  // pro desktop (senao o body ficaria travado num menu ja invisivel)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a
            href={to("#inicio")}
            className="font-mono text-sm font-medium tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="text-accent">~/</span>
            {site.shortName}
          </a>

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-4 lg:gap-6">
              {nav.map((item) => {
                const id = item.href.slice(1);
                const isActive = isHome && active === id;

                return (
                  <li key={item.href}>
                    <a
                      href={to(item.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={`font-mono text-xs transition-colors hover:text-accent lg:text-sm ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      <span aria-hidden="true">#</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="font-mono text-sm text-muted transition-colors hover:text-accent md:hidden"
          >
            [ {open ? "fechar" : "menu"} ]
          </button>
        </div>
      </header>

      {/*
        Irmao do <header>, nao filho: backdrop-blur cria containing block pra
        descendentes `fixed`, o que fazia este overlay colapsar dentro dos
        64px do header.
      */}
      {open ? (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden"
        >
          <nav aria-label="Navegação principal (mobile)" className="wrap py-10">
            <ul className="flex flex-col gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={to(item.href)}
                    onClick={() => setOpen(false)}
                    className="font-mono text-2xl text-fg transition-colors hover:text-accent"
                  >
                    <span className="text-accent">#</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
