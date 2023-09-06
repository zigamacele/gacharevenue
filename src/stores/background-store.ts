import { create } from 'zustand'

import { BackgroundStore } from '@/types/zustand'

const useBackgroundStore = create<BackgroundStore>()((set) => ({
  background: null,
  setBackground: (background: string) => set(() => ({ background })),
}))

export default useBackgroundStore
