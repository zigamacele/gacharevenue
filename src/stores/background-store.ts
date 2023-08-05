import { BackgroundStore } from '@/types/zustand'
import { create } from 'zustand'

const useBackgroundStore = create<BackgroundStore>()((set) => ({
  background: null,
  setBackground: (background: string) => set(() => ({ background })),
}))

export default useBackgroundStore
