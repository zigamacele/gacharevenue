import { create } from 'zustand'

import { BackgroundStore } from '@/types/zustand'

const useBackgroundStore = create<BackgroundStore>()((set) => ({
  background: null,
  blurhash: null,
  setBackground: (background: string, blurhash?: string | null) =>
    set(() => ({ background, blurhash })),
}))

export default useBackgroundStore
