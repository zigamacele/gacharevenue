import { Toggle as ToggleComp } from '@/lib/shadcn/ui/toggle'
import { cn } from '@/lib/shadcn/utils'

import Tooltip from '../Tooltip'

interface SrotingToggleProps {
  onClick: (updateState: (value: boolean) => boolean) => void
  children: React.ReactNode
  disabled?: boolean
  pressed?: boolean
  tooltip: string
  className?: string
}

const Toggle: React.FC<SrotingToggleProps> = ({
  onClick,
  children,
  disabled,
  pressed,
  tooltip,
  className,
}) => {
  return (
    <Tooltip text={tooltip}>
      <ToggleComp
        pressed={pressed}
        disabled={disabled}
        className={cn('w-12 bg-neutral-950', className)}
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
