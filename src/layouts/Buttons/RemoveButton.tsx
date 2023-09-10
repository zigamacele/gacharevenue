import { CheckCircle2, XCircle } from 'lucide-react'

import Tooltip from '@/components/Tooltip'

import useRevenueTableControls from '@/stores/revenue-table-controls'

import { QueryOutput } from '@/types/supabase'

interface RemoveButtonProps {
  data: QueryOutput
  iconSize: number
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ data, iconSize }) => {
  const { removed, setState } = useRevenueTableControls()

  return (
    <div
      onClick={() => {
        setState('removed', data.id)
      }}
    >
      <Tooltip text={!removed.includes(data.id) ? 'Remove' : 'Restore '}>
        {removed.includes(data.id) ? (
          <XCircle
            size={iconSize}
            className='cursor-pointer opacity-40 hover:opacity-20'
          />
        ) : (
          <CheckCircle2
            size={iconSize}
            className='cursor-pointer hover:opacity-60'
          />
        )}
      </Tooltip>
    </div>
  )
}

export default RemoveButton
