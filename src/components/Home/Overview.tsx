import { useMemo } from 'react'

import GameBanner from '@/components/GameBanner.tsx'

import useSupabaseStore from '@/stores/supabase-store'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { formatCurrency } from '@/utils/currency'
import {
  compareMonths,
  compareRevenue,
  formatNumber,
  getTotalStatistics,
} from '@/utils/overview'

import OverviewCard from './Overview/OverviewCard'

const Overview: React.FC = () => {
  const { storage } = useSupabaseStore()
  const sortedByPercentage = useMemo(() => compareRevenue(storage), [storage])

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 xl:flex-row'>
        <span className='flex flex-col gap-4'>
          <OverviewCard
            title='Total Revenue'
            desc='Compared to last month'
            body={formatCurrency(
              getTotalStatistics(storage, CURRENT_TABLE, 'totalRevenue'),
            )}
            difference={compareMonths(storage, 'totalRevenue')}
            minimal
          />
          <OverviewCard
            title='Total Downloads'
            desc='Compared to last month'
            body={formatNumber(
              getTotalStatistics(storage, CURRENT_TABLE, 'totalDownloads'),
            )}
            difference={compareMonths(storage, 'totalDownloads')}
            minimal
          />
        </span>
        <OverviewCard
          title='Biggest revenue increase'
          desc='Compared to last month'
          body={sortedByPercentage[0]?.name ?? ''}
          difference={sortedByPercentage[0]}
          game={sortedByPercentage[0]}
        />
        <OverviewCard
          title='Biggest revenue decrease'
          desc='Compared to last month'
          body={sortedByPercentage[sortedByPercentage.length - 1]?.name ?? ''}
          difference={sortedByPercentage[sortedByPercentage.length - 1]}
          game={sortedByPercentage[sortedByPercentage.length - 1]}
        />
      </div>
      {storage.map((game) => {
        if (game.new_release && !game[PREVIOUS_TABLE]?.totalRevenue) {
          return <GameBanner game={game} key={game.id} />
        }
        return null
      })}
    </section>
  )
}

export default Overview
