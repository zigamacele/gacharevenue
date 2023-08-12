import { Button } from '@/lib/shadcn/ui/button'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import {
  BarChart3,
  Combine,
  LineChart,
  PieChart,
  Pin,
  PinOff,
} from 'lucide-react'
import Toggle from '../MonthlyRevenue/Toggle'

interface ChartControlsProps {
  selectedChart: string
  setSelectedChart: (value: string) => void
}

const ChartControls: React.FC<ChartControlsProps> = ({
  selectedChart,
  setSelectedChart,
}) => {
  const { toggle, showCombinedRevenue, showPinned, pinned } =
    useMonthlyTableControls()

  return (
    <div className='flex w-full items-center justify-between px-2 sm:w-full'>
      <div className='flex gap-2'>
        <Button
          onClick={() => setSelectedChart('pie')}
          className={`text-opacity-40 hover:text-opacity-80 ${
            selectedChart === 'pie' && 'border-neutral-400 text-opacity-100'
          }`}
        >
          <PieChart width={20} />
        </Button>
        <Button
          onClick={() => setSelectedChart('bar')}
          className={`text-opacity-40 hover:text-opacity-80 ${
            selectedChart === 'bar' && 'border-neutral-400 text-opacity-100'
          }`}
        >
          <BarChart3 width={20} />
        </Button>
        <Button
          onClick={() => setSelectedChart('line')}
          className={`text-opacity-40 hover:text-opacity-80 ${
            selectedChart === 'line' && 'border-neutral-400 text-opacity-100'
          }`}
        >
          <LineChart width={20} />
        </Button>
      </div>
      <div className='flex gap-2'>
        <Toggle
          onClick={() => toggle('showPinned')}
          disabled={!pinned.length && !showPinned}
          pressed={showPinned}
        >
          {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
        </Toggle>
        <Toggle
          onClick={() => toggle('showCombinedRevenue')}
          pressed={showCombinedRevenue}
        >
          <Combine size={18} />
        </Toggle>
      </div>
    </div>
  )
}

export default ChartControls
