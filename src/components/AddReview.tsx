import { Star } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/lib/shadcn/ui/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog.tsx'
import { Textarea } from '@/lib/shadcn/ui/textarea.tsx'
import { useToast } from '@/lib/shadcn/ui/use-toast.ts'

import ReviewSelectors from '@/components/AddReview/ReviewSelectors.tsx'
import StarRating from '@/components/AddReview/StarRating.tsx'
import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'
import Tooltip from '@/components/Tooltip.tsx'

import userStore from '@/stores/user-store.ts'

import { QueryOutput, ReviewPayload } from '@/types/supabase.ts'

interface DialogProps {
  triggerClassName?: string
  game: QueryOutput
}
const AddReview: React.FC<DialogProps> = ({ triggerClassName, game }) => {
  const [reviewPayload, setReviewPayload] = useState<ReviewPayload>({
    game_id: game.id,
    rating: 0,
    status: '',
    investment: '',
    text: '',
  })
  const { user } = userStore()
  const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger
        className={triggerClassName}
        onClick={() => {
          if (!user) {
            toast({
              title: 'You are not logged in',
              description:
                ' To prevent spam, only authenticated users can leave a review.',
            })
          }
        }}
      >
        <Tooltip text='Leave Review'>
          <div className='div-shrink flex h-8 w-24 items-center justify-center gap-2 rounded border border-neutral-800 bg-neutral-900 text-center text-sm transition-all hover:bg-neutral-800'>
            <Star className='h-4 w-4 text-amber-400 opacity-80' />
            <p className='to-hidden'>Review</p>
          </div>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='z-50 mt-4'>
          <DialogTitle>{game.en_name}</DialogTitle>
          <div className='flex justify-center gap-4 opacity-60 sm:justify-normal'>
            <span>
              <p className='text-xs opacity-60'>Developer</p>
              <p className='max-w-[8em] truncate'>{game.developer}</p>
            </span>
            <span>
              <p className='text-xs opacity-60'>Publisher</p>
              <p className='max-w-[8em] truncate'>{game.publisher}</p>
            </span>
            <span>
              <p className='text-xs opacity-60'>Release Date</p>
              <p className='max-w-[8em] truncate sm:max-w-full'>
                {game.release_date}
              </p>
            </span>
          </div>
        </DialogHeader>
        <RegionTooltip gameRegion={game.region} className=' left-2 top-2' />
        <span className='absolute top-0 z-10 h-24 w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent md:rounded-t' />
        <ImageComponent
          height={192}
          width={350}
          src={game.background}
          blurhash={game.blurhash}
          alt={game.name}
          className='absolute top-0 h-24 w-full object-cover opacity-60 md:rounded-t'
        />
        <span className='flex flex-col justify-between gap-2 sm:flex-row sm:gap-0'>
          <StarRating
            reviewPayload={reviewPayload}
            setReviewPayload={setReviewPayload}
          />
          <ReviewSelectors setReviewPayload={setReviewPayload} />
        </span>
        <div className='relative'>
          <Textarea
            value={reviewPayload.text}
            onChange={(event) =>
              setReviewPayload((currentState) => {
                if (event.target.value.length > 500) return currentState
                return { ...currentState, text: event.target.value }
              })
            }
            className='bg-neutral-800'
            placeholder='Share your thoughts, opinions and critiques (Optional)'
          />
          <span className='absolute bottom-1 right-2 text-sm opacity-40'>
            {reviewPayload.text.length}/500
          </span>
        </div>
        <Button disabled={!reviewPayload.rating} className='bg-neutral-800'>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddReview
