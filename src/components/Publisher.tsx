import { BookCheck } from 'lucide-react'

import { cn } from '@/lib/shadcn/utils'

interface PublisherProps {
  publisher: string
  iconSize?: number
  className?: string
}

const Publisher: React.FC<PublisherProps> = ({
  iconSize = 16,
  className,
  publisher,
}) => (
  <div className='flex items-center gap-2'>
    <BookCheck size={iconSize} />
    <p className={cn('text-xs font-light opacity-60', className)}>
      {publisher}
    </p>
  </div>
)

export default Publisher
