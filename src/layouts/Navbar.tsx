import { Link } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView'

import CommandMenu from '@/components/Navbar/CommandMenu.tsx'
import NavigationMenu from '@/components/Navbar/NavigationMenu.tsx'

import Login from '@/layouts/Login.tsx'

import Logo from './Logo'

const Navbar: React.FC = () => {
  return (
    <MotionInView
      y={-50}
      duration={0.6}
      styles='fixed z-50 flex h-14 w-full items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 sm:px-8 text-sm'
    >
      <Link
        to='/'
        className='flex cursor-pointer items-center gap-2 hover:opacity-60'
      >
        <Logo logoProps='mt-1' textProps='hidden sm:block' />
      </Link>
      <div className='flex items-center gap-5'>
        <CommandMenu />
        <NavigationMenu />
        <Login />
      </div>
    </MotionInView>
  )
}

export default Navbar
