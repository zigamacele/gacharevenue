import { MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn/ui/dropdown-menu'

import { CHARTS, FEEDBACK, REVENUE } from '@/constants/links'

const MobileDropdown = () => {
  return (
    <section className='z-50 flex items-center sm:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal size={22} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link to={REVENUE}>
            <DropdownMenuItem className='cursor-pointer'>
              <span>Revenue</span>
            </DropdownMenuItem>
          </Link>
          <Link to={CHARTS}>
            <DropdownMenuItem className='cursor-pointer'>
              <span>Charts</span>
            </DropdownMenuItem>
          </Link>
          <Link to={FEEDBACK}>
            <DropdownMenuItem className='cursor-pointer'>
              <span>Feedback</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  )
}

export default MobileDropdown
