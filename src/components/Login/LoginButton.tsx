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
      className='group/button flex h-10 w-36 items-center justify-center rounded border border-neutral-700/60 bg-neutral-800/40 transition-all hover:border-neutral-800 hover:bg-neutral-900'
    >
      <img
        src={iconsLibrary[provider.toUpperCase() as keyof typeof iconsLibrary]}
        alt='reddit logo'
        className={cn(
          'h-[26px] w-[26px] transition-opacity group-hover/button:opacity-40',
          iconClassName,
        )}
      />
    </button>
  )
}

export default LoginButton
