import { Provider } from '@supabase/supabase-js'

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
