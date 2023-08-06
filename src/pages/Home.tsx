import logo from '@/assets/logo.png'
import Overview from '@/components/Home/Overview'
import { Button } from '@/lib/shadcn/ui/button'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='mb-4 mt-20 flex flex-col items-center gap-2'>
      <img src={logo} alt='logo' className='w-28 sm:w-32' />
      <div className='mb-10 flex flex-col items-center gap-2'>
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
      <Overview />
    </div>
  )
}

export default Home
