import Tooltip from '@/components/Tooltip'
import PinButton from '@/layouts/Buttons/PinButton'
import RemoveButton from '@/layouts/Buttons/RemoveButton'
import { QueryOutput } from '@/types/supabase'
import { PanelBottom, PanelRight } from 'lucide-react'

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
      <img
        src={currentGame.background}
        alt={currentGame.en_name}
        className='h-40 w-full rounded-t-md object-cover'
      />
      <div className='absolute top-0 h-full w-full rounded-t-md bg-gradient-to-t from-neutral-900 to-transparent opacity-100'></div>
      <div className='absolute right-0 top-4 flex w-24 items-center justify-end gap-2 bg-gradient-to-r from-transparent via-neutral-900/60 to-neutral-900 pr-2 pt-2'>
        <PinButton data={currentGame} iconSize={20} />
        <RemoveButton data={currentGame} iconSize={20} />
      </div>
      <div className='absolute right-0 top-14 flex w-24 items-center justify-end gap-2 bg-gradient-to-r from-transparent via-neutral-900/60 to-neutral-900 py-1.5 pr-2'>
        <Tooltip text='Advanced View'>
          <PanelBottom
            size={20}
            onClick={() => setShowAdvancedView(true)}
            className={`${
              showAdvancedView ? 'opacity-100' : 'opacity-60'
            } cursor-pointer`}
          />
        </Tooltip>
        <Tooltip text='Simple View'>
          <PanelRight
            size={20}
            onClick={() => setShowAdvancedView(false)}
            className={`${
              !showAdvancedView ? 'opacity-100' : 'opacity-60'
            } cursor-pointer`}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default CoverImage
