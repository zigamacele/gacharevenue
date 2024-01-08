import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import {
  QueryOutput,
  QueryYearlyOutput,
  StatisticsSchema,
} from '@/types/supabase'

export const combineSameGameRevenue = (data: QueryOutput[]) => {
  const output: { [key: string]: QueryOutput } = {}

  for (const game of data) {
    const key = game.en_name

    if (output[key]) {
      if (output[key]?.region !== 'COMBINED') {
        const gameObject = { ...output[key] } as QueryOutput
        const currentTable = {
          ...output[key]?.[CURRENT_TABLE],
        } as StatisticsSchema
        const previousTable = {
          ...output[key]?.[PREVIOUS_TABLE],
        } as StatisticsSchema

        gameObject.region = 'COMBINED'

        currentTable.totalRevenue =
          currentTable.totalRevenue + (game[CURRENT_TABLE]?.totalRevenue ?? 0)

        previousTable.totalRevenue =
          previousTable.totalRevenue + (game[PREVIOUS_TABLE]?.totalRevenue ?? 0)

        gameObject[CURRENT_TABLE] = currentTable
        gameObject[PREVIOUS_TABLE] = previousTable

        output[key] = gameObject
      }
    } else {
      output[key] = game
    }
  }

  return Object.values(output)
}

export const combineMonthlyRevenue = (data: QueryOutput[]) => {
  const tables = [
    '1-2023',
    '2-2023',
    '3-2023',
    '4-2023',
    '5-2023',
    '6-2023',
    '7-2023',
    '8-2023',
    '9-2023',
    '10-2023',
    '11-2023',
    '12-2023',
  ]
  const output: QueryYearlyOutput[] = []
  data.forEach((game) => {
    let yearlyRevenue = 0
    tables.forEach((table) => {
      if (game[table]) {
        yearlyRevenue += game[table]?.totalRevenue ?? 0
      }
    })
    output.push({ ...game, yearlyRevenue } as QueryYearlyOutput)
  })

  return output
}
