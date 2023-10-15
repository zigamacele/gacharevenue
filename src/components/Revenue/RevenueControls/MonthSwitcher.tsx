import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

import { cn } from '@/lib/shadcn/utils.ts'

import useSupabaseStore from '@/stores/supabase-store.ts'

import Button from '../../Button.tsx'

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
      <Button
        disabled={isDisabled(previousTable)}
        onClick={() => updateTable(currentTable, false)}
        className={cn('text-opacity-60 hover:text-opacity-100')}
        tooltip='Previous Month'
      >
        <ArrowBigLeft size={20} />
      </Button>
      <Button
        disabled={isDisabled(currentTable)}
        onClick={() => updateTable(currentTable, true)}
        className={cn('text-opacity-60 hover:text-opacity-100')}
        tooltip='Next Month'
      >
        <ArrowBigRight size={20} />
      </Button>
    </div>
  )
}

export default MonthSwitcher
