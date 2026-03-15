# Padroes de Componentes — Orca Pro

Este documento descreve as convencoes e padroes usados na criacao de
componentes em `src/components/`. Siga estas regras para todo novo componente.

---

## Nomenclatura de arquivos

- **kebab-case** para todos os arquivos `.tsx`: `stat-card.tsx`, `page-header.tsx`.
- Um componente por arquivo. O nome do arquivo corresponde ao nome do componente
  em kebab-case (ex: `StatCard` → `stat-card.tsx`).

## Exports

- **Apenas named exports** — nunca usar `export default`.

```tsx
// Correto
export function Button({ ... }: ButtonProps) { ... }

// Errado
export default function Button({ ... }: ButtonProps) { ... }
```

## Interface de props

- Definir uma `interface` dedicada (nao `type`) para as props do componente,
  nomeada como `<Componente>Props` (ex: `ButtonProps`, `StatCardProps`).
- Sempre aceitar `className?: string` para permitir customizacao de estilos.
- Estender atributos nativos do HTML quando fizer sentido
  (ex: `ButtonHTMLAttributes<HTMLButtonElement>`).
- Usar `children: ReactNode` para conteudo de slot;
  usar `children: string` quando apenas texto e esperado (ex: `SectionTitle`).

## Estilizacao

- **Tailwind CSS v4** com classes utilitarias — sem CSS modules, sem styled-components.
- Usar **`twMerge`** do `tailwind-merge` para compor classes base com a prop
  `className` recebida. Isso garante que overrides do consumidor tenham prioridade.

```tsx
import { twMerge } from 'tailwind-merge'

<div className={twMerge('classes-base', className)}>
```

- Usar os tokens de design definidos em `index.css` (`@theme`):
  - Fontes: `font-heading` (Source Serif 4), `font-ui` (Barlow Semi Condensed)
  - Cores: `text-foreground`, `text-foreground-muted`, `text-foreground-subtle`,
    `text-brand`, `text-accent`, `text-success`, `bg-background`, `bg-surface`,
    `bg-surface-muted`

## Padrao de variantes

Para componentes com multiplas variantes visuais (ex: `Button`, `StatusBadge`):

1. Definir um union type para a variante: `type ButtonVariant = 'primary' | 'accent'`
2. Criar um `Record<Variant, string>` mapeando variantes para classes Tailwind.
3. Aceitar `variant` como prop opcional com um valor padrao.

```tsx
type ButtonVariant = 'primary' | 'accent'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand',
  accent: 'bg-accent',
}
```

## HTML semantico

- Usar o elemento correto para cada situacao: `<button>` para acoes, `<aside>`
  para barras laterais, `<header>` para cabecalhos de pagina, `<nav>` para
  navegacao, `<h2>` para titulos de secao.
- Quando um componente pode ser interativo ou estatico, escolher o elemento
  dinamicamente:

```tsx
const Component = onClick ? 'button' : 'div'
<Component type={onClick ? 'button' : undefined} onClick={onClick}>
```

## Lint e formatacao

- **Biome** (nao ESLint) — configurado em `biome.json`.
- Indentacao de 2 espacos, aspas simples, sem ponto e virgula (apenas quando necessario).
- Imports sao organizados automaticamente pelo Biome (`organizeImports`).
- `routeTree.gen.ts` e excluido do lint.

## Catalogo de componentes

| Componente | Arquivo | Props principais |
|---|---|---|
| `Button` | `button.tsx` | `variant`, `children`, atributos nativos de button |
| `PageHeader` | `page-header.tsx` | `title`, `subtitle`, `actions` (slot ReactNode) |
| `SectionTitle` | `section-title.tsx` | `children` (string) |
| `StatCard` | `stat-card.tsx` | `label`, `value` |
| `StatusBadge` | `status-badge.tsx` | `status` (pendente/aprovado/rascunho), `withBackground` |
| `TableHeader` | `table-header.tsx` | `columns` (string[]) |
| `ListRow` | `list-row.tsx` | `left`, `right` (ReactNode), `onClick` (opcional) |
| `Sidebar` | `sidebar.tsx` | `items` (NavItem[]) — usa `Link` do TanStack Router |
