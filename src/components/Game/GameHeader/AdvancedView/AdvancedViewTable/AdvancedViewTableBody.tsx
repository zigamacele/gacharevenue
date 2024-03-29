import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { TableBody, TableCell, TableRow } from '@/lib/shadcn/ui/table'

import useSupabaseStore from '@/stores/supabase-store'

import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { regionalMultiplier } from '@/utils/globals'
import { humanizeTable } from '@/utils/timeDate'

const AdvancedViewTableBody: React.FC = () => {
  const { id } = useParams()
  const { tables, storage } = useSupabaseStore()
  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  return (
    <TableBody>
      {tables.map((table: string) => {
        if (!currentGame?.[table]?.totalRevenue) {
          return null
        }

        return (
          <TableRow key={table} className='text-center'>
            <TableCell className='whitespace-nowrap opacity-60'>
              {humanizeTable(table)}
            </TableCell>
            <TableCell>
              {formatCurrencyCompact(currentGame[table]?.androidDownloads)}
            </TableCell>
            <TableCell>
              {formatCurrency(currentGame[table]?.androidRevenue)}
            </TableCell>
            <TableCell>
              {formatCurrencyCompact(currentGame[table]?.iosDownloads)}
            </TableCell>
            <TableCell>
              {formatCurrency(currentGame[table]?.iosRevenue)}
            </TableCell>
            <TableCell>
              {formatCurrencyCompact(
                regionalMultiplier(
                  currentGame[table]?.totalDownloads,
                  currentGame.region,
                ),
              )}
            </TableCell>
            <TableCell>
              {formatCurrency(
                regionalMultiplier(
                  currentGame[table]?.totalRevenue,
                  currentGame.region,
                ),
              )}
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default AdvancedViewTableBody
