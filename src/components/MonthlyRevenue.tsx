import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { Toggle } from '@/lib/shadcn/ui/toggle'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import { ArrowDown10, ArrowUp10 } from 'lucide-react'
import { useState } from 'react'

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
      <Toggle
        className='p-1'
        onClick={() => {
          setSortingToggle(!sortingToggle)
        }}
      >
        {sortingToggle ? <ArrowUp10 /> : <ArrowDown10 />}
      </Toggle>

      <MonthlyRevenueTable data={data} loading={loading} />
    </section>
  )
}

export default MonthlyRevenue
