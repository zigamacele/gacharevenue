import { CircleDollarSign, PlaySquare, Star, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog.tsx'
import { DropdownMenuItem } from '@/lib/shadcn/ui/dropdown-menu.tsx'
import { cn } from '@/lib/shadcn/utils.ts'

import RegionTooltip from '@/components/Game/GameHeader/CoverImage/RegionTooltip.tsx'
import ImageComponent from '@/components/ImageComponent.tsx'
import Tooltip from '@/components/Tooltip.tsx'

import useUserStore from '@/stores/user-store.ts'

import supabase from '@/config/supabase.ts'
import { deleteReview } from '@/utils/supabase.ts'
import { formatTimestampz } from '@/utils/timeDate.ts'

import { ReviewOutput } from '@/types/supabase.ts'

const MyReviews: React.FC = () => {
  const [myReviews, setMyReviews] = useState<ReviewOutput[]>([])
  const [open, setOpen] = useState(false)
  const { user } = useUserStore()
  const getMyReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*, game:games ( * )')
      .eq('user_id', user?.id)
    if (data) setMyReviews(data)
  }

  const deleteMyReview = async (id: number) => {
    await deleteReview(id, user?.id)
    await getMyReviews()
  }

  useEffect(() => {
    void getMyReviews()
  }, [])
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild className='cursor-pointer'>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          My Reviews
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='z-50 mt-4'>
          <DialogTitle>My Reviews</DialogTitle>
          <DialogDescription>
            List of reviews you submitted. You can only post one review per
            game. Want to post new one? Delete the old one first.
          </DialogDescription>
        </DialogHeader>
        {myReviews.length ? (
          <section className='flex h-[20em] flex-col gap-2 overflow-scroll'>
            {myReviews.map(
              ({ id, rating, status, investment, text, game, created_at }) => (
                <div
                  key={id}
                  className='relative flex flex-col rounded border border-neutral-700 py-0.5'
                >
                  <RegionTooltip
                    gameRegion={game.region}
                    className='right-0.5 top-0.5'
                  />
                  <div
                    className={cn(
                      'flex items-center gap-3',
                      text && 'border-b border-neutral-700',
                    )}
                  >
                    <Link
                      to={`/game/${game.id}`}
                      onClick={() => setOpen(false)}
                    >
                      <ImageComponent
                        height={64}
                        width={64}
                        src={game.icon}
                        alt={game.name}
                        blurhash={game.blurhash}
                        className='ml-1 h-10 w-10'
                      />
                    </Link>
                    <div className='flex w-full flex-col'>
                      <div className='flex items-center justify-between'>
                        <p className='w-20 truncate font-bold sm:w-48'>
                          {game.en_name}
                        </p>
                        <p className='mr-8 mt-1 text-sm'>
                          {formatTimestampz(created_at)}
                        </p>
                      </div>
                      <div className='flex justify-between'>
                        <div className='flex gap-3'>
                          <div className='flex items-center gap-1'>
                            <Star className='h-4 w-4' />
                            <p className='text-sm font-light opacity-60'>
                              {rating}/5
                            </p>
                          </div>
                          <div className='flex items-center gap-1'>
                            <PlaySquare className='h-4 w-4' />
                            <p className='text-sm font-light opacity-60'>
                              {status}
                            </p>
                          </div>
                          <div className='flex items-center gap-1'>
                            <CircleDollarSign className='h-4 w-4' />
                            <p className='text-sm font-light opacity-60'>
                              {investment}
                            </p>
                          </div>
                        </div>
                        <Tooltip text='Delete Review'>
                          <Trash2
                            className='mr-1.5 mt-0.5 h-4 w-4 cursor-pointer text-red-600 hover:opacity-60'
                            onClick={() => void deleteMyReview(id)}
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  {text && <p className='break-all p-1'>{text}</p>}
                </div>
              ),
            )}
          </section>
        ) : (
          <p className='flex justify-center text-sm opacity-20'>
            Looks like you didn't post any reviews yet..
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default MyReviews
