import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog.tsx'

import ImageComponent from '@/components/ImageComponent.tsx'
import LoginButton from '@/components/Login/LoginButton.tsx'
import UserAvatar from '@/components/Login/UserAvatar.tsx'
import Logo from '@/components/Logo.tsx'

import useSupabaseStore from '@/stores/supabase-store.ts'
import useUserStore from '@/stores/user-store.ts'

import { generateRandomNumber } from '@/utils/globals.ts'

const Login: React.FC = () => {
  const { storage } = useSupabaseStore()
  const { user } = useUserStore()
  const RANDOM_GAME = generateRandomNumber(0, storage.length - 1)

  if (user) {
    return <UserAvatar />
  }

  return (
    <Dialog>
      <DialogTrigger className='hover:opacity-60'>Login</DialogTrigger>
      <DialogContent className='group h-[16em]'>
        <span className='absolute top-0 z-10 h-[12.1em] w-full bg-gradient-to-t from-neutral-900 via-neutral-950/80 to-transparent md:rounded-t' />
        <ImageComponent
          height={192}
          width={350}
          src={storage[RANDOM_GAME]?.background}
          blurhash={storage[RANDOM_GAME]?.blurhash}
          alt={storage[RANDOM_GAME]?.name}
          className='absolute top-0 h-48 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 sm:rounded-t'
        />
        <Logo
          className='absolute top-16 z-50 flex w-full justify-center'
          textProps='text-3xl'
          logoProps='h-16 md:h-20'
        />
        <section className='z-50 flex flex-col items-center justify-end gap-4'>
          {/*<p className='font-light opacity-40'>*/}
          {/*  Login to be able to review gacha games and more!*/}
          {/*</p>*/}
          <div className='flex items-center gap-3'>
            <LoginButton provider='google' />
            <LoginButton provider='discord' iconClassName='w-8 h-8' />
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default Login
