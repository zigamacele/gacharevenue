import { TableHead, TableRow } from '@/lib/shadcn/ui/table'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { humanizeTable } from '@/utils/timeDate'

interface RevenueTableHeaderProps {
  isMobile: boolean
}

const RevenueTableHeader: React.FC<RevenueTableHeaderProps> = ({
  isMobile,
}) => {
  return (
    <TableRow>
      <TableHead></TableHead>
      {!isMobile && <TableHead></TableHead>}
      <TableHead>Region</TableHead>
      <TableHead>Game</TableHead>
      <TableHead className='whitespace-nowrap text-right'>
        {humanizeTable(PREVIOUS_TABLE)}
      </TableHead>
      <TableHead className='whitespace-nowrap text-right'>
        {humanizeTable(CURRENT_TABLE)}
      </TableHead>
    </TableRow>
  )
}

export default RevenueTableHeader
