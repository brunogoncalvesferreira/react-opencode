import { twMerge } from 'tailwind-merge'

interface StatCardProps {
  label: string
  value: string
  className?: string
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-1 bg-surface p-4 w-full shadow-sm',
        className,
      )}
    >
      <span className="font-ui text-[10px] font-bold uppercase tracking-[2px] text-foreground-subtle">
        {label}
      </span>
      <span className="font-heading text-[32px] font-semibold tracking-[-1px] text-foreground">
        {value}
      </span>
    </div>
  )
}
