import { ClipboardEdit } from 'lucide-react'

import { Input } from '@/lib/shadcn/ui/input'

import useMonthlyTableControls from '@/stores/monthly-table-controls'

import MobileRevenuePopover from './MonthlyRevenueControls/MobileRevenuePopover'
import RightControls from './MonthlyRevenueControls/RightControls'
import Toggle from './Toggle'

const MonthlyRevenueControls: React.FC = () => {
  const { search, updateSearch, toggle, showEditSection } =
    useMonthlyTableControls()

  return (
    <section className='mx-2 mt-2 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Toggle
          onClick={() => toggle('showEditSection')}
          pressed={showEditSection}
          tooltip={!showEditSection ? 'Edit Chart' : 'Close Editor'}
        >
          <ClipboardEdit size={20} />
        </Toggle>
        <Input
          className='w-52 rounded border-neutral-700/80 bg-neutral-950 sm:w-80'
          placeholder='Search'
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
        />
      </div>
      <span className='hidden items-center gap-2 md:flex'>
        <RightControls />
      </span>
      <MobileRevenuePopover />
    </section>
  )
}

export default MonthlyRevenueControls
