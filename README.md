# Orça Pro

Aplicacao de orcamentos e gestao de clientes para profissionais e pequenas empresas.

## Funcionalidades

- **Dashboard** — visao geral com indicadores (orcamentos do mes, taxa de aprovacao, receita prevista) e orcamentos recentes
- **Clientes** — listagem de clientes com quantidade de projetos vinculados
- **Orcamentos** — listagem de orcamentos com valor e status (pendente, aprovado, rascunho)
- **Detalhe do Orcamento** — visualizacao individual com itens, valor total e acoes (enviar PDF, duplicar)
- **Showcase de Componentes** — pagina interna (`/componentes`) exibindo todos os componentes do design system

## Tecnologias

| Categoria | Ferramenta |
|---|---|
| Framework | React 19 |
| Bundler | Vite 8 |
| Linguagem | TypeScript 5.9 |
| Roteamento | TanStack Router (file-based, code splitting automatico) |
| Estilizacao | Tailwind CSS v4 (via PostCSS) + tailwind-merge |
| Lint / Formatacao | Biome |
| Fontes | Source Serif 4 (headings), Barlow Semi Condensed (UI) |
| Design | Pencil (.pen) |

## Scripts

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # type check + build de producao
npm run preview   # preview do build
npm run lint      # verifica lint e formatacao
npm run lint:fix  # corrige lint e formatacao
npm run format    # formata todos os arquivos
```

## Estrutura

```
src/
├── components/       # componentes reutilizaveis (ver AGENTS.md)
├── routes/           # rotas file-based (TanStack Router)
│   ├── __root.tsx    # layout raiz (sidebar + outlet)
│   ├── index.tsx     # /  — Dashboard
│   ├── clientes.tsx  # /clientes
│   ├── componentes.tsx # /componentes — showcase
│   └── orcamentos/
│       ├── index.tsx         # /orcamentos
│       └── $orcamentoId.tsx  # /orcamentos/:id
├── index.css         # tokens de design (@theme)
└── main.tsx          # entry point
```
