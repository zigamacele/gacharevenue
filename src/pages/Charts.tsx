import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import Pie from '@/lib/nivo/Pie'

import { Button } from '@/lib/shadcn/ui/button'
import {
  prepareBarChartData,
  prepareLineChartData,
  preparePieChartData,
} from '@/utils/charts'

import { BarChart3, LineChart, PieChart } from 'lucide-react'
import { useState } from 'react'

const Charts = () => {
  const [selectedChart, setSelectedChart] = useState('pie')

  const { data } = useSupabaseQuery({
    mainTable: 'games2',
    otherTables: [`${CURRENT_TABLE} ( * )`, `${PREVIOUS_TABLE} ( * )`],
  })

  return (
    <>
      <div className='mx-6 my-4 flex items-center justify-between'>
        <div className='flex gap-2'>
          <Button
            onClick={() => setSelectedChart('pie')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'pie' && 'text-opacity-100'
            }`}
          >
            <PieChart width={22} />
          </Button>
          <Button
            onClick={() => setSelectedChart('bar')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'bar' && 'text-opacity-100'
            }`}
          >
            <BarChart3 width={22} />
          </Button>
          <Button
            onClick={() => setSelectedChart('line')}
            className={`text-opacity-40 hover:text-opacity-80 ${
              selectedChart === 'line' && 'text-opacity-100'
            }`}
          >
            <LineChart width={22} />
          </Button>
        </div>
        <div>pinned</div>
      </div>
      <div className='h-[60vh] w-full'>
        {selectedChart === 'pie' && <Pie data={preparePieChartData(data)} />}
        {selectedChart === 'line' && <Line data={prepareLineChartData(data)} />}
        {selectedChart === 'bar' && <Bar data={prepareBarChartData(data)} />}
      </div>
    </>
  )
}

export default Charts
