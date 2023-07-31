import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import useMonthlyTableControls from '@/stores/monthly-table-controls'
import { queryFilterSort } from '@/utils/sorting'
import MonthlyRevenueControls from './MonthlyRevenue/MonthlyRevenueControls'
import useSupabaseStore from '@/stores/supabase-store'

const MonthlyRevenue: React.FC = () => {
  const { sortAscending, pinned, removed, showPinned, showEditSection } =
    useMonthlyTableControls()

  const { loading, storage } = useSupabaseStore()

  return (
    <main className='my-4 flex flex-col gap-2'>
      <MonthlyRevenueControls />
      <MonthlyRevenueTable
        data={queryFilterSort({
          data: storage,
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
