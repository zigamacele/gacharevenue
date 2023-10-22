import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'
import { Separator } from '@/lib/shadcn/ui/separator'

import GameBody from '@/components/Game/GameBody'
import GameHeader from '@/components/Game/GameHeader'

import useBackgroundStore from '@/stores/background-store'
import useReviewStore from '@/stores/review-store.ts'
import useSupabaseStore from '@/stores/supabase-store'

import supabase from '@/config/supabase.ts'
import PageNotFound from '@/layouts/PageNotFound'
import { unsubscribeReviewUpdates } from '@/utils/supabase.ts'

import { ReviewOutput } from '@/types/supabase.ts'

const Game: React.FC = () => {
  const { id } = useParams()
  const { setBackground } = useBackgroundStore()
  const { storage, loading, tables } = useSupabaseStore()
  const { setReviews } = useReviewStore()

  const currentGame = useMemo(
    () => storage.find((game) => game.id === Number(id)),
    [storage, id],
  )

  const getGameReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select()
      .eq('game_id', currentGame?.id)
      .order('created_at', { ascending: false })

    if (data) {
      setReviews(data as ReviewOutput[])
    }
  }

  useEffect(() => {
    if (currentGame) {
      setBackground(currentGame.background, currentGame.blurhash)
    }

    const reviewChanges = supabase
      .channel('reviews')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
        },
        () => {
          void getGameReviews()
        },
      )
      .subscribe()

    void getGameReviews()

    return () => {
      void unsubscribeReviewUpdates(reviewChanges)
    }
  }, [currentGame])

  return (
    <>
      {!loading && currentGame ? (
        <MotionInView styles='my-2 flex justify-center'>
          <div className='group flex w-screen flex-col gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-3 sm:w-[40em]'>
            <GameHeader currentGame={currentGame} />
            <Separator className='mb-1 w-full opacity-40' />
            <GameBody currentGame={currentGame} tables={tables} />
          </div>
        </MotionInView>
      ) : (
        <PageNotFound />
      )}
    </>
  )
}

export default Game
