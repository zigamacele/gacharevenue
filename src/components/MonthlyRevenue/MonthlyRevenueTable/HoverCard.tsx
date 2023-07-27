import { HoverCardContent, HoverCardTrigger } from '@/lib/shadcn/ui/hover-card'
import { QueryOutput } from '@/types/supabase'
import { CalendarDaysIcon } from 'lucide-react'

interface HoverOverProps {
  data: QueryOutput
}

const HoverCard: React.FC<HoverOverProps> = ({ data }) => {
  return (
    <>
      <HoverCardContent className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <img
            src={data.game?.icon ?? ''}
            className='h-20 w-20 rounded border border-neutral-600 object-cover'
          />
          <div className='items-between flex flex-col justify-between'>
            <div className='flex flex-col gap-0.5'>
              <span>{data.game?.en_name}</span>
              <span className='text-xs font-light opacity-80'>
                {data.game?.publisher}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarDaysIcon size={16} />
              <span className='truncate text-xs font-light'>
                {data.game?.release_date}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
      <HoverCardTrigger className='cursor-pointer'>
        {data.game?.['en_name']}
      </HoverCardTrigger>
    </>
  )
}

export default HoverCard
