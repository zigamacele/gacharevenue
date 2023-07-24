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

export interface QueryOutput extends GameSchema, StatisticsSchema {
  game?: GameSchema
  previousMonth?: StatisticsSchema
}
