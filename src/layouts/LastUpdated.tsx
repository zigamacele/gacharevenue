import Tooltip from '@/components/Tooltip.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'

import { formatDate } from '@/utils/timeDate.ts'

const LastUpdated: React.FC = () => {
  const { lastUpdated } = useSupabaseStore()
  return (
    <Tooltip
      text='Last time database was updated'
      className='slide-from-bottom fixed bottom-3 right-3 z-30 hidden items-center gap-2 rounded border border-neutral-700/60 bg-neutral-900/80 px-2.5 py-1 text-sm xl:flex'
    >
      <p>Last updated:</p>
      <p className='font-thin opacity-60'>{formatDate(lastUpdated)}</p>
    </Tooltip>
  )
}

export default LastUpdated
