import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import { QueryOutput } from '@/types/supabase'

export interface PreviousMonthIndexes {
  [key: string]: number
}

export const previousMonthSort = (
  data: QueryOutput[],
  sortAscending: boolean,
) => {
  const sortedPreviousMonth = [...data].sort((a, b) => {
    const aRevenue: number = a[PREVIOUS_TABLE]?.totalRevenue ?? 0
    const bRevenue: number = b[PREVIOUS_TABLE]?.totalRevenue ?? 0

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
  pinned: number[]
  removed: number[]
  showPinned: boolean
  showEditSection: boolean
  sortAscending: boolean
}

export const queryFilterSort = ({
  data,
  pinned,
  removed,
  showPinned,
  showEditSection,
  sortAscending,
}: QueryFilterSortProps) => {
  const filtered = data.filter((game) => {
    const gameId = game.id
    const isPinned = pinned.includes(gameId)
    const isRemoved = removed.includes(gameId)

    if (!game[CURRENT_TABLE]?.totalRevenue || (isRemoved && !showEditSection)) {
      return false
    }

    if (showPinned && isPinned) {
      return true
    }

    return showPinned ? false : true
  })

  const sorting = [...filtered].sort((a, b) => {
    const aRevenue = a[CURRENT_TABLE]?.totalRevenue ?? 0
    const bRevenue = b[CURRENT_TABLE]?.totalRevenue ?? 0

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
