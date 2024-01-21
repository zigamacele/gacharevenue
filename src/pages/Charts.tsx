import { useMemo, useState } from 'react'

import MotionInView from '@/lib/framer-motion/MotionInView'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'
import { Separator } from '@/lib/shadcn/ui/separator'

import ChartControls from '@/components/Charts/ChartControls'

import useRevenueTableControls from '@/stores/revenue-table-controls'
import useSupabaseStore from '@/stores/supabase-store'

import {
  prepareBarChartData,
  prepareLineChartData,
  preparePieChartData,
} from '@/utils/charts'
import { combineSameGameRevenue } from '@/utils/filters'
import { queryFilter } from '@/utils/sorting'

const Charts: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('pie')

  const { storage, tables } = useSupabaseStore()
  const { showCombinedRevenue, pinned, removed, showPinned } =
    useRevenueTableControls()

  const combinedRevenue = useMemo(() => {
    return combineSameGameRevenue(storage)
  }, [storage])

  const ChartsData = queryFilter({
    data:
      showCombinedRevenue && selectedChart === 'pie'
        ? combinedRevenue
        : storage,
    pinned,
    removed,
    showPinned,
  })

  return (
    <MotionInView styles='mt-2 flex flex-col items-center gap-2'>
      <div className='h-[70vh] w-full overflow-y-hidden overflow-x-scroll rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 pb-16 sm:w-[70vw]'>
        <ChartControls
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <Separator className='mt-2 w-full opacity-40' />
        {selectedChart === 'pie' && (
          <Pie data={preparePieChartData(ChartsData)} />
        )}
        {selectedChart === 'line' && (
          <Line data={prepareLineChartData(ChartsData, tables)} height='100%' />
        )}
        {selectedChart === 'bar' && (
          <Bar data={prepareBarChartData(ChartsData, tables)} height='100%' />
        )}
      </div>
    </MotionInView>
  )
}

export default Charts
