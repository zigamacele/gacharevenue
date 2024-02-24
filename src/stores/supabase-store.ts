import { create } from 'zustand'

import { SupabaseStore, SupabaseStoreState } from '@/types/zustand'

const useSupabaseStore = create<SupabaseStore>()((set) => ({
  tables: [],
  alerts: [],
  game: [],
  storage: [],
  lastUpdated: '',
  currentTable: '',
  previousTable: '',
  loading: true,

  setProperty: <T extends keyof SupabaseStoreState>(
    key: T,
    payload: SupabaseStoreState[T],
  ) => set(() => ({ [key]: payload })),
}))

export default useSupabaseStore
