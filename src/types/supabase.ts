export interface GameSchema {
  id: number
  name: string
  en_name: string
  publisher: string
  developer: string
  release_date: string
  region: string
  icon: string
  background: string
  pc_client: boolean | null
  eos: boolean
  new_release: boolean
}

export interface StatisticsSchema {
  id: number
  totalRevenue: number
  androidRevenue: number
  iosRevenue: number
  totalDownloads: number
  androidDownloads: number
  iosDownloads: number
}

export type QueryOutput = GameSchema & { [key: string]: StatisticsSchema }

export interface FeedbackOutput {
  id: number
  created_at: string
  content: string
  response: string | null
  name: string | null
  seen: boolean | null
}

export interface ConfigData {
  id: number
  alerts: string[] | null
  tables: string[]
  lastUpdated: string
  currentTable: string
  previousTable: string
  maintenance: boolean
}
