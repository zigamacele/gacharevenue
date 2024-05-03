import { cn } from '@/lib/shadcn/utils'

import Tooltip from '@/components/Tooltip'

import { getRegion } from '@/utils/region'

interface RegionTooltipProps {
  gameRegion?: string
  className?: string
  onClick?: () => void
}

const RegionTooltip: React.FC<RegionTooltipProps> = ({
  gameRegion,
  className = 'right-1 top-1',
  onClick,
}) => {
  const region = getRegion(gameRegion)

  return (
    <div
      className={cn(
        'absolute z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-neutral-800 bg-neutral-900 text-xs',
        region.color,
        className,
      )}
      onClick={onClick}
    >
      <Tooltip text={region.text}>{region.emoji}</Tooltip>
    </div>
  )
}

export default RegionTooltip
