import { CURRENT_TABLE } from '@/constants/tables'
import useSupabaseStore from '@/stores/supabase-store'
import { formatCurrency } from '@/utils/currency'
import {
  compareMonths,
  compareRevenue,
  formatNumber,
  getTotalStatistics,
} from '@/utils/overview'
import { useMemo } from 'react'
import OverviewCard from './Overview/OverviewCard'

const Overview: React.FC = () => {
  const { storage } = useSupabaseStore()
  const sortedByPercentage = useMemo(() => compareRevenue(storage), [storage])

  return (
    <section className='flex flex-col gap-4 sm:flex-row'>
      <OverviewCard
        icon='💰'
        title='Total Revenue'
        desc='Compared to last month'
        body={formatCurrency(
          getTotalStatistics(storage, CURRENT_TABLE, 'totalRevenue'),
        )}
        difference={compareMonths(storage, 'totalRevenue')}
      />
      <OverviewCard
        icon='📲'
        title='Total Downloads'
        desc='Compared to last month'
        body={formatNumber(
          getTotalStatistics(storage, CURRENT_TABLE, 'totalDownloads'),
        )}
        difference={compareMonths(storage, 'totalDownloads')}
      />
      <OverviewCard
        icon='🎊'
        title='Biggest revenue increase'
        desc='Compared to last month'
        body={sortedByPercentage[0]?.name ?? ''}
        difference={sortedByPercentage[0]}
      />
      <OverviewCard
        icon='⚰️'
        title='Biggest revenue decrease'
        desc='Compared to last month'
        body={sortedByPercentage[sortedByPercentage.length - 1]?.name ?? ''}
        difference={sortedByPercentage[sortedByPercentage.length - 1]}
      />
    </section>
  )
}

export default Overview
