import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import { queryFilterSort } from '@/utils/sorting'
import MonthlyRevenueControls from './MonthlyRevenue/MonthlyRevenueControls'

const MonthlyRevenue: React.FC = () => {
  const { sortAscending, pinned, removed, showPinned, showEditSection } =
    useMonthlyTableControls()

  const { data, loading } = useSupabaseQuery({
    mainTable: 'games2',
    otherTables: [`${CURRENT_TABLE} ( * )`, `${PREVIOUS_TABLE} ( * )`],
  })

  return (
    <main className='my-4 flex flex-col gap-2'>
      <MonthlyRevenueControls />
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
