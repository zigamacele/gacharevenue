export interface GameSchema {
  id: number
  name: string
  en_name: string
  publisher: string
  developer: string
  release_date: string
  region: string
  icon: string | null
  background: string | null
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
  created_at: Date
  content: string
  response: string | null
  name: string | null
  seen: boolean | null
}
