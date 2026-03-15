import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface PageHeaderProps {
  title: string
  subtitle: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({
  title,
  subtitle,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={twMerge(
        'flex flex-col gap-3 w-full',
        'sm:flex-row sm:items-center sm:justify-between sm:gap-0',
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl sm:text-[32px] font-semibold tracking-[-0.5px] text-foreground">
          {title}
        </h1>
        <p className="font-heading text-sm leading-[1.6] text-foreground-muted">
          {subtitle}
        </p>
      </div>

      {actions && <div className="flex gap-2">{actions}</div>}
    </header>
  )
}
