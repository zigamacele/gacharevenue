import PinButton from '@/components/Buttons/PinButton'
import RemoveButton from '@/components/Buttons/RemoveButton'

import { QueryOutput } from '@/types/supabase'

interface EditSectionProps {
  data: QueryOutput
}

const EditSection: React.FC<EditSectionProps> = ({ data }) => {
  return (
    <div className='mt-1 flex gap-2'>
      <PinButton data={data} iconSize={15} />
      <RemoveButton data={data} iconSize={15} />
    </div>
  )
}

export default EditSection
