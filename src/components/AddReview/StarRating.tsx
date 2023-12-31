import { StarFilledIcon } from '@radix-ui/react-icons'
import { Dispatch, SetStateAction } from 'react'

import { cn } from '@/lib/shadcn/utils.ts'

import { ReviewPayload } from '@/types/supabase.ts'

interface StarRatingProps {
  reviewPayload: ReviewPayload
  setReviewPayload: Dispatch<SetStateAction<ReviewPayload>>
}
const StarRating: React.FC<StarRatingProps> = ({
  reviewPayload,
  setReviewPayload,
}) => {
  return (
    <section className='flex items-center gap-2'>
      <div className='flex'>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarFilledIcon
            key={index}
            className={cn(
              'h-6 w-6 cursor-pointer text-neutral-700 transition-all hover:text-neutral-500',
              reviewPayload.rating >= index + 1 &&
                'text-amber-500 hover:text-amber-700',
            )}
            onClick={() =>
              setReviewPayload((currentState) => {
                return { ...currentState, rating: index + 1 }
              })
            }
          />
        ))}
      </div>
      <div className='flex gap-1'>
        <span
          className={cn(
            'text-neutral-600',
            reviewPayload.rating && 'text-amber-500',
          )}
        >
          {reviewPayload.rating}
        </span>
        <span>/ 5</span>
      </div>
    </section>
  )
}

export default StarRating
