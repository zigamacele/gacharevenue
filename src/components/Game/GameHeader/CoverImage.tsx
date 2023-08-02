import PinButton from '@/layouts/Buttons/PinButton'
import RemoveButton from '@/layouts/Buttons/RemoveButton'
import { QueryOutput } from '@/types/supabase'

interface CoverImageProps {
  currentGame: QueryOutput
}

const CoverImage: React.FC<CoverImageProps> = ({ currentGame }) => {
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
    </div>
  )
}

export default CoverImage
