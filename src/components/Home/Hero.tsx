import { useNavigate } from 'react-router-dom'

import { Button } from '@/lib/shadcn/ui/button'

import logo from '@/assets/logo.png'

const Hero: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col items-center gap-2'>
      <img src={logo} alt='logo' className='w-28 sm:w-32' />
      <div className='flex flex-col items-center gap-2'>
        <span className='text-lg font-semibold sm:text-2xl'>
          Easiest way to check gacha game revenue
        </span>
        <span className='mx-4 break-words text-center opacity-60 sm:mx-0 '>
          Ever wondered how much money your favorite gacha game makes? Is it
          dying? EOS soon?
        </span>
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
