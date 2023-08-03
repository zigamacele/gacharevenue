import useSupabaseStore from '@/stores/supabase-store'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Separator } from '@/lib/shadcn/ui/separator'

import GameHeader from '@/components/Game/GameHeader'
import GameBody from '@/components/Game/GameBody'

const Game: React.FC = () => {
  const { id } = useParams()

  const { storage, loading, tables } = useSupabaseStore()

  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  return (
    <main className='mt-4 flex justify-center'>
      {!loading && currentGame && (
        <div className='flex w-screen flex-col gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-3 sm:w-[40em]'>
          <GameHeader currentGame={currentGame} />
          <Separator className='mb-1 w-full opacity-40' />
          <GameBody currentGame={currentGame} tables={tables} />
        </div>
      )}
    </main>
  )
}

export default Game
