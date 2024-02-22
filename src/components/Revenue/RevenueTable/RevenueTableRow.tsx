import { TableCell, TableRow } from '@/lib/shadcn/ui/table'
import { cn } from '@/lib/shadcn/utils'

import ImageComponent from '@/components/ImageComponent'
import TrendArrow from '@/components/Revenue/RevenueTable/TrendArrow'
import Tooltip from '@/components/Tooltip'

import useBackgroundStore from '@/stores/background-store'
import useRevenueTableControls from '@/stores/revenue-table-controls'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { regionalMultiplier } from '@/utils/globals'
import { getRegion } from '@/utils/region'

import EditSection from './EditSection'
import HoverCard from './HoverCard'

import { QueryOutput } from '@/types/supabase'

interface RevenueTableRowProps {
  data: QueryOutput
  index: number
  isMobile: boolean
  previousMonth: { [key: string]: number }
  showEditSection: boolean
  eosIds: number[]
}

const RevenueTableRow: React.FC<RevenueTableRowProps> = ({
  data,
  index,
  isMobile,
  previousMonth,
  showEditSection,
  eosIds,
}) => {
  const { removed, showPinned, showCombinedRevenue } = useRevenueTableControls()
  const { setBackground } = useBackgroundStore()

  const region = getRegion(data['region'])
  const currentRevenue = showCombinedRevenue
    ? data[CURRENT_TABLE]?.totalRevenue ?? 0
    : regionalMultiplier(data[CURRENT_TABLE]?.totalRevenue, data.region)
  const previousRevenue = showCombinedRevenue
    ? data[PREVIOUS_TABLE]?.totalRevenue ?? 0
    : regionalMultiplier(data[PREVIOUS_TABLE]?.totalRevenue, data.region)

  const isSectionRemoved = removed.includes(data.id) && !showPinned

  const positionChange = () => {
    if (!previousRevenue) {
      if (data['new_release']) {
        return 'new'
      }
      return 0
    }
    return (previousMonth[data.id] ?? 0) - index
  }

  return (
    <TableRow
      className={cn(isSectionRemoved && 'opacity-60')}
      onMouseEnter={() => setBackground(data.background, data.blurhash)}
    >
      <TableCell className='flex w-14 items-center justify-center gap-1'>
        {showEditSection ? (
          <EditSection data={data} />
        ) : (
          <TrendArrow change={positionChange()} />
        )}
      </TableCell>
      {!isMobile && (
        <TableCell className='w-60 border-l border-r border-neutral-800 p-0'>
          <ImageComponent
            src={data.background}
            blurhash={data.blurhash}
            alt={data.name}
            height={32}
            width={240}
            className='flex h-8 w-full items-center object-cover'
          />
        </TableCell>
      )}
      <TableCell className={cn('text-center', region.color)}>
        <Tooltip
          text={region.text}
          className='transition-opacity hover:opacity-60'
        >
          {region.emoji}
        </Tooltip>
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
          eosIds.includes(data.id) &&
            !currentRevenue &&
            'bg-neutral-600 text-center',
        )}
      >
        {eosIds.includes(data.id) && !currentRevenue
          ? '☠️'
          : !isMobile
          ? formatCurrency(currentRevenue)
          : formatCurrencyCompact(currentRevenue)}
      </TableCell>
    </TableRow>
  )
}

export default RevenueTableRow
