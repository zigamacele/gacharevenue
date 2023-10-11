import Tooltip from '@/components/Tooltip.tsx'

import ImageComponent from '@/layouts/ImageComponent.tsx'
import { formatMonthYear } from '@/utils/timeDate.ts'

import { GraveyardOutput } from '@/types/supabase.ts'

interface TombstoneProps {
  game: GraveyardOutput
}
const Tombstone: React.FC<TombstoneProps> = ({ game }) => {
  const { games, release_date, eos_date } = game
  return (
    <Tooltip text={games.name} key={games.id}>
      <div className='group relative h-52 w-36 rounded-t-full border border-neutral-800 bg-neutral-900 group-hover:border-neutral-700'>
        {/*<RegionTooltip*/}
        {/*  gameRegion={games.region}*/}
        {/*  className=' left-1/2 top-2 -translate-x-1/2'*/}
        {/*/>*/}
        <ImageComponent
          height={64}
          width={64}
          src={games.icon}
          alt={games.name}
          blurhash={games.blurhash}
          className='absolute bottom-16 left-1/2 z-20 h-16 w-16 -translate-x-1/2 rounded border border-neutral-700 bg-neutral-950 object-cover p-1 transition-all group-hover:p-0.5'
        />
        <span className='absolute top-0 z-10 h-full w-full rounded-t-full bg-gradient-to-t from-neutral-900 via-neutral-950/80 to-transparent' />
        <ImageComponent
          height={208}
          width={144}
          alt={games.name}
          src={games.background}
          blurhash={games.blurhash}
          className='absolute top-0 h-full w-full rounded-t-full object-cover opacity-60 transition-opacity group-hover:opacity-100'
        />
        <div className='absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-0.5 whitespace-nowrap text-sm'>
          <p className='max-w-[8em] truncate font-bold'>{games.en_name}</p>
          <div className='flex items-center gap-1.5 text-xs font-light'>
            <p>{formatMonthYear(release_date)}</p>
            <span className='opacity-20'>|</span>
            <p>{formatMonthYear(eos_date)}</p>
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default Tombstone
