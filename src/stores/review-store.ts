import { create } from 'zustand'

import { ReviewOutput } from '@/types/supabase.ts'
import { ReviewStore } from '@/types/zustand'

const useReviewStore = create<ReviewStore>()((set) => ({
  reviews: [],
  rating: '?',
  setReviews: (reviews: ReviewOutput[]) => {
    const roundUpRating = (reviews: ReviewOutput[]) => {
      const averageRating =
        reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

      return Number.isInteger(averageRating)
        ? averageRating
        : averageRating.toFixed(1)
    }

    const rating = reviews.length ? roundUpRating(reviews) : '?'
    set(() => ({ reviews, rating }))
  },
}))

export default useReviewStore
