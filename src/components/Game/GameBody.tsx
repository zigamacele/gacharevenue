import { BarChart3, LineChart } from 'lucide-react'
import { useEffect, useState } from 'react'

import Bar from '@/lib/nivo/Bar'
import Line from '@/lib/nivo/Line'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs'

import Reviews from '@/components/Game/GameBody/Reviews.tsx'

import useReviewStore from '@/stores/review-store.ts'

import { prepareBarChartData, prepareLineChartData } from '@/utils/charts'

import Tooltip from '../Tooltip'

import { QueryOutput } from '@/types/supabase'

interface GameBodyProps {
  currentGame: QueryOutput
  tables: string[]
}

const GameBody: React.FC<GameBodyProps> = ({ currentGame, tables }) => {
  const [content, setContent] = useState<string>('charts')
  const { reviews } = useReviewStore()

  const setTabsHelper = (tables: string[]) => {
    const newTabs = []
    for (const table of tables) {
      if (currentGame[table]?.totalRevenue) {
        newTabs.push(table)
      }
    }

    return newTabs
  }

  useEffect(() => {
    setContent('charts')
  }, [currentGame])

  return (
    <section className='relative'>
      <Tabs
        value={content}
        className='absolute z-50 flex w-40 flex-col items-start'
      >
        <TabsList className='center flex'>
          <TabsTrigger value='charts' onClick={() => setContent('charts')}>
            Charts
          </TabsTrigger>
          <TabsTrigger value='reviews' onClick={() => setContent('reviews')}>
            Reviews
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {content === 'reviews' && <Reviews reviews={reviews} />}
      {content === 'charts' && (
        <Tabs
          defaultValue='bar'
          className='relative flex w-full flex-col items-end'
        >
          <TabsList className='center flex'>
            <TabsTrigger value='bar'>
              <Tooltip text='Bar Chart'>
                <BarChart3 width={16} height={18} />
              </Tooltip>
            </TabsTrigger>
            <TabsTrigger value='line'>
              <Tooltip text='Line Chart'>
                <LineChart width={16} height={18} />
              </Tooltip>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='bar' className='w-full overflow-x-scroll'>
            <Bar
              data={prepareBarChartData([currentGame], setTabsHelper(tables))}
              axisBottom
              axisLeft
            />
          </TabsContent>
          <TabsContent value='line' className='w-full overflow-x-scroll'>
            <Line
              data={prepareLineChartData([currentGame], setTabsHelper(tables))}
            />
          </TabsContent>
        </Tabs>
      )}
    </section>
  )
}

export default GameBody
