import { TableHead, TableRow } from '@/lib/shadcn/ui/table'

interface MonthlyRevTableHeaderProps {
  isMobile: boolean
}

const MonthlyRevTableHeader: React.FC<MonthlyRevTableHeaderProps> = ({
  isMobile,
}) => {
  return (
    <TableRow>
      {!isMobile && (
        <>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </>
      )}
      <TableHead>Region</TableHead>
      <TableHead>Game</TableHead>
      <TableHead className='text-right'>Jun 2023</TableHead>
      <TableHead className='text-right'>Jul 2023</TableHead>
    </TableRow>
  )
}

export default MonthlyRevTableHeader
