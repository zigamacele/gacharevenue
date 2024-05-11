import useRevenueTableControls from '@/stores/revenue-table-controls'

import { Region } from '@/types/supabase'

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}

export const regionalMultiplier = (
  totalRevenue: number | undefined,
  region: Region,
) => {
  const { androidMultiplier } = useRevenueTableControls.getState()
  let ANDROID_MULTIPLIER = androidMultiplier

  useRevenueTableControls.subscribe((state) => {
    const { androidMultiplier } = state
    ANDROID_MULTIPLIER = androidMultiplier
  })

  if (totalRevenue === undefined) {
    return 0
  }

  if (region === Region.CHINA) {
    return totalRevenue + Number(ANDROID_MULTIPLIER) * totalRevenue
  }

  return totalRevenue
}
