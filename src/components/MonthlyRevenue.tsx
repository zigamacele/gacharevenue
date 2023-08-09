import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import MotionInView from '@/lib/framer-motion/MotionInView'
import { Separator } from '@/lib/shadcn/ui/separator'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import useSupabaseStore from '@/stores/supabase-store'
import { queryFilterSort } from '@/utils/sorting'
import MonthlyRevenueControls from './MonthlyRevenue/MonthlyRevenueControls'

const MonthlyRevenue: React.FC = () => {
  const { sortAscending, pinned, removed, showPinned, showEditSection } =
    useMonthlyTableControls()

  const { loading, storage } = useSupabaseStore()

  return (
    <MotionInView
      delay={0.2}
      styles='my-4 flex flex-col rounded-md border border-neutral-700/80 bg-neutral-900 px-2'
    >
      <MonthlyRevenueControls />
      <Separator className='mt-2 w-full opacity-40' />
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
    </MotionInView>
  )
}

export default MonthlyRevenue
