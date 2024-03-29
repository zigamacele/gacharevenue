import { CalendarDaysIcon } from 'lucide-react'

import { cn } from '@/lib/shadcn/utils'

interface ReleaseDateProps {
  releaseDate: string
  iconSize?: number
  className?: string
}

const ReleaseDate: React.FC<ReleaseDateProps> = ({
  iconSize = 16,
  className,
  releaseDate,
}) => (
  <div className='flex items-center gap-2'>
    <CalendarDaysIcon size={iconSize} />
    <p className={cn('text-xs font-light opacity-60', className)}>
      {releaseDate}
    </p>
  </div>
)

export default ReleaseDate
