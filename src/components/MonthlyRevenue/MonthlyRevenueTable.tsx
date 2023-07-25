import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/lib/shadcn/ui/table'
import { getRegion } from '@/utils/region'
import { useMemo } from 'react'
import { previousMonthSort } from '@/utils/sorting'

import { formatCurrency } from '@/utils/currency'

import TrendArrow from '@/components/MonthlyRevenue/MonthlyRevenueTable/TrendArrow'
import { QueryOutput } from '@/types/supabase'
import MonthlyRevTableHeader from './MonthlyRevenueTable/MonthlyRevTableHeader'

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
            data.map((game, index) => {
              const region = getRegion(game.game?.['region'])
              const currentRevenue = game.totalRevenue
              const previousRevenue = game.previousMonth?.['totalRevenue'] ?? 0

              return (
                <TableRow key={game.id}>
                  <TableCell className='flex items-center justify-center'>
                    <TrendArrow
                      change={(previousMonth[game.id] ?? 0) - index}
                    />
                  </TableCell>
                  <TableCell className='p-0'>
                    <img
                      src={game.game?.background ?? ''}
                      alt={game.en_name}
                      className='hidden h-9 w-full object-cover sm:block'
                    />
                  </TableCell>
                  <TableCell className={`text-center ${region.color}`}>
                    {region.emoji}
                  </TableCell>
                  <TableCell className='text-xs'>
                    {game.game?.['en_name']}
                  </TableCell>
                  <TableCell className='text-right'>
                    {formatCurrency(previousRevenue)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      currentRevenue >= previousRevenue
                        ? 'bg-green-600 '
                        : 'bg-red-500'
                    }`}
                  >
                    {formatCurrency(currentRevenue)}
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </section>
  )
}

export default MonthlyRevenueTable
