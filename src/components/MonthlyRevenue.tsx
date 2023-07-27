import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import useMonthlyTableControls from '@/stores/monthly-table-controls'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Pin,
  PinOff,
} from 'lucide-react'
import Toggle from './MonthlyRevenue/Toggle'

const MonthlyRevenue: React.FC = () => {
  const {
    sortAscending,
    pinned,
    removed,
    showPinned,
    showEditSection,
    toggle,
  } = useMonthlyTableControls()

  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: sortAscending },
  })

  const filtered = data.filter((game) => {
    const gameId = game.id
    const isPinned = pinned.includes(gameId)
    const isRemoved = removed.includes(gameId)

    if (showPinned && isPinned) {
      return true
    }

    if (isRemoved && !showEditSection) {
      return false
    }

    return showPinned ? false : true
  })

  const sorting = [...filtered].sort((a, b) => {
    if (sortAscending) {
      return a.totalRevenue - b.totalRevenue
    }

    return b.totalRevenue - a.totalRevenue
  })

  return (
    <main className='my-4 flex flex-col gap-2'>
      <section className='flex justify-between'>
        <Toggle onClick={() => toggle('showEditSection')}>
          <ClipboardEdit size={20} />
        </Toggle>
        <div className='flex justify-end gap-2'>
          <Toggle onClick={() => toggle('showPinned')}>
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
          <Toggle onClick={() => toggle('sortAscending')}>
            {sortAscending ? (
              <ArrowUp10 size={22} />
            ) : (
              <ArrowDown10 size={22} />
            )}
          </Toggle>
        </div>
      </section>
      <MonthlyRevenueTable
        data={sorting}
        loading={loading}
        showEditSection={showEditSection}
      />
    </main>
  )
}

export default MonthlyRevenue
