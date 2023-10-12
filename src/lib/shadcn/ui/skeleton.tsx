import { cn } from '@/lib/shadcn/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-neutral-700/60 dark:bg-neutral-50/10',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
