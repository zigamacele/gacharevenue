import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import { useState } from 'react'
import SortingToggle from './MonthlyRevenue/SortingToggle'

const MonthlyRevenue: React.FC = () => {
  const [sortingToggle, setSortingToggle] = useState(false)
  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: sortingToggle },
  })

  return (
    <section className='flex flex-col gap-2'>
      <div className='flex justify-end'>
        <SortingToggle
          sortingToggle={sortingToggle}
          setSortingToggle={setSortingToggle}
        />
      </div>

      <MonthlyRevenueTable data={data} loading={loading} />
    </section>
  )
}

export default MonthlyRevenue
