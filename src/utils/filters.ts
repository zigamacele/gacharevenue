import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import { regionalMultiplier } from './globals'

import { QueryOutput, Region, StatisticsSchema } from '@/types/supabase'

export const combineSameGameRevenue = (data: QueryOutput[]) => {
  const output: { [key: string]: QueryOutput } = {}

  for (const game of data) {
    const key = game.en_name

    if (output[key]) {
      const gameObject = { ...output[key] } as QueryOutput
      const currentTable = {
        ...output[key]?.[CURRENT_TABLE],
      } as StatisticsSchema
      const previousTable = {
        ...output[key]?.[PREVIOUS_TABLE],
      } as StatisticsSchema

      currentTable.totalRevenue =
        currentTable.totalRevenue +
        regionalMultiplier(game[CURRENT_TABLE]?.totalRevenue ?? 0, game.region)

      previousTable.totalRevenue =
        previousTable.totalRevenue +
        regionalMultiplier(game[PREVIOUS_TABLE]?.totalRevenue ?? 0, game.region)

      gameObject[CURRENT_TABLE] = currentTable
      gameObject[PREVIOUS_TABLE] = previousTable
      gameObject.region = Region.COMBINED_REGIONS

      output[key] = gameObject
    } else {
      output[key] = {
        ...game,
        [CURRENT_TABLE]: {
          ...game[CURRENT_TABLE],
          totalRevenue: regionalMultiplier(
            game[CURRENT_TABLE]?.totalRevenue ?? 0,
            game.region,
          ),
        },
        [PREVIOUS_TABLE]: {
          ...game[PREVIOUS_TABLE],
          totalRevenue: regionalMultiplier(
            game[PREVIOUS_TABLE]?.totalRevenue ?? 0,
            game.region,
          ),
        },
      } as QueryOutput
    }
  }

  return Object.values(output)
}
