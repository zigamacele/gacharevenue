import { Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

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
import { cn } from '@/lib/shadcn/utils'

import ReviewSelectors from '@/components/AddReview/ReviewSelectors.tsx'
import StarRating from '@/components/AddReview/StarRating.tsx'
import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'
import Tooltip from '@/components/Tooltip.tsx'

import useReviewStore from '@/stores/review-store'
import userStore from '@/stores/user-store.ts'

import supabase from '@/config/supabase.ts'
import { validateReviewPayload } from '@/utils/validation.ts'

import { QueryOutput, ReviewPayload } from '@/types/supabase.ts'

interface DialogProps {
  triggerClassName?: string
  game: QueryOutput
}
const AddReview: React.FC<DialogProps> = ({ triggerClassName, game }) => {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviewPayload, setReviewPayload] = useState<ReviewPayload>({
    game_id: game.id,
    rating: 0,
    status: '',
    investment: '',
    text: '',
  })
  const { user } = userStore()
  const { reviews } = useReviewStore()
  const userReview = useMemo(
    () => reviews.find((review) => review.user_id === user?.id),
    [reviews, user],
  )
  const { toast } = useToast()
  const isSubmitDisabled =
    !reviewPayload.rating ||
    !reviewPayload.status ||
    !reviewPayload.investment ||
    !user

  const resetReviewPayload = () => {
    setReviewPayload({
      game_id: game.id,
      rating: 0,
      status: '',
      investment: '',
      text: '',
    })
  }

  useEffect(() => {
    resetReviewPayload()
  }, [open])

  const insertReview = async () => {
    if (isSubmitDisabled) return

    const validation = await validateReviewPayload(reviewPayload, user)
    if (validation.status) {
      setIsSubmitting(true)
      const { error } = await supabase
        .from('reviews')
        .insert({
          ...reviewPayload,
          user_id: user.id,
        })
        .select()

      if (error) {
        toast({
          title: 'Error Occurred',
          description: error.message,
        })

        setIsSubmitting(false)
        return
      }

      toast({
        title: 'Review Submitted',
        description: 'Thank you for your feedback!',
      })
      resetReviewPayload()
      setIsSubmitting(false)
      setOpen(false)
    } else {
      toast({
        title: 'Validation Error',
        description: validation.error,
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
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
          <div className='flex h-8 w-[3em] items-center justify-center gap-2 rounded border border-neutral-800 bg-neutral-900 text-center text-sm transition-all hover:bg-neutral-800'>
            <Star
              className={cn(
                'h-4 w-4 text-amber-400 transition-all',
                !!userReview && 'fill-amber-400',
              )}
            />
          </div>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='z-50 mt-4'>
          <DialogTitle>{game.en_name}</DialogTitle>
          <div className='flex justify-center gap-4 opacity-60 sm:justify-normal'>
            <span className='hidden sm:block'>
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
        <Button
          disabled={isSubmitDisabled || isSubmitting}
          onClick={() => void insertReview()}
          className='bg-neutral-800'
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddReview
