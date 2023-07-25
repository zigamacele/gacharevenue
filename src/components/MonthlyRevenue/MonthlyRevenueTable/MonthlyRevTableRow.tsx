import { TableCell, TableRow } from '@/lib/shadcn/ui/table'
import { formatCurrency } from '@/utils/currency'
import { getRegion } from '@/utils/region'

import TrendArrow from '@/components/MonthlyRevenue/MonthlyRevenueTable/TrendArrow'
import { QueryOutput } from '@/types/supabase'

interface MonthlyRevTableRowProps {
  data: QueryOutput
  index: number
  isMobile: boolean
  previousMonth: { [key: string]: number }
}

const MonthlyRevTableRow: React.FC<MonthlyRevTableRowProps> = ({
  data,
  index,
  isMobile,
  previousMonth,
}) => {
  const region = getRegion(data.game?.['region'])
  const currentRevenue = data.totalRevenue
  const previousRevenue = data.previousMonth?.['totalRevenue'] ?? 0

  return (
    <TableRow>
      {!isMobile && (
        <>
          <TableCell className='flex items-center justify-center'>
            <TrendArrow change={(previousMonth[data.id] ?? 0) - index} />
          </TableCell>

          <TableCell className='p-0'>
            <img
              src={data.game?.background ?? ''}
              alt={data.en_name}
              className='h-9 w-full object-cover'
            />
          </TableCell>
        </>
      )}
      <TableCell className={`text-center ${region.color}`}>
        {region.emoji}
      </TableCell>
      <TableCell className='text-xs sm:text-sm'>
        {data.game?.['en_name']}
      </TableCell>
      <TableCell className='text-right'>
        {formatCurrency(previousRevenue)}
      </TableCell>
      <TableCell
        className={`text-right ${
          currentRevenue >= previousRevenue ? 'bg-green-600 ' : 'bg-red-500'
        }`}
      >
        {formatCurrency(currentRevenue)}
      </TableCell>
    </TableRow>
  )
}

export default MonthlyRevTableRow
