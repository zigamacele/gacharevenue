import { create } from 'zustand'

import config from '@/config/env.ts'
import supabase from '@/config/supabase.ts'

import { GraveyardOutput } from '@/types/supabase.ts'
import { GraveyardStore } from '@/types/zustand.ts'

const useGraveyardStore = create<GraveyardStore>()((set) => ({
  maintenance: [],
  eos: [],
  graveyardBackground: '',
  loading: true,
  getGraveyardData: async () => {
    const { data } = await supabase
      .from('graveyard')
      .select(`*,${config.database.GAMES_TABLE} (*)`)
      .order('eos_date', { ascending: false })

    if (data) {
      const graveyardData = data as unknown as GraveyardOutput[]
      const maintenance = graveyardData.filter((item) => item.maintenance)
      const eos = graveyardData.filter((item) => !item.maintenance)
      set({ maintenance, eos })
    }
    set({ loading: false })
  },
  setGraveyardBackground: (url: string) =>
    set(() => ({ graveyardBackground: url })),
}))

export default useGraveyardStore
