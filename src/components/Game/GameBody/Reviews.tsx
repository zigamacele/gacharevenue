import { CircleDollarSign, PlaySquare, Star } from 'lucide-react'

import MotionInView from '@/lib/framer-motion/MotionInView.tsx'
import { Separator } from '@/lib/shadcn/ui/separator.tsx'

import useCurrentDevice from '@/hooks/useCurrentDevice.tsx'

import { ReviewInvestment, ReviewStatus } from '@/constants/reviews.ts'
import { formatTimestampz, formatTimestampzShort } from '@/utils/timeDate.ts'

import { ReviewOutput } from '@/types/supabase.ts'

interface ReviewsProps {
  reviews: ReviewOutput[]
}
const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const isMobile = useCurrentDevice()

  return (
    <section className='relative mt-12 h-80 w-full rounded-md border border-neutral-700 bg-neutral-950/40 p-1'>
      {!reviews.length && (
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm opacity-60'>
          No reviews yet
        </span>
      )}
      <div className='flex flex-col gap-1'>
        {reviews.map((review) => (
          <MotionInView
            duration={0.6}
            key={review.id}
            styles='flex flex-col gap-1 rounded bg-neutral-800/80 px-2 py-1.5 text-sm'
          >
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                <div className='flex items-center gap-1'>
                  <Star className='h-4 w-4' />
                  <p className='text-sm font-light opacity-60'>
                    {review.rating}/5
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <PlaySquare className='h-4 w-4' />
                  <p className='text-sm font-light opacity-60'>
                    {ReviewStatus[review.status as keyof typeof ReviewStatus]}
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <CircleDollarSign className='h-4 w-4' />
                  <p className='text-sm font-light opacity-60'>
                    {
                      ReviewInvestment[
                        review.investment as keyof typeof ReviewInvestment
                      ]
                    }
                  </p>
                </div>
              </div>
              <span className='opacity-60'>
                {!isMobile
                  ? formatTimestampz(review.created_at)
                  : formatTimestampzShort(review.created_at)}
              </span>
            </div>
            {review.text && (
              <>
                <Separator />
                <p className='hyphens-auto break-words px-2 text-sm'>
                  {review.text}
                </p>
              </>
            )}
          </MotionInView>
        ))}
      </div>
    </section>
  )
}

export default Reviews
