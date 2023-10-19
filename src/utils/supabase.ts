import { Provider, RealtimeChannel } from '@supabase/supabase-js'

import { getRedirectURL } from '@/config/env.ts'
import supabase from '@/config/supabase.ts'

export const signInWithOAuth = async (provider: Provider) => {
  await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: getRedirectURL(),
    },
  })
}

export const signOut = async () => {
  await supabase.auth.signOut()
}

export const deleteReview = async (id: number, user_id: string | undefined) => {
  await supabase.from('reviews').delete().match({ id, user_id })
}

export const unsubscribeReviewUpdates = async (
  reviewUpdates: RealtimeChannel,
) => {
  await supabase.removeChannel(reviewUpdates)
}
