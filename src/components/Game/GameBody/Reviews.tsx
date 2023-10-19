import { useEffect, useState } from 'react'

import MotionInView from '@/lib/framer-motion/MotionInView.tsx'

import supabase from '@/config/supabase.ts'
import { unsubscribeReviewUpdates } from '@/utils/supabase.ts'

import { ReviewOutput } from '@/types/supabase.ts'

interface ReviewsProps {
  gameId: number
}
const Reviews: React.FC<ReviewsProps> = ({ gameId }) => {
  const [reviews, setReviews] = useState<ReviewOutput[]>([])
  const getGameReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .eq('game_id', gameId)
      .order('created_at', { ascending: false })

    if (data) {
      setReviews(data)
    }
  }

  useEffect(() => {
    const reviewChanges = supabase
      .channel('reviews')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
        },
        () => {
          void getGameReviews()
        },
      )
      .subscribe()

    void getGameReviews()

    return () => void unsubscribeReviewUpdates(reviewChanges)
  }, [])

  return (
    <section className='relative mt-12 h-80 w-full rounded-md border border-neutral-700 bg-neutral-950/40 p-1'>
      {!reviews.length && (
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm opacity-60'>
          No reviews yet
        </span>
      )}
      <div className=''>
        {reviews.map((review) => (
          <MotionInView key={review.id}>
            <div className='rounded bg-neutral-800'>{review.rating}</div>
          </MotionInView>
        ))}
      </div>
    </section>
  )
}

export default Reviews
