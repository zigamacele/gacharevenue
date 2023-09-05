import { QueryOutput } from './supabase'

export interface TableControlsState {
  pinned: number[]
  removed: number[]
  sortAscending: boolean
  showPinned: boolean
  showEditSection: boolean
  showCombinedRevenue: boolean
  toggle: (prop: string) => void
  setState: (prop: string, value: number) => void
}

export interface SetAlerts {
  title: string
  message: string
}

export interface SupabaseStoreState {
  alerts: SetAlerts[]
  tables: string[]
  storage: QueryOutput[]
  loading: boolean
}

export interface SupabaseStore extends SupabaseStoreState {
  setProperty: <T extends keyof SupabaseStoreState>(
    key: T,
    payload: SupabaseStoreState[T],
  ) => void
}

export interface BackgroundStore {
  background: string | null
  setBackground: (background: string) => void
}
