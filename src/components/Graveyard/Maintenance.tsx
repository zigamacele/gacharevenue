import MotionInView from '@/lib/framer-motion/MotionInView.tsx'

import GameBanner from '@/components/GameBanner.tsx'

import useGraveyardStore from '@/stores/graveyard-store.ts'

import { getRegion } from '@/utils/region.ts'

const Maintenance: React.FC = () => {
  const { maintenance } = useGraveyardStore()
  return (
    <>
      {maintenance.length > 0 && (
        <MotionInView styles='w-[95vw] rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 sm:w-[70vw]'>
          {maintenance.map(({ id, games }) => (
            <GameBanner
              key={id}
              game={games}
              y={0}
              glowingText='MAINTENANCE'
              glowingStyle={getRegion(games.region).textColor}
              disabled
            />
          ))}
        </MotionInView>
      )}
    </>
  )
}

export default Maintenance
