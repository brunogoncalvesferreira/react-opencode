import { Link, useMatchRoute } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'

interface NavItem {
  label: string
  to: string
}

interface SidebarProps {
  items: NavItem[]
  className?: string
}

export function Sidebar({ items, className }: SidebarProps) {
  const matchRoute = useMatchRoute()

  return (
    <aside
      className={twMerge(
        'flex bg-surface',
        'flex-row items-center gap-4 px-4 py-3 w-full',
        'md:flex-col md:items-start md:gap-6 md:p-5 md:w-55 md:min-h-screen',
        className,
      )}
    >
      <Link
        to="/"
        className="font-ui text-lg font-bold tracking-[2px] text-brand no-underline"
      >
        ORÇA PRO
      </Link>

      <nav className="flex gap-3 w-full md:flex-col">
        {items.map((item) => {
          const isActive = !!matchRoute({ to: item.to, fuzzy: true })
          return (
            <Link
              key={item.to}
              to={item.to}
              className={twMerge(
                'font-ui text-xs tracking-[3px] uppercase no-underline',
                isActive
                  ? 'font-bold text-accent'
                  : 'font-semibold text-foreground-subtle',
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
