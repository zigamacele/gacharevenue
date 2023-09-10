import { Cog } from 'lucide-react'

import { Button } from '@/lib/shadcn/ui/button'
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
        <PopoverTrigger>
          <Button className='text-neutral-500 hover:text-neutral-300'>
            <Cog size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='flex items-center justify-center gap-2'>
          <RightControls />
        </PopoverContent>
      </Popover>
    </section>
  )
}

export default MobileRevenuePopover
