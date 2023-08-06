import { SupabaseStore, SupabaseStoreState } from '@/types/zustand'
import { create } from 'zustand'

const useSupabaseStore = create<SupabaseStore>()((set) => ({
  tables: [],
  alerts: [],
  storage: [],
  loading: false,

  setProperty: <T extends keyof SupabaseStoreState>(
    key: T,
    payload: SupabaseStoreState[T],
  ) => set(() => ({ [key]: payload })),
}))

export default useSupabaseStore
