import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/button'
import { ListRow } from '../components/list-row'
import { PageHeader } from '../components/page-header'
import { SectionTitle } from '../components/section-title'
import { TableHeader } from '../components/table-header'

export const Route = createFileRoute('/clientes')({
  component: ClientesPage,
})

function ClientesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Clientes"
        subtitle="Base de clientes ativos"
        actions={<Button>Novo Cliente</Button>}
      />

      <div className="flex flex-col gap-3">
        <SectionTitle>Lista de Clientes</SectionTitle>
        <TableHeader columns={['Cliente', 'Projetos']} />
        <ListRow left="Studio Lótus" right="4" />
        <ListRow left="Norte Mecânica" right="2" />
      </div>
    </div>
  )
}
