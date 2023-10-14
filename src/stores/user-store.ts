import { create } from 'zustand'

import { UserStore } from '@/types/zustand'

const useUserStore = create<UserStore>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}))

export default useUserStore
