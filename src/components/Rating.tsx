import { StarFilledIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/shadcn/utils.ts'

import useReviewStore from '@/stores/review-store.ts'

import { formatCurrencyCompact } from '@/utils/currency.ts'

interface RatingProps {
  className?: string
}
const Rating: React.FC<RatingProps> = ({ className }) => {
  const { reviews, rating } = useReviewStore()

  return (
    <section
      className={cn(
        'flex h-8 items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-3',
        className,
      )}
    >
      <StarFilledIcon className='mr-0.5 h-3.5 w-3.5 text-amber-400' />
      <span>{rating}</span>
      <span className='text-xs opacity-40'>
        ({reviews.length ? formatCurrencyCompact(reviews.length) : 0})
      </span>
    </section>
  )
}

export default Rating
