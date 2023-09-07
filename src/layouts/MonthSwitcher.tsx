import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

import { Button } from '@/lib/shadcn/ui/button'
import { cn } from '@/lib/shadcn/utils'

import Tooltip from '@/components/Tooltip'

import useSupabaseStore from '@/stores/supabase-store'

const MonthSwitcher: React.FC = () => {
  const { setProperty, tables, currentTable, previousTable } =
    useSupabaseStore()

  const updateTable = (table: string, next: boolean) => {
    const tableIndex = tables.indexOf(table)

    const setProperties = (currentIndex: number, previousIndex: number) => {
      setProperty('currentTable', tables[currentIndex] ?? '')
      setProperty('previousTable', tables[previousIndex] ?? '')
    }

    if (next && tableIndex < tables.length - 1) {
      setProperties(tableIndex + 1, tableIndex)
    } else if (!next && tableIndex > 1) {
      setProperties(tableIndex - 1, tableIndex - 2)
    }
  }

  const isDisabled = (table: string) => {
    const tableIndex = tables.indexOf(table)

    if (!tableIndex || tableIndex === tables.length - 1) {
      return true
    }

    return false
  }

  return (
    <div className='flex gap-2'>
      <Tooltip text='Previous Month'>
        <Button
          disabled={isDisabled(previousTable)}
          onClick={() => updateTable(currentTable, false)}
          className={cn('text-opacity-60 hover:text-opacity-100')}
        >
          <ArrowBigLeft width={20} />
        </Button>
      </Tooltip>
      <Tooltip text='Next Month'>
        <Button
          disabled={isDisabled(currentTable)}
          onClick={() => updateTable(currentTable, true)}
          className={cn('text-opacity-60 hover:text-opacity-100')}
        >
          <ArrowBigRight width={20} />
        </Button>
      </Tooltip>
    </div>
  )
}

export default MonthSwitcher
