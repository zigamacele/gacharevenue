import { Toggle as ToggleComp } from '@/lib/shadcn/ui/toggle'
import { cn } from '@/lib/shadcn/utils'

import { SlideDirection } from '@/utils/enums'

import Tooltip from '../Tooltip'

interface SrotingToggleProps {
  onClick: (updateState: (value: boolean) => boolean) => void
  children: React.ReactNode
  disabled?: boolean
  pressed?: boolean
  slideFrom?: SlideDirection
  tooltip: string
}

const Toggle: React.FC<SrotingToggleProps> = ({
  onClick,
  children,
  disabled,
  pressed,
  slideFrom,
  tooltip,
}) => {
  return (
    <Tooltip text={tooltip}>
      <ToggleComp
        pressed={pressed}
        disabled={disabled}
        className={cn(
          'w-12 bg-neutral-950',
          slideFrom && `slide-from-${slideFrom}`,
        )}
        onClick={() => {
          onClick((prev) => {
            return !prev
          })
        }}
      >
        {children}
      </ToggleComp>
    </Tooltip>
  )
}

export default Toggle
