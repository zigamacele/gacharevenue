import { Download } from 'lucide-react'

import { Skeleton } from '@/lib/shadcn/ui/skeleton'

import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { regionalMultiplier } from '@/utils/globals'
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
  const currentGameDownloads = regionalMultiplier(
    currentGame[table]?.totalDownloads,
    currentGame.region,
  )
  return (
    <div className='flex flex-col'>
      <span className='mb-1 whitespace-nowrap opacity-40'>
        {humanizeTable(table)}
      </span>
      <div className='flex items-center justify-end gap-1.5'>
        <Download width={14} className='opacity-60' />
        {currentGameDownloads ? (
          <span>{formatCurrencyCompact(currentGameDownloads)}</span>
        ) : (
          <Skeleton className='h-2 w-12' />
        )}
      </div>
      <span>
        {formatCurrency(
          regionalMultiplier(
            currentGame[table]?.totalRevenue,
            currentGame.region,
          ),
        )}
      </span>
    </div>
  )
}

export default MonthlyStatistics
