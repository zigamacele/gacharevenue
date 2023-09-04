import { Toggle as ToggleComp } from '@/lib/shadcn/ui/toggle'
import { cn } from '@/lib/shadcn/utils'

interface SrotingToggleProps {
  onClick: (updateState: (value: boolean) => boolean) => void
  children: React.ReactNode
  disabled?: boolean
  pressed?: boolean
  slideFrom?: 'left' | 'right'
}

const Toggle: React.FC<SrotingToggleProps> = ({
  onClick,
  children,
  disabled,
  pressed,
  slideFrom,
}) => {
  return (
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
  )
}

export default Toggle
