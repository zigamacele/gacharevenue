import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

const MobileDropdown = () => {
  return (
    <section className='flex items-center sm:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal size={22} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Revenue</DropdownMenuItem>
          <DropdownMenuItem>Charts</DropdownMenuItem>
          <DropdownMenuItem>Feedback</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  )
}

export default MobileDropdown
