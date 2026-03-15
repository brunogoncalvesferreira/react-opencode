import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Sidebar } from '../components/sidebar'

const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Orçamentos', to: '/orcamentos' },
]

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={navItems} />

      <main className="flex-1 p-10">
        <Outlet />
      </main>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
