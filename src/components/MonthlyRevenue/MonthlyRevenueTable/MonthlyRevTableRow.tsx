import { TableCell, TableRow } from '@/lib/shadcn/ui/table'
import { cn } from '@/lib/shadcn/utils'

import TrendArrow from '@/components/MonthlyRevenue/MonthlyRevenueTable/TrendArrow'
import Tooltip from '@/components/Tooltip'

import useBackgroundStore from '@/stores/background-store'
import useMonthlyTableControls from '@/stores/monthly-table-controls'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { getRegion } from '@/utils/region'

import EditSection from './EditSection'
import HoverCard from './HoverCard'

import { QueryOutput } from '@/types/supabase'

interface MonthlyRevTableRowProps {
  data: QueryOutput
  index: number
  isMobile: boolean
  previousMonth: { [key: string]: number }
  showEditSection: boolean
}

const MonthlyRevTableRow: React.FC<MonthlyRevTableRowProps> = ({
  data,
  index,
  isMobile,
  previousMonth,
  showEditSection,
}) => {
  const region = getRegion(data['region'])
  const currentRevenue = data[CURRENT_TABLE]?.totalRevenue ?? 0
  const previousRevenue = data[PREVIOUS_TABLE]?.totalRevenue ?? 0
  const { removed, showPinned } = useMonthlyTableControls()

  const isSectionRemoved = removed.includes(data.id) && !showPinned

  const { setBackground } = useBackgroundStore()

  return (
    <TableRow
      className={cn(isSectionRemoved && 'opacity-60')}
      onMouseEnter={() => setBackground(data.background)}
    >
      <TableCell className='flex w-14 items-center justify-center gap-1'>
        {showEditSection ? (
          <EditSection data={data} />
        ) : (
          <TrendArrow change={(previousMonth[data.id] ?? 0) - index} />
        )}
      </TableCell>
      {!isMobile && (
        <TableCell className=' border-l border-r border-neutral-800 p-0'>
          <img
            src={data.background}
            alt={data.en_name}
            className='flex h-8 w-60 items-center object-cover'
          />
        </TableCell>
      )}
      <TableCell className={cn('text-center', region.color)}>
        <Tooltip text={region.text}>{region.emoji}</Tooltip>
      </TableCell>
      <TableCell className='text-xs sm:text-sm'>
        <HoverCard data={data} />
      </TableCell>
      <TableCell className='text-right text-neutral-200/80'>
        {!isMobile
          ? formatCurrency(previousRevenue)
          : formatCurrencyCompact(previousRevenue)}
      </TableCell>
      <TableCell
        className={cn(
          'border-l border-neutral-800 bg-red-600 text-right',
          currentRevenue >= previousRevenue && 'bg-green-600',
        )}
      >
        {!isMobile
          ? formatCurrency(currentRevenue)
          : formatCurrencyCompact(currentRevenue)}
      </TableCell>
    </TableRow>
  )
}

export default MonthlyRevTableRow
