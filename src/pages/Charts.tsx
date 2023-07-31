import ChartControls from '@/components/Charts/ChartControls'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'
import useSupabaseStore from '@/stores/supabase-store'

import {
  prepareBarChartData,
  prepareLineChartData,
  preparePieChartData,
} from '@/utils/charts'

import { useState } from 'react'

const Charts: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('pie')

  const { storage } = useSupabaseStore()

  return (
    <section className='mt-4 flex flex-col items-center gap-2'>
      <ChartControls
        selectedChart={selectedChart}
        setSelectedChart={setSelectedChart}
      />
      <div className='h-[60vh] w-full rounded-lg border border-neutral-700 bg-neutral-900 sm:w-[80vw]'>
        {selectedChart === 'pie' && <Pie data={preparePieChartData(storage)} />}
        {selectedChart === 'line' && (
          <Line data={prepareLineChartData(storage)} />
        )}
        {selectedChart === 'bar' && <Bar data={prepareBarChartData(storage)} />}
      </div>
    </section>
  )
}

export default Charts
