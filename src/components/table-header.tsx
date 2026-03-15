import { twMerge } from 'tailwind-merge'

interface TableHeaderProps {
  columns: string[]
  className?: string
}

export function TableHeader({ columns, className }: TableHeaderProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-between bg-surface-muted p-3 w-full',
        className,
      )}
    >
      {columns.map((col) => (
        <span
          key={col}
          className="font-ui text-[10px] font-bold uppercase tracking-[2px] text-foreground-muted"
        >
          {col}
        </span>
      ))}
    </div>
  )
}
