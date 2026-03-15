import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ListRowProps {
  left: ReactNode
  right: ReactNode
  onClick?: () => void
  className?: string
}

export function ListRow({ left, right, onClick, className }: ListRowProps) {
  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={twMerge(
        'flex items-center justify-between bg-surface p-4 w-full shadow-sm',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      <span className="font-heading text-[15px] font-semibold text-foreground">
        {left}
      </span>
      <span className="font-ui text-[11px] font-semibold tracking-[1px]">
        {right}
      </span>
    </Component>
  )
}
