import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog.tsx'
import { DropdownMenuItem } from '@/lib/shadcn/ui/dropdown-menu.tsx'

import useUserStore from '@/stores/user-store.ts'

import supabase from '@/config/supabase.ts'

import { ReviewOutput } from '@/types/supabase.ts'

const MyReviews: React.FC = () => {
  const [myReviews, setMyReviews] = useState<ReviewOutput[]>([])
  const { user } = useUserStore()
  useEffect(() => {
    const getMyReviews = async () => {
      const { data } = await supabase
        .from('reviews')
        .select('*, game:games ( * )')
        .eq('user_id', user?.id)

      if (data) setMyReviews(data)
    }

    void getMyReviews()
  }, [])
  return (
    <Dialog>
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
        <section className='h-[20em] overflow-scroll'>
          {myReviews.map((review) => (
            <div key={review.id}>{review.user_id}</div>
          ))}
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default MyReviews
