import { Toggle } from '@/lib/shadcn/ui/toggle'
import { ArrowDown10, ArrowUp10 } from 'lucide-react'

interface SrotingToggleProps {
  sortingToggle: boolean
  setSortingToggle: (updateState: (value: boolean) => boolean) => void
}

const SortingToggle: React.FC<SrotingToggleProps> = ({
  sortingToggle,
  setSortingToggle,
}) => {
  return (
    <Toggle
      className='bg-neutral-800/80 px-2'
      onClick={() => {
        setSortingToggle((prev) => {
          return !prev
        })
      }}
    >
      {sortingToggle ? <ArrowUp10 size={22} /> : <ArrowDown10 size={22} />}
    </Toggle>
  )
}

export default SortingToggle
