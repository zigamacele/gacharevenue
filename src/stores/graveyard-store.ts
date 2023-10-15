import { create } from 'zustand'

import config from '@/config/env.ts'
import supabase from '@/config/supabase.ts'
import { CURRENT_TABLE } from '@/constants/tables.ts'

import { GraveyardOutput } from '@/types/supabase.ts'
import { GraveyardStore } from '@/types/zustand.ts'

const useGraveyardStore = create<GraveyardStore>()((set) => ({
  maintenance: [],
  eos: [],
  graveyardBackground: '',
  loading: true,
  getGraveyardData: () => {
    const loadGraveyardData = async () => {
      const { data } = await supabase
        .from('graveyard')
        .select(`*,${config.database.GAMES_TABLE} ( *, ${CURRENT_TABLE} ( * ))`)
        .order('eos_date', { ascending: false })

      if (data) {
        const graveyardData = data as unknown as GraveyardOutput[]
        const maintenance = graveyardData.filter((item) => item.maintenance)
        const eos = graveyardData.filter((item) => !item.maintenance)
        set({ maintenance, eos })
      }
      set({ loading: false })
    }
    const waitForCurrentTable = () => {
      if (!CURRENT_TABLE) {
        setTimeout(() => waitForCurrentTable(), 250)
      } else {
        void loadGraveyardData()
      }
    }

    waitForCurrentTable()
  },
  setGraveyardBackground: (url: string) =>
    set(() => ({ graveyardBackground: url })),
}))

export default useGraveyardStore
