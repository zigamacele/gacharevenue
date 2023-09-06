import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import { QueryOutput, StatisticsSchema } from '@/types/supabase'

export const isNegative = (value: number) => {
  if (Math.sign(value) === -1) {
    return true
  }

  return false
}

export const formatNumber = (value: number) => {
  return Intl.NumberFormat('en').format(value)
}

export const getTotalStatistics = (
  data: QueryOutput[],
  table: string,
  key: string,
) => {
  const totalStatistics = data.reduce((acc, game) => {
    const value = game[table]?.[key as keyof StatisticsSchema] ?? 0
    return acc + value
  }, 0)

  return totalStatistics
}

export const compareMonths = (data: QueryOutput[], key: string) => {
  const currentMonth = getTotalStatistics(data, CURRENT_TABLE, key)
  const previousMonth = getTotalStatistics(data, PREVIOUS_TABLE, key)

  const difference = Math.abs(currentMonth - previousMonth)
  const percentage = ((currentMonth - previousMonth) / previousMonth) * 100

  return { difference, percentage }
}

export const compareRevenue = (data: QueryOutput[]) => {
  const output: { name: string; difference: number; percentage: number }[] = []

  data.forEach((game: QueryOutput) => {
    const currentRevenue = game[CURRENT_TABLE]?.totalRevenue ?? 0
    const previousRevenue = game[PREVIOUS_TABLE]?.totalRevenue ?? 0

    const difference = Math.abs(currentRevenue - previousRevenue)
    const percentage =
      ((currentRevenue - previousRevenue) / previousRevenue) * 100

    if (percentage !== Infinity && previousRevenue) {
      output.push({ name: game.en_name, difference, percentage })
    }
  })

  const sortByPercentage: {
    name: string
    difference: number
    percentage: number
  }[] = [...output].sort((a, b) => b.percentage - a.percentage)

  return sortByPercentage
}
