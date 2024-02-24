import { PanelBottom, PanelRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/shadcn/utils'

import AddReview from '@/components/AddReview.tsx'
import BackButton from '@/components/Buttons/BackButton.tsx'
import PinButton from '@/components/Buttons/PinButton'
import RemoveButton from '@/components/Buttons/RemoveButton'
import ImageComponent from '@/components/ImageComponent.tsx'
import Rating from '@/components/Rating.tsx'
import Tooltip from '@/components/Tooltip'

import RegionSelector from './CoverImage/RegionSelector'

import { QueryOutput } from '@/types/supabase'

interface CoverImageProps {
  currentGame: QueryOutput
  showAdvancedView: boolean
  setShowAdvancedView: (value: boolean) => void
}

const CoverImage: React.FC<CoverImageProps> = ({
  currentGame,
  showAdvancedView,
  setShowAdvancedView,
}) => {
  return (
    <div className='relative'>
      <ImageComponent
        height={160}
        width={350}
        src={currentGame.background}
        blurhash={currentGame.blurhash}
        alt={currentGame.en_name}
        className='h-40 w-full rounded-t-md border border-neutral-700 object-cover'
      />
      <BackButton />
      <Rating className='absolute bottom-1 left-1 z-40' />
      <AddReview
        triggerClassName='absolute left-[3.15em] top-1 z-40'
        game={currentGame}
      />
      <RegionSelector id={currentGame.id} region={currentGame.region} />
      <div className='absolute right-0 top-10 flex w-24 items-center justify-end gap-2 bg-gradient-to-r from-transparent via-neutral-900/60 to-neutral-900 py-1.5 pr-2'>
        <PinButton data={currentGame} iconSize={20} />
        <RemoveButton data={currentGame} iconSize={20} />
      </div>
      <div className='absolute right-0 top-20 flex w-24 items-center justify-end gap-2 bg-gradient-to-r from-transparent via-neutral-900/60 to-neutral-900 py-1.5 pr-2'>
        <Tooltip text='Advanced View'>
          <PanelBottom
            size={20}
            onClick={() => setShowAdvancedView(true)}
            className={cn('opacity-60', showAdvancedView && 'opacity-100')}
          />
        </Tooltip>
        <Tooltip text='Simple View'>
          <PanelRight
            size={20}
            onClick={() => setShowAdvancedView(false)}
            className={cn('opacity-60', !showAdvancedView && 'opacity-100')}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default CoverImage
