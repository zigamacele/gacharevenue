import { cn } from '@/lib/shadcn/utils.ts'

import Tooltip from '@/components/Tooltip'

interface EosTooltipProps {
  className?: string
  isEos?: boolean
}

const EosTooltip: React.FC<EosTooltipProps> = ({
  className,
  isEos = 'right-1 top-1',
}) => {
  if (!isEos) return null
  return (
    <Tooltip
      text='End of Service'
      className={cn(
        'absolute z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-neutral-700 bg-neutral-600 text-xs',
        className,
      )}
    >
      💀
    </Tooltip>
  )
}

export default EosTooltip
