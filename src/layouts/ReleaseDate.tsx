import { CalendarDaysIcon } from 'lucide-react'

interface ReleaseDateProps {
  releaseDate: string
  iconSize?: number
  className: string
}

const ReleaseDate: React.FC<ReleaseDateProps> = ({
  iconSize = 16,
  className,
  releaseDate,
}) => {
  return (
    <div className='flex items-center gap-2'>
      <CalendarDaysIcon size={iconSize} />
      <span className={className}>{releaseDate}</span>
    </div>
  )
}

export default ReleaseDate
