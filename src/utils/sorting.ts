import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import { regionalMultiplier } from './globals'

import { GraveyardOutput, QueryOutput } from '@/types/supabase'

export interface PreviousMonthIndexes {
  [key: string]: number
}

export const previousMonthSort = (
  data: QueryOutput[],
  sortAscending: boolean,
  showCombinedRevenue: boolean,
) => {
  const sortedPreviousMonth = [...data].sort((a, b) => {
    const aRevenue: number = showCombinedRevenue
      ? a[PREVIOUS_TABLE]?.totalRevenue ?? 0
      : regionalMultiplier(a[PREVIOUS_TABLE]?.totalRevenue, a.region)
    const bRevenue: number = showCombinedRevenue
      ? b[PREVIOUS_TABLE]?.totalRevenue ?? 0
      : regionalMultiplier(b[PREVIOUS_TABLE]?.totalRevenue, b.region)

    return sortAscending ? aRevenue - bRevenue : bRevenue - aRevenue
  })

  const previousMonthIndexes: PreviousMonthIndexes = {}
  sortedPreviousMonth.forEach((GameSchema, index) => {
    previousMonthIndexes[GameSchema.id] = index
  })

  return previousMonthIndexes
}

interface QueryFilterSortProps {
  data: QueryOutput[]
  eos: GraveyardOutput[]
  maintenance: GraveyardOutput[]
  search: string
  pinned: number[]
  removed: number[]
  showPinned: boolean
  showMaintenance: boolean
  showEditSection: boolean
  sortAscending: boolean
  showCombinedRevenue: boolean
  selectedRegion: string
}

export const queryFilterSort = ({
  data,
  eos,
  maintenance,
  search,
  pinned,
  removed,
  showPinned,
  showMaintenance,
  showEditSection,
  sortAscending,
  showCombinedRevenue,
  selectedRegion,
}: QueryFilterSortProps) => {
  const filtered = data.filter((game) => {
    const gameId = game.id
    const isPinned = pinned.includes(gameId)
    const isRemoved = removed.includes(gameId)
    const maintenanceIds = maintenance.map((item) => item.id)
    const eosIds = eos.map((item) => item.id)

    if (selectedRegion !== 'ALL' && game.region !== selectedRegion) {
      return false
    }

    if (search.length) {
      const gameName = game.en_name.toLowerCase()
      const searchValue = search.toLowerCase()

      if (!gameName.includes(searchValue)) {
        return false
      }
    }

    if (game[PREVIOUS_TABLE]?.totalRevenue && eosIds.includes(gameId)) {
      return true
    }

    if (
      !game[CURRENT_TABLE]?.totalRevenue ||
      (isRemoved && !showEditSection) ||
      (!showMaintenance && maintenanceIds.includes(gameId))
    ) {
      return false
    }

    if (showPinned && isPinned) {
      return true
    }

    return showPinned ? false : true
  })

  const sorting = [...filtered].sort((a, b) => {
    const aRevenue = showCombinedRevenue
      ? a[CURRENT_TABLE]?.totalRevenue ?? 0
      : regionalMultiplier(a[CURRENT_TABLE]?.totalRevenue, a.region)
    const bRevenue = showCombinedRevenue
      ? b[CURRENT_TABLE]?.totalRevenue ?? 0
      : regionalMultiplier(b[CURRENT_TABLE]?.totalRevenue, b.region)

    return sortAscending ? aRevenue - bRevenue : bRevenue - aRevenue
  })

  return sorting
}

interface QueryFilterProps {
  data: QueryOutput[]
  pinned: number[]
  removed: number[]
  showPinned: boolean
}

export const queryFilter = ({
  data,
  pinned,
  removed,
  showPinned,
}: QueryFilterProps) => {
  const filtered = data.filter((game) => {
    const gameId = game.id
    const isPinned = pinned.includes(gameId)
    const isRemoved = removed.includes(gameId)

    if (showPinned && isPinned) {
      return true
    }

    if (isRemoved) {
      return false
    }

    return showPinned ? false : true
  })

  return filtered
}
