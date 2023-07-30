import { TableHead, TableRow } from '@/lib/shadcn/ui/table'

interface MonthlyRevTableHeaderProps {
  isMobile: boolean
}

const MonthlyRevTableHeader: React.FC<MonthlyRevTableHeaderProps> = ({
  isMobile,
}) => {
  return (
    <TableRow>
      <TableHead></TableHead>
      {!isMobile && <TableHead></TableHead>}
      <TableHead>Region</TableHead>
      <TableHead>Game</TableHead>
      <TableHead className='whitespace-nowrap text-right'>Jun 2023</TableHead>
      <TableHead className='whitespace-nowrap text-right'>Jul 2023</TableHead>
    </TableRow>
  )
}

export default MonthlyRevTableHeader
