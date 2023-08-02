import logo from '@/assets/logo.svg'
import MobileDropdown from '@/components/Navbar/MobileDropdown'
import Navigation from '@/components/Navbar/Navigation'
import SocialLinks from '@/components/Navbar/SocialLinks'
import { Separator } from '@/lib/shadcn/ui/separator'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='fixed z-50 flex h-14 w-full items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 text-sm sm:px-28'>
      <Link
        to='/'
        className='flex cursor-pointer items-center gap-2 hover:opacity-60'
      >
        <img src={logo} alt='logo' className='mt-1 h-9 w-9' />
        <span className='letter text-lg font-bold tracking-widest'>
          GASHAPON
        </span>
      </Link>
      <div className='flex items-center gap-5'>
        <Navigation />
        <MobileDropdown />
        <Separator orientation='vertical' className='h-4' />
        <SocialLinks />
      </div>
    </nav>
  )
}

export default Navbar
