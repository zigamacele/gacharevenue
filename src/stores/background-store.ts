import background from '@/assets/background.jpeg'
import { BackgroundStore } from '@/types/zustand'
import { create } from 'zustand'

const useBackgroundStore = create<BackgroundStore>()((set) => ({
  background: background,
  setBackground: (background: string) => set(() => ({ background })),
}))

export default useBackgroundStore
