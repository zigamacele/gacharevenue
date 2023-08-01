import ReleaseDate from '@/layouts/ReleaseDate'
import { HoverCardContent, HoverCardTrigger } from '@/lib/shadcn/ui/hover-card'
import { QueryOutput } from '@/types/supabase'
import { Link } from 'react-router-dom'

interface HoverOverProps {
  data: QueryOutput
}

const HoverCard: React.FC<HoverOverProps> = ({ data }) => {
  return (
    <>
      <HoverCardContent className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <img
            src={data.icon}
            className='h-20 w-20 rounded border border-neutral-600 object-cover'
          />
          <div className='items-between flex flex-col justify-between'>
            <div className='flex flex-col gap-0.5'>
              <span>{data.en_name}</span>
              <span className='text-xs font-light opacity-80'>
                {data.publisher}
              </span>
            </div>
            <ReleaseDate
              releaseDate={data.release_date}
              className='truncate text-xs font-light'
            />
          </div>
        </div>
      </HoverCardContent>
      <HoverCardTrigger className='cursor-pointer hover:opacity-60'>
        <Link to={`/game/${data.id}`}>{data.en_name}</Link>
      </HoverCardTrigger>
    </>
  )
}

export default HoverCard
