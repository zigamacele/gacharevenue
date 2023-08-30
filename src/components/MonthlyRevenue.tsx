import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import { Separator } from '@/lib/shadcn/ui/separator'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import useSupabaseStore from '@/stores/supabase-store'
import { combineSameGameRevenue } from '@/utils/filters'
import { queryFilterSort } from '@/utils/sorting'
import { useMemo } from 'react'
import MonthlyRevenueControls from './MonthlyRevenue/MonthlyRevenueControls'

const MonthlyRevenue: React.FC = () => {
  const {
    sortAscending,
    pinned,
    removed,
    showPinned,
    showEditSection,
    showCombinedRevenue,
  } = useMonthlyTableControls()
  const { loading, storage } = useSupabaseStore()

  const combinedRevenue = useMemo(() => {
    return combineSameGameRevenue(storage)
  }, [storage])

  const TableData = showCombinedRevenue ? combinedRevenue : storage

  return (
    <section className='slide-from-bottom my-4 flex w-full flex-col rounded-md border border-neutral-700/80 bg-neutral-900 px-2 sm:w-auto'>
      <MonthlyRevenueControls />
      <Separator className='mt-2 w-full opacity-40' />
      <MonthlyRevenueTable
        data={queryFilterSort({
          data: TableData,
          pinned,
          removed,
          showPinned,
          showEditSection,
          sortAscending,
        })}
        loading={loading}
        showEditSection={showEditSection}
      />
    </section>
  )
}

export default MonthlyRevenue
