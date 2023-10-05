import { useNavigate } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'
import { Separator } from '@/lib/shadcn/ui/separator.tsx'

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'

import { CURRENT_TABLE } from '@/constants/tables.ts'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency.ts'

import { QueryOutput } from '@/types/supabase.ts'

type OverviewCardProps = {
  game?: QueryOutput
}

const NewRelease: React.FC<OverviewCardProps> = ({ game }) => {
  const navigate = useNavigate()

  return (
    <MotionInView
      y={100}
      duration={0.8}
      delay={0.4}
      styles='flex h-16 xl:w-full flex-col group w-80 justify-between group hover:border-neutral-700 rounded-lg bg-neutral-900 relative border cursor-pointer border-neutral-800'
      onClick={() => navigate(`/game/${game?.id}`)}
    >
      <span className='absolute z-10 h-full w-full rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent'></span>
      <img
        src={game?.background}
        alt={game?.name}
        className='absolute h-full w-full rounded-lg object-cover opacity-60 transition-opacity group-hover:opacity-100'
      />
      <div className='z-50 ml-2 mr-4 mt-2.5 flex items-center gap-2'>
        <div className='flex h-10 w-12 items-center justify-center rounded-md border border-neutral-700 bg-neutral-950 text-2xl xl:w-10'>
          <img
            src={game?.icon}
            alt={game?.name}
            className='h-7 w-7 rounded transition-all group-hover:scale-125'
          />
          <RegionTooltip gameRegion={game?.region} className='right-2 top-1' />
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className='flex flex-col'>
            <div className='flex items-center gap-3'>
              <p className='w-48 truncate font-bold xl:w-full'>
                {game?.en_name}
              </p>
              <span className='font-italic hidden animate-pulse font-semibold italic text-red-600 xl:block'>
                NEW
              </span>
            </div>
            <div className='flex items-center gap-2 text-sm opacity-60'>
              <p className='max-w-[6em] truncate xl:w-full'>
                {game?.publisher}
              </p>
              <Separator orientation='vertical' className='h-3' />
              <p>{game?.release_date}</p>
            </div>
          </span>
          <div className='mr-8 hidden items-center gap-4 xl:flex'>
            <div className='flex flex-col'>
              <p className='text-right text-sm font-light opacity-60'>
                Downloads
              </p>
              <p className='text-right'>
                {formatCurrencyCompact(
                  game && game[CURRENT_TABLE]?.totalDownloads,
                )}
              </p>
            </div>
            <div>
              <p className='text-right text-sm font-light opacity-60'>
                Revenue
              </p>
              <p className='text-right'>
                {formatCurrency(game && game[CURRENT_TABLE]?.totalRevenue)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionInView>
  )
}

export default NewRelease
