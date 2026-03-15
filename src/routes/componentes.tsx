import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/button'
import { ListRow } from '../components/list-row'
import { PageHeader } from '../components/page-header'
import { SectionTitle } from '../components/section-title'
import { StatCard } from '../components/stat-card'
import { StatusBadge } from '../components/status-badge'
import { TableHeader } from '../components/table-header'

export const Route = createFileRoute('/componentes')({
  component: ComponentesPage,
})

function ComponentesPage() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Componentes"
        subtitle="Showcase de todos os componentes do design system"
      />

      {/* Button */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Button</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Variantes: <code>primary</code> (padrão) e <code>accent</code>. Aceita
          todas as props nativas de <code>&lt;button&gt;</code>.
        </p>
        <div className="flex gap-3 items-center">
          <Button>Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* PageHeader */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Page Header</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Título + subtítulo com slot opcional de ações à direita.
        </p>
        <div className="bg-surface p-6 shadow-sm">
          <PageHeader
            title="Título da Página"
            subtitle="Descrição curta sobre o conteúdo"
            actions={
              <>
                <Button>Ação 1</Button>
                <Button variant="accent">Ação 2</Button>
              </>
            }
          />
        </div>
      </section>

      {/* SectionTitle */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Section Title</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Heading de seção em caixa alta com tracking largo.
        </p>
        <div className="flex flex-col gap-2">
          <SectionTitle>Exemplo de Título</SectionTitle>
          <SectionTitle className="text-accent">
            Título com cor customizada
          </SectionTitle>
        </div>
      </section>

      {/* StatCard */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Stat Card</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Card de estatística com label (uppercase) e valor grande.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Total Clientes" value="48" />
          <StatCard label="Orçamentos" value="124" />
          <StatCard label="Valor Total" value="R$ 87.500" />
        </div>
      </section>

      {/* StatusBadge */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Status Badge</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Status: <code>pendente</code>, <code>aprovado</code>,{' '}
          <code>rascunho</code>. Opção <code>withBackground</code> para fundo.
        </p>
        <div className="flex gap-6 items-center">
          <StatusBadge status="pendente" />
          <StatusBadge status="aprovado" />
          <StatusBadge status="rascunho" />
        </div>
        <div className="flex gap-6 items-center">
          <StatusBadge status="pendente" withBackground />
          <StatusBadge status="aprovado" withBackground />
          <StatusBadge status="rascunho" withBackground />
        </div>
      </section>

      {/* TableHeader */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Table Header</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Cabeçalho de tabela com colunas distribuídas.
        </p>
        <TableHeader columns={['Cliente', 'Orçamento', 'Valor', 'Status']} />
      </section>

      {/* ListRow */}
      <section className="flex flex-col gap-4">
        <SectionTitle>List Row</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Linha genérica com conteúdo esquerda/direita. Renderiza{' '}
          <code>&lt;button&gt;</code> quando tem <code>onClick</code>, senão{' '}
          <code>&lt;div&gt;</code>.
        </p>
        <div className="flex flex-col gap-2">
          <ListRow
            left="Maria Silva"
            right={<StatusBadge status="aprovado" />}
          />
          <ListRow
            left="João Santos"
            right={<StatusBadge status="pendente" />}
            onClick={() => {}}
          />
          <ListRow
            left="Ana Oliveira"
            right={<StatusBadge status="rascunho" />}
          />
        </div>
      </section>

      {/* Sidebar (preview) */}
      <section className="flex flex-col gap-4">
        <SectionTitle>Sidebar</SectionTitle>
        <p className="font-ui text-sm text-foreground-muted">
          Barra lateral com logo e navegação. Usa <code>Link</code> do TanStack
          Router com detecção de rota ativa via <code>useMatchRoute</code>.
          Exibida aqui como preview estático (já visível na lateral da página).
        </p>
        <div className="bg-surface-muted p-4 font-ui text-sm text-foreground-muted">
          A Sidebar está ativa na lateral esquerda desta página.
        </div>
      </section>
    </div>
  )
}
