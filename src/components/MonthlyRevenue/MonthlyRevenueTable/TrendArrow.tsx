import { ChevronDown, ChevronUp } from 'lucide-react'

interface TrendArrowProps {
  change: number
}

const TrendArrow: React.FC<TrendArrowProps> = ({ change }) => {
  if (change === 0) return <span className='text-neutral-400'>-</span>

  return (
    <div className='flex items-center gap-1'>
      {change > 0 ? (
        <ChevronUp size={16} color='#22c55e' />
      ) : (
        <ChevronDown size={16} color='#dc2626' />
      )}
      <span>{Math.abs(change)}</span>
    </div>
  )
}

export default TrendArrow
