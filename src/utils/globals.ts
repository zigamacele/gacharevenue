export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}

export const regionalMultiplier = (
  totalRevenue: number | undefined,
  region: string,
) => {
  if (totalRevenue === undefined) {
    return 0
  }

  if (region === 'CHINA') {
    return totalRevenue * 3
  }

  return totalRevenue
}
