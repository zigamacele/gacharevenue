import useMonthlyTableControls from '@/stores/monthly-table-controls'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Pin,
  PinOff,
} from 'lucide-react'
import Tooltip from '../Tooltip'
import Toggle from './Toggle'

const MonthlyRevenueControls: React.FC = () => {
  const { sortAscending, showPinned, toggle, showEditSection } =
    useMonthlyTableControls()
  return (
    <section className='flex justify-between'>
      <Tooltip text={!showEditSection ? 'Edit Chart' : 'Close Editor'}>
        <Toggle onClick={() => toggle('showEditSection')}>
          <ClipboardEdit size={20} />
        </Toggle>
      </Tooltip>
      <div className='flex justify-end gap-2'>
        <Tooltip text={!showPinned ? 'Show Pinned' : 'Hide Pinned'}>
          <Toggle onClick={() => toggle('showPinned')}>
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
        </Tooltip>
        <Tooltip text={!sortAscending ? 'Sort Ascending' : 'Sort Descending'}>
          <Toggle onClick={() => toggle('sortAscending')}>
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
