import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../components/button'
import { ListRow } from '../../components/list-row'
import { PageHeader } from '../../components/page-header'
import { SectionTitle } from '../../components/section-title'
import { StatusBadge } from '../../components/status-badge'

export const Route = createFileRoute('/orcamentos/')({
  component: OrcamentosPage,
})

function OrcamentosPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Orçamentos"
        subtitle="Todos os orçamentos enviados"
        actions={<Button>Novo Orçamento</Button>}
      />

      <div className="flex flex-col gap-3">
        <SectionTitle>Lista de Orçamentos</SectionTitle>

        <ListRow
          left="Identidade visual · Studio Lótus"
          right={
            <span className="flex items-center gap-2">
              <span className="font-ui text-[11px] font-semibold tracking-[1px] text-foreground-subtle">
                R$ 7.800
              </span>
              <StatusBadge status="pendente" />
            </span>
          }
        />

        <ListRow
          left="Website · Norte Mecânica"
          right={
            <span className="flex items-center gap-2">
              <span className="font-ui text-[11px] font-semibold tracking-[1px] text-foreground-subtle">
                R$ 12.500
              </span>
              <StatusBadge status="aprovado" />
            </span>
          }
        />

        <ListRow
          left="Consultoria · Arq. Pedra"
          right={
            <span className="flex items-center gap-2">
              <span className="font-ui text-[11px] font-semibold tracking-[1px] text-foreground-subtle">
                R$ 3.200
              </span>
              <StatusBadge status="rascunho" />
            </span>
          }
        />
      </div>
    </div>
  )
}
