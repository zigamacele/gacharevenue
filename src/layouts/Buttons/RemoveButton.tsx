import Tooltip from '@/components/Tooltip'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import { QueryOutput } from '@/types/supabase'
import { CheckCircle2, XCircle } from 'lucide-react'

interface RemoveButtonProps {
  data: QueryOutput
  iconSize: number
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ data, iconSize }) => {
  const { removed, setState } = useMonthlyTableControls()

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
