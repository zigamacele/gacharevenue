const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
})

export const formatCurrency = (value: number | undefined) => {
  if (!value) {
    return ''
  }

  return USDollar.format(value)
}
