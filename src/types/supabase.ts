import { FeedbackType } from './feedback'

export interface GameSchema {
  id: number
  name: string
  en_name: string
  publisher: string
  developer: string
  release_date: string
  region: Region
  icon: string
  background: string
  pc_client: boolean | null
  eos: boolean
  new_release: boolean
  hidden: boolean
  same_name: boolean
  same_slot: number[] | null
  blurhash: string | null
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
  type: FeedbackType
}

export interface ConfigData {
  id: number
  alerts: string[] | null
  tables: string[]
  lastUpdated: string
  currentTable: string
  previousTable: string
  maintenance: boolean
  graveyardBackground: string
}

export interface GraveyardOutput {
  id: number
  release_date: string
  eos_date: string
  maintenance: boolean
  trailer: string
  games: QueryOutput
  regions: Region[] | null
  hidden: boolean
}

export interface ReviewPayload {
  game_id: number
  rating: number
  status: string
  investment: string
  text: string
}

export interface ReviewOutput {
  id: number
  game_id: string
  user_id: string
  rating: number
  status: string
  investment: string
  text: string
  game: GameSchema
  created_at: string
}

export enum Region {
  CHINA = 'CHINA',
  GLOBAL = 'GLOBAL',
  COMBINED = 'COMBINED',
  JAPAN = 'JAPAN',
  USA = 'USA',
  KOREA = 'KOREA',
  COMBINED_REGIONS = 'COMBINED_REGIONS',
}

type RegionData = {
  [key in Region]?: number | null
}

export interface GameResponse extends RegionData {
  uuid: string
}
