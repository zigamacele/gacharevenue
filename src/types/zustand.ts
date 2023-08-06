import { QueryOutput } from './supabase'

export interface TableControlsState {
  pinned: number[]
  removed: number[]
  sortAscending: boolean
  showPinned: boolean
  showEditSection: boolean
  toggle: (prop: string) => void
  setState: (prop: string, value: number) => void
}

export interface SetAlerts {
  title: string
  message: string
}

export interface SupabaseStore {
  alerts: SetAlerts[]
  tables: string[]
  storage: QueryOutput[]
  loading: boolean
  setAlerts: (alerts: SetAlerts[]) => void
  setTables: (tables: string[]) => void
  setStorage: (storage: QueryOutput[]) => void
  setLoading: (loading: boolean) => void
}

export interface BackgroundStore {
  background: string | null
  setBackground: (background: string) => void
}
