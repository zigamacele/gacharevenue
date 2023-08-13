import { TableBody, TableCell, TableRow } from '@/lib/shadcn/ui/table'
import useSupabaseStore from '@/stores/supabase-store'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { humanizeTable } from '@/utils/timeDate'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const AdvancedViewTableBody = () => {
  const { id } = useParams()
  const { tables, storage } = useSupabaseStore()
  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  return (
    <TableBody>
      {tables.map((table: string) => (
        <TableRow key={table}>
          <TableCell className='whitespace-nowrap'>
            {humanizeTable(table)}
          </TableCell>
          <TableCell className='text-center'>
            {formatCurrencyCompact(currentGame?.[table]?.androidDownloads)}
          </TableCell>
          <TableCell>
            {formatCurrency(currentGame?.[table]?.androidRevenue)}
          </TableCell>
          <TableCell className='text-center'>
            {formatCurrencyCompact(currentGame?.[table]?.iosDownloads)}
          </TableCell>
          <TableCell>
            {formatCurrency(currentGame?.[table]?.iosRevenue)}
          </TableCell>
          <TableCell className='text-center'>
            {formatCurrencyCompact(currentGame?.[table]?.totalDownloads)}
          </TableCell>
          <TableCell>
            {formatCurrency(currentGame?.[table]?.totalRevenue)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default AdvancedViewTableBody
