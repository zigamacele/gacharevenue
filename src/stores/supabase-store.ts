import { QueryOutput } from '@/types/supabase'
import { SetAlerts, SupabaseStore } from '@/types/zustand'
import { create } from 'zustand'

const useSupabaseStore = create<SupabaseStore>()((set) => ({
  tables: [],
  alerts: [],
  storage: [],
  loading: false,

  setAlerts: (alerts: SetAlerts[]) => set(() => ({ alerts })),
  setTables: (tables: string[]) => set(() => ({ tables })),
  setStorage: (storage: QueryOutput[]) => set(() => ({ storage })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}))

export default useSupabaseStore
