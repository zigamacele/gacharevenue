import { create } from 'zustand'

import config from '@/config/env.ts'
import supabase from '@/config/supabase.ts'

import { GraveyardStore } from '@/types/zustand.ts'

const useGraveyardStore = create<GraveyardStore>()((set) => ({
  maintenance: [],
  eos: [],
  loading: true,
  getGraveyardData: async () => {
    set({ loading: true })
    const { data, error } = await supabase
      .from('graveyard')
      .select(`*,${config.database.GAMES_TABLE} (*)`)
    console.error(data, error)
    set({ loading: false })
  },
}))

export default useGraveyardStore
