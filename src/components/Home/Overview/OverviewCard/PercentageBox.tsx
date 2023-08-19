import { cn } from '@/lib/shadcn/utils'
import { TrendingDown, TrendingUp } from 'lucide-react'

interface PercentageBoxProps {
  percentage: number
}

const PercentageBox: React.FC<PercentageBoxProps> = ({ percentage }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg bg-red-500/20 px-2.5 py-1',
        percentage > 0 && 'bg-green-500/20',
      )}
    >
      {percentage > 0 ? (
        <TrendingUp width={16} className='text-green-500' />
      ) : (
        <TrendingDown width={16} className='text-red-500' />
      )}
      <span className='text-sm'>{Math.abs(percentage).toFixed(2)}%</span>
    </div>
  )
}

export default PercentageBox
