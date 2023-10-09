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
            <GraveyardDialog key={game.id} game={game}>
              <span>
                <Tombstone game={game} />
              </span>
            </GraveyardDialog>
          )
        })}
    </section>
  )
}

export default EndOfService
