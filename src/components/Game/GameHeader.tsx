import { Monitor } from 'lucide-react'
import { useState } from 'react'

import { Separator } from '@/lib/shadcn/ui/separator'

import CoverImage from '@/components/Game/GameHeader/CoverImage'
import MonthlyStatistics from '@/components/Game/GameHeader/MonthlyStatistics'
import ImageComponent from '@/components/ImageComponent.tsx'
import ReleaseDate from '@/components/ReleaseDate.tsx'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'

import AdvancedView from './GameHeader/AdvancedView'
import Publisher from '../Publisher'

import { QueryOutput } from '@/types/supabase'

interface GameHeaderProps {
  currentGame: QueryOutput
}

const GameHeader: React.FC<GameHeaderProps> = ({ currentGame }) => {
  const [showAdvancedView, setShowAdvancedView] = useState(false)
  const currentRevenue = currentGame[CURRENT_TABLE]?.totalRevenue
  const previousRevenue = currentGame[PREVIOUS_TABLE]?.totalRevenue

  return (
    <section>
      <CoverImage
        currentGame={currentGame}
        showAdvancedView={showAdvancedView}
        setShowAdvancedView={setShowAdvancedView}
      />
      {currentGame.eos && (
        <div className='eos-pattern mt-2 flex justify-center rounded-b border border-neutral-700/80 py-2 text-lg font-bold uppercase tracking-widest'>
          Game Service Ended
        </div>
      )}
      <div className='my-2 flex justify-between'>
        <div className='flex gap-3'>
          <div className='flex h-24 w-24 rounded-lg border border-neutral-700 bg-neutral-950 group-hover:border-neutral-600'>
            <ImageComponent
              height={96}
              width={96}
              src={currentGame.icon}
              blurhash={currentGame.blurhash}
              alt={currentGame.en_name}
              className='h-24 w-24 rounded-xl object-cover p-1.5 transition-all group-hover:rounded-lg group-hover:p-0.5'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='w-60 truncate text-xl font-semibold sm:w-72'>
                {currentGame.name}
              </span>
              <span className='w-60 truncate text-sm font-light opacity-40 sm:w-72'>
                {currentGame.name !== currentGame.en_name &&
                  currentGame.en_name}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <Publisher publisher={currentGame.publisher} />
              <ReleaseDate releaseDate={currentGame.release_date} />
            </div>
          </div>
        </div>
        <div className='hidden flex-col justify-end gap-3 text-right text-sm sm:flex'>
          {currentGame.pc_client && (
            <div className='flex items-center justify-end gap-2 text-xs'>
              <Monitor size={14} />
              <span className='text-neutral-400'>PC Revenue Not Included</span>
            </div>
          )}
          <div className='flex items-center justify-end gap-4'>
            {previousRevenue && (
              <>
                <MonthlyStatistics
                  currentGame={currentGame}
                  table={PREVIOUS_TABLE}
                />
              </>
            )}
            {previousRevenue && currentRevenue && (
              <Separator orientation='vertical' className='h-16 opacity-40' />
            )}
            {currentRevenue && (
              <MonthlyStatistics
                currentGame={currentGame}
                table={CURRENT_TABLE}
              />
            )}
          </div>
        </div>
      </div>

      {showAdvancedView && <AdvancedView />}
    </section>
  )
}

export default GameHeader
