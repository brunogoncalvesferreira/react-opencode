import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../components/button'
import { ListRow } from '../../components/list-row'
import { PageHeader } from '../../components/page-header'
import { SectionTitle } from '../../components/section-title'
import { StatCard } from '../../components/stat-card'
import { StatusBadge } from '../../components/status-badge'

export const Route = createFileRoute('/orcamentos/$orcamentoId')({
  component: DetalheOrcamentoPage,
})

function DetalheOrcamentoPage() {
  const { orcamentoId } = Route.useParams()

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={`Orçamento #${orcamentoId}`}
        subtitle="Identidade visual · Studio Lótus"
        actions={
          <>
            <Button variant="accent">Enviar PDF</Button>
            <Button>Duplicar</Button>
          </>
        }
      />

      <div className="flex items-center gap-2">
        <span className="font-ui text-[10px] font-bold uppercase tracking-[2px] text-foreground-subtle">
          Status
        </span>
        <StatusBadge status="pendente" withBackground />
      </div>

      <StatCard label="Total" value="R$ 7.800" />

      <div className="flex flex-col gap-3">
        <SectionTitle>Itens do Orçamento</SectionTitle>
        <ListRow left="Logo + Manual de marca" right="R$ 4.800" />
      </div>
    </div>
  )
}
