import { Monitor } from 'lucide-react'
import { useState } from 'react'

import { Separator } from '@/lib/shadcn/ui/separator'

import CoverImage from '@/components/Game/GameHeader/CoverImage'
import MonthlyStatistics from '@/components/Game/GameHeader/MonthlyStatistics'

import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import ReleaseDate from '@/layouts/ReleaseDate'

import AdvancedView from './GameHeader/AdvancedView'

import { QueryOutput } from '@/types/supabase'

interface GameHeaderProps {
  currentGame: QueryOutput
}

const GameHeader: React.FC<GameHeaderProps> = ({ currentGame }) => {
  const [showAdvancedView, setShowAdvancedView] = useState(false)

  return (
    <section>
      <CoverImage
        currentGame={currentGame}
        showAdvancedView={showAdvancedView}
        setShowAdvancedView={setShowAdvancedView}
      />
      <div className='my-2 flex justify-between'>
        <div className='flex gap-4'>
          <div className='flex h-24 w-24 rounded-lg border border-neutral-700 bg-neutral-950'>
            <img
              src={currentGame.icon}
              alt={currentGame.en_name}
              className='h-24 w-24 rounded-xl object-cover p-1.5'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='w-60 truncate text-xl font-semibold sm:w-80'>
                {currentGame.name}
              </span>
              <span className='w-60 truncate text-sm font-light opacity-40 sm:w-80'>
                {currentGame.name !== currentGame.en_name &&
                  currentGame.en_name}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm font-light opacity-40'>
                {currentGame.publisher}
              </span>
              <ReleaseDate
                releaseDate={currentGame.release_date}
                className='truncate text-sm'
              />
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
            {currentGame[PREVIOUS_TABLE]?.totalRevenue && (
              <>
                <MonthlyStatistics
                  currentGame={currentGame}
                  table={PREVIOUS_TABLE}
                />
                <Separator orientation='vertical' className='h-16 opacity-40' />
              </>
            )}
            <MonthlyStatistics
              currentGame={currentGame}
              table={CURRENT_TABLE}
            />
          </div>
        </div>
      </div>

      {showAdvancedView && <AdvancedView />}
    </section>
  )
}

export default GameHeader
