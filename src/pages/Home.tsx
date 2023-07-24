import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import { formatCurrency } from '@/utils/currency'
import { useMemo } from 'react'
import { previousMonthSort } from '@/utils/sorting'
import TrendArrow from '@/components/TrendArrow'

const Home: React.FC = () => {
  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: false },
  })

  const previousMonth = useMemo(() => previousMonthSort(data), [data])

  return (
    <div>
      {!loading &&
        data.map((gama, index) => {
          return (
            <div key={gama.id}>
              <TrendArrow change={(previousMonth[gama.id] || 0) - index} />
              {gama.game?.['region']} {gama.game?.['en_name']}{' '}
              {formatCurrency(gama['totalRevenue'])}{' '}
              {formatCurrency(gama['previousMonth']?.['totalRevenue'])}
            </div>
          )
        })}
    </div>
  )
}

export default Home
