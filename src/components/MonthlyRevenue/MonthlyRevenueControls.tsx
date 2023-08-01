import useMonthlyTableControls from '@/stores/monthly-table-controls'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Pin,
  PinOff,
} from 'lucide-react'
import Toggle from './Toggle'

const MonthlyRevenueControls: React.FC = () => {
  const { sortAscending, showPinned, toggle } = useMonthlyTableControls()
  return (
    <section className='flex justify-between'>
      <Toggle onClick={() => toggle('showEditSection')}>
        <div>
          <ClipboardEdit size={20} />
        </div>
      </Toggle>
      <div className='flex justify-end gap-2'>
        <Toggle onClick={() => toggle('showPinned')}>
          {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
        </Toggle>
        <Toggle onClick={() => toggle('sortAscending')}>
          {sortAscending ? <ArrowUp10 size={22} /> : <ArrowDown10 size={22} />}
        </Toggle>
      </div>
    </section>
  )
}

export default MonthlyRevenueControls
