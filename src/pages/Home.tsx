import logo from '@/assets/logo.svg'
import Overview from '@/components/Home/Overview'

const Home: React.FC = () => {
  return (
    <div className='mb-4 mt-20 flex flex-col items-center gap-2'>
      <img src={logo} alt='logo' className='w-28 sm:w-32' />
      <div className='mb-12 flex flex-col items-center gap-1'>
        <span className='text-lg font-semibold sm:text-2xl'>
          Easiest way to check gacha game revenue
        </span>
        <span className='mx-4 break-words text-center opacity-60 sm:mx-0 '>
          Ever wondered how much money your favorite gacha game makes? Is it
          dying? EOS soon?
        </span>
      </div>
      <Overview />
    </div>
  )
}

export default Home
