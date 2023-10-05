import { Separator } from '@/lib/shadcn/ui/separator.tsx'

import logo from '@/assets/logo.png'

const Hero: React.FC = () => {
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
      </div>
    </section>
  )
}

export default Hero
