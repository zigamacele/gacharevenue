import useSupabaseStore from '@/stores/supabase-store.ts'

import { formatDate } from '@/utils/timeDate.ts'

const LastUpdated: React.FC = () => {
  const { lastUpdated } = useSupabaseStore()
  return (
    <section className='slide-from-bottom fixed bottom-3 right-3 z-30 hidden gap-2 rounded border border-neutral-700/60 bg-neutral-900/80 px-4 py-1 xl:flex'>
      <span>Last updated:</span>
      <span className='opacity-60'>{formatDate(lastUpdated)}</span>
    </section>
  )
}

export default LastUpdated
