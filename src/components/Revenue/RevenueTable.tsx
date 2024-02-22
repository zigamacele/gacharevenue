import { useMemo } from 'react'

import { Table, TableBody, TableHeader } from '@/lib/shadcn/ui/table'

import useCurrentDevice from '@/hooks/useCurrentDevice'

import useGraveyardStore from '@/stores/graveyard-store'
import useRevenueTableControls from '@/stores/revenue-table-controls'

import { previousMonthSort } from '@/utils/sorting'

import RevenueTableHeader from './RevenueTable/RevenueTableHeader'
import RevenueTableRow from './RevenueTable/RevenueTableRow'

import { QueryOutput } from '@/types/supabase'

interface RevenueTableProps {
  data: QueryOutput[]
  showEditSection: boolean
}

const RevenueTable: React.FC<RevenueTableProps> = ({
  data,
  showEditSection,
}) => {
  const { sortAscending, showCombinedRevenue } = useRevenueTableControls()
  const { eos } = useGraveyardStore()
  const previousMonth = useMemo(
    () => previousMonthSort(data, sortAscending, showCombinedRevenue),
    [data],
  )
  const isMobile = useCurrentDevice()
  const eosIds = useMemo(() => eos.map((game) => game.id), [eos])

  return (
    <section className='pb-4 pt-2 sm:px-2'>
      <Table>
        <TableHeader>
          <RevenueTableHeader isMobile={isMobile} />
        </TableHeader>
        <TableBody>
          {data.map((game, index) => (
            <RevenueTableRow
              key={game.id}
              data={game}
              index={index}
              isMobile={isMobile}
              eosIds={eosIds}
              previousMonth={previousMonth}
              showEditSection={showEditSection}
            />
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default RevenueTable
