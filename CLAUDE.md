# CLAUDE.md

Contexto do projeto para o Claude Code. **Este repositório é público**: nada
de chave, senha, e-mail pessoal de destino dos leads ou dado de cliente que
não esteja no site. Segredos ficam só nas variáveis de ambiente da Vercel e no
`.env.local` (ignorado pelo git).

## O que é

Site de venda de **criação de sites e landing pages** do Gustavo
(desenvolvedorgustavolopes.com.br). Funciona como portfólio de serviços: o
objetivo de cada página é levar o visitante a pedir orçamento.

Até out/2026 era um portfólio de desenvolvedor backend (projetos, stack,
glossário, aprendizado). Isso foi removido de propósito — o foco agora é só
vender sites. Não reintroduzir seções de "vaga/recrutador" sem pedido.

## Stack e comandos

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Motion ·
React Compiler. Deploy na **Vercel**, automático a cada push na `main`.

```bash
npm run dev     # http://localhost:3000
npm run build   # build + type-check — rodar antes de commitar
```

Se o build acusar erro em `.next/dev/types/validator.ts` citando página que não
existe mais, é cache velho do dev server: `rm -rf .next` e rodar de novo.

## Páginas

- `/` (`src/app/page.tsx`): início (com a chuva de caracteres `MatrixRain`
  ao fundo — o Gustavo quer manter) → sites no ar (só os `featured`) → o que
  está incluso → opções → como funciona → terminal → sobre → dúvidas →
  pedir orçamento (formulário).
- `/projetos` (`src/app/projetos/page.tsx`): todos os projetos.
- `/sites`, `/glossario`, `/aprendizado`: redirect 308 para `/`
  (`next.config.ts`), porque já foram indexadas.
- `sitemap.ts` lista `/` e `/projetos`.

O menu (`nav` em `site.ts`) só tem âncoras da home; o `Header` prefixa `/`
quando a página atual não é a home.

## Onde fica o conteúdo

Todo texto vive em `src/content/` — componentes não têm copy fixa.

| Arquivo | O que tem |
| --- | --- |
| `site.ts` | nome, contatos, domínio, `title`/`description` de SEO, `leadFrom`, texto do "sobre", menu |
| `sites.ts` | hero da home, "o que está incluso", opções, passos, FAQ |
| `projects.ts` | os cases (ver abaixo) |

Tom do texto: **comercial, em pt-BR, falando com quem contrata** (profissional
autônomo / pequeno negócio), primeira pessoa, direto. O cargo exibido é
"Desenvolvedor web". O botão "Baixar CV" está desligado (`site.resume = null`).

## Projetos (cases)

Passo a passo para humanos em `PROJETOS.md` — manter os dois em sincronia se
os campos mudarem.

- A ordem do array `projects` é a ordem na tela.
- `featured: true` → aparece na home. Manter **3** destaques (uma linha cheia).
  Hoje: Jonathas Films, José Carlos Magalhães (psicólogo), Lucas Messias.
  Evandro Piassa fica só em `/projetos`.
- `links` → botões extras além de "Ver ao vivo" (ex.: o linktree do Lucas).
- `problem` é uma frase sobre o problema do cliente, não lista de features.
- Prints em `public/projects/<slug>.jpg`, **1280×720**. Dá pra capturar com
  o Chrome headless e converter com Pillow:
  `chrome --headless=new --hide-scrollbars --window-size=1280,720 --virtual-time-budget=8000 --screenshot=out.png <url>`
  Para conferir **este** site, o Chrome headless puro sai em branco (as
  animações do Motion não rodam com virtual time); use Playwright apontando
  para o Chrome instalado, numa pasta temporária fora do repo.
- Não inventar tecnologia nem resultado do case: confirmar no site publicado
  ou perguntar.

## Formulário de orçamento (leads por e-mail)

- `src/components/ui/ContactForm.tsx` → server action
  `src/app/actions/lead.ts` → API do **Resend** (via `fetch`, sem SDK).
- Remetente: `site.leadFrom` (contato@ do domínio, verificado no Resend).
  `reply_to` é o e-mail do lead.
- Variáveis de ambiente (Vercel, marcadas como Sensitive): `RESEND_API_KEY` e
  `LEAD_TO_EMAIL`. Nunca usar prefixo `NEXT_PUBLIC_`. O valor de
  `LEAD_TO_EMAIL` não deve aparecer no código nem em docs.
- Validação compartilhada em `src/lib/contact.ts` (roda no cliente e de novo
  no servidor). Honeypot no campo `website`. E-mail só em texto puro.
- Se o envio falhar, o form oferece mandar a mesma mensagem pelo WhatsApp
  (`src/lib/whatsapp.ts`). Erros aparecem nos logs da Vercel com prefixo `lead:`.
- O botão de WhatsApp do topo da home é um canal à parte e continua.

## Convenções

- Comentários no código em português, sem acento, curtos, explicando o porquê.
- Commits em português no estilo conventional (`feat(escopo): ...`,
  `fix(...)`, `chore(...)`).
- O Gustavo trabalha direto na `main`: commitar e dar push quando ele pedir.
  Não incluir no commit arquivo que ele alterou e não foi discutido (ex.: o PDF
  do currículo) sem perguntar.
- Avisos de LF/CRLF do git no Windows são normais.

## Pendências conhecidas

- `site.location` ainda é "Minas Gerais · Brasil" (TODO: trocar pela cidade).
- `README.md` está desatualizado (cita `process.ts`, `stack.ts`, Hero, Marquee).
- O comando `stack` do terminal foi removido; o terminal lista os sites com
  `sites` (aliases `ls`, `projetos`).
