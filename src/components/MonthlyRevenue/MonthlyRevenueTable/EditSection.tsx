import Tooltip from '@/components/Tooltip'
import useMonthlyTableControls from '@/stores/monthly-table-controls'
import { QueryOutput } from '@/types/supabase'
import { CheckCircle2, Pin, PinOff, XCircle } from 'lucide-react'

interface EditSectionProps {
  data: QueryOutput
}

const EditSection: React.FC<EditSectionProps> = ({ data }) => {
  const { pinned, removed, setState } = useMonthlyTableControls()

  return (
    <div className='mt-1 flex gap-2'>
      <div
        onClick={() => {
          setState('pinned', data.id)
        }}
      >
        <Tooltip text={!pinned.includes(data.id) ? 'Pin' : 'Unpin'}>
          {pinned.includes(data.id) ? (
            <PinOff
              size={15}
              className='cursor-pointer opacity-40 hover:opacity-20'
            />
          ) : (
            <Pin size={15} className='cursor-pointer hover:opacity-60' />
          )}
        </Tooltip>
      </div>
      <div
        onClick={() => {
          setState('removed', data.id)
        }}
      >
        <Tooltip text={!removed.includes(data.id) ? 'Remove' : 'Restore '}>
          {removed.includes(data.id) ? (
            <XCircle
              size={15}
              className='cursor-pointer opacity-40 hover:opacity-20'
            />
          ) : (
            <CheckCircle2
              size={15}
              className='cursor-pointer hover:opacity-60'
            />
          )}
        </Tooltip>
      </div>
    </div>
  )
}

export default EditSection
