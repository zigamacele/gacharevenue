import { ChevronDown, ChevronUp } from 'lucide-react'

interface TrendArrowProps {
  change: number
}

const TrendArrow: React.FC<TrendArrowProps> = ({ change }) => {
  if (change === 0) return ''

  return (
    <div className='flex gap-2'>
      {change > 0 ? (
        <ChevronUp size={16} color='green' />
      ) : (
        <ChevronDown size={16} color='red' />
      )}
      <span>{Math.abs(change)}</span>
    </div>
  )
}

export default TrendArrow
