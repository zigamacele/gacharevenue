import MotionInView from '@/lib/framer-motion/MotionInView.tsx'

import GraveyardDialog from '@/components/Graveyard/GraveyardDialog.tsx'
import Tombstone from '@/components/Graveyard/Tombstone.tsx'

import useGraveyardStore from '@/stores/graveyard-store.ts'

const EndOfService: React.FC = () => {
  const { eos } = useGraveyardStore()
  return (
    <section className='flex flex-wrap items-center justify-center gap-6'>
      {eos.length > 0 &&
        eos.map((game) => {
          return (
            <MotionInView delay={0.5} key={game.id}>
              <GraveyardDialog game={game}>
                <span>
                  <Tombstone game={game} />
                </span>
              </GraveyardDialog>
            </MotionInView>
          )
        })}
    </section>
  )
}

export default EndOfService
