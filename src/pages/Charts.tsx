import ChartControls from '@/components/Charts/ChartControls'
import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'

import {
  prepareBarChartData,
  prepareLineChartData,
  preparePieChartData,
} from '@/utils/charts'

import { useState } from 'react'

const Charts: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('pie')

  const { data } = useSupabaseQuery({
    mainTable: 'games2',
    otherTables: [`${CURRENT_TABLE} ( * )`, `${PREVIOUS_TABLE} ( * )`],
  })

  return (
    <section className='mt-4 flex flex-col items-center gap-2'>
      <ChartControls
        selectedChart={selectedChart}
        setSelectedChart={setSelectedChart}
      />
      <div className='h-[60vh] w-full rounded-lg border border-neutral-700 bg-neutral-900 sm:w-[60vw]'>
        {selectedChart === 'pie' && <Pie data={preparePieChartData(data)} />}
        {selectedChart === 'line' && <Line data={prepareLineChartData(data)} />}
        {selectedChart === 'bar' && <Bar data={prepareBarChartData(data)} />}
      </div>
    </section>
  )
}

export default Charts
