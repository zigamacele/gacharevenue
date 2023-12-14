import { useNavigate } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView.tsx'
import { Separator } from '@/lib/shadcn/ui/separator.tsx'
import { Skeleton } from '@/lib/shadcn/ui/skeleton.tsx'
import { cn } from '@/lib/shadcn/utils.ts'

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'

import { CURRENT_TABLE } from '@/constants/tables.ts'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency.ts'

import { QueryOutput } from '@/types/supabase.ts'

type OverviewCardProps = {
  game?: QueryOutput
  y?: number
  glowingText?: string
  glowingStyle?: string
  disabled?: boolean
}

const GameBanner: React.FC<OverviewCardProps> = ({
  game,
  y = 100,
  glowingText = 'NEW',
  glowingStyle = 'text-red-600 italic',
  disabled,
}) => {
  const navigate = useNavigate()
  const isLoaded = !!game

  if (!game?.[CURRENT_TABLE]?.totalRevenue) return null

  return (
    <MotionInView
      y={y}
      duration={0.8}
      delay={0.4}
      styles={cn(
        'group relative flex h-16 w-full flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700',
        !disabled && 'cursor-pointer',
      )}
      onClick={!disabled ? () => navigate(`/game/${game.id}`) : undefined}
    >
      <span className='absolute z-10 h-full w-full rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent' />
      <ImageComponent
        blurhash={game.blurhash}
        src={game.background}
        alt={game.name}
        height={64}
        width={128}
        className='absolute h-full w-full rounded-lg object-cover opacity-60 transition-opacity group-hover:opacity-100'
      />
      <div className='z-50 ml-2 mr-4 mt-2.5 flex items-center gap-2'>
        <div className='flex h-10 w-12 items-center justify-center rounded-md border border-neutral-700 bg-neutral-950 text-2xl xl:w-10'>
          <ImageComponent
            height={28}
            width={28}
            src={game.icon}
            alt={game.name}
            blurhash={game.blurhash}
            className='h-7 w-7 rounded transition-all group-hover:scale-125'
          />
          <RegionTooltip
            gameRegion={game.region}
            className='right-1.5 top-1.5'
          />
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className='flex flex-col'>
            <div className='flex items-center gap-3'>
              {isLoaded ? (
                <p className='max-w-[9em] truncate font-bold xl:max-w-sm'>
                  {game.en_name}
                </p>
              ) : (
                <Skeleton className='h-4 w-32' />
              )}
              <span
                className={cn(
                  'font-italic animate-pulse font-semibold',
                  glowingStyle,
                )}
              >
                {glowingText}
              </span>
            </div>

            <div className='flex items-center gap-2 text-sm opacity-60'>
              {isLoaded ? (
                <p className='max-w-[6em] truncate xl:w-full'>
                  {game.publisher}
                </p>
              ) : (
                <Skeleton className='h-4 w-10 bg-neutral-500/60' />
              )}
              <Separator orientation='vertical' className='h-3' />
              {isLoaded ? (
                <p className='whitespace-nowrap'>{game.release_date}</p>
              ) : (
                <Skeleton className='h-4 w-10 bg-neutral-500/60' />
              )}
            </div>
          </span>
          <div className='mr-8 hidden items-center gap-4 xl:flex'>
            {game[CURRENT_TABLE]?.totalDownloads && (
              <div className='flex flex-col'>
                <p className='text-right text-sm font-light opacity-60'>
                  Downloads
                </p>
                {isLoaded ? (
                  <p className='text-right'>
                    {formatCurrencyCompact(game[CURRENT_TABLE]?.totalDownloads)}
                  </p>
                ) : (
                  <Skeleton className='h-4 w-24' />
                )}
              </div>
            )}
            <div>
              <p className='text-right text-sm font-light opacity-60'>
                Revenue
              </p>
              {isLoaded ? (
                <p className='text-right'>
                  {formatCurrency(game[CURRENT_TABLE]?.totalRevenue)}
                </p>
              ) : (
                <Skeleton className='h-4 w-24' />
              )}
            </div>
          </div>
        </div>
      </div>
    </MotionInView>
  )
}

export default GameBanner
