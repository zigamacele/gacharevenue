import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { QueryOutput } from '@/types/supabase'

export interface PreviousMonthIndexes {
  [key: string]: number
}

export const previousMonthSort = (data: QueryOutput[]) => {
  const sortedPreviousMonth = [...data].sort(
    (a, b) =>
      (b[PREVIOUS_TABLE]?.totalRevenue ?? 0) -
      (a[PREVIOUS_TABLE]?.totalRevenue ?? 0),
  )

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

    if (showPinned && isPinned) {
      return true
    }

    if (isRemoved && !showEditSection) {
      return false
    }

    return showPinned ? false : true
  })

  const sorting = [...filtered].sort((a, b) => {
    const aRevenue = a[CURRENT_TABLE]?.totalRevenue ?? 0
    const bRevenue = b[CURRENT_TABLE]?.totalRevenue ?? 0

    if (sortAscending) {
      return aRevenue - bRevenue
    }

    return bRevenue - aRevenue
  })

  return sorting
}
