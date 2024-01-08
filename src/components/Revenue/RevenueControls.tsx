import { ClipboardEdit } from 'lucide-react'

import { Input } from '@/lib/shadcn/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import { Mode } from '@/utils/enums'

import MobileRevenuePopover from './RevenueControls/MobileRevenuePopover'
import RightControls from './RevenueControls/RightControls'
import Toggle from './Toggle'

const RevenueControls: React.FC = () => {
  const { search, updateSearch, toggle, showEditSection, updateMode, mode } =
    useRevenueTableControls()

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
        <Tabs value={mode}>
          <TabsList className='center flex rounded-md border-neutral-700/80'>
            <TabsTrigger
              value={Mode.MONTHLY}
              onClick={() => updateMode(Mode.MONTHLY)}
            >
              {Mode.MONTHLY}
            </TabsTrigger>
            <TabsTrigger
              value={Mode.YEARLY}
              onClick={() => updateMode(Mode.YEARLY)}
            >
              {Mode.YEARLY}
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Input
          className='w-52 rounded border-neutral-700/80 bg-neutral-950 sm:w-64'
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

export default RevenueControls
