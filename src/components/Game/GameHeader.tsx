import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import { Separator } from '@/lib/shadcn/ui/separator'
import { QueryOutput } from '@/types/supabase'
import MonthlyStatistics from './GameHeader/MonthlyStatistics'
import CoverImage from './GameHeader/CoverImage'
import ReleaseDate from '@/layouts/ReleaseDate'

interface GameHeaderProps {
  currentGame: QueryOutput
}

const GameHeader: React.FC<GameHeaderProps> = ({ currentGame }) => {
  return (
    <div className='rounded-lg border border-neutral-700 bg-neutral-900 p-3'>
      <CoverImage currentGame={currentGame} />
      <div className='my-2 flex justify-between'>
        <div className='flex gap-4'>
          <img
            src={currentGame.icon}
            alt={currentGame.en_name}
            className='h-24 w-24 rounded-lg border border-neutral-700 object-cover'
          />
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <span className='text-xl font-semibold'>{currentGame.name}</span>
              <span className='text-sm font-light opacity-40'>
                {currentGame.name !== currentGame.en_name &&
                  currentGame.en_name}
              </span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-light opacity-40'>
                {currentGame.publisher}
              </span>
              <ReleaseDate
                releaseDate={currentGame.release_date}
                className='truncate text-sm'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 text-right text-sm'>
          <span className='text-xs'>{currentGame.region}</span>
          <div className='flex items-center gap-4 '>
            <MonthlyStatistics
              currentGame={currentGame}
              table={PREVIOUS_TABLE}
            />
            <Separator orientation='vertical' className='h-16 opacity-40' />
            <MonthlyStatistics
              currentGame={currentGame}
              table={CURRENT_TABLE}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameHeader
