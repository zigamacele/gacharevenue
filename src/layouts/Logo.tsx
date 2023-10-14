import { cn } from '@/lib/shadcn/utils'

import logo from '@/assets/logo.png'

interface LogoProps {
  className?: string
  textProps?: string
  logoProps?: string
  gap?: string
}

const Logo: React.FC<LogoProps> = ({
  className,
  textProps,
  logoProps,
  gap,
}) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-2 transition-all hover:opacity-60',
        gap,
        className,
      )}
    >
      <img src={logo} alt='logo' className={cn('h-9', logoProps)} />
      <div className={cn('text-lg font-bold tracking-widest', textProps)}>
        <span>GACHA</span>
        <span className='opacity-60'>REVENUE</span>
      </div>
    </div>
  )
}

export default Logo
