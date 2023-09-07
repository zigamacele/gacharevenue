import { create } from 'zustand'

import { SupabaseStore, SupabaseStoreState } from '@/types/zustand'

const useSupabaseStore = create<SupabaseStore>()((set) => ({
  tables: [],
  alerts: [],
  storage: [],
  currentTable: '',
  previousTable: '',
  loading: false,

  setProperty: <T extends keyof SupabaseStoreState>(
    key: T,
    payload: SupabaseStoreState[T],
  ) => set(() => ({ [key]: payload })),
}))

export default useSupabaseStore
