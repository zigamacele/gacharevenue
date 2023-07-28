import { Table, TableBody, TableHeader } from '@/lib/shadcn/ui/table'
import { previousMonthSort } from '@/utils/sorting'
import { useMemo } from 'react'

import useCurrentDevice from '@/hooks/useCurrentDevice'
import { QueryOutput } from '@/types/supabase'
import MonthlyRevTableHeader from './MonthlyRevenueTable/MonthlyRevTableHeader'
import MonthlyRevTableRow from './MonthlyRevenueTable/MonthlyRevTableRow'

interface MonthlyRevenueTableProps {
  data: QueryOutput[]
  loading: boolean
  showEditSection: boolean
}

const MonthlyRevenueTable: React.FC<MonthlyRevenueTableProps> = ({
  data,
  loading,
  showEditSection,
}) => {
  const previousMonth = useMemo(() => previousMonthSort(data), [data])
  const isMobile = useCurrentDevice()

  return (
    <section className='rounded-md border border-neutral-700/80 bg-neutral-900 pb-4 pt-2 sm:px-4'>
      <Table>
        <TableHeader>
          <MonthlyRevTableHeader isMobile={isMobile} />
        </TableHeader>
        <TableBody>
          {!loading &&
            data.map((game, index) => (
              <MonthlyRevTableRow
                key={game.id}
                data={game}
                index={index}
                isMobile={isMobile}
                previousMonth={previousMonth}
                showEditSection={showEditSection}
              />
            ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default MonthlyRevenueTable
