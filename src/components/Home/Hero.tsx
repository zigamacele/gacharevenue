import { Separator } from '@/lib/shadcn/ui/separator.tsx'

const Hero: React.FC = () => {
  return (
    <section className='flex flex-col items-center gap-3'>
      <p className='text-center text-2xl font-semibold sm:text-2xl'>
        Easiest way to check gacha game revenue
      </p>
      <p className='mx-4 break-words text-center text-sm opacity-60 sm:mx-0 sm:text-base '>
        Ever wondered how much money your favorite gacha game makes? Is it
        dying? EOS soon?
      </p>
      <Separator className='my-1 w-full opacity-40' />
    </section>
  )
}

export default Hero
