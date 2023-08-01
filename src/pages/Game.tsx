import { CURRENT_TABLE, PREVIOUS_TABLE } from '@/constants/tables'
import PinButton from '@/layouts/Buttons/PinButton'
import RemoveButton from '@/layouts/Buttons/RemoveButton'
import { Separator } from '@/lib/shadcn/ui/separator'
import useSupabaseStore from '@/stores/supabase-store'
import { formatCurrency, formatCurrencyCompact } from '@/utils/currency'
import { humanizeTable } from '@/utils/timeDate'
import { CalendarDaysIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Download } from 'lucide-react'

const Game: React.FC = () => {
  const { id } = useParams()

  const { storage, loading } = useSupabaseStore()

  const currentGame = storage.find((game) => game.id === Number(id))

  return (
    <main className='mt-4 flex flex-col items-center'>
      {!loading && currentGame && (
        <div className='rounded-lg border border-neutral-700 bg-neutral-900 p-3'>
          <div className='relative'>
            <img
              src={currentGame.background}
              alt={currentGame.en_name}
              className='h-40 w-[40em] rounded-t-md object-cover'
            />
            <div className='absolute top-0 h-full w-full rounded-t-md bg-gradient-to-t from-neutral-900 to-transparent opacity-100'></div>
            <div className='absolute right-0 top-4 flex w-24 items-center justify-end gap-2 bg-gradient-to-r from-transparent via-neutral-900/60 to-neutral-900 pr-2 pt-2'>
              <PinButton data={currentGame} iconSize={20} />
              <RemoveButton data={currentGame} iconSize={20} />
            </div>
          </div>
          <div className='my-2 flex justify-between'>
            <div className='flex gap-4'>
              <img
                src={currentGame.icon}
                alt={currentGame.en_name}
                className='h-24 w-24 rounded-lg border border-neutral-700 object-cover'
              />
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold'>
                    {currentGame.name}
                  </span>
                  <span className='text-sm font-light opacity-40'>
                    {currentGame.name !== currentGame.en_name &&
                      currentGame.en_name}
                  </span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='font-light opacity-40'>
                    {currentGame.publisher}
                  </span>

                  <div className='flex items-center gap-2'>
                    <CalendarDaysIcon size={16} />
                    <span className='truncate text-sm'>
                      {currentGame.release_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 text-right text-sm'>
              <span className='text-xs'>{currentGame.region}</span>
              <div className='flex items-center gap-4 '>
                <div className='flex flex-col'>
                  <span className='mb-0.5 whitespace-nowrap opacity-40'>
                    {humanizeTable(PREVIOUS_TABLE)}
                  </span>
                  <div className='flex items-center justify-end gap-1'>
                    <Download width={14} className='opacity-60' />
                    <span>
                      {formatCurrencyCompact(
                        currentGame[PREVIOUS_TABLE]?.totalDownloads,
                      )}
                    </span>
                  </div>
                  <span>
                    {formatCurrency(currentGame[PREVIOUS_TABLE]?.totalRevenue)}
                  </span>
                </div>
                <Separator orientation='vertical' className='h-16 opacity-40' />
                <div className='flex flex-col'>
                  <span className='mb-0.5 whitespace-nowrap opacity-40'>
                    {humanizeTable(CURRENT_TABLE)}
                  </span>
                  <div className='flex items-center justify-end gap-1'>
                    <Download width={14} className='opacity-60' />
                    <span>
                      {formatCurrencyCompact(
                        currentGame[CURRENT_TABLE]?.totalDownloads,
                      )}
                    </span>
                  </div>
                  <span>
                    {formatCurrency(currentGame[CURRENT_TABLE]?.totalRevenue)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Game
