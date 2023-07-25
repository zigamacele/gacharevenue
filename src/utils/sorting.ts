import { QueryOutput } from '@/types/supabase'

export interface PreviousMonthIndexes {
  [key: string]: number
}

export const previousMonthSort = (data: QueryOutput[]) => {
  const sortedPreviousMonth = [...data].sort(
    (a, b) =>
      (b.previousMonth?.totalRevenue || 0) -
      (a.previousMonth?.totalRevenue || 0),
  )

  const previousMonthIndexes: PreviousMonthIndexes = {}
  sortedPreviousMonth.forEach((GameSchema, index) => {
    previousMonthIndexes[GameSchema.id] = index
  })

  return previousMonthIndexes
}
