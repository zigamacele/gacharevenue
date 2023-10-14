import { Provider } from '@supabase/supabase-js'

import { iconsLibrary } from '@/constants/icons.ts'
import { signInWithOAuth } from '@/utils/supabase.ts'

interface LoginButtonProps {
  provider: Provider
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider }) => {
  return (
    <button
      onClick={() => void signInWithOAuth(provider)}
      className='group/button flex h-10 w-36 items-center justify-center rounded border border-neutral-700/60 bg-neutral-800/40 transition-all hover:border-neutral-800 hover:bg-neutral-900'
    >
      <img
        src={iconsLibrary[provider.toUpperCase() as keyof typeof iconsLibrary]}
        alt='reddit logo'
        className='h-[26px] w-[26px] transition-opacity group-hover/button:opacity-40'
      />
    </button>
  )
}

export default LoginButton
