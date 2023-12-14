import { useEffect } from 'react'

import EndOfService from '@/components/Graveyard/EndOfService.tsx'
import Maintenance from '@/components/Graveyard/Maintenance.tsx'

import useBackgroundStore from '@/stores/background-store.ts'
import useGraveyardStore from '@/stores/graveyard-store.ts'

const Graveyard: React.FC = () => {
  const { getGraveyardData, graveyardBackground, loading } = useGraveyardStore()
  const { setBackground } = useBackgroundStore()

  useEffect(() => {
    getGraveyardData()
    setBackground(graveyardBackground)
  }, [])
  return (
    <section className='my-2 flex flex-col items-center gap-4'>
      {!loading && (
        <>
          <Maintenance />
          <EndOfService />
        </>
      )}
    </section>
  )
}

export default Graveyard
