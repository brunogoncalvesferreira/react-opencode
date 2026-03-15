import { twMerge } from 'tailwind-merge'

type Status = 'pendente' | 'aprovado' | 'rascunho'

interface StatusBadgeProps {
  status: Status
  withBackground?: boolean
  className?: string
}

const statusStyles: Record<Status, string> = {
  pendente: 'text-accent',
  aprovado: 'text-success',
  rascunho: 'text-foreground-subtle',
}

const statusLabels: Record<Status, string> = {
  pendente: 'PENDENTE',
  aprovado: 'APROVADO',
  rascunho: 'RASCUNHO',
}

export function StatusBadge({
  status,
  withBackground = false,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={twMerge(
        'font-ui text-[11px] font-semibold uppercase tracking-[1px]',
        statusStyles[status],
        withBackground && 'bg-surface-muted px-2 py-1',
        className,
      )}
    >
      {statusLabels[status]}
    </span>
  )
}
