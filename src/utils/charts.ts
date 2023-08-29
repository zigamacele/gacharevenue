import { CURRENT_TABLE } from '@/constants/tables'
import { BarDatum } from '@/types/nivo'
import { QueryOutput } from '@/types/supabase'
import { humanizeTable } from './timeDate'

export const preparePieChartData = (data: QueryOutput[]) => {
  const pieData = data.map((game) => {
    return {
      id: `${game.en_name} (${game.region})`,
      label: game.name,
      value: game[CURRENT_TABLE]?.totalRevenue ?? 0,
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
        x: humanizeTable(table),
        y: game[table]?.totalRevenue ?? 0,
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
        month: humanizeTable(table),
        [`${game.en_name} (${game.region})`]: game[table]?.totalRevenue ?? 0,
      }
    }
  }

  const barData = Object.keys(output).map((key) => {
    return output[key]
  }) as unknown as BarDatum[]

  return { barData, allKeys }
}
