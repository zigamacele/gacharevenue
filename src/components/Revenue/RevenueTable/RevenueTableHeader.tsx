import { TableHead, TableRow } from '@/lib/shadcn/ui/table'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { Mode } from '@/utils/enums'
import { humanizeTable } from '@/utils/timeDate'

interface RevenueTableHeaderProps {
  isMobile: boolean
}

const RevenueTableHeader: React.FC<RevenueTableHeaderProps> = ({
  isMobile,
}) => {
  const { mode } = useRevenueTableControls()
  return (
    <TableRow>
      <TableHead />
      {!isMobile && <TableHead />}
      <TableHead>Region</TableHead>
      <TableHead>Game</TableHead>
      {mode === Mode.MONTHLY ? (
        <>
          <TableHead className='whitespace-nowrap text-right'>
            {humanizeTable(PREVIOUS_TABLE)}
          </TableHead>
          <TableHead className='whitespace-nowrap text-right'>
            {humanizeTable(CURRENT_TABLE)}
          </TableHead>
        </>
      ) : (
        <TableHead className='whitespace-nowrap text-right'>2023</TableHead>
      )}
    </TableRow>
  )
}

export default RevenueTableHeader
