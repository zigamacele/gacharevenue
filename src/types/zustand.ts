import { User } from '@supabase/supabase-js'

import { Mode } from '@/utils/enums'

import { GraveyardOutput, QueryOutput, ReviewOutput } from './supabase'

export enum TableControls {
  MODE = 'mode',
}

export interface TableControlsState {
  search: string
  pinned: number[]
  removed: number[]
  sortAscending: boolean
  showPinned: boolean
  showMaintenance: boolean
  showEditSection: boolean
  showCombinedRevenue: boolean
  mode: Mode
  updateSearch: (value: string) => void
  toggle: (prop: string) => void
  setState: (prop: string, value: number) => void
  updateMode: (mode: Mode) => void
}

export interface SetAlerts {
  title: string
  message: string
}

export interface SupabaseStoreState {
  alerts: SetAlerts[]
  tables: string[]
  storage: QueryOutput[]
  lastUpdated: string
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
  blurhash: string | null
  setBackground: (background: string, blurhash?: string | null) => void
}

export interface GraveyardStore {
  maintenance: GraveyardOutput[]
  eos: GraveyardOutput[]
  graveyardBackground: string
  loading: boolean
  getGraveyardData: () => void
  setGraveyardBackground: (url: string) => void
}

export interface UserStore {
  user: User | undefined
  setUser: (user: User | undefined) => void
}

export interface ReviewStore {
  reviews: ReviewOutput[]
  rating: string | number
  setReviews: (reviews: ReviewOutput[]) => void
}
