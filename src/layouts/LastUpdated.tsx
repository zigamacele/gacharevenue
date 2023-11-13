import { CalendarDays } from 'lucide-react'

import Tooltip from '@/components/Tooltip.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'

import { formatDate } from '@/utils/timeDate.ts'

const LastUpdated: React.FC = () => {
  const { lastUpdated } = useSupabaseStore()
  return (
    <Tooltip
      text='Last time database was updated'
      className='slide-from-bottom group fixed bottom-3 right-3 z-30 hidden cursor-pointer items-center gap-2 rounded border border-neutral-700/60 bg-neutral-900/80 px-2.5 py-1 text-sm xl:flex'
    >
      <CalendarDays className='h-3.5 w-3.5 transition-opacity group-hover:opacity-60' />
      <p className='text-sm font-thin opacity-60 transition-opacity group-hover:opacity-40'>
        {formatDate(lastUpdated)}
      </p>
    </Tooltip>
  )
}

export default LastUpdated
