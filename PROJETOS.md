# Como adicionar ou alterar projetos

Os sites aparecem em dois lugares, e os dois vêm de um único arquivo:

- **Home, seção "sites no ar"** — só os destaques (`featured: true`).
- **Página `/projetos`** (botão "Ver mais projetos") — todos, inclusive os
  destaques. O comando `sites` do terminal também lista todos.

```
src/content/projects.ts
```

Não precisa mexer em nenhum componente. Editou o arquivo, salvou, está no site.

---

## Adicionar um projeto novo

### 1. Coloque o print em `public/projects/`

- Formato **16:9**, de preferência **1280×720**, em `.jpg`.
- Nome do arquivo igual ao `slug` (ex.: `minha-loja.jpg`).
- O card corta a imagem pra caber em 16:9 — se o print tiver outra proporção,
  as bordas somem.

Sem print ainda? Pode deixar sem `image`: o card mostra o `slug` num fundo
colorido no lugar, nada quebra.

### 2. Adicione um bloco no array `projects`

Copie este modelo para dentro de `export const projects: Project[] = [ ... ]`,
na posição em que quer que ele apareça:

```ts
  {
    slug: "minha-loja",
    title: "Minha Loja",
    problem:
      "Uma frase sobre o problema que o cliente tinha antes do site.",
    outcome: "Resultado concreto, se houver",
    tags: ["React", "Vite", "TypeScript"],
    live: "https://minhaloja.com.br/",
    image: "/projects/minha-loja.jpg",
    status: "pronto",
    featured: true,
  },
```

Atenção à vírgula depois do `}` — cada projeto é separado por vírgula.

---

## O que é cada campo

| Campo | Obrigatório | O que é |
| --- | --- | --- |
| `slug` | sim | Identificador único, minúsculo e com hífen (`minha-loja`). Não aparece pro visitante, a não ser quando não há imagem. |
| `title` | sim | Nome que aparece no card. |
| `problem` | sim | **Uma frase** sobre o problema do cliente — não a lista de funcionalidades. É o texto principal do card. |
| `outcome` | não | Resultado em destaque, com uma seta (`→ Formulário que cai direto no WhatsApp`). Se não tiver, apague a linha. |
| `tags` | sim | Tecnologias usadas. Viram as etiquetas no topo do card. |
| `live` | não | Link do site no ar. Gera o botão **"Ver ao vivo"**. |
| `repo` | não | Link do GitHub. Gera o botão **"Código"**. Só use se o repositório for público. |
| `image` | não | Caminho do print, começando com `/projects/` (sem o `public`). |
| `links` | não | Links extras além do "Ver ao vivo" — ex.: um linktree feito junto. Formato: `links: [{ label: "Linktree", href: "https://..." }],` |
| `status` | não | `"pronto"` (padrão) ou `"andamento"`. Veja abaixo. |
| `featured` | não | `true` → aparece em destaque na home. Sem ele, o projeto fica só em `/projetos`. |

### Destaques da home (`featured`)

A home mostra 3 cards por linha no computador, então **3 destaques** fecham
uma linha certinha (6 fecham duas). Pra tirar um projeto da home sem apagar,
remova a linha `featured: true` — ele continua em `/projetos`.

O botão **"Ver mais projetos"** só aparece quando existe algum projeto que não
é destaque.

### `status: "andamento"`

Pra mostrar algo que você ainda está construindo:

- o card ganha o selo **"em construção"**;
- ele vai automaticamente pro **fim da lista**, depois dos prontos;
- no terminal aparece com "(em construção)" ao lado do nome.

Quando terminar, é só trocar pra `"pronto"`.

---

## Alterar a ordem

**A ordem do array é a ordem do site.** O primeiro bloco é o primeiro card.
Pra reordenar, recorte e cole o bloco inteiro (do `{` até o `},`) na posição
nova.

## Alterar ou trocar o print

Substitua o arquivo em `public/projects/` mantendo o mesmo nome. Se mudar o
nome, atualize o campo `image`.

## Remover um projeto

Apague o bloco inteiro (do `{` até o `},`) e, se quiser, o print em
`public/projects/`.

---

## Conferir antes de publicar

```bash
npm run dev     # abre em http://localhost:3000 e mostra o resultado na hora
npm run build   # acusa erro se faltou vírgula, aspas ou campo obrigatório
```

Se o `build` passar, pode publicar.

### Erros comuns

- **Faltou vírgula** entre dois projetos → o build aponta a linha.
- **Aspas dentro do texto**: use aspas duplas por fora e evite `"` dentro; se
  precisar, use aspas simples ou `“ ”`.
- **Imagem não aparece** → confira se o caminho começa com `/projects/` e se
  o nome do arquivo está igual (maiúsculas contam).
- **Status escrito errado** → só vale `"pronto"` ou `"andamento"`; qualquer
  outra coisa o build recusa.
