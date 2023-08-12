import { Toggle as ToggleComp } from '@/lib/shadcn/ui/toggle'

interface SrotingToggleProps {
  onClick: (updateState: (value: boolean) => boolean) => void
  children: React.ReactNode
  disabled?: boolean
  pressed?: boolean
}

const Toggle: React.FC<SrotingToggleProps> = ({
  onClick,
  children,
  disabled,
  pressed,
}) => {
  return (
    <ToggleComp
      pressed={pressed}
      disabled={disabled}
      className='w-12 bg-neutral-950'
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
