import useMonthlyTableControls from '@/stores/monthly-table-controls'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Combine,
  Pin,
  PinOff,
} from 'lucide-react'
import Toggle from './Toggle'
import Tooltip from '../Tooltip'

const MonthlyRevenueControls: React.FC = () => {
  const {
    sortAscending,
    showPinned,
    toggle,
    pinned,
    showCombinedRevenue,
    showEditSection,
  } = useMonthlyTableControls()

  return (
    <section className='mx-2 mt-2 flex justify-between'>
      <Tooltip text={!showEditSection ? 'Edit Chart' : 'Close Editor'}>
        <Toggle
          onClick={() => toggle('showEditSection')}
          pressed={showEditSection}
        >
          <ClipboardEdit size={20} />
        </Toggle>
      </Tooltip>
      <div className='flex justify-end gap-2'>
        <Tooltip text={!showPinned ? 'Show Pinned' : 'Hide Pinned'}>
          <Toggle
            onClick={() => toggle('showPinned')}
            disabled={!pinned.length && !showPinned}
          >
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
        </Tooltip>
        <Tooltip
          text={
            !showCombinedRevenue
              ? 'Combine Region Revenue'
              : 'Separate Region Revenue'
          }
        >
          <Toggle
            onClick={() => toggle('showCombinedRevenue')}
            pressed={showCombinedRevenue}
          >
            <Combine size={18} />
          </Toggle>
        </Tooltip>
        <Tooltip text={!sortAscending ? 'Sort Ascending' : 'Sort Descending'}>
          <Toggle
            onClick={() => toggle('sortAscending')}
            pressed={sortAscending}
          >
            {sortAscending ? (
              <ArrowUp10 size={22} />
            ) : (
              <ArrowDown10 size={22} />
            )}
          </Toggle>
        </Tooltip>
      </div>
    </section>
  )
}

export default MonthlyRevenueControls
