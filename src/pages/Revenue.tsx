import { ChevronUp } from 'lucide-react'
import { useMemo } from 'react'

import { Separator } from '@/lib/shadcn/ui/separator'

import Button from '@/components/Button'
import RevenueControls from '@/components/Revenue/RevenueControls'
import RevenueTable from '@/components/Revenue/RevenueTable'

import useGraveyardStore from '@/stores/graveyard-store'
import useRevenueTableControls from '@/stores/revenue-table-controls'
import useSupabaseStore from '@/stores/supabase-store'

import { combineSameGameRevenue } from '@/utils/filters'
import { queryFilterSort } from '@/utils/sorting'

const Revenue: React.FC = () => {
  const {
    sortAscending,
    search,
    pinned,
    removed,
    showPinned,
    showMaintenance,
    showEditSection,
    showCombinedRevenue,
    selectedRegions,
    androidMultiplier,
  } = useRevenueTableControls()
  const { loading, storage, currentTable } = useSupabaseStore()
  const { hideControls, toggle } = useRevenueTableControls()
  const { eos, maintenance } = useGraveyardStore()

  const combinedRevenue = useMemo(() => {
    return combineSameGameRevenue(storage)
  }, [storage, androidMultiplier, currentTable])

  const TableData = showCombinedRevenue ? combinedRevenue : storage

  return (
    <main className='flex justify-center'>
      {!loading && storage.length > 0 && (
        <section className='slide-from-bottom my-2 flex w-full flex-col rounded-md border border-neutral-700/80 bg-neutral-900 px-2 sm:w-[55em]'>
          {!hideControls ? (
            <RevenueControls />
          ) : (
            <Button
              tooltip='Show table controls'
              onClick={() => toggle('hideControls')}
              className='mt-2 h-8 w-full bg-neutral-950/80'
            >
              <ChevronUp size={16} />
            </Button>
          )}
          <Separator className='mt-2 w-full opacity-40' />
          <RevenueTable
            data={queryFilterSort({
              data: TableData,
              eos,
              maintenance,
              search,
              pinned,
              removed,
              showPinned,
              showMaintenance,
              showEditSection,
              sortAscending,
              showCombinedRevenue,
              selectedRegions,
            })}
            showEditSection={showEditSection}
          />
        </section>
      )}
    </main>
  )
}

export default Revenue
