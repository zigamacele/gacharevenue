import { Link } from 'react-router-dom'

import MotionInView from '@/lib/framer-motion/MotionInView.tsx'

import Login from '@/components/Login.tsx'
import CommandMenu from '@/components/Navbar/CommandMenu.tsx'
import NavigationMenu from '@/components/Navbar/NavigationMenu.tsx'

import Logo from './Logo.tsx'

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
        <button
          className='flex items-center gap-1.5 hover:opacity-60'
          onClick={() =>
            window.open('https://recap.gacharevenue.com/', '_blank')
          }
        >
          <p>Recap</p>
          <p className='flex h-5 items-center justify-center rounded border border-neutral-600 px-1.5 text-[10px]'>
            NEW
          </p>
        </button>
        <CommandMenu />
        <NavigationMenu />
        <Login />
      </div>
    </MotionInView>
  )
}

export default Navbar
