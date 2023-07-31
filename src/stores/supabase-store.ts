import { QueryOutput } from '@/types/supabase'
import { SupabaseStore } from '@/types/zustand'
import { create } from 'zustand'

const useSupabaseStore = create<SupabaseStore>()((set) => ({
  tables: [],
  storage: [],
  loading: false,

  setTables: (tables: string[]) => set(() => ({ tables })),
  setStorage: (storage: QueryOutput[]) => set(() => ({ storage })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}))

export default useSupabaseStore
