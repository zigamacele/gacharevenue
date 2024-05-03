import { useNavigate } from 'react-router-dom'

import useSupabaseStore from '@/stores/supabase-store'

import RegionTooltip from './RegionTooltip'

import { GameResponse } from '@/types/supabase'

interface RegionSelectorProps {
  id: number
  region: string
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ id, region }) => {
  const { game } = useSupabaseStore()
  const navigate = useNavigate()

  const relatedRegions = game.filter((game) => Object.values(game).includes(id))

  const relatedRegion = relatedRegions[0] as GameResponse

  return (
    <section className='absolute right-1 top-1 flex gap-1.5'>
      {!!relatedRegions.length && (
        <>
          {Object.entries(relatedRegion).map(([key, value]) => {
            if (id === value || !value || key === 'uuid') return null
            return (
              <RegionTooltip
                key={key}
                gameRegion={key}
                className='static opacity-60 transition-opacity hover:opacity-100'
                onClick={() => navigate(`/game/${value}`, { replace: true })}
              />
            )
          })}
        </>
      )}
      <RegionTooltip gameRegion={region} className='static' />
    </section>
  )
}

export default RegionSelector
