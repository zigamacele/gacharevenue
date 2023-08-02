import { QueryOutput } from '@/types/supabase'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'
import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import { Separator } from '@/lib/shadcn/ui/separator'
import { BarChart3, LineChart } from 'lucide-react'
import { prepareBarChartData, prepareLineChartData } from '@/utils/charts'

interface GameSwitcherProps {
  currentGame: QueryOutput
}

const GameSwitcher: React.FC<GameSwitcherProps> = ({ currentGame }) => {
  return (
    <div className='w-screen rounded-b-lg border border-t-0 border-neutral-700 bg-neutral-900 px-3 pb-6 pt-3 sm:w-[40em]'>
      <Separator className='mb-4 w-full opacity-40' />
      <Tabs defaultValue='bar' className='flex w-full flex-col items-end'>
        <TabsList className='center flex'>
          <TabsTrigger value='bar'>
            <BarChart3 width={16} height={18} />
          </TabsTrigger>
          <TabsTrigger value='line'>
            <LineChart width={16} height={18} />
          </TabsTrigger>
          <TabsTrigger value='comments' className='text-sm'>
            Comments
          </TabsTrigger>
        </TabsList>
        <TabsContent value='bar' className='h-80 w-full'>
          <Bar data={prepareBarChartData([currentGame])} />
        </TabsContent>
        <TabsContent value='line' className='h-80 w-full'>
          <Line data={prepareLineChartData([currentGame])} />
        </TabsContent>
        <TabsContent value='comments'>Your comments go here</TabsContent>
      </Tabs>
    </div>
  )
}

export default GameSwitcher
