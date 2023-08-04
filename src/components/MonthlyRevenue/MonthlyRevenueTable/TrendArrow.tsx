import { ChevronDown, ChevronUp } from 'lucide-react'

interface TrendArrowProps {
  change: number
}

const TrendArrow: React.FC<TrendArrowProps> = ({ change }) => {
  if (change === 0) return <span className='text-neutral-400'>-</span>

  return (
    <>
      {change > 0 ? (
        <ChevronUp size={16} color='#22c55e' className='shrink-0' />
      ) : (
        <ChevronDown size={16} color='#dc2626' className='shrink-0' />
      )}
      <span>{Math.abs(change)}</span>
    </>
  )
}

export default TrendArrow
