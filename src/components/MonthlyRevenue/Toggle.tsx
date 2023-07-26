import { Toggle as ToggleComp } from '@/lib/shadcn/ui/toggle'

interface SrotingToggleProps {
  onClick: (updateState: (value: boolean) => boolean) => void
  children: React.ReactNode
}

const Toggle: React.FC<SrotingToggleProps> = ({ onClick, children }) => {
  return (
    <ToggleComp
      className='w-12 bg-neutral-800/80'
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
