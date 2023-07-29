import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import { queryFilterSort } from '@/utils/sorting'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Pin,
  PinOff,
} from 'lucide-react'
import Toggle from './MonthlyRevenue/Toggle'

const MonthlyRevenue: React.FC = () => {
  const {
    sortAscending,
    pinned,
    removed,
    showPinned,
    showEditSection,
    toggle,
  } = useMonthlyTableControls()

  const { data, loading } = useSupabaseQuery({
    mainTable: 'games2',
    otherTables: [`${CURRENT_TABLE} ( * )`, `${PREVIOUS_TABLE} ( * )`],
  })

  return (
    <main className='my-4 flex flex-col gap-2'>
      <section className='flex justify-between'>
        <Toggle onClick={() => toggle('showEditSection')}>
          <ClipboardEdit size={20} />
        </Toggle>
        <div className='flex justify-end gap-2'>
          <Toggle onClick={() => toggle('showPinned')}>
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
          <Toggle onClick={() => toggle('sortAscending')}>
            {sortAscending ? (
              <ArrowUp10 size={22} />
            ) : (
              <ArrowDown10 size={22} />
            )}
          </Toggle>
        </div>
      </section>
      <MonthlyRevenueTable
        data={queryFilterSort({
          data,
          pinned,
          removed,
          showPinned,
          showEditSection,
          sortAscending,
        })}
        loading={loading}
        showEditSection={showEditSection}
      />
    </main>
  )
}

export default MonthlyRevenue
