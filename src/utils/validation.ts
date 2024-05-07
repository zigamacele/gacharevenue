import { User } from '@supabase/supabase-js'
import * as z from 'zod'

import supabase from '@/config/supabase.ts'

import { ReviewPayload } from '@/types/supabase.ts'

export const formSchema = z.object({
  name: z.string(),
  content: z.string().min(4, {
    message: 'Message needs to be at least 4 characters long.',
  }),
})

export const validateReviewPayload = async (
  payload: ReviewPayload,
  user: User | undefined,
) => {
  const { game_id, rating, status, investment, text } = payload

  if (!user) {
    return { status: false, error: 'You need to be logged in.' }
  }

  if (!game_id || !rating || !status || !investment || text.length > 500) {
    return { status: false, error: 'Invalid payload.' }
  }

  const { data } = await supabase
    .from('reviews')
    .select()
    .eq('game_id', game_id)
    .eq('user_id', user.id)

  if (data?.length) {
    return { status: false, error: 'You have already reviewed this game.' }
  }

  return { status: true, error: null }
}
