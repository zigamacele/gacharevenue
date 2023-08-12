import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import MotionInView from '@/lib/framer-motion/MotionInView'
import { Separator } from '@/lib/shadcn/ui/separator'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import useSupabaseStore from '@/stores/supabase-store'
import { QueryOutput } from '@/types/supabase'
import { combineSameGameRevenue } from '@/utils/filters'
import { queryFilterSort } from '@/utils/sorting'
import { useState } from 'react'
import MonthlyRevenueControls from './MonthlyRevenue/MonthlyRevenueControls'

const MonthlyRevenue: React.FC = () => {
  const [storageTest] = useState<QueryOutput[]>([])
  const {
    sortAscending,
    pinned,
    removed,
    showPinned,
    showEditSection,
    showCombinedRevenue,
  } = useMonthlyTableControls()

  const { loading, storage } = useSupabaseStore()

  return (
    <MotionInView
      delay={0.2}
      styles='my-4 flex flex-col rounded-md border border-neutral-700/80 bg-neutral-900 px-2 w-full sm:w-auto'
    >
      <MonthlyRevenueControls />
      <Separator className='mt-2 w-full opacity-40' />
      <MonthlyRevenueTable
        data={queryFilterSort({
          data: showCombinedRevenue
            ? combineSameGameRevenue(storage)
            : storageTest,
          pinned,
          removed,
          showPinned,
          showEditSection,
          sortAscending,
        })}
        loading={loading}
        showEditSection={showEditSection}
      />
    </MotionInView>
  )
}

export default MonthlyRevenue
