import { ArrowDown10, ArrowUp10, Combine, Pin, PinOff } from 'lucide-react'

import { Separator } from '@/lib/shadcn/ui/separator'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import MonthSwitcher from '@/layouts/MonthSwitcher'

import Toggle from '../Toggle'

const RightControls: React.FC = () => {
  const { sortAscending, showPinned, toggle, pinned, showCombinedRevenue } =
    useRevenueTableControls()
  return (
    <>
      <MonthSwitcher />
      <Separator orientation='vertical' className='h-5 opacity-60' />
      <Toggle
        onClick={() => toggle('showPinned')}
        disabled={!pinned.length && !showPinned}
        pressed={showPinned}
        tooltip={!showPinned ? 'Show Pinned' : 'Hide Pinned'}
      >
        {showPinned ? <PinOff size={18} /> : <Pin size={18} />}
      </Toggle>
      <Toggle
        onClick={() => toggle('showCombinedRevenue')}
        pressed={showCombinedRevenue}
        tooltip={
          !showCombinedRevenue
            ? 'Combine Region Revenue'
            : 'Separate Region Revenue'
        }
      >
        <Combine size={18} />
      </Toggle>
      <Toggle
        onClick={() => toggle('sortAscending')}
        pressed={sortAscending}
        tooltip={!sortAscending ? 'Sort Ascending' : 'Sort Descending'}
      >
        {sortAscending ? <ArrowUp10 size={22} /> : <ArrowDown10 size={22} />}
      </Toggle>
    </>
  )
}

export default RightControls
