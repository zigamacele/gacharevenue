import { useNavigate } from 'react-router-dom'

import { Button } from '@/lib/shadcn/ui/button'
import { Separator } from '@/lib/shadcn/ui/separator.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'

import logo from '@/assets/logo.png'

import { formatDate } from '@/utils/timeDate.ts'

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const { lastUpdated } = useSupabaseStore()

  return (
    <section className='flex flex-col items-center gap-3'>
      <img src={logo} alt='logo' className='w-28 sm:w-32' />
      <div className='flex flex-col items-center gap-2'>
        <span className='text-lg font-semibold sm:text-2xl'>
          Easiest way to check gacha game revenue
        </span>
        <span className='mx-4 break-words text-center opacity-60 sm:mx-0 '>
          Ever wondered how much money your favorite gacha game makes? Is it
          dying? EOS soon?
        </span>
        <Separator className='my-1 w-full opacity-40' />
        <div className='slide-from-top flex gap-2'>
          <span>Last updated:</span>
          <span className='opacity-60'>{formatDate(lastUpdated)}</span>
        </div>
        <div className='mt-4 flex gap-3'>
          <Button onClick={() => navigate('/revenue')}>Revenue</Button>
          <Button onClick={() => navigate('/charts')}>Charts</Button>
          <Button onClick={() => navigate('/feedback')}>Feedback</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
