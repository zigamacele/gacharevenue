import { Provider } from '@supabase/supabase-js'

import { cn } from '@/lib/shadcn/utils.ts'

import { iconsLibrary } from '@/constants/icons.ts'
import { signInWithOAuth } from '@/utils/supabase.ts'

interface LoginButtonProps {
  provider: Provider
  iconClassName?: string
}

const LoginButton: React.FC<LoginButtonProps> = ({
  provider,
  iconClassName,
}) => {
  return (
    <button
      onClick={() => void signInWithOAuth(provider)}
      className='group/button flex h-[2.75rem] w-full items-center justify-center gap-4 rounded border border-neutral-700/40 bg-neutral-800/80 px-6 transition-all hover:border-neutral-800 hover:bg-neutral-900'
    >
      <img
        src={iconsLibrary[provider.toUpperCase() as keyof typeof iconsLibrary]}
        alt='reddit logo'
        className={cn(
          'h-[26px] w-[26px] transition-opacity group-hover/button:opacity-40',
          iconClassName,
        )}
      />
      <span className='whitespace-nowrap text-sm capitalize opacity-70'>
        Login with {provider}
      </span>
    </button>
  )
}

export default LoginButton
