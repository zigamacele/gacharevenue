import { Download } from 'lucide-react'

import { Skeleton } from '@/lib/shadcn/ui/skeleton'

import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { humanizeTable } from '@/utils/timeDate'

import { QueryOutput } from '@/types/supabase'

interface MonthlyStatisticsProps {
  currentGame: QueryOutput
  table: string
}

const MonthlyStatistics: React.FC<MonthlyStatisticsProps> = ({
  currentGame,
  table,
}) => {
  const currentGameRevenue = currentGame[table]?.totalDownloads
  return (
    <div className='flex flex-col'>
      <span className='mb-1 whitespace-nowrap opacity-40'>
        {humanizeTable(table)}
      </span>
      <div className='flex items-center justify-end gap-1.5'>
        <Download width={14} className='opacity-60' />
        {currentGameRevenue ? (
          <span>
            {formatCurrencyCompact(currentGame[table]?.totalDownloads)}
          </span>
        ) : (
          <Skeleton className='h-2 w-12' />
        )}
      </div>
      <span>{formatCurrency(currentGame[table]?.totalRevenue)}</span>
    </div>
  )
}

export default MonthlyStatistics
