import ChartControls from '@/components/Charts/ChartControls'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'
import { Separator } from '@/lib/shadcn/ui/separator'
import useSupabaseStore from '@/stores/supabase-store'

import {
  prepareBarChartData,
  prepareLineChartData,
  preparePieChartData,
} from '@/utils/charts'

import { useState } from 'react'

const Charts: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('pie')

  const { storage, tables } = useSupabaseStore()

  return (
    <section className='mt-4 flex flex-col items-center gap-2'>
      <div className='h-[70vh] w-full rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 pb-16 sm:w-[70vw]'>
        <ChartControls
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <Separator className='mt-2 w-full opacity-40' />
        {selectedChart === 'pie' && <Pie data={preparePieChartData(storage)} />}
        {selectedChart === 'line' && (
          <Line data={prepareLineChartData(storage, tables)} />
        )}
        {selectedChart === 'bar' && (
          <Bar data={prepareBarChartData(storage, tables)} />
        )}
      </div>
    </section>
  )
}

export default Charts
