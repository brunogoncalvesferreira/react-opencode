import { twMerge } from 'tailwind-merge'

interface SectionTitleProps {
  children: string
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={twMerge(
        'font-ui text-xs font-bold uppercase tracking-[3px] text-brand',
        className,
      )}
    >
      {children}
    </h2>
  )
}
