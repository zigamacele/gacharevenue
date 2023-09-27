import {
  BarChart3,
  Combine,
  LineChart,
  PieChart,
  Pin,
  PinOff,
} from 'lucide-react'

import { cn } from '@/lib/shadcn/utils'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import Button from '@/layouts/Button'
import { SlideDirection } from '@/utils/enums'

import Toggle from '../Revenue/Toggle'

interface ChartControlsProps {
  selectedChart: string
  setSelectedChart: (value: string) => void
}

const ChartControls: React.FC<ChartControlsProps> = ({
  selectedChart,
  setSelectedChart,
}) => {
  const { toggle, showCombinedRevenue, showPinned, pinned } =
    useRevenueTableControls()

  return (
    <section className='flex w-full items-center justify-between px-2 sm:w-full'>
      <div className='flex gap-2'>
        <Button
          onClick={() => setSelectedChart('pie')}
          className={cn(
            'text-opacity-40 hover:text-opacity-80',
            selectedChart === 'pie' &&
              'border-neutral-400 bg-neutral-800 text-opacity-100',
          )}
          tooltip='Pie Chart'
        >
          <PieChart width={20} />
        </Button>
        <Button
          onClick={() => setSelectedChart('bar')}
          className={cn(
            'text-opacity-40 hover:text-opacity-80',
            selectedChart === 'bar' &&
              'border-neutral-400 bg-neutral-800 text-opacity-100',
          )}
          tooltip='Bar Chart'
        >
          <BarChart3 width={20} />
        </Button>
        <Button
          onClick={() => setSelectedChart('line')}
          className={cn(
            'text-opacity-40 hover:text-opacity-80',
            selectedChart === 'line' &&
              'border-neutral-400 bg-neutral-800 text-opacity-100',
          )}
          tooltip='Line Chart'
        >
          <LineChart width={20} />
        </Button>
      </div>
      <div className='flex gap-2'>
        <Toggle
          onClick={() => toggle('showPinned')}
          disabled={!pinned.length && !showPinned}
          pressed={showPinned}
          tooltip={!showPinned ? 'Show Pinned' : 'Hide Pinned'}
        >
          {showPinned ? <PinOff size={18} /> : <Pin size={18} />}
        </Toggle>
        {selectedChart === 'pie' && (
          <Toggle
            onClick={() => toggle('showCombinedRevenue')}
            pressed={showCombinedRevenue}
            slideFrom={SlideDirection.LEFT}
            tooltip={
              !showCombinedRevenue
                ? 'Combine Region Revenue'
                : 'Separate Region Revenue'
            }
          >
            <Combine size={18} />
          </Toggle>
        )}
      </div>
    </section>
  )
}

export default ChartControls
