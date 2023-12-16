import { Cog } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/shadcn/ui/popover'

import RightControls from './RightControls'

const MobileRevenuePopover: React.FC = () => {
  return (
    <section className='flex items-center md:hidden'>
      <Popover>
        <PopoverTrigger className='group rounded border border-neutral-700/80 bg-neutral-950 px-4 py-2 hover:bg-neutral-800'>
          <Cog size={20} className='opacity-60 group-hover:opacity-100' />
        </PopoverTrigger>
        <PopoverContent className='flex w-full items-center justify-center gap-2'>
          <RightControls />
        </PopoverContent>
      </Popover>
    </section>
  )
}

export default MobileRevenuePopover
