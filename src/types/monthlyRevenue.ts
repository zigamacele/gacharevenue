export interface SelectedSections {
  pinned: string[]
  removed: string[]
}

export interface CompareRevenueOutput {
  name?: string
  blurhash?: string | null
  difference: number
  percentage: number
  id?: number
  icon?: string
  background?: string
  region?: string
}
