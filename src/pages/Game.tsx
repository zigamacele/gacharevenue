import GameHeader from '@/components/Game/GameHeader'
import useSupabaseStore from '@/stores/supabase-store'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const Game: React.FC = () => {
  const { id } = useParams()

  const { storage, loading } = useSupabaseStore()

  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  return (
    <main className='mt-4 flex flex-col items-center'>
      {!loading && currentGame && (
        <>
          <GameHeader currentGame={currentGame} />
        </>
      )}
    </main>
  )
}

export default Game
