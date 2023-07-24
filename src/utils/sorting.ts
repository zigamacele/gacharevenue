import { QueryOutput } from '@/types/supabase'

interface PreviousMonthIndexes {
  [key: number]: number
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
