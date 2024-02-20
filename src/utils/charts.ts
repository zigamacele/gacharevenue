import { CURRENT_TABLE } from '@/constants/tables'

import { regionalMultiplier } from './globals'
import { humanizeTableShort } from './timeDate'

import { BarDatum } from '@/types/nivo'
import { QueryOutput } from '@/types/supabase'

export const preparePieChartData = (data: QueryOutput[]) => {
  const pieData = data.map((game) => {
    return {
      id: `${game.en_name} (${game.region})`,
      label: game.name,
      value: regionalMultiplier(game[CURRENT_TABLE]?.totalRevenue, game.region),
    }
  })

  return pieData
}

export const prepareLineChartData = (data: QueryOutput[], tables: string[]) => {
  const lineData = data.map((game) => {
    const lineHistory = tables.map((table) => {
      if (game[table]?.totalRevenue === 0) {
        return
      }

      return {
        x: humanizeTableShort(table),
        y: regionalMultiplier(game[table]?.totalRevenue, game.region),
      }
    })
    return {
      id: `${game.en_name} (${game.region})`,
      data: lineHistory as unknown as { x: string; y: number }[],
    }
  })

  return lineData
}

export const prepareBarChartData = (data: QueryOutput[], tables: string[]) => {
  const allKeys = []

  const output: { [key: string]: BarDatum } = {}

  for (const game of data) {
    allKeys.push(`${game.en_name} (${game.region})`)

    for (const table of tables) {
      if (game[table]?.totalRevenue === 0) {
        continue
      }
      output[table] = {
        ...output[table],
        month: humanizeTableShort(table),
        [`${game.en_name} (${game.region})`]: regionalMultiplier(
          game[table]?.totalRevenue,
          game.region,
        ),
      }
    }
  }

  const barData = Object.keys(output).map((key) => {
    return output[key]
  }) as unknown as BarDatum[]

  return { barData, allKeys }
}
