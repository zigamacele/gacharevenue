import Tooltip from '@/components/Tooltip'
import { cn } from '@/lib/shadcn/utils'
import { getRegion } from '@/utils/region'
import React from 'react'

interface RegionTooltipProps {
  gameRegion: string
}

const RegionTooltip: React.FC<RegionTooltipProps> = ({ gameRegion }) => {
  const region = getRegion(gameRegion)

  return (
    <div
      className={cn(
        'absolute left-1 top-1 z-50 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-neutral-800 bg-neutral-900 text-sm',
        region.color,
      )}
    >
      <Tooltip text={region.text}>{region.emoji}</Tooltip>
    </div>
  )
}

export default RegionTooltip
