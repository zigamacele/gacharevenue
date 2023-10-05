import { useMemo } from 'react'

import { Separator } from '@/lib/shadcn/ui/separator'

import RevenueControls from '@/components/Revenue/RevenueControls'
import RevenueTable from '@/components/Revenue/RevenueTable'

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
    showEditSection,
    showCombinedRevenue,
  } = useRevenueTableControls()
  const { loading, storage } = useSupabaseStore()

  const combinedRevenue = useMemo(() => {
    return combineSameGameRevenue(storage)
  }, [storage])

  const TableData = showCombinedRevenue ? combinedRevenue : storage

  return (
    <main className='flex justify-center'>
      {!loading && storage.length > 0 && (
        <section className='slide-from-bottom my-2 flex w-full flex-col rounded-md border border-neutral-700/80 bg-neutral-900 px-2 sm:w-[52.7em]'>
          <RevenueControls />
          <Separator className='mt-2 w-full opacity-40' />
          <RevenueTable
            data={queryFilterSort({
              data: TableData,
              search,
              pinned,
              removed,
              showPinned,
              showEditSection,
              sortAscending,
            })}
            showEditSection={showEditSection}
          />
        </section>
      )}
    </main>
  )
}

export default Revenue
