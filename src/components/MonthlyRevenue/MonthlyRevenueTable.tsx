import { Table, TableBody, TableHeader } from '@/lib/shadcn/ui/table'
import { previousMonthSort } from '@/utils/sorting'
import { useMemo } from 'react'

import { QueryOutput } from '@/types/supabase'
import MonthlyRevTableHeader from './MonthlyRevenueTable/MonthlyRevTableHeader'
import MonthlyRevTableRow from './MonthlyRevenueTable/MonthlyRevTableRow'

interface MonthlyRevenueTableProps {
  data: QueryOutput[]
  loading: boolean
}

const MonthlyRevenueTable: React.FC<MonthlyRevenueTableProps> = ({
  data,
  loading,
}) => {
  const previousMonth = useMemo(() => previousMonthSort(data), [data])

  return (
    <section className='m-2'>
      <Table className='w-full border sm:w-[60em]'>
        <TableHeader>
          <MonthlyRevTableHeader />
        </TableHeader>
        <TableBody>
          {!loading &&
            data.map((game, index) => (
              <MonthlyRevTableRow
                data={game}
                index={index}
                previousMonth={previousMonth}
              />
            ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default MonthlyRevenueTable
