import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import { QueryOutput, StatisticsSchema } from '@/types/supabase'

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
