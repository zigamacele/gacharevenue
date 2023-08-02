import { QueryOutput } from '@/types/supabase'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import { Separator } from '@/lib/shadcn/ui/separator'
import { BarChart3, LineChart } from 'lucide-react'
import { prepareBarChartData, prepareLineChartData } from '@/utils/charts'
import { useState } from 'react'
import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

interface GameSwitcherProps {
  currentGame: QueryOutput
  tables: string[]
}

const GameSwitcher: React.FC<GameSwitcherProps> = ({ currentGame, tables }) => {
  const [tabs, setTabs] = useState<string[]>([PREVIOUS_TABLE, CURRENT_TABLE])
  return (
    <div className='w-screen rounded-b-lg border border-t-0 border-neutral-700 bg-neutral-900 px-3 pb-6 pt-3 sm:w-[40em]'>
      <Separator className='mb-4 w-full opacity-40' />
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
    </div>
  )
}

export default GameSwitcher
