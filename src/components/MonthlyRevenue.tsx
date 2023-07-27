import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'
import MonthlyRevenueTable from './MonthlyRevenue/MonthlyRevenueTable'

import useSelectedSections from '@/hooks/useSelectedSections'
import {
  ArrowDown10,
  ArrowUp10,
  ClipboardEdit,
  Pin,
  PinOff,
} from 'lucide-react'
import { useState } from 'react'
import Toggle from './MonthlyRevenue/Toggle'

const MonthlyRevenue: React.FC = () => {
  const { selected, setSelected } = useSelectedSections()
  const [sortingToggle, setSortingToggle] = useState(false)
  const [showPinned, setPinned] = useState(false)
  const [showEditSection, setEditSection] = useState(false)

  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: sortingToggle },
  })

  const filtered = data.filter((game) => {
    const gameId = String(game.id)
    const isPinned = selected.pinned.includes(gameId)
    const isRemoved = selected.removed.includes(gameId)

    if (showPinned && isPinned) {
      return true
    }

    if (isRemoved && !showEditSection) {
      return false
    }

    return showPinned ? false : true
  })

  const sorting = [...filtered].sort((a, b) => {
    if (sortingToggle) {
      return a.totalRevenue - b.totalRevenue
    }

    return b.totalRevenue - a.totalRevenue
  })

  return (
    <main className='my-4 flex flex-col gap-2'>
      <section className='flex justify-between'>
        <Toggle onClick={setEditSection}>
          <ClipboardEdit size={20} />
        </Toggle>
        <div className='flex justify-end gap-2'>
          <Toggle onClick={setPinned}>
            {showPinned ? <Pin size={18} /> : <PinOff size={18} />}
          </Toggle>
          <Toggle onClick={setSortingToggle}>
            {sortingToggle ? (
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
        selected={selected}
        setSelected={setSelected}
      />
    </main>
  )
}

export default MonthlyRevenue
