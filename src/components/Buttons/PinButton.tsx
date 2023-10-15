import { Pin, PinOff } from 'lucide-react'

import Tooltip from '@/components/Tooltip.tsx'

import useRevenueTableControls from '@/stores/revenue-table-controls.ts'

import { QueryOutput } from '@/types/supabase.ts'

interface PinButtonProps {
  data: QueryOutput
  iconSize: number
}

const PinButton: React.FC<PinButtonProps> = ({ data, iconSize }) => {
  const { pinned, setState } = useRevenueTableControls()
  return (
    <div
      onClick={() => {
        setState('pinned', data.id)
      }}
    >
      <Tooltip text={!pinned.includes(data.id) ? 'Pin' : 'Unpin'}>
        {pinned.includes(data.id) ? (
          <PinOff
            size={iconSize}
            className='cursor-pointer opacity-40 hover:opacity-20'
          />
        ) : (
          <Pin size={iconSize} className='cursor-pointer hover:opacity-60' />
        )}
      </Tooltip>
    </div>
  )
}

export default PinButton
