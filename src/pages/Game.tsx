import useSupabaseStore from '@/stores/supabase-store'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Separator } from '@/lib/shadcn/ui/separator'

import GameBody from '@/components/Game/GameBody'
import GameHeader from '@/components/Game/GameHeader'
import MotionInView from '@/lib/framer-motion/MotionInView'
import useBackgroundStore from '@/stores/background-store'
import { useErrorBoundary } from 'react-error-boundary'

const Game: React.FC = () => {
  const { id } = useParams()
  const { setBackground } = useBackgroundStore()
  const { showBoundary } = useErrorBoundary()

  const { storage, loading, tables } = useSupabaseStore()

  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  useEffect(() => {
    if (currentGame) {
      setBackground(currentGame.background)
    } else {
      showBoundary('Game not found')
    }
  }, [currentGame])

  return (
    <MotionInView styles='mt-4 flex justify-center'>
      {!loading && currentGame && (
        <div className='flex w-screen flex-col gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-3 sm:w-[40em]'>
          <GameHeader currentGame={currentGame} />
          <Separator className='mb-1 w-full opacity-40' />
          <GameBody currentGame={currentGame} tables={tables} />
        </div>
      )}
    </MotionInView>
  )
}

export default Game
