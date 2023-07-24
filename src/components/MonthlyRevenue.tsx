import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import { formatCurrency } from '@/utils/currency'
import { useMemo } from 'react'
import { previousMonthSort } from '@/utils/sorting'
import TrendArrow from '@/components/MonthlyRevenue/TrendArrow'

const MonthlyRevenue = () => {
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
    <section>
      {!loading &&
        data.map((gama, index) => (
          <div key={gama.id} className='grid grid-cols-5'>
            <TrendArrow change={(previousMonth[gama.id] || 0) - index} />
            <span>{gama.game?.['region']}</span>
            <span>{gama.game?.['en_name']}</span>
            <span>{formatCurrency(gama['totalRevenue'])}</span>
            <span>
              {formatCurrency(gama['previousMonth']?.['totalRevenue'])}
            </span>
          </div>
        ))}
    </section>
  )
}

export default MonthlyRevenue
