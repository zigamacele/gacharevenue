import { useMemo } from 'react'

import MotionInView from '@/lib/framer-motion/MotionInView'
import Bar from '@/lib/nivo/Bar'
import Pie from '@/lib/nivo/Pie'

import PercentageBox from '@/components/Home/Overview/OverviewCard/PercentageBox'

import useGraveyardStore from '@/stores/graveyard-store'
import useRevenueTableControls from '@/stores/revenue-table-controls'
import useSupabaseStore from '@/stores/supabase-store'

import { regions } from '@/constants/regions'
import { CURRENT_TABLE } from '@/constants/tables'
import { preparePieChartData, prepareTotalBarData } from '@/utils/charts'
import { formatCurrency } from '@/utils/currency'
import { combineSameGameRevenue } from '@/utils/filters'
import { compareMonths, getTotalStatistics } from '@/utils/overview'
import { queryFilter } from '@/utils/sorting'
import { humanizeTable } from '@/utils/timeDate'

const Charts: React.FC = () => {
  const { storage, tables, game } = useSupabaseStore()
  const { eos } = useGraveyardStore()
  const {
    showCombinedRevenue,
    pinned,
    removed,
    showPinned,
    androidMultiplier,
  } = useRevenueTableControls()

  const combinedRevenue = useMemo(() => {
    return combineSameGameRevenue(storage)
  }, [storage, androidMultiplier])

  const randomBackgroundImage = () => {
    const storageLength = storage.length
    const randomIndex = Math.floor(Math.random() * storageLength)
    return storage[randomIndex]?.background
  }

  const ChartsData = queryFilter({
    data: showCombinedRevenue ? combinedRevenue : storage,
    pinned,
    removed,
    showPinned,
  })

  const barCharts = useMemo(() => ['totalRevenue', 'totalDownloads'], [])
  const middleSection = useMemo(
    () => [
      {
        title: 'Included games',
        number: game.length,
      },
      {
        title: 'Included regions',
        number: regions.length,
      },
      {
        title: 'Months tracked',
        number: tables.length,
      },
      {
        title: 'EoS games',
        number: eos.length,
      },
    ],
    [game, eos],
  )

  return (
    <MotionInView styles='mt-2 mb-3 flex flex-col justify-center items-center gap-3 px-3 xl:px-0'>
      <section className='grid w-full grid-cols-1 gap-3 xl:w-[40rem] xl:grid-cols-2'>
        {barCharts.map((chart) => (
          <div
            key={chart}
            className='h-60 overflow-y-hidden overflow-x-scroll rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-4'
          >
            <div className='flex items-start justify-between'>
              <span>
                <p className='opacity-80'>Total Revenue</p>
                <p className='max-w-sm truncate text-2xl font-bold'>
                  {formatCurrency(
                    getTotalStatistics(storage, CURRENT_TABLE, chart),
                  )}
                </p>
              </span>
              <PercentageBox
                percentage={compareMonths(storage, chart).percentage}
              />
            </div>
            <Bar
              data={prepareTotalBarData(ChartsData, tables, chart)}
              height='100%'
              margin={{ top: 20, right: 10, bottom: 60, left: 10 }}
            />
          </div>
        ))}
      </section>
      <div className='grid w-full grid-cols-2 gap-3 xl:w-[40rem] xl:grid-cols-4'>
        {middleSection.map((section) => (
          <div
            key={section.title}
            className='relative h-28 overflow-y-hidden overflow-x-scroll rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-4'
          >
            <img
              src={randomBackgroundImage()}
              alt={section.title}
              className='absolute left-0 top-0 h-20 w-full object-cover opacity-40'
            />
            <span className='absolute left-0 top-0 z-10 h-20 w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent md:rounded-t' />
            <span className='absolute bottom-2 left-2.5 z-50'>
              <p className='max-w-sm truncate text-2xl font-bold'>
                {section.number}
              </p>
              <p className='opacity-80'>{section.title}</p>
            </span>
          </div>
        ))}
      </div>
      <div className='relative h-96 w-full overflow-y-hidden overflow-x-scroll rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-4 xl:w-[40rem]'>
        <span className='absolute bottom-2 right-4 text-right'>
          <p className='xl:text-md text-sm opacity-80'>Breakdown</p>
          <p className='max-w-sm truncate text-xl font-bold xl:text-2xl'>
            {humanizeTable(CURRENT_TABLE)}
          </p>
        </span>
        <Pie data={preparePieChartData(ChartsData)} />
      </div>
    </MotionInView>
  )
}

export default Charts
