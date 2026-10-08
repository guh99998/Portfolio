# Portfólio — Gustavo Lopes

Site pessoal: portfólio de desenvolvedor backend com foco em freelances de
automação, integrações e sites.

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Motion.

## Rodar

```bash
npm run dev     # http://localhost:3000
npm run build   # build de produção (roda o type-check junto)
npm start       # serve o build
```

## Onde mexer

**Todo o texto do site está em `src/content/`.** Não precisa abrir componente
pra mudar conteúdo:

| Arquivo | O que tem |
| --- | --- |
| `site.ts` | nome, e-mail, WhatsApp, GitHub, LinkedIn, domínio, foto, CV, headline do topo, texto do "sobre" e do "contato", itens do menu |
| `projects.ts` | os projetos do `#projetos` |
| `process.ts` | os 3 passos do "como funciona" |
| `stack.ts` | as caixas de tecnologia + a faixa escura do topo |

Procure por `TODO:` nesses arquivos — é tudo que ainda falta preencher.

### Pendências

- `site.whatsapp` — DDI + DDD + número, só dígitos (ex: `5511999999999`).
- `site.github` / `site.linkedin` / `site.url`.
- `site.photo.src` — coloque a foto em `public/` e aponte aqui. Enquanto for
  `null`, o site mostra uma moldura vazia no lugar (nada quebra).
- `site.resume` — mesma coisa para o PDF do currículo. Enquanto for `null`, o
  botão "Baixar CV" não aparece.
- `projects.ts` — trocar os 4 projetos de exemplo pelos reais.

## Como o visual funciona

As cores são tokens CSS em `src/app/globals.css`. Mudar a paleta inteira é
mudar aquele bloco `@theme`.

A classe `.theme-dark` redefine os mesmos tokens para uma subárvore — é assim
que a faixa de stack e o bloco de contato ficam escuros sem que nenhum
componente precise de uma variante de cor. Para deixar qualquer seção escura,
basta `<Section tone="dark">`.

## Estrutura

```
src/
├─ app/           layout, página, sitemap, robots, ícone, tokens CSS
├─ components/
│  ├─ layout/     Header (com scroll-spy), SocialRail, Footer
│  ├─ sections/   Hero, Marquee, Projects, Stack, About, Contact
│  └─ ui/         peças reutilizáveis (Button, Reveal, SectionTitle, ProjectCard…)
├─ content/       ← o texto do site
└─ lib/           variantes de animação e o construtor do link do WhatsApp
```

## Formulário de contato

O formulário não tem backend: ele monta uma mensagem formatada e abre o
WhatsApp (`src/lib/whatsapp.ts`). Ou seja, o contato só chega se a pessoa
concluir o envio lá. Se um dia quiser capturar todo mundo que preenche, dá pra
adicionar um `app/api/contact/route.ts` por cima da mesma interface.
