import {
  ArrowDown10,
  ArrowUp10,
  Combine,
  Construction,
  Pin,
  PinOff,
} from 'lucide-react'

import { Separator } from '@/lib/shadcn/ui/separator'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import MonthSwitcher from '@/components/Revenue/RevenueControls/MonthSwitcher.tsx'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import AndroidMultiplier from './AndroidMultiplier'
import Toggle from '../Toggle'

const RightControls: React.FC = () => {
  const {
    sortAscending,
    showPinned,
    showMaintenance,
    toggle,
    pinned,
    showCombinedRevenue,
  } = useRevenueTableControls()

  const isMobile = useCurrentDevice()
  return (
    <>
      <AndroidMultiplier />
      <Separator orientation='vertical' className='h-5 opacity-60' />
      <MonthSwitcher />
      <Separator orientation='vertical' className='h-5 opacity-60' />
      <Toggle
        onClick={() => toggle('showMaintenance')}
        pressed={showMaintenance}
        tooltip={
          !showMaintenance
            ? 'Show Games in Maintenance Mode'
            : 'Hide Games in Maintenance Mode'
        }
      >
        <Construction size={18} />
      </Toggle>
      <Separator orientation='vertical' className='h-5 opacity-60' />
      <Toggle
        onClick={() => toggle('showPinned')}
        disabled={!pinned.length && !showPinned}
        pressed={showPinned}
        tooltip={!showPinned ? 'Show Pinned' : 'Hide Pinned'}
      >
        {showPinned ? <PinOff size={18} /> : <Pin size={18} />}
      </Toggle>
      {!isMobile && (
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
      )}
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
