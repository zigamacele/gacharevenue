import GameHeader from '@/components/Game/GameHeader'
import GameSwitcher from '@/components/Game/GameSwitcher'
import useSupabaseStore from '@/stores/supabase-store'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const Game: React.FC = () => {
  const { id } = useParams()

  const { storage, loading, tables } = useSupabaseStore()

  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  return (
    <main className='mt-4 flex flex-col items-center'>
      {!loading && currentGame && (
        <>
          <GameHeader currentGame={currentGame} />
          <GameSwitcher currentGame={currentGame} tables={tables} />
        </>
      )}
    </main>
  )
}

export default Game
