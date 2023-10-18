import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn/ui/dropdown-menu.tsx'

import MyReviews from '@/components/Login/MyReviews.tsx'

import useUserStore from '@/stores/user-store.ts'

import { signOut } from '@/utils/supabase.ts'

const IdentityPicture: React.FC = () => {
  const { user } = useUserStore()

  if (user?.identities?.[0]?.identity_data?.['picture']) {
    return (
      <img
        src={user.identities[0].identity_data['picture'] as string}
        alt='user picture'
        className='h-7 w-7 rounded-full'
      />
    )
  }

  return <span className='h-7 w-7 rounded-full bg-neutral-500' />
}

const UserAvatar: React.FC = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='flex items-center justify-center transition-opacity hover:opacity-60'>
        <IdentityPicture />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <MyReviews />
        <DropdownMenuItem disabled>Settings</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => void signOut()}
          className='cursor-pointer'
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatar
