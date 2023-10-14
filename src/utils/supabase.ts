import { Provider } from '@supabase/supabase-js'

import supabase from '@/config/supabase.ts'

export const signInWithOAuth = async (provider: Provider) => {
  await supabase.auth.signInWithOAuth({
    provider,
  })
}
