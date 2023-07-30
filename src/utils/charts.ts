import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
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

export const prepareLineChartData = (data: QueryOutput[]) => {
  const lineData = data.map((game) => {
    return {
      id: `${game.en_name} (${game.region})`,
      data: [
        {
          x: humanizeTable(PREVIOUS_TABLE),
          y: game[PREVIOUS_TABLE]?.totalRevenue ?? 0,
        },
        {
          x: humanizeTable(CURRENT_TABLE),
          y: game[CURRENT_TABLE]?.totalRevenue ?? 0,
        },
      ],
    }
  })

  return lineData
}

export const prepareBarChartData = (data: QueryOutput[]) => {
  const currentMonth: BarDatum = {
    month: humanizeTable(CURRENT_TABLE),
  }
  const previousMonth: BarDatum = { month: humanizeTable(PREVIOUS_TABLE) }
  const allKeys = []

  for (const game of data) {
    allKeys.push(`${game.en_name} (${game.region})`)

    currentMonth[`${game.en_name} (${game.region})`] =
      game[CURRENT_TABLE]?.totalRevenue ?? 0
    previousMonth[`${game.en_name} (${game.region})`] =
      game[PREVIOUS_TABLE]?.totalRevenue ?? 0
  }

  const barData = [previousMonth, currentMonth]

  return { barData, allKeys }
}
