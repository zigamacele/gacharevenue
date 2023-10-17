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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcn/ui/select.tsx'
import { Textarea } from '@/lib/shadcn/ui/textarea.tsx'

import StarRating from '@/components/AddReview/StarRating.tsx'
import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'
import Tooltip from '@/components/Tooltip.tsx'

import { QueryOutput } from '@/types/supabase.ts'

interface DialogProps {
  triggerClassName?: string
  game: QueryOutput
}
const AddReview: React.FC<DialogProps> = ({ triggerClassName, game }) => {
  const [reviewPayload, setReviewPayload] = useState({
    game_id: game.id,
    rating: 0,
    review: '',
    status: '',
    investment: '',
  })
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
      <DialogContent>
        <DialogHeader className='z-50 mt-4'>
          <DialogTitle>{game.en_name}</DialogTitle>
          <div className='flex gap-4 opacity-60'>
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
              <p>{game.release_date}</p>
            </span>
          </div>
        </DialogHeader>
        <RegionTooltip gameRegion={game.region} className=' left-2 top-2' />
        <span className='absolute top-0 z-10 h-24 w-full bg-gradient-to-t from-neutral-900 via-neutral-950/80 to-transparent md:rounded-t' />
        <ImageComponent
          height={192}
          width={350}
          src={game.background}
          blurhash={game.blurhash}
          alt={game.name}
          className='absolute top-0 h-24 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 md:rounded-t'
        />
        <span className='flex justify-between'>
          <StarRating
            reviewPayload={reviewPayload}
            setReviewPayload={setReviewPayload}
          />
          <div className='flex items-center gap-2'>
            <Select>
              <SelectTrigger className='h-8 w-32 bg-neutral-800'>
                <SelectValue placeholder='Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='playing'>Playing</SelectItem>
                <SelectItem value='dropped'>Dropped</SelectItem>
                <SelectItem value='interested'>Interested</SelectItem>
                <SelectItem value='never'>Never played</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='h-8 w-36 bg-neutral-800'>
                <SelectValue placeholder='Investment' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0'>$0</SelectItem>
                <SelectItem value='<100'>{'< $100'}</SelectItem>
                <SelectItem value='100-500'>$100 - $500</SelectItem>
                <SelectItem value='500-1000'>$500 - $1000</SelectItem>
                <SelectItem value='1000-5000'>$1000 - $5000</SelectItem>
                <SelectItem value='>5000'>{'> $5000'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </span>
        <Textarea
          className='bg-neutral-800'
          placeholder='Your thoughts (Optional)'
        />
        <Button disabled={!reviewPayload.rating} className='bg-neutral-800'>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddReview
