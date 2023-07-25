import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

const MonthlyRevenue: React.FC = () => {
  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: false },
  })

  return (
    <>
      <MonthlyRevenueTable data={data} loading={loading} />
    </>
  )
}

export default MonthlyRevenue
