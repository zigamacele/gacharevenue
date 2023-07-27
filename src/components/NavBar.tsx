import logo from '@/assets/logo.svg'
import { Github, QrCode, Twitter } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const NavBar: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <nav className='fixed flex h-14 w-full items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 text-sm sm:px-28'>
      <div className='flex items-center gap-6'>
        <div className='flex cursor-pointer items-center gap-2 hover:opacity-60'>
          <img src={logo} alt='logo' className='h-6 w-6' />
          <span className='text-lg'>Gashapon</span>
        </div>
        <div className='flex gap-4'>
          <span
            className={`cursor-pointer opacity-40 hover:opacity-80 ${
              pathname === '/' && 'opacity-100'
            }`}
          >
            Revenue
          </span>
          <span className='cursor-pointer opacity-40 hover:opacity-80'>
            Charts
          </span>
          <span className='cursor-pointer opacity-40 hover:opacity-80'>
            Feedback
          </span>
        </div>
      </div>
      <div className='flex gap-3'>
        <QrCode size={22} />
        <Twitter size={22} />
        <Github size={22} />
      </div>
    </nav>
  )
}

export default NavBar
