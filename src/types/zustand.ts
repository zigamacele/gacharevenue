import { QueryOutput } from './supabase'

export interface TableControlsState {
  search: string
  pinned: number[]
  removed: number[]
  sortAscending: boolean
  showPinned: boolean
  showEditSection: boolean
  showCombinedRevenue: boolean
  updateSearch: (value: string) => void
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
  currentTable: string
  previousTable: string
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
