import { CHARTS, FEEDBACK, REVENUE } from '@/constants/links'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const MobileDropdown = () => {
  return (
    <section className='flex items-center sm:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal size={22} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className='cursor-pointer'>
            <Link to={REVENUE}>
              <span>Revenue</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>
            <Link to={CHARTS}>
              <span>Charts</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>
            <Link to={FEEDBACK}>
              <span>Feedback</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  )
}

export default MobileDropdown
