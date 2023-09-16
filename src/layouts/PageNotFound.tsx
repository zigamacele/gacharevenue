import { Undo2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/lib/shadcn/ui/button'
import { Separator } from '@/lib/shadcn/ui/separator'

import { HOME } from '@/constants/links'

const PageNotFound: React.FC = () => {
  return (
    <section className='w-sceen h-sceen slide-from-bottom mt-4 flex items-center justify-center'>
      <div className='flex w-[90%] flex-col items-center justify-center gap-2 rounded border border-neutral-800 bg-neutral-950/80 px-6 py-5 backdrop-blur-[2px] transition-all sm:w-96'>
        <span className='text-6xl font-semibold sm:text-7xl'>404</span>
        <span className='opacity-60'>
          This page isn't available in your country.
        </span>
        <Separator className='opacity-40' />
        <Link to={HOME}>
          <Button className='mt-1 flex items-center gap-1.5'>
            <Undo2 width={16} />
            <span>Go back</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
