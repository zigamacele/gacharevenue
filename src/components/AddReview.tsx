import { Star } from 'lucide-react'

import { Dialog, DialogTrigger } from '@/lib/shadcn/ui/dialog.tsx'

import Tooltip from '@/components/Tooltip.tsx'

interface DialogProps {
  triggerClassName?: string
  gameId?: number
}
const AddReview: React.FC<DialogProps> = ({ triggerClassName, gameId }) => {
  console.error(gameId)
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>
        <Tooltip text='Leave Review'>
          <div className='div-shrink flex h-8 w-24 items-center justify-center gap-2 rounded border border-neutral-800 bg-neutral-900 text-center text-sm transition-all hover:bg-neutral-800'>
            <Star className='h-4 w-4 text-amber-400 opacity-80' />
            <p className='to-hidden'>Review</p>
          </div>
        </Tooltip>
      </DialogTrigger>
    </Dialog>
  )
}

export default AddReview
