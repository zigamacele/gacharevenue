import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Combine,
  Pin,
  PinOff,
} from 'lucide-react'

import { Input } from '@/lib/shadcn/ui/input'
import { Separator } from '@/lib/shadcn/ui/separator'

import useMonthlyTableControls from '@/stores/monthly-table-controls'

import MonthSwitcher from '@/layouts/MonthSwitcher'

import Toggle from './Toggle'

const MonthlyRevenueControls: React.FC = () => {
  const {
    search,
    updateSearch,
    sortAscending,
    showPinned,
    toggle,
    pinned,
    showCombinedRevenue,
    showEditSection,
  } = useMonthlyTableControls()

  return (
    <section className='mx-2 mt-2 flex justify-between'>
      <div className='flex items-center gap-2'>
        <Toggle
          onClick={() => toggle('showEditSection')}
          pressed={showEditSection}
          tooltip={!showEditSection ? 'Edit Chart' : 'Close Editor'}
        >
          <ClipboardEdit size={20} />
        </Toggle>
        <Input
          className='w-40 rounded border-neutral-700/80 bg-neutral-950 sm:w-80'
          placeholder='Search'
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
        />
      </div>
      <div className='hidden items-center gap-2 sm:flex'>
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
      </div>
    </section>
  )
}

export default MonthlyRevenueControls
