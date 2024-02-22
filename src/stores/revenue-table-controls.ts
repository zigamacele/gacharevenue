import { create } from 'zustand'

import { TableControlsState } from '@/types/zustand'

const useRevenueTableControls = create<TableControlsState>()((set) => ({
  search: '',
  pinned: JSON.parse(window.localStorage.getItem('pinned') ?? '[]') as number[],
  removed: JSON.parse(
    window.localStorage.getItem('removed') ?? '[]',
  ) as number[],
  sortAscending: false,
  showPinned: false,
  showEditSection: false,
  showCombinedRevenue: false,
  showMaintenance: false,
  androidMultiplier: 1.75,

  updateSearch: (value: string) => set(() => ({ search: value })),

  updateAndroidMultiplier: (value: number) => {
    set(() => ({ androidMultiplier: value }))
  },

  toggle: (prop: string) =>
    set((state) => ({ [prop]: !state[prop as keyof TableControlsState] })),

  setState: (prop: string, value: number) =>
    set((state) => {
      const propType = prop as keyof TableControlsState

      const stateArray = state[propType] as number[]
      if (stateArray.includes(value)) {
        const filteredState = stateArray.filter((item) => item !== value)
        localStorage.setItem(prop, JSON.stringify(filteredState))

        return { [propType]: filteredState }
      }

      const updatedState = [...(state[propType] as number[]), value]
      localStorage.setItem(prop, JSON.stringify(updatedState))
      return {
        [prop]: updatedState,
      }
    }),
}))

export default useRevenueTableControls
