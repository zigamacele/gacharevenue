import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import { BarChart3, LineChart } from 'lucide-react'
import { prepareBarChartData, prepareLineChartData } from '@/utils/charts'
import { useState } from 'react'
import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { QueryOutput } from '@/types/supabase'

interface GameBodyProps {
  currentGame: QueryOutput
  tables: string[]
}

const GameBody: React.FC<GameBodyProps> = ({ currentGame, tables }) => {
  const [tabs, setTabs] = useState<string[]>([PREVIOUS_TABLE, CURRENT_TABLE])

  return (
    <section>
      <Tabs
        defaultValue='last'
        className='absolute z-50 flex w-40 flex-col items-start'
      >
        <TabsList className='center flex'>
          <TabsTrigger
            value='last'
            onClick={() => setTabs([PREVIOUS_TABLE, CURRENT_TABLE])}
          >
            Last
          </TabsTrigger>
          <TabsTrigger value='all' onClick={() => setTabs(tables)}>
            All
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs
        defaultValue='bar'
        className='relative flex w-full flex-col items-end'
      >
        <TabsList className='center flex'>
          <TabsTrigger value='bar'>
            <BarChart3 width={16} height={18} />
          </TabsTrigger>
          <TabsTrigger value='line'>
            <LineChart width={16} height={18} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value='bar' className='h-80 w-full'>
          <Bar data={prepareBarChartData([currentGame], tabs)} />
        </TabsContent>
        <TabsContent value='line' className='h-80 w-full'>
          <Line data={prepareLineChartData([currentGame], tabs)} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default GameBody
