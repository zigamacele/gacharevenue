import { useEffect } from 'react'

import useGraveyardStore from '@/stores/graveyard-store.ts'

const Graveyard: React.FC = () => {
  const { getGraveyardData, loading } = useGraveyardStore()
  useEffect(() => {
    void getGraveyardData()
  }, [])
  return <section>{!loading && <div></div>}</section>
}

export default Graveyard
