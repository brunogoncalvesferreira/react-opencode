import { Link, useMatchRoute } from '@tanstack/react-router'
import { useState } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <aside
      className={twMerge(
        'flex bg-surface',
        'flex-col px-4 py-3 w-full',
        'md:flex-col md:items-start md:gap-6 md:p-5 md:w-55 md:min-h-screen',
        className,
      )}
    >
      <div className="flex items-center justify-between w-full md:hidden">
        <Link
          to="/"
          className="font-ui text-lg font-bold tracking-[2px] text-brand no-underline"
        >
          ORÇA PRO
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex flex-col gap-[5px] p-2"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span
            className={twMerge(
              'block h-[2px] w-5 bg-foreground transition-transform duration-200',
              mobileOpen && 'translate-y-[7px] rotate-45',
            )}
          />
          <span
            className={twMerge(
              'block h-[2px] w-5 bg-foreground transition-opacity duration-200',
              mobileOpen && 'opacity-0',
            )}
          />
          <span
            className={twMerge(
              'block h-[2px] w-5 bg-foreground transition-transform duration-200',
              mobileOpen && '-translate-y-[7px] -rotate-45',
            )}
          />
        </button>
      </div>

      {/* Desktop logo — hidden on mobile (shown above instead) */}
      <Link
        to="/"
        className="hidden md:block font-ui text-lg font-bold tracking-[2px] text-brand no-underline"
      >
        ORÇA PRO
      </Link>

      <nav
        className={twMerge(
          'flex-col gap-3 w-full pt-3 md:pt-0',
          mobileOpen ? 'flex md:flex' : 'hidden md:flex',
        )}
      >
        {items.map((item) => {
          const isActive = !!matchRoute({ to: item.to, fuzzy: true })
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
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
