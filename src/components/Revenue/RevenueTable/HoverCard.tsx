import { BookCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import {
  HoverCard as HoverCardComp,
  HoverCardContent,
  HoverCardTrigger,
} from '@/lib/shadcn/ui/hover-card'

import ImageComponent from '@/components/ImageComponent.tsx'
import ReleaseDate from '@/components/ReleaseDate.tsx'

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
        <p className='w-20 truncate underline-offset-4 hover:underline hover:shadow-sm sm:w-[17.5em]'>
          {data.en_name}
        </p>
      </HoverCardTrigger>
      <HoverCardContent className='flex gap-2'>
        <ImageComponent
          width={80}
          height={80}
          src={data.icon}
          alt={data.name}
          blurhash={data.blurhash}
          className='h-20 w-20 rounded border border-neutral-600 object-cover'
        />
        <div className='items-between flex flex-col justify-between font-semibold'>
          <p className='line-clamp-2'>{data.en_name}</p>
          <div className='flex flex-col gap-1'>
            <span className='flex items-center gap-2'>
              <BookCheck size={16} />
              <p className='w-24 truncate text-xs font-light opacity-80'>
                {data.publisher}
              </p>
            </span>
            <ReleaseDate
              releaseDate={data.release_date}
              className='truncate text-xs font-light'
            />
          </div>
        </div>
      </HoverCardContent>
    </HoverCardComp>
  )
}

export default HoverCard
