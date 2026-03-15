import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/button'
import { ListRow } from '../components/list-row'
import { PageHeader } from '../components/page-header'
import { SectionTitle } from '../components/section-title'
import { StatCard } from '../components/stat-card'
import { StatusBadge } from '../components/status-badge'

export const Route = createFileRoute('/')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        subtitle="Resumo das atividades e indicadores"
        actions={<Button>Novo Orçamento</Button>}
      />

      <div className="flex gap-3">
        <StatCard label="Orçamentos este mês" value="18" />
        <StatCard label="Taxa de aprovação" value="62%" />
        <StatCard label="Receita prevista" value="R$ 48.200" />
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle>Orçamentos Recentes</SectionTitle>
        <ListRow
          left="Identidade visual · Studio Lótus"
          right={<StatusBadge status="pendente" />}
        />
        <ListRow
          left="Site institucional · Norte Mecânica"
          right={<StatusBadge status="aprovado" />}
        />
      </div>
    </div>
  )
}
