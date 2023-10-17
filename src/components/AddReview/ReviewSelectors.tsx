import { Dispatch, SetStateAction } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcn/ui/select.tsx'

import { ReviewPayload } from '@/types/supabase.ts'

interface ReviewSelectorsProps {
  setReviewPayload: Dispatch<SetStateAction<ReviewPayload>>
}
const ReviewSelectors: React.FC<ReviewSelectorsProps> = ({
  setReviewPayload,
}) => {
  return (
    <div className='flex items-center gap-2'>
      <Select
        onValueChange={(value) =>
          setReviewPayload((currentState) => {
            return { ...currentState, status: value }
          })
        }
      >
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
      <Select
        onValueChange={(value) =>
          setReviewPayload((currentState) => {
            return { ...currentState, investment: value }
          })
        }
      >
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
  )
}

export default ReviewSelectors
