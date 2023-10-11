import { useNavigate } from 'react-router-dom'

import {
  HoverCard as HoverCardComp,
  HoverCardContent,
  HoverCardTrigger,
} from '@/lib/shadcn/ui/hover-card'

import ImageComponent from '@/layouts/ImageComponent.tsx'
import ReleaseDate from '@/layouts/ReleaseDate'

import { QueryOutput } from '@/types/supabase'

interface HoverOverProps {
  data: QueryOutput
}

const HoverCard: React.FC<HoverOverProps> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <HoverCardComp>
      <HoverCardTrigger
        className='cursor-pointer hover:opacity-60'
        onClick={() => navigate(`/game/${data.id}`)}
      >
        <div className='w-20 truncate underline-offset-4 hover:underline hover:shadow-sm sm:w-[17.5em]'>
          {data.en_name}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='flex gap-2'>
        <ImageComponent
          src={data.icon}
          alt={data.name}
          height={80}
          width={80}
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
      </HoverCardContent>
    </HoverCardComp>
  )
}

export default HoverCard
