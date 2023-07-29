import { Button } from '@/lib/shadcn/ui/button'
import { BarChart3, LineChart, PieChart } from 'lucide-react'

interface ChartControlsProps {
  selectedChart: string
  setSelectedChart: (value: string) => void
}

const ChartControls: React.FC<ChartControlsProps> = ({
  selectedChart,
  setSelectedChart,
}) => {
  return (
    <div className='flex w-full items-center justify-between sm:w-[60vw]'>
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
      </div>
      <Button
        onClick={() => setSelectedChart('line')}
        className={`text-opacity-40 hover:text-opacity-80 ${
          selectedChart === 'line' && 'text-opacity-100'
        }`}
      >
        <LineChart width={22} />
      </Button>
    </div>
  )
}

export default ChartControls
