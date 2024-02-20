import useRevenueTableControls from '@/stores/revenue-table-controls'

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}

export const regionalMultiplier = (
  totalRevenue: number | undefined,
  region: string,
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

  if (region === 'CHINA') {
    return totalRevenue + Number(ANDROID_MULTIPLIER) * totalRevenue
  }

  return totalRevenue
}
